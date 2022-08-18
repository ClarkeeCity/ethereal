/* eslint-disable @typescript-eslint/lines-between-class-members */
import { Howl } from 'howler';

export default class Player {
  playlist: string[];
  current: JSX.Element | null;
  howl: Howl | null;

  constructor() {
    this.playlist = [];
    this.howl = null;
    this.current = null;
  }

  setHowl(stream: string[]) {
    if (this.howl != null) {
      this.howl.unload();
    }
    this.howl = new Howl({
      src: stream,
      html5: true,
    });

    this.play();
  }

  setCurrent(current: JSX.Element) {
    this.current = current;
  }

  play() {
    if (this.howl !== null) this.howl.play();
  }

  pause() {
    if (this.howl !== null) {
      this.howl.pause();
    }
  }

  skipForward() {
    console.log(this.playlist);
  }

  static skipBackward() {
    // if the song is at some kth duration, then repeat at the start
    // else, go back to previous song
  }

  shufflePlaylist() {
    // Fisher–Yates shuffle
    console.log(this.playlist);
  }

  static volume() {
    // control volume for this class
  }

  static seek() {
    // seek new position in the currently playing track
  }

  static step() {
    // step is called to update playback position
  }
}
