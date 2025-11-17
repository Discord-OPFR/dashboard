import { Suspense } from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import { FullPageSpinner } from '@/components/full-page-spinner';

import { protectedRoutes } from './protected';
import { publicRoutes } from './public';

type AppRouterProps = {
  isAuthenticated: boolean;
};

export const AppRouter = ({ isAuthenticated }: AppRouterProps) => {
  const router = createBrowserRouter(
    isAuthenticated ? protectedRoutes : publicRoutes,
  );

  return (
    <Suspense fallback={<FullPageSpinner />}>
      <RouterProvider router={router} />
    </Suspense>
  );
};
