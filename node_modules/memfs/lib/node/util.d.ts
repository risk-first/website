import type { FsCallbackApi } from './types';
export declare function promisify(fs: FsCallbackApi, fn: string, getResult?: (result: any) => any): (...args: any[]) => Promise<any>;
