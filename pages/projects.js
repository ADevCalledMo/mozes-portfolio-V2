import Head from "next/head";
import Image from "next/image";
import { useColorMode, Heading, Text, Flex, Stack } from "@chakra-ui/react";

import Container from "../components/Container";
import Projects from "../components/Projects";

export default function Projectss() {
  const { colorMode } = useColorMode();
  const colorSecondary = {
    light: "gray.700",
    dark: "gray.400",
  };
  return (
    <Container>
      <Head>
        <title>Projects - Mozes Walker</title>
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
          <Projects />
        </Flex>
      </Stack>
    </Container>
  );
}
