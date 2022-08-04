import { MetaDataInterface } from '../../interface';

const fs = require('fs');
const mm = require('music-metadata');
const util = require('util');
// NodeID3 has the capability of setting ID3 tags for MP3s.
const NodeID3 = require('node-id3');

function durationToTime(duration: number): string {
  const roundedDuration = Math.round((duration + Number.EPSILON) * 100) / 100;
  const m = roundedDuration / 60;
  const r = m - Math.round(m);
  const s = r >= 0 ? Math.round(r * 60) : Math.round(r * 60) * -1;
  // setting up time format
  const minutes = Math.round(m);
  const seconds = s > 10 ? s : `0${s}`;
  return `${minutes}:${seconds}`;
}

// When creating a playlist, fetch the values to display on the GUI.
// TO DO: At some point this should be more advanced, where we will have an
// interface/ui to edit the files on. If so, we will need to populate all
// possible fields mp3s have to offer, not just these 5 fields.
const ret = [] as MetaDataInterface[];
export default async function saveMetadata(
  files: string[]
): Promise<MetaDataInterface[]> {
  const audioFile = files.shift();
  if (audioFile) {
    return mm.parseFile(audioFile).then((metadata: any) => {
      // append this files metadata to a file.
      const capture = {} as MetaDataInterface;
      capture.filePath = audioFile;
      capture.artist = metadata.common.artist;
      capture.title = metadata.common.title;
      capture.album = metadata.common.album;
      capture.duration = metadata.format.duration;
      capture.year = metadata.common.year;
      capture.length = durationToTime(metadata.format.duration);
      ret.push(capture);
      // recurisvely do the next file.
      return saveMetadata(files);
    });
  }
  return ret;
}
