import { AppShell } from '@mantine/core';

export const AppShellConfig = AppShell.extend({
  defaultProps: {
    header: { height: 60 },
    footer: { height: 60 },
    padding: 'md',
  },
});

export const AppShellHeaderConfig = AppShell.Header.extend({
  defaultProps: {
    p: 12,
    withBorder: false,
  },
});

export const AppShellNavbarConfig = AppShell.Navbar.extend({
  defaultProps: {
    p: 'md',
    withBorder: false,
  },
});

export const AppShellFooterConfig = AppShell.Footer.extend({
  defaultProps: {
    p: 'md',
    withBorder: false,
    display: 'flex',
    style: {
      alignItems: 'center',
    },
  },
});
