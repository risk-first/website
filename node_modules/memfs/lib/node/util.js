"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.promisify = void 0;
function promisify(fs, fn, getResult = input => input) {
    return (...args) => new Promise((resolve, reject) => {
        fs[fn].bind(fs)(...args, (error, result) => {
            if (error)
                return reject(error);
            return resolve(getResult(result));
        });
    });
}
exports.promisify = promisify;
