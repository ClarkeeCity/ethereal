/* eslint-disable @typescript-eslint/lines-between-class-members */
import { Howl } from 'howler';

export default class Player {
  playlist: string[];
  playingTrack: (EventTarget & HTMLTableRowElement) | null;
  selected: JSX.Element | JSX.Element[] | null;
  howl: Howl | null;

  constructor() {
    this.playlist = [];
    this.selected = null;
    this.howl = null;
    this.playingTrack = null;
  }

  public setHowl(stream: string[]) {
    if (this.howl != null) {
      this.howl.unload();
    }
    this.howl = new Howl({
      src: stream,
      html5: true,
    });

    this.play();
  }

  public play() {
    if (this.howl !== null) this.howl.play();
  }

  public pause() {
    if (this.howl !== null) {
      this.howl.pause();
    }
  }

  public skipForward() {
    console.log(this.playlist);
  }

  public skipBackward() {
    // if the song is at some kth duration, then repeat at the start
    // else, go back to previous song
    console.log(this.playlist);
  }

  shufflePlaylist() {
    // Fisher–Yates shuffle
    console.log(this.playlist);
  }

  public volume(input: number) {
    this.howl?.volume(input / 100);
  }

  static seek() {
    // seek new position in the currently playing track
  }

  static step() {
    // step is called to update playback position
  }
}
