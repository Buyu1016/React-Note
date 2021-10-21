// @ts-nocheck
import React from 'react';
import { ApplyPluginsType } from 'C:/Users/Administrator.DESKTOP-25OOQGO/Desktop/React/Demo/studentDemo/node_modules/@umijs/runtime';
import * as umiExports from './umiExports';
import { plugin } from './plugin';

export function getRoutes() {
  const routes = [
  {
    "path": "/",
    "component": require('@/layouts/index.jsx').default,
    "routes": [
      {
        "path": "/",
        "exact": true,
        "component": require('@/pages/index.jsx').default
      },
      {
        "path": "/student",
        "exact": true,
        "component": require('@/pages/student.jsx').default
      }
    ]
  }
];

  // allow user to extend routes
  plugin.applyPlugins({
    key: 'patchRoutes',
    type: ApplyPluginsType.event,
    args: { routes },
  });

  return routes;
}
