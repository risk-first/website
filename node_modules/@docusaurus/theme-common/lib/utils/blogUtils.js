/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { useMemo } from 'react';
import { useLocation } from '@docusaurus/router';
import { isSamePath } from './routesUtils';
function isVisible(item, pathname) {
    if (item.unlisted && !isSamePath(item.permalink, pathname)) {
        return false;
    }
    return true;
}
/**
 * Return the visible blog sidebar items to display.
 * Unlisted items are filtered.
 */
export function useVisibleBlogSidebarItems(items) {
    const { pathname } = useLocation();
    return useMemo(() => items.filter((item) => isVisible(item, pathname)), [items, pathname]);
}
//# sourceMappingURL=blogUtils.js.map