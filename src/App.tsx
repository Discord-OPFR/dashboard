import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Suspense } from 'react';
import { I18nextProvider } from 'react-i18next';
import { Provider as ReduxProvider } from 'react-redux';

import { FullPageSpinner } from '@/components/full-page-spinner';
import { AuthenticationProvider } from '@/features/auth/provider/AuthenticationProvider';
import { reduxStore } from '@/store/reduxStore';
import { ThemeProvider } from '@gatewatcher/skin';

import { OpenAPI } from './api/generated/core/OpenAPI';
import i18n from './lib/i18n';
import { AppRouter } from './routes/router';

const queryClient = new QueryClient();

OpenAPI.BASE = import.meta.env.VITE_API_URL;
OpenAPI.CREDENTIALS = 'include';
OpenAPI.WITH_CREDENTIALS = true;

export const App = () => {
  return (
    <Suspense fallback={<FullPageSpinner />}>
      <I18nextProvider i18n={i18n}>
        <ReduxProvider store={reduxStore}>
          <QueryClientProvider client={queryClient}>
            <ThemeProvider withResetTransitions={false}>
              <AuthenticationProvider>
                {isAuthenticated => (
                  <AppRouter isAuthenticated={isAuthenticated} />
                )}
              </AuthenticationProvider>
            </ThemeProvider>
          </QueryClientProvider>
        </ReduxProvider>
      </I18nextProvider>
    </Suspense>
  );
};
