import { Suspense } from 'react';
import type { RouteObject } from 'react-router-dom';
import { Outlet } from 'react-router-dom';

import { FullPageSpinner } from '@/components/full-page-spinner';
import { PATHS } from '@/config/paths';
import { SideNav } from '@/features/misc/components/navigation/SideNav';
import { TopNav } from '@/features/misc/components/navigation/TopNav';
import { LayoutV2 } from '@gatewatcher/skin';

import { lazyImport } from '../utils/lazyImport';

const { Home } = lazyImport(
  () => import('@/features/home/routes/Home'),
  'Home',
);

const { Entity } = lazyImport(
  () => import('@/features/entity/routes/Entity'),
  'Entity',
);

const ProtectedApp = () => {
  return (
    <LayoutV2 sideNav={<SideNav />} topNav={<TopNav />}>
      <LayoutV2.Row>
        <Suspense fallback={<FullPageSpinner />}>
          <Outlet />
        </Suspense>
      </LayoutV2.Row>
    </LayoutV2>
  );
};

export const protectedRoutes: RouteObject[] = [
  {
    path: '/',
    element: <ProtectedApp />,
    children: [
      { path: PATHS.home, element: <Home /> },
      { path: PATHS.entity.base, element: <Entity /> },
    ],
  },
];
