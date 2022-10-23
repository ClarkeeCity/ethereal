/* eslint-disable @typescript-eslint/lines-between-class-members */
import { Howl } from 'howler';

export default class Player {
  #playlist = [] as string[];
  #upcommingTracks = [] as string[];
  playingTrack: (EventTarget & HTMLTableRowElement) | undefined;
  upcommingTracks: [string] | undefined;
  selected: JSX.Element | JSX.Element[] | null;
  howl: Howl | null;

  constructor() {
    this.selected = null;
    this.howl = null;
    this.playingTrack = undefined;
  }

  private getRandomTrack = (): number =>
    Math.floor(Math.random() * this.#playlist.length);

  public setPlaylist(playlistArray: string[]): void {
    this.#playlist = playlistArray;
  }

  public getPlaylist(): string[] {
    return this.#playlist;
  }
  // @param upcommingType - how to handle the new generation of tracks.
  public setUpcommingTracks(upcomingType: string): void {
    const newTracks = new Array(15);
    if (upcomingType === 'shuffle') {
      for (let i = 0; i < newTracks.length; i += 1) {
        newTracks[i] = this.getRandomTrack();
      }
    }

    this.#upcommingTracks = newTracks;
  }

  public getUpcommingTracks(): string[] {
    return this.#upcommingTracks;
  }

  // HOWLER

  public setHowl(stream: string[]): void {
    if (this.howl != null) {
      this.howl.unload();
    }

    this.howl = new Howl({
      src: stream,
      html5: true,
    });

    this.play();
  }

  public play(): void {
    if (this.howl !== null) this.howl.play();
  }

  public pause(): void {
    if (this.howl !== null) {
      this.howl.pause();
    }
  }

  public skipForward() {
    console.log(this.#playlist);
  }

  public skipBackward() {
    // if the song is at some kth duration, then repeat at the start
    // else, go back to previous song
    console.log(this.#playlist);
  }

  shufflePlaylist() {
    // Fisher–Yates shuffle
    console.log(this.#playlist);
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
