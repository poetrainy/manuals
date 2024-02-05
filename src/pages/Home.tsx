import { Center, Flex, Link, Text } from "@chakra-ui/react";
import { MANUALS } from "~/data/manuals";

const Home = () => {
  return (
    <Flex
      alignItems="flex-start"
      flexWrap="wrap"
      gap="16px"
      w="100%"
      maxW="400px"
      p="32px 16px"
      m="0 auto"
    >
      {MANUALS.map((manual) => (
        <Center
          as={Link}
          key={manual.label}
          href={manual.file}
          isExternal
          flexDir="column"
          gap="6px"
          w="calc(50% - 8px)"
          p="12px 0 0"
          bg="white"
          boxShadow="0 0 10px rgba(0, 0, 0, 0.1)"
          rounded="24px"
          aspectRatio="1"
        >
          <manual.icon width="52%" height="52%" fill="#086776" />
          <Text as="span" color="primary.700" fontWeight="bold">
            {manual.label}
          </Text>
        </Center>
      ))}
    </Flex>
  );
};

export default Home;
