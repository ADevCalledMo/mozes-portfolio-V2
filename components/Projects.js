import React from "react";
import Image from "next/image";
import {
  Heading,
  Text,
  Flex,
  Stack,
  Tag,
  Grid,
  Box,
  Button,
} from "@chakra-ui/react";

import { FaGithub, FaGlobeEurope } from "react-icons/fa";
import smartbrain_img from "../public/BrainScanner.png";

function Project({ title, desc, tech, image_url }) {
  return (
    <Stack>
      <Heading as="h4" size="md">
        <Flex alignItems="center">
          <Text as="span">{title}</Text>
        </Flex>
      </Heading>

      <Grid
        gridTemplateColumns={["1fr", "1fr 1fr", "1fr 1fr", "1fr 1fr"]}
        gap={2}
        p={5}
        _hover={{ shadow: "md" }}
        borderWidth="1px"
        position="relative"
        rounded="md"
      >
        <Image src={image_url} />
        <Box>
          <Stack mt={2} pl={[0, 4, 4, 4]}>
            <Text fontSize="lg" fontWeight="semibold" lineHeight="short">
              {desc}
            </Text>
            <Stack isInline pt={1}>
              {tech.split(",").map((tag) => (
                <Tag>{tag}</Tag>
              ))}
            </Stack>

            {/* <Stack isInline spacing={4} pt={3}> */}
            <Flex>
              <Box mt={3}>
                <Button
                  leftIcon={<FaGlobeEurope />}
                  colorScheme="green"
                  variant="solid"
                >
                  Live Site
                </Button>
                <Button
                  leftIcon={<FaGithub />}
                  colorScheme="black"
                  variant="outline"
                  ml={4}
                >
                  Code
                </Button>
              </Box>
            </Flex>
            {/* </Stack> */}
          </Stack>
        </Box>
      </Grid>
    </Stack>
  );
}

const Projects = () => {
  const projects = [
    {
      title: "Smart Brain",
      desc: "This app uses an external API to scan a photo and see if it contains a face. The users score will be updated by one when the app successfully finds a face. There is a simple login system aswell.",
      tech: "React.js, PostgreSQL, HTML, CSS",
      image_url: smartbrain_img,
    },
  ];

  return (
    <div>
      {projects.map((project, index) => (
        <Project
          key={index}
          title={project.title}
          desc={project.desc}
          tech={project.tech}
          image_url={project.image_url}
        />
      ))}
    </div>
  );
};

export default Projects;
