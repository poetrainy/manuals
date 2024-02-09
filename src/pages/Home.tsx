import {
  Box,
  Center,
  Flex,
  Heading,
  Link,
  Text,
  VStack,
} from "@chakra-ui/react";
import { MANUALS } from "~/data/manuals";

const Home = () => {
  return (
    <VStack gap="24px" w="100%" maxW="400px" m="0 auto" p="32px 16px">
      {MANUALS.map(({ type, manuals }) => (
        <VStack key={type} alignItems="stretch" gap="16px" w="100%">
          <Heading as="h2" fontSize="16px" color="primary.800">
            {type}
          </Heading>
          <Flex
            alignItems="flex-start"
            flexWrap="wrap"
            gap="16px"
            w="100%"
            m="0 auto"
          >
            {manuals.map((manual) => (
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
                <Box
                  as={manual.icon}
                  boxSize="52%"
                  fill="#086776"
                  objectFit="contain"
                />
                <Text as="span" color="primary.700" fontWeight="bold">
                  {manual.label}
                </Text>
              </Center>
            ))}
          </Flex>
        </VStack>
      ))}
    </VStack>
  );
};

export default Home;
