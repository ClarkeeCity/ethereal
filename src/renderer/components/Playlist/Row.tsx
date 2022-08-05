import { Howl, Howler } from 'howler';
import { MetaDataInterface } from '../../../interface';

// Unadvisable to have a click and dclick on same element. Create our special
// double click function ourselves using setTimeout.

export default function Row({
  filePath,
  title,
  artist,
  album,
  year,
  length,
}: MetaDataInterface) {
  return (
    <>
      <tr
        onClick={() => {
          // send a message from renderer to main to say, hey we need a data to
          // play the music.
          console.log('before buffer fetch');
          // eslint-disable-next-line promise/catch-or-return, promise/always-return
          window.electron.getBuffer(filePath).then((resolve) => {
            // const source = 'source';
            const sound = new Howl({
              src: [`data:audio/x-mp3;base64,${resolve}`],
            });

            sound.once('load', () => sound.play());
          });
        }}
        data-filepath={filePath}
      >
        <td>{title}</td>
        <td>{artist}</td>
        <td>{album}</td>
        <td>{year}</td>
        <td>{length}</td>
      </tr>
    </>
  );
}
