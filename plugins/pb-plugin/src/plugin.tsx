import {
  createFrontendPlugin,
  PageBlueprint,
} from '@backstage/frontend-plugin-api';

import { rootRouteRef } from './routes';

export const page = PageBlueprint.make({
  params: {
    path: '/pb-plugin',
    routeRef: rootRouteRef,
    loader: () =>
      import('./components/TodoPage').then(m => (
        <m.TodoPage />
      )),
  },
});

export const pbPluginPlugin = createFrontendPlugin({
  pluginId: 'pb-plugin',
  extensions: [page],
  routes: {
    root: rootRouteRef,
  }
});
