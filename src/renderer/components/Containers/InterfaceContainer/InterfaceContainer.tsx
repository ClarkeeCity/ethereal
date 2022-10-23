import { IpcRendererEvent } from 'electron';
import Player from 'Player';
import { SetStateAction, useEffect, useRef, useState } from 'react';
import AlbumDisplay from 'renderer/components/AlbumDisplay/AlbumDisplay';
import BottomBar from 'renderer/components/BottomBar/BottomBar';
import Playlist from 'renderer/components/Playlist/Playlist';
import Row from 'renderer/components/Playlist/Row';
import Sidebar from 'renderer/components/Sidebar/Sidebar';
import TrackDetails from 'renderer/components/TrackDetails/TrackDetails';
import Upcoming from 'renderer/components/Upcoming/Upcoming';
// import UpcomingTrack from './UpcomingTrack';
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
  // List of files to render to the playlist playlist.
  const [data, setData] = useState<string[]>([]);
  player.setPlaylist(data);

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

  // useState for playing or pausing audio. Used on each row and bottom bar.
  const [playToggle, setPlayToggle] = useState<boolean>(false);
  const selectionRef = useRef(null);
  const songs = data
    ? data.map((song: string) => (
        <Row
          player={player}
          key={song}
          fileData={song}
          setStream={setStream}
          setToggle={setPlayToggle}
          prevClick={selectionRef}
        />
      ))
    : [];

  // TODO: upcomming
  // const upcomming = player
  //   .getUpcommingTracks()
  //   .map((trackIndex: number, i: number) => {
  //     // eslint-disable-next-line react/no-array-index-key
  //     <UpcomingTrack title={player.getPlaylist()[trackIndex]} key={i} />;
  // })


  // player.setUpcommingTracks('shuffle');
  // console.log(player.getUpcommingTracks());
  return (
    <div id="interface-container">
      {/* <Experiences /> */}
      <div id="interface-main">
        <PlaylistContainer>
          {/* <Sidebar>
            <span>left</span>
          </Sidebar> */}
          <Playlist>{songs}</Playlist>
          <Sidebar>
            <Upcoming>{/*upcomming*/}</Upcoming>
            <TrackDetails player={player} />
            <AlbumDisplay player={player} size="large" />
          </Sidebar>
        </PlaylistContainer>
        <BottomBar
          player={player}
          toggle={playToggle}
          setToggle={setPlayToggle}
        />
      </div>
    </div>
  );
}
