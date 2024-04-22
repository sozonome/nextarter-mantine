import type { MantineThemeOverride } from '@mantine/core';

import { fontSans } from '@/lib/styles/fonts';
import { componentsConfig } from '@/lib/styles/theme/components';

export const themeConfig: MantineThemeOverride = {
  fontFamily: fontSans.style.fontFamily,
  components: componentsConfig,
  defaultRadius: 'md',
  primaryColor: 'violet',
};
