import { defineRoutes } from 'ice';
import BasicLayout from '@/layouts/BasicLayout';

export default defineRoutes([
  {
    path: '/',
    component: BasicLayout,
    children: [
      {
        path: '/',
        component: () => import('@/pages/index'),
      },
      {
        path: '/about',
        component: () => import('@/pages/about'),
      },
      {
        path: '/features',
        component: () => import('@/pages/features'),
      },
      {
        path: '/documentation',
        component: () => import('@/pages/documentation'),
      },
      {
        path: '/download',
        component: () => import('@/pages/download'),
      },
    ],
  },
]);
