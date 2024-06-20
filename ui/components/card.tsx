import {
  Card,
  Group,
  Text,
  Menu,
  ActionIcon,
  Image,
  SimpleGrid,
  rem,
} from "@mantine/core";
import { IconDots, IconEye, IconFileZip, IconTrash } from "@tabler/icons-react";

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

    <Text mt="sm" c="dimmed" size="sm">
      <Text span inherit c="var(--mantine-color-anchor)">
        200+ images uploaded
      </Text>{" "}
      since last visit, review them to select which one should be added to your
      gallery
    </Text>

    <Card.Section inheritPadding mt="sm" pb="md">
      <SimpleGrid cols={4}>
        {info.map((info) => {
          const {image, text} = info;
          // {image, text} = info;
          return <div>
          <Image src={image} key={image} radius="sm" />
          <Text>{text}</Text></div>
        })}
      </SimpleGrid>
    </Card.Section>
  </Card>
);

export default card;
