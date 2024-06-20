"use client"
import { ScrollArea } from "@mantine/core";
import card from "@/components/card";

export default function IndexScrollContainer() {
  return (
  <ScrollArea
    // bg="var(--mantine-color-body)"
    p={"20px"}
    w={"100%"}
    h={"100vh"}
    // justify="center"
    // gap="md"
    type="never"
  >
    {card}
    {card}
    {card}
  </ScrollArea>
  )
}
