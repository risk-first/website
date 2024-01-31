/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import type { TagsListItem, TagModule } from '@docusaurus/utils';
import type { BlogTag, BlogTags } from '@docusaurus/plugin-content-blog';
export declare function toTagsProp({ blogTags }: {
    blogTags: BlogTags;
}): TagsListItem[];
export declare function toTagProp({ blogTagsListPath, tag, }: {
    blogTagsListPath: string;
    tag: BlogTag;
}): TagModule;
