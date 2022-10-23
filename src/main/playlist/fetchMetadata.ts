import { parseFile, selectCover } from 'music-metadata';
import path from 'path';
import { IAudioMetadata } from 'music-metadata/lib/type';
import { MetaDataInterface } from '../../interface';
import { durationToTime } from '../../utils/helpers';

async function metadataFetch(filePath: string): Promise<IAudioMetadata> {
  return parseFile(filePath);
}

// Fetch metadata from the filepath which was given.
export default async function fetchMetadata(filePath: string, type: string) {
  const metadata = await metadataFetch(filePath);
  if (type === 'data') {
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
  if (type === 'image') return selectCover(metadata.common.picture);

  return null;
}
