"use client";
import { ScrollArea } from "@mantine/core";
import WeatherCard from "./WeatherCard";

export default function IndexScrollContainer() {
  return (
    <ScrollArea
      // bg="var(--mantine-color-body)"
      p={"20px"}
      w={"100%"}
      h={"auto"}
      type="never"
    >
      {[...Array(5).keys()].map(() => (
        <WeatherCard />
      ))}
    </ScrollArea>
  );
}
