import mm from 'music-metadata';
import path from 'path';
import { IAudioMetadata } from 'music-metadata/lib/type';
import { MetaDataInterface } from '../../interface';

// Small function to convert seconds into a readable time foramt.
function durationToTime(duration: number | undefined): string {
  if (duration === undefined) return '0:00';
  const roundedDuration = Math.round((duration + Number.EPSILON) * 100) / 100;
  const m = roundedDuration / 60;
  const r = m - Math.round(m);
  const s = r >= 0 ? Math.round(r * 60) : Math.round(r * 60) * -1;
  // setting up time format
  const minutes = Math.round(m);
  const seconds = s >= 10 ? s : `0${s}`;
  return `${minutes}:${seconds}`;
}

async function mmFetch(filePath: string): Promise<IAudioMetadata> {
  return mm.parseFile(filePath);
}

// Fetch metadata from the filepath which was given.
export default async function fetchMetadata(filePath: string) {
  const metadata = await mmFetch(filePath);
  const ret = {} as MetaDataInterface;
  ret.album = metadata.common.album;
  ret.artist = metadata.common.artist;
  ret.duration = metadata.format.duration;
  ret.filePath = filePath;
  // TODO: This will need to be developed more to display accurate genre lists.
  ret.genre = metadata.common.genre ? metadata.common.genre[0] : '';
  ret.length = durationToTime(metadata.format.duration);
  ret.title = metadata.common.title
    ? metadata.common.title
    : path.basename(filePath);
  ret.year = metadata.common.year;

  return ret;
}
