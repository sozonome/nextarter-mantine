import { AppShellHeader } from '@mantine/core';

import ThemeToggle from './components/ThemeToggle';

const Header = () => {
  return (
    <AppShellHeader style={{ justifyContent: 'end' }}>
      <ThemeToggle />
    </AppShellHeader>
  );
};

export default Header;
