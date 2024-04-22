/* eslint-disable @next/next/no-img-element */
import { Anchor, Button, Flex } from '@mantine/core';

const repoName = 'sozonome/nextarter-mantine';

const CTASection = () => {
  return (
    <Flex direction="column" align="center" gap={8}>
      <Flex align="center" gap={8}>
        <Anchor
          href={`https://vercel.com/import/git?s=https://github.com/${repoName}`}
          target="_blank"
          rel="noreferrer noopener"
        >
          <img
            className="w-23 h-8"
            src="https://vercel.com/button"
            alt="Vercel deploy button"
          />
        </Anchor>

        <Anchor
          href={`https://app.netlify.com/start/deploy?repository=https://github.com/${repoName}`}
          target="_blank"
          rel="noreferrer noopener"
        >
          <img
            className="w-23 h-8"
            src="https://www.netlify.com/img/deploy/button.svg"
            alt="Netlify deploy button"
          />
        </Anchor>
      </Flex>

      <Flex align="center" gap={8}>
        <Button
          component="a"
          href={`https://github.com/${repoName}/generate`}
          target="_blank"
          rel="noopener noreferrer"
        >
          Use This Template
        </Button>
        <Button
          variant="transparent"
          component="a"
          href={`https://github.com/${repoName}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          Repository
        </Button>
      </Flex>
    </Flex>
  );
};

export default CTASection;
