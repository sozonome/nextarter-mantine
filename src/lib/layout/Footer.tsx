import { Anchor, AppShellFooter } from '@mantine/core';

const Footer = () => {
  return (
    <AppShellFooter>
      {new Date().getFullYear()}
      {' - '}
      <Anchor href="https://sznm.dev" target="_blank" rel="noopener noreferrer">
        sznm.dev
      </Anchor>
    </AppShellFooter>
  );
};

export default Footer;
