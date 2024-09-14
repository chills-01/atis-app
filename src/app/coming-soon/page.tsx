import { Group, Stack, Text } from "@mantine/core";
import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconPlaneDeparture,
} from "@tabler/icons-react";
import { Lexend } from "next/font/google";

const lexend = Lexend({ subsets: ["latin"] });
const lexendSemiBold = Lexend({ weight: "600", subsets: ["latin"] });

export default function Page() {
  return (
    <Stack bg={"#4B33AD"} h={"100vh"} gap={0} px={"40px"}>
      <Stack
        h={"80%"}
        // bd={"1px solid white"}
        align="center"
        justify="space-around"
        py={"80px"}
      >
        <Group gap="xs" justify="space-around">
          <IconPlaneDeparture color="white" size={44} />
          <Text
            className={lexendSemiBold.className}
            c={"white"}
            size="48px"
            ta="center"
          >
            SKYSYNC
          </Text>
        </Group>
        <Text className={lexend.className} c={"white"} size="20px" ta="center">
          The weather sharing {<br />}app for pilots.
        </Text>
        <Text className={lexend.className} c={"white"} size="20px" ta="center">
          COMING SOON
        </Text>
      </Stack>
      <Group h={"20%"} justify="space-around">
        <a href="https://github.com/chills-01/atis-app" target="_blank">
          <IconBrandGithub size={44} color="white" stroke={1.25} />
        </a>
        <a href="https://www.linkedin.com/in/carter-hills/" target="_blank">
          <IconBrandLinkedin size={50} color="white" stroke={1.1} />
        </a>
      </Group>
    </Stack>
  );
}
