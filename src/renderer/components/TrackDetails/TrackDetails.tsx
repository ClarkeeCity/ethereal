import './trackdetails.scss';

export default function Upcoming() {
  return (
    <div style={{ paddingBottom: '15px' }}>
      <div id="track-information-header">
        <span>Track Information</span>
      </div>
      <div id="track-information">
        <span>
          <b>Track Title</b>
        </span>
        <span>Artist</span>
        <span>Album</span>
        <span>2022</span>
        <span style={{ fontSize: '10px' }}>
          FLAC 44.1 kHz, 737k, Stereo, 2:26
        </span>
      </div>
    </div>
  );
}
