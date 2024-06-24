import {
  Card,
  Group,
  Text,
  SimpleGrid,
  Stack,
  Button,
} from "@mantine/core";
import {
  PressureIcon,
  TemperatureIcon,
  VisibilityIcon,
  WindIcon,
} from "@/components/icons";
import LikeButton from "./LikeButton";

const icons = [PressureIcon, TemperatureIcon, VisibilityIcon, WindIcon];
const texts = ["1313 hPa", "28 °C", "6000m", "30kt @ 040°"]

const info = [
  {
    image:
    "https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-1.png",
    text: "Picture 1",
  },
  {
    image:
    "https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-2.png",
    text: "Picture 2",
  },
  {
    image:
    "https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-3.png",
    text: "Picture 3",
  },
  {
    image:
    "https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-5.png",
    text: "Picture 4",
  },
];

export default function WeatherCard() {
  return <>
  <Card withBorder shadow="sm" radius="md" mb={"20px"}>
    <Card.Section withBorder inheritPadding py="xs">
      <Group justify="space-between">
        <Stack gap={0}>
        <Text fw={500}>Moorabbin Airport</Text>
        <Text c="dimmed">YMMB</Text>
        </Stack>
        <LikeButton />
      </Group>
    </Card.Section>

    <Card.Section inheritPadding p="xs">
      <SimpleGrid cols={4}>
        {icons.map((genre, idx) => {
          const Icon = icons[idx];
          const text = texts[idx]
          return (
              <Stack align="center" gap="xs">
                <Icon size={35} />
                <Text size="xs" span >{text}</Text>
              </Stack>
          );
        })}
      </SimpleGrid>
    </Card.Section>
  </Card>
  </>
};