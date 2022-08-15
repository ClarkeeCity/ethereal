import { MetaDataInterface } from 'interface';
import { Channels } from 'main/preload';

declare global {
  interface Window {
    electron: {
      initPlaylist(): Promise<string[]>;
      getMetadata(filePath: string): Promise<MetaDataInterface>;
      getBuffer(filePath: string): Promise<BufferConstructor>;
      updatePlaylist(
        callback: (event: Electron.IpcRendererEvent, ...args: any[]) => void
      ): Electron.IpcRenderer;
      ipcRenderer: {
        sendMessage(channel: Channels, args: unknown[]): void;
        on(
          channel: string,
          func: (...args: unknown[]) => void
        ): (() => void) | undefined;
        once(channel: string, func: (...args: unknown[]) => void): void;
      };
    };
  }
}

export {};
