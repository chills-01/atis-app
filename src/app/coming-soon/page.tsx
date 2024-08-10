import { Box, Group, Paper, Stack, Text } from "@mantine/core";
import { Lexend } from "next/font/google";
import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconPlaneDeparture,
} from "@tabler/icons-react";

const lexend = Lexend({ subsets: ["latin"] });

export default function Page() {
  return (
    <Stack bg={"#4B33AD"} h={"100vh"} gap={0} px={"50px"}>
      <Stack h={"80%"} bd={"1px solid white"}></Stack>
      <Group h={"20%"} bd={"1px solid white"} justify="space-around">
        <a href="https://github.com/chills-01/atis-app" target="_blank">
          <IconBrandGithub size={44} color="white" stroke={1.25} />
        </a>
        <a href="" target="_blank">
          <IconBrandLinkedin size={50} color="white" stroke={1.1} />
        </a>
      </Group>
    </Stack>
  );
}
