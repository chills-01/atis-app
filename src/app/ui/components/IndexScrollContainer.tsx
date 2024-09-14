"use client";
import { getContrastColor, ScrollArea } from "@mantine/core";
import WeatherCard from "./WeatherCard";
import { WeatherReport } from "@/app/lib/definitions";

export default function IndexScrollContainer({ data }: { data: any }) {
  return (
    <ScrollArea
      // bg="var(--mantine-color-body)"
      p={"20px"}
      w={"100%"}
      h={"auto"}
      type="never"
    >
      {data.map((obj: WeatherReport) => (
        <WeatherCard data={obj} />
      ))}
    </ScrollArea>
  );
}
