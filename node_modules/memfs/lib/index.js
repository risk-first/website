"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.memfs = exports.fs = exports.createFsFromVolume = exports.vol = exports.Volume = void 0;
const Stats_1 = require("./Stats");
const Dirent_1 = require("./Dirent");
const volume_1 = require("./volume");
const { fsSyncMethods, fsAsyncMethods } = require('fs-monkey/lib/util/lists');
const constants_1 = require("./constants");
const { F_OK, R_OK, W_OK, X_OK } = constants_1.constants;
exports.Volume = volume_1.Volume;
// Default volume.
exports.vol = new volume_1.Volume();
function createFsFromVolume(vol) {
    const fs = { F_OK, R_OK, W_OK, X_OK, constants: constants_1.constants, Stats: Stats_1.default, Dirent: Dirent_1.default };
    // Bind FS methods.
    for (const method of fsSyncMethods)
        if (typeof vol[method] === 'function')
            fs[method] = vol[method].bind(vol);
    for (const method of fsAsyncMethods)
        if (typeof vol[method] === 'function')
            fs[method] = vol[method].bind(vol);
    fs.StatWatcher = vol.StatWatcher;
    fs.FSWatcher = vol.FSWatcher;
    fs.WriteStream = vol.WriteStream;
    fs.ReadStream = vol.ReadStream;
    fs.promises = vol.promises;
    fs._toUnixTimestamp = volume_1.toUnixTimestamp;
    fs.__vol = vol;
    return fs;
}
exports.createFsFromVolume = createFsFromVolume;
exports.fs = createFsFromVolume(exports.vol);
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
const memfs = (json = {}, cwd = '/') => {
    const volume = exports.Volume.fromJSON(json, cwd);
    const fs = createFsFromVolume(volume);
    return fs;
};
exports.memfs = memfs;
module.exports = Object.assign(Object.assign({}, module.exports), exports.fs);
module.exports.semantic = true;
