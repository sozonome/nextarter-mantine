import { ColorSchemeScript, MantineProvider } from '@mantine/core';
import type { Metadata, Viewport } from 'next';

import { themeConfig } from '@/lib/styles/theme';
import Layout from '@/lib/layout';
import { fontSans } from '@/lib/styles/fonts';

import '@/lib/styles/globals.css';
import '@mantine/core/styles.css';

const APP_NAME = 'nextarter-mantine';

export const metadata: Metadata = {
  title: APP_NAME,
  description: 'Next.js App with TypeScript setup',
  applicationName: APP_NAME,
  appleWebApp: {
    capable: true,
    title: APP_NAME,
    statusBarStyle: 'default',
  },
  formatDetection: {
    telephone: false,
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
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
        <MantineProvider theme={themeConfig}>
          <Layout>{children}</Layout>
        </MantineProvider>
      </body>
    </html>
  );
}
