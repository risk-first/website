/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
/** What the user configures. */
export type Tag = {
    label: string;
    /** Permalink to this tag's page, without the `/tags/` base path. */
    permalink: string;
};
/** What the tags list page should know about each tag. */
export type TagsListItem = Tag & {
    /** Number of posts/docs with this tag. */
    count: number;
};
/** What the tag's own page should know about the tag. */
export type TagModule = TagsListItem & {
    /** The tags list page's permalink. */
    allTagsPath: string;
    /** Is this tag unlisted? (when it only contains unlisted items) */
    unlisted: boolean;
};
export type FrontMatterTag = string | Tag;
/**
 * Takes tag objects as they are defined in front matter, and normalizes each
 * into a standard tag object. The permalink is created by appending the
 * sluggified label to `tagsPath`. Front matter tags already containing
 * permalinks would still have `tagsPath` prepended.
 *
 * The result will always be unique by permalinks. The behavior with colliding
 * permalinks is undetermined.
 */
export declare function normalizeFrontMatterTags(
/** Base path to append the tag permalinks to. */
tagsPath: string, 
/** Can be `undefined`, so that we can directly pipe in `frontMatter.tags`. */
frontMatterTags?: FrontMatterTag[] | undefined): Tag[];
type TaggedItemGroup<Item> = {
    tag: Tag;
    items: Item[];
};
/**
 * Permits to group docs/blog posts by tag (provided by front matter).
 *
 * @returns a map from tag permalink to the items and other relevant tag data.
 * The record is indexed by permalink, because routes must be unique in the end.
 * Labels may vary on 2 MD files but they are normalized. Docs with
 * label='some label' and label='some-label' should end up in the same page.
 */
export declare function groupTaggedItems<Item>(items: readonly Item[], 
/**
 * A callback telling me how to get the tags list of the current item. Usually
 * simply getting it from some metadata of the current item.
 */
getItemTags: (item: Item) => readonly Tag[]): {
    [permalink: string]: TaggedItemGroup<Item>;
};
/**
 * Permits to get the "tag visibility" (hard to find a better name)
 * IE, is this tag listed or unlisted
 * And which items should be listed when this tag is browsed
 */
export declare function getTagVisibility<Item>({ items, isUnlisted, }: {
    items: Item[];
    isUnlisted: (item: Item) => boolean;
}): {
    unlisted: boolean;
    listedItems: Item[];
};
export {};
//# sourceMappingURL=tags.d.ts.map