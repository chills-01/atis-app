import {
  Card,
  Group,
  Text,
  Menu,
  ActionIcon,
  SimpleGrid,
  rem,
  Center,
} from "@mantine/core";
import { IconDots, IconEye, IconFileZip, IconTrash } from "@tabler/icons-react";
import { PressureIcon, TemperatureIcon, VisibilityIcon, WindIcon } from "@/components/icons";

const icons = [PressureIcon, TemperatureIcon, VisibilityIcon, WindIcon];

const info = [
  {image: "https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-1.png",
    text: "Picture 1"
  },
  {image: "https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-2.png",
    text: "Picture 2"
  },
  {image: "https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-3.png",
    text: "Picture 3"
  },
  {image: "https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-5.png",
    text: "Picture 4"
  },
];


const card = (
  <Card withBorder shadow="sm" radius="md" mb={"20px"}>
    <Card.Section withBorder inheritPadding py="xs">
      <Group justify="space-between">
        <Text fw={500}>Review pictures</Text>
        <Menu withinPortal position="bottom-end" shadow="sm">
          <Menu.Target>
            <ActionIcon variant="subtle" color="gray">
              <IconDots style={{ width: rem(16), height: rem(16) }} />
            </ActionIcon>
          </Menu.Target>

          <Menu.Dropdown>
            <Menu.Item
              leftSection={
                <IconFileZip style={{ width: rem(14), height: rem(14) }} />
              }
            >
              Download zip
            </Menu.Item>
            <Menu.Item
              leftSection={
                <IconEye style={{ width: rem(14), height: rem(14) }} />
              }
            >
              Preview all
            </Menu.Item>
            <Menu.Item
              leftSection={
                <IconTrash style={{ width: rem(14), height: rem(14) }} />
              }
              color="red"
            >
              Delete all
            </Menu.Item>
          </Menu.Dropdown>
        </Menu>
      </Group>
    </Card.Section>
    {/* <WindIcon size={50}/>
    <TemperatureIcon size={50}/>
    <PressureIcon size={50}/>
    <VisibilityIcon size={50}/> */}
    <Text mt="sm" c="dimmed" size="sm">
      <Text span inherit c="var(--mantine-color-anchor)">
        200+ images uploaded
      </Text>{" "}
      since last visit, review them to select which one should be added to your
      gallery
    </Text>

    <Card.Section inheritPadding mt="sm" pb="md">
      <SimpleGrid cols={4}>
        {icons.map((genre, idx) => {
          const Icon = icons[idx];
          return <Center>
            <Icon size={40}/>
          </Center>
        })}
      </SimpleGrid>
    </Card.Section>
  </Card>
);

export default card;
