import { contextBridge, ipcRenderer, IpcRendererEvent } from 'electron';

export type Channels = 'ipc-example';
export type PlaylistUpdateChannel = 'update-playlist';

// contextBridge avoids leaking privleged APIs into web content,
// this is primary bridge between the renderer to main
contextBridge.exposeInMainWorld('electron', {
  getBuffer: (filePath: string) =>
    ipcRenderer.invoke('create:song-buffer', filePath),
  updatePlaylist: (
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    callback: (event: Electron.IpcRendererEvent, ...args: any[]) => void
  ) => ipcRenderer.on('update-playlist', callback),
  ipcRenderer: {
    sendMessage(channel: Channels, args: unknown[]) {
      ipcRenderer.send(channel, args);
    },
    on(channel: Channels, func: (...args: unknown[]) => void) {
      const subscription = (_event: IpcRendererEvent, ...args: unknown[]) =>
        func(...args);
      ipcRenderer.on(channel, subscription);

      return () => ipcRenderer.removeListener(channel, subscription);
    },
    once(channel: Channels, func: (...args: unknown[]) => void) {
      ipcRenderer.once(channel, (_event, ...args) => func(...args));
    },
  },
});
