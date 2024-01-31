import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/__docusaurus/debug',
    component: ComponentCreator('/__docusaurus/debug', '1fc'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/config',
    component: ComponentCreator('/__docusaurus/debug/config', '025'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/content',
    component: ComponentCreator('/__docusaurus/debug/content', 'f37'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/globalData',
    component: ComponentCreator('/__docusaurus/debug/globalData', '319'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/metadata',
    component: ComponentCreator('/__docusaurus/debug/metadata', 'e9c'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/registry',
    component: ComponentCreator('/__docusaurus/debug/registry', 'b34'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/routes',
    component: ComponentCreator('/__docusaurus/debug/routes', 'bb5'),
    exact: true
  },
  {
    path: '/markdown-page',
    component: ComponentCreator('/markdown-page', '9ae'),
    exact: true
  },
  {
    path: '/',
    component: ComponentCreator('/', '1db'),
    exact: true
  },
  {
    path: '/',
    component: ComponentCreator('/', '942'),
    routes: [
      {
        path: '/',
        component: ComponentCreator('/', 'fbc'),
        routes: [
          {
            path: '/',
            component: ComponentCreator('/', 'c91'),
            routes: [
              {
                path: '/overview/Quick-Summary',
                component: ComponentCreator('/overview/Quick-Summary', '43d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/overview/Start',
                component: ComponentCreator('/overview/Start', '645'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/overview/Tracks',
                component: ComponentCreator('/overview/Tracks', 'ced'),
                exact: true,
                sidebar: "tutorialSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
