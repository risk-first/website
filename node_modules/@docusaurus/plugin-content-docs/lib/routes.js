"use strict";
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.createAllRoutes = exports.buildAllRoutes = void 0;
const tslib_1 = require("tslib");
const lodash_1 = tslib_1.__importDefault(require("lodash"));
const logger_1 = tslib_1.__importDefault(require("@docusaurus/logger"));
const utils_1 = require("@docusaurus/utils");
const props_1 = require("./props");
const tags_1 = require("./tags");
async function buildVersionCategoryGeneratedIndexRoutes({ version, actions, options, aliasedSource, }) {
    const slugs = (0, utils_1.createSlugger)();
    async function buildCategoryGeneratedIndexRoute(categoryGeneratedIndex) {
        const { sidebar, ...prop } = categoryGeneratedIndex;
        const propFileName = slugs.slug(`${version.path}-${categoryGeneratedIndex.sidebar}-category-${categoryGeneratedIndex.title}`);
        const propData = await actions.createData(`${(0, utils_1.docuHash)(`category/${propFileName}`)}.json`, JSON.stringify(prop, null, 2));
        return {
            path: categoryGeneratedIndex.permalink,
            component: options.docCategoryGeneratedIndexComponent,
            exact: true,
            modules: {
                categoryGeneratedIndex: aliasedSource(propData),
            },
            // Same as doc, this sidebar route attribute permits to associate this
            // subpage to the given sidebar
            ...(sidebar && { sidebar }),
        };
    }
    return Promise.all(version.categoryGeneratedIndices.map(buildCategoryGeneratedIndexRoute));
}
async function buildVersionDocRoutes({ version, actions, options, }) {
    return Promise.all(version.docs.map(async (metadataItem) => {
        await actions.createData(
        // Note that this created data path must be in sync with
        // metadataPath provided to mdx-loader.
        `${(0, utils_1.docuHash)(metadataItem.source)}.json`, JSON.stringify(metadataItem, null, 2));
        const docRoute = {
            path: metadataItem.permalink,
            component: options.docItemComponent,
            exact: true,
            modules: {
                content: metadataItem.source,
            },
            // Because the parent (DocRoot) comp need to access it easily
            // This permits to render the sidebar once without unmount/remount when
            // navigating (and preserve sidebar state)
            ...(metadataItem.sidebar && {
                sidebar: metadataItem.sidebar,
            }),
        };
        return docRoute;
    }));
}
async function buildVersionSidebarRoute(param) {
    const [docRoutes, categoryGeneratedIndexRoutes] = await Promise.all([
        buildVersionDocRoutes(param),
        buildVersionCategoryGeneratedIndexRoutes(param),
    ]);
    const subRoutes = [...docRoutes, ...categoryGeneratedIndexRoutes];
    return {
        path: param.version.path,
        exact: false,
        component: param.options.docRootComponent,
        routes: subRoutes,
    };
}
async function buildVersionTagsRoutes(param) {
    const { version, options, actions, aliasedSource } = param;
    const versionTags = (0, tags_1.getVersionTags)(version.docs);
    async function buildTagsListRoute() {
        // Don't create a tags list page if there's no tag
        if (Object.keys(versionTags).length === 0) {
            return null;
        }
        const tagsProp = (0, props_1.toTagsListTagsProp)(versionTags);
        const tagsPropPath = await actions.createData(`${(0, utils_1.docuHash)(`tags-list-${version.versionName}-prop`)}.json`, JSON.stringify(tagsProp, null, 2));
        return {
            path: version.tagsPath,
            exact: true,
            component: options.docTagsListComponent,
            modules: {
                tags: aliasedSource(tagsPropPath),
            },
        };
    }
    async function buildTagDocListRoute(tag) {
        const tagProps = (0, props_1.toTagDocListProp)({
            allTagsPath: version.tagsPath,
            tag,
            docs: version.docs,
        });
        const tagPropPath = await actions.createData(`${(0, utils_1.docuHash)(`tag-${tag.permalink}`)}.json`, JSON.stringify(tagProps, null, 2));
        return {
            path: tag.permalink,
            component: options.docTagDocListComponent,
            exact: true,
            modules: {
                tag: aliasedSource(tagPropPath),
            },
        };
    }
    const [tagsListRoute, allTagsDocListRoutes] = await Promise.all([
        buildTagsListRoute(),
        Promise.all(Object.values(versionTags).map(buildTagDocListRoute)),
    ]);
    return lodash_1.default.compact([tagsListRoute, ...allTagsDocListRoutes]);
}
async function buildVersionRoutes(param) {
    const { version, actions, options, aliasedSource } = param;
    async function buildVersionSubRoutes() {
        const [sidebarRoute, tagsRoutes] = await Promise.all([
            buildVersionSidebarRoute(param),
            buildVersionTagsRoutes(param),
        ]);
        return [sidebarRoute, ...tagsRoutes];
    }
    async function doBuildVersionRoutes() {
        const versionProp = (0, props_1.toVersionMetadataProp)(options.id, version);
        const versionPropPath = await actions.createData(`${(0, utils_1.docuHash)(`version-${version.versionName}-metadata-prop`)}.json`, JSON.stringify(versionProp, null, 2));
        const subRoutes = await buildVersionSubRoutes();
        return {
            path: version.path,
            exact: false,
            component: options.docVersionRootComponent,
            routes: subRoutes,
            modules: {
                version: aliasedSource(versionPropPath),
            },
            priority: version.routePriority,
        };
    }
    try {
        return await doBuildVersionRoutes();
    }
    catch (err) {
        logger_1.default.error `Can't create version routes for version name=${version.versionName}`;
        throw err;
    }
}
// TODO we want this buildAllRoutes function to be easily testable
// Ideally, we should avoid side effects here (ie not injecting actions)
async function buildAllRoutes(param) {
    const subRoutes = await Promise.all(param.versions.map((version) => buildVersionRoutes({
        ...param,
        version,
    })));
    // all docs routes are wrapped under a single parent route, this ensures
    // the theme layout never unmounts/remounts when navigating between versions
    return [
        {
            path: (0, utils_1.normalizeUrl)([param.baseUrl, param.options.routeBasePath]),
            exact: false,
            component: param.options.docsRootComponent,
            routes: subRoutes,
        },
    ];
}
exports.buildAllRoutes = buildAllRoutes;
async function createAllRoutes(param) {
    const routes = await buildAllRoutes(param);
    routes.forEach(param.actions.addRoute);
}
exports.createAllRoutes = createAllRoutes;
