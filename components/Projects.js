import React from "react";
import {
  useColorMode,
  Heading,
  Text,
  Flex,
  Stack,
  Tag,
} from "@chakra-ui/react";

function Project({ title, desc, tech }) {
  return (
    <Stack>
      <Heading>{title}</Heading>
      <Text>{desc}</Text>
      <Tag>{tech}</Tag>
    </Stack>
  );
}

const Projects = () => {
  const projects = [
    {
      title: "Smart Brain",
      desc: "Use this app to scan a face; you will also be....",
      tech: "Javascript, HTML, CSS",
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
