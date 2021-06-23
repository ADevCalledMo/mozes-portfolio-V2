import React from "react";
import { Heading, Text, Flex, Stack, Tag } from "@chakra-ui/react";

function Project({ title, desc, tech }) {
  return (
    <Stack>
      <Heading as="h4">
        <Flex alignItems="center">
          <Text as="span">{title}</Text>
        </Flex>
      </Heading>
      <Text as="span">{desc}</Text>
      <Stack isInline>
        {tech.split(",").map((tag) => (
          <Tag>{tag}</Tag>
        ))}
      </Stack>
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
  ];

  return (
    <div>
      {projects.map((project, index) => (
        <Project
          key={index}
          title={project.title}
          desc={project.desc}
          tech={project.tech}
        />
      ))}
    </div>
  );
};

export default Projects;
