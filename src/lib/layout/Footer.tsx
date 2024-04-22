import { Anchor, AppShellFooter, Text } from '@mantine/core';

const Footer = () => {
  return (
    <AppShellFooter>
      <Text>
        {new Date().getFullYear()}
        {' - '}
        <Anchor
          href="https://sznm.dev"
          target="_blank"
          rel="noopener noreferrer"
        >
          sznm.dev
        </Anchor>
      </Text>
    </AppShellFooter>
  );
};

export default Footer;
