import Head from "next/head";
import Image from "next/image";
import { useColorMode, Heading, Text, Flex, Stack } from "@chakra-ui/react";

import Container from "../components/Container";

export default function Home() {
  const { colorMode } = useColorMode();
  const colorSecondary = {
    light: "gray.700",
    dark: "gray.400",
  };
  return (
    <Container>
      <Head>
        <title>Home - Mozes Walker</title>
      </Head>
      <Stack
        as="main"
        spacing={8}
        justifyContent="center"
        alignItems="flex-start"
        m="0 auto 4rem auto"
        maxWidth="700px"
        px={2}
      >
        <Flex
          flexDirection="column"
          justifyContent="flex-start"
          alignItems="flex-start"
          maxWidth="700px"
        >
          <Heading
            lineHeight={1.1}
            fontWeight={600}
            fontSize={{ base: "3xl", sm: "4xl", lg: "6xl" }}
            mb={2}
          >
            <Text
              as={"span"}
              position={"relative"}
              _after={{
                content: "''",
                width: "full",
                height: "30%",
                position: "absolute",
                bottom: 1,
                left: 0,
                bg: "red.400",
                zIndex: -1,
              }}
            >
              Hi, I'm Mozes
            </Text>
            <br />
            <Text as={"span"} color={"red.400"}>
              A Web Developer
            </Text>
          </Heading>
          <Text color={colorSecondary[colorMode]}>
            ... from Nottingham, United Kingdom! In my spare time, I like to
            make websites, keep up with the latest technology and also I like to
            read.
          </Text>
        </Flex>
      </Stack>
    </Container>
  );
}
