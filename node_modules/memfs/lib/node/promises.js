"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createPromisesApi = void 0;
const FileHandle_1 = require("./FileHandle");
const util_1 = require("./util");
function createPromisesApi(vol) {
    if (typeof Promise === 'undefined')
        return null;
    return {
        FileHandle: FileHandle_1.FileHandle,
        access(path, mode) {
            return (0, util_1.promisify)(vol, 'access')(path, mode);
        },
        appendFile(path, data, options) {
            return (0, util_1.promisify)(vol, 'appendFile')(path instanceof FileHandle_1.FileHandle ? path.fd : path, data, options);
        },
        chmod(path, mode) {
            return (0, util_1.promisify)(vol, 'chmod')(path, mode);
        },
        chown(path, uid, gid) {
            return (0, util_1.promisify)(vol, 'chown')(path, uid, gid);
        },
        copyFile(src, dest, flags) {
            return (0, util_1.promisify)(vol, 'copyFile')(src, dest, flags);
        },
        lchmod(path, mode) {
            return (0, util_1.promisify)(vol, 'lchmod')(path, mode);
        },
        lchown(path, uid, gid) {
            return (0, util_1.promisify)(vol, 'lchown')(path, uid, gid);
        },
        link(existingPath, newPath) {
            return (0, util_1.promisify)(vol, 'link')(existingPath, newPath);
        },
        lstat(path, options) {
            return (0, util_1.promisify)(vol, 'lstat')(path, options);
        },
        mkdir(path, options) {
            return (0, util_1.promisify)(vol, 'mkdir')(path, options);
        },
        mkdtemp(prefix, options) {
            return (0, util_1.promisify)(vol, 'mkdtemp')(prefix, options);
        },
        open(path, flags, mode) {
            return (0, util_1.promisify)(vol, 'open', fd => new FileHandle_1.FileHandle(vol, fd))(path, flags, mode);
        },
        readdir(path, options) {
            return (0, util_1.promisify)(vol, 'readdir')(path, options);
        },
        readFile(id, options) {
            return (0, util_1.promisify)(vol, 'readFile')(id instanceof FileHandle_1.FileHandle ? id.fd : id, options);
        },
        readlink(path, options) {
            return (0, util_1.promisify)(vol, 'readlink')(path, options);
        },
        realpath(path, options) {
            return (0, util_1.promisify)(vol, 'realpath')(path, options);
        },
        rename(oldPath, newPath) {
            return (0, util_1.promisify)(vol, 'rename')(oldPath, newPath);
        },
        rmdir(path, options) {
            return (0, util_1.promisify)(vol, 'rmdir')(path, options);
        },
        rm(path, options) {
            return (0, util_1.promisify)(vol, 'rm')(path, options);
        },
        stat(path, options) {
            return (0, util_1.promisify)(vol, 'stat')(path, options);
        },
        symlink(target, path, type) {
            return (0, util_1.promisify)(vol, 'symlink')(target, path, type);
        },
        truncate(path, len) {
            return (0, util_1.promisify)(vol, 'truncate')(path, len);
        },
        unlink(path) {
            return (0, util_1.promisify)(vol, 'unlink')(path);
        },
        utimes(path, atime, mtime) {
            return (0, util_1.promisify)(vol, 'utimes')(path, atime, mtime);
        },
        writeFile(id, data, options) {
            return (0, util_1.promisify)(vol, 'writeFile')(id instanceof FileHandle_1.FileHandle ? id.fd : id, data, options);
        },
    };
}
exports.createPromisesApi = createPromisesApi;
