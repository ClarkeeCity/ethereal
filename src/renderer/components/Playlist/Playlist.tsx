import { useState } from 'react';
import './playlist.scss';
import { MetaDataInterface } from 'interface';
import Row from './Row';

interface PlaylistInterface {
  playlistData: MetaDataInterface[];
}

export default function Playlist({ playlistData }: PlaylistInterface) {
  const songs = playlistData
    ? playlistData.map((song) => (
        <Row
          key={song.filePath}
          filePath={song.filePath}
          title={song.title}
          artist={song.artist}
          album={song.album}
          year={song.year}
          length={song.length}
        />
      ))
    : [];
  return (
    <div>
      <table className="list">
        <thead>
          <tr>
            <td>
              <span>Title</span>
            </td>
            <td>
              <span>Artist</span>
            </td>
            <td>
              <span>Album</span>
            </td>
            <td>
              <span>Year</span>
            </td>
            <td>
              <span>Time</span>
            </td>
          </tr>
        </thead>
        <tbody>{songs.length > 0 ? songs : <Row filePath="NULL" />}</tbody>
      </table>
    </div>
  );
}
