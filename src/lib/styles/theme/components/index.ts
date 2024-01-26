'use client';

import type { MantineThemeOverride } from '@mantine/core';

import {
  AppShellConfig,
  AppShellFooterConfig,
  AppShellHeaderConfig,
  AppShellNavbarConfig,
} from './AppShell';

export const componentsConfig: MantineThemeOverride['components'] = {
  AppShell: AppShellConfig,
  AppShellHeader: AppShellHeaderConfig,
  AppShellNavbar: AppShellNavbarConfig,
  AppShellFooter: AppShellFooterConfig,
};
