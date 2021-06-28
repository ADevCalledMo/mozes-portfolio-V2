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
// import smartbrain_img from "../public/BrainScanner.jpg";
// import blog_img from "../public/ABlogFromMozes.jpeg";

function Project({ title, desc, tech, image_url }) {
  return (
    <Stack marginBottom={5}>
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
        {/* <Image src={image_url} /> */}
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
    },
    {
      title: "Covid-19 Tracker",
      desc: "A simple website to showcase the numbers of people affected by this virus (infected, recovered and deceased) - the data is from an API and updated daily.",
      tech: "React.js, Chart.js, HTML, CSS",
    },
    {
      title: "A Blog From Mozes",
      desc: "I used Gatsby.js and Contentful to create a blog for myself with the purpose of documenting what I am currently learning as a self-taught web developer.",
      tech: "React.js, Gatsby.js, Contentful",
      // image_url: blog_img,
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
          // image_url={project.image_url}
        />
      ))}
    </div>
  );
};

export default Projects;
