import { IpcRendererEvent } from 'electron';
import Player from 'Player';
import { SetStateAction, useEffect, useState } from 'react';
import AlbumDisplay from 'renderer/components/AlbumDisplay/AlbumDisplay';
import BottomBar from 'renderer/components/BottomBar/BottomBar';
import Playlist from 'renderer/components/Playlist/Playlist';
import Row from 'renderer/components/Playlist/Row';
import Sidebar from 'renderer/components/Sidebar/Sidebar';
import TrackDetails from 'renderer/components/TrackDetails/TrackDetails';
import Upcoming from 'renderer/components/Upcoming/Upcoming';
import InterfaceMain from '../InterfaceMain/InterfaceMain';
import PlaylistContainer from '../PlaylistContainer/PlaylistContainer';
import './interfacecontainer.scss';

interface InterfaceContainerProps {
  player: Player;
  setStream: React.Dispatch<SetStateAction<string[]>>;
}

export default function InterfaceContainer({
  setStream,
  player,
}: InterfaceContainerProps) {
  // List of files to render on playlist.
  const [data, setData] = useState<string[]>([]);
  player.playlist = data;
  // Fetch files from Ethereal.library if it exists onmount.
  useEffect(() => {
    // eslint-disable-next-line promise/catch-or-return, promise/always-return
    window.electron.initPlaylist().then((resolve) => {
      setData(resolve);
    });
  }, []);
  window.electron.updatePlaylist(
    (_event: IpcRendererEvent, value: SetStateAction<string[]>) => {
      setData(value);
    }
  );

  const [playToggle, setPlayToggle] = useState<boolean>(false);

  const songs = data
    ? data.map((song) => (
        <Row
          player={player}
          key={song}
          fileData={song}
          setStream={setStream}
          setToggle={setPlayToggle}
        />
      ))
    : [];
  return (
    <div id="interface-container">
      {/* <Experiences /> */}
      <InterfaceMain>
        <PlaylistContainer>
          <Sidebar>
            <span>left</span>
          </Sidebar>
          <Playlist>{songs}</Playlist>
          <Sidebar>
            <Upcoming />
            <TrackDetails />
            <AlbumDisplay size="large" />
          </Sidebar>
        </PlaylistContainer>
        <BottomBar
          player={player}
          toggle={playToggle}
          setToggle={setPlayToggle}
        />
      </InterfaceMain>
    </div>
  );
}
