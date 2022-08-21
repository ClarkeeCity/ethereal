import Player from 'Player';
import { useEffect, useState } from 'react';
import './trackdetails.scss';

type CurrentTrackDetails = {
  title: string | undefined;
  artist: string | undefined;
  album: string | undefined;
  year: string | undefined;
  fileType: string;
  sampleRate: string;
  bitDepth: string;
  channelType: string;
  length: string | undefined;
};

interface TrackDetailsProps {
  player: Player;
}

export default function TrackDetails({ player }: TrackDetailsProps) {
  const [trackDetail, setTrackDetail] = useState<CurrentTrackDetails>();
  useEffect(() => {
    const details = {} as CurrentTrackDetails;
    // grab readily available data from the <Row /> dataset.
    details.title = player.playingTrack?.dataset.title;
    details.artist = player.playingTrack?.dataset.artist;
    details.album = player.playingTrack?.dataset.album;
    details.year = player.playingTrack?.dataset.year;
    details.length = player.playingTrack?.dataset.length;
    setTrackDetail(details);
  }, [player.playingTrack]);
  return (
    <div style={{ paddingBottom: '15px' }}>
      <div id="track-information-header">
        <span>Track Information</span>
      </div>
      <div id="track-information">
        {trackDetail?.title && (
          <span>
            <b>{trackDetail?.title}</b>
          </span>
        )}
        {trackDetail?.artist && <span>{trackDetail?.artist}</span>}
        {trackDetail?.album && <span>{trackDetail?.album}</span>}
        {trackDetail?.year && <span>{trackDetail?.year}</span>}
        <span
          style={{ fontSize: '10px', position: 'absolute', bottom: '-15px' }}
        >
          MP3 44.1 kHz, 737k, Stereo, {trackDetail?.length}
        </span>
      </div>
    </div>
  );
}
