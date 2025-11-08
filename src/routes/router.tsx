import { Suspense } from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import { FullPageSpinner } from '@/components/full-page-spinner';

import { protectedRoutes } from './protected';

export const AppRouter = () => {
  const router = createBrowserRouter(protectedRoutes);

  return (
    <Suspense fallback={<FullPageSpinner />}>
      <RouterProvider router={router} />
    </Suspense>
  );
};
