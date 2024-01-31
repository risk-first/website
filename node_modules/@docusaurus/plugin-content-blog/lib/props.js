"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toTagProp = exports.toTagsProp = void 0;
function toTagsProp({ blogTags }) {
    return Object.values(blogTags)
        .filter((tag) => !tag.unlisted)
        .map((tag) => ({
        label: tag.label,
        permalink: tag.permalink,
        count: tag.items.length,
    }));
}
exports.toTagsProp = toTagsProp;
function toTagProp({ blogTagsListPath, tag, }) {
    return {
        label: tag.label,
        permalink: tag.permalink,
        allTagsPath: blogTagsListPath,
        count: tag.items.length,
        unlisted: tag.unlisted,
    };
}
exports.toTagProp = toTagProp;
