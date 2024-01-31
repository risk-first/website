import Stats from './Stats';
import Dirent from './Dirent';
import { Volume as _Volume, StatWatcher, FSWatcher, IReadStream, IWriteStream, DirectoryJSON } from './volume';
import { constants } from './constants';
import type { FsPromisesApi } from './node/types';
export { DirectoryJSON };
export declare const Volume: typeof _Volume;
export declare const vol: _Volume;
export interface IFs extends _Volume {
    constants: typeof constants;
    Stats: new (...args: any[]) => Stats;
    Dirent: new (...args: any[]) => Dirent;
    StatWatcher: new () => StatWatcher;
    FSWatcher: new () => FSWatcher;
    ReadStream: new (...args: any[]) => IReadStream;
    WriteStream: new (...args: any[]) => IWriteStream;
    promises: FsPromisesApi;
    _toUnixTimestamp: any;
}
export declare function createFsFromVolume(vol: _Volume): IFs;
export declare const fs: IFs;
/**
 * Creates a new file system instance.
 *
 * @param json File system structure expressed as a JSON object.
 *        Use `null` for empty directories and empty string for empty files.
 * @param cwd Current working directory. The JSON structure will be created
 *        relative to this path.
 * @returns A `memfs` file system instance, which is a drop-in replacement for
 *          the `fs` module.
 */
export declare const memfs: (json?: DirectoryJSON, cwd?: string) => IFs;
export type IFsWithVolume = IFs & {
    __vol: _Volume;
};
