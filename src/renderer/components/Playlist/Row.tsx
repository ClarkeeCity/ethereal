import { MetaDataInterface } from '../../../interface';

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
      <tr data-filepath={filePath}>
        <td>{title}</td>
        <td>{artist}</td>
        <td>{album}</td>
        <td>{year}</td>
        <td>{length}</td>
      </tr>
    </>
  );
}
