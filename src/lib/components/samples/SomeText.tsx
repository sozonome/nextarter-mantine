import { Flex, Text, Title } from '@mantine/core';

const SomeText = () => {
  return (
    <Flex direction="column" gap={2} align="center">
      <Title>nextarter-mantine</Title>
      <Text size="sm" c="gray">
        Next.js starter template with Mantine UI and TypeScript setup
      </Text>
    </Flex>
  );
};

export default SomeText;
