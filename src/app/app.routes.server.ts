import { RenderMode, ServerRoute } from '@angular/ssr';

export const serverRoutes: ServerRoute[] = [
  {
    path: '**',
    renderMode: RenderMode.Prerender,
  },
  {
    path: '/login', renderMode: RenderMode.Server
  },
  {
    path: '/user', renderMode: RenderMode.Client
  }
];
