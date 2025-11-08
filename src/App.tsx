import { Suspense } from 'react';
import { I18nextProvider } from 'react-i18next';

import { FullPageSpinner } from '@/components/full-page-spinner';
import { ThemeProvider } from '@gatewatcher/skin';

import i18n from './lib/i18n';
import { AppRouter } from './routes/router';

export const App = () => {
  return (
    <Suspense fallback={<FullPageSpinner />}>
      <I18nextProvider i18n={i18n}>
        <ThemeProvider withResetTransitions={false}>
          <AppRouter />
        </ThemeProvider>
      </I18nextProvider>
    </Suspense>
  );
};
