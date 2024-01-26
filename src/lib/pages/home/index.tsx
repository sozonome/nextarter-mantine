import { Flex } from '@mantine/core';

import CTASection from '@/lib/components/samples/CTASection';
import SomeText from '@/lib/components/samples/SomeText';

const HomePage = () => {
  return (
    <Flex
      direction="column"
      justify="center"
      gap={32}
      style={{
        minHeight: '60vh',
      }}
    >
      <SomeText />
      <CTASection />
    </Flex>
  );
};

export default HomePage;
