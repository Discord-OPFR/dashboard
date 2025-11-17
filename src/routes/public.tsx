import type { RouteObject } from 'react-router-dom';
import { Outlet } from 'react-router-dom';

import { AuthenticationLayout } from '@/features/auth/components/AuthenticationLayout';

import { lazyImport } from '../utils/lazyImport';

const { Unauthorized } = lazyImport(
  () => import('@/features/misc/routes/Unauthorized'),
  'Unauthorized',
);

const PublicApp = () => {
  return (
    <AuthenticationLayout>
      <Outlet />
    </AuthenticationLayout>
  );
};

export const publicRoutes: RouteObject[] = [
  {
    path: '/',
    element: <PublicApp />,
    children: [
      {
        path: '/',
        element: <Unauthorized />,
      },
      {
        path: '*',
        index: true,
        element: <Unauthorized />,
      },
    ],
  },
];
