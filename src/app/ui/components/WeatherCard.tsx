import { Card, Group, Text, SimpleGrid, Stack } from "@mantine/core";
import {
  PressureIcon,
  TemperatureIcon,
  VisibilityIcon,
  WindIcon,
} from "@/components/icons";
import LikeButton from "./LikeButton";
import { WeatherReport } from "@/app/lib/definitions";

type Wind = {
  speed: number;
  direction: string;
};

// const icons = [PressureIcon, TemperatureIcon, VisibilityIcon, WindIcon];
// const texts = ["1313 hPa", "28 °C", "6000m", "30kt @ 040°"];

const formatQnh = (qnh: number) => {
  return `${qnh} hPa`;
};
const formatTemperature = (temperature: number) => {
  return `${temperature} °C`;
};
const formatVisibility = (visibility: number) => {
  return `${visibility} m`;
};
const formatWind = (wind: Wind) => {
  return `${wind.speed} kt @ ${wind.direction}°`;
};

export default function WeatherCard({ data }: { data: WeatherReport }) {
  return (
    <>
      <Card withBorder radius="md" mb={"20px"}>
        <Card.Section withBorder inheritPadding py="xs">
          <Group justify="space-between">
            <Stack gap={0}>
              <Text fw={500}>{data.name}</Text>
              <Text c="dimmed">{data.icao}</Text>
            </Stack>
            <LikeButton />
          </Group>
        </Card.Section>

        <Card.Section inheritPadding p="xs">
          <SimpleGrid cols={4}>
            <Stack align="center" gap="xs">
              <PressureIcon size={35} />
              <Text size="xs" span>
                {formatQnh(data.qnh)}
              </Text>
            </Stack>
            <Stack align="center" gap="xs">
              <TemperatureIcon size={35} />
              <Text size="xs" span>
                {formatTemperature(data.temperature)}
              </Text>
            </Stack>
            <Stack align="center" gap="xs">
              <VisibilityIcon size={35} />
              <Text size="xs" span>
                {formatVisibility(data.visibility)}
              </Text>
            </Stack>
            <Stack align="center" gap="xs">
              <WindIcon size={35} />
              <Text size="xs" span>
                {/* TODO this is hacky, instead we want to validate on write 
                so that we know exactly what data we get back */}
                {data.wind.speed ? formatWind(data.wind) : "None"}
              </Text>
            </Stack>
          </SimpleGrid>
        </Card.Section>
      </Card>
    </>
  );
}
