import { ColorSchemeScript, MantineProvider } from '@mantine/core';
import type { Metadata } from 'next';

import { fontSans } from '~/lib/styles/fonts';
import { themeConfig } from '~/lib/styles/theme';

import '@mantine/core/styles.css';
import '~/lib/styles/globals.css';

const APP_NAME = 'nextarter-mantine';

export const metadata: Metadata = {
  title: APP_NAME,
  description: 'Next.js App with TypeScript setup',
  viewport: {
    width: 'device-width',
    initialScale: 1,
  },
  applicationName: APP_NAME,
  appleWebApp: {
    capable: true,
    title: APP_NAME,
    statusBarStyle: 'default',
  },
  formatDetection: {
    telephone: false,
  },
  themeColor: '#FFFFFF',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <ColorSchemeScript />
      </head>
      <body className={fontSans.className}>
        <MantineProvider theme={themeConfig}>{children}</MantineProvider>
      </body>
    </html>
  );
}
