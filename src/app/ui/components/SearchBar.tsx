import { Box, Center, Group, TextInput } from "@mantine/core";
import { SearchIcon } from "./icons";

export default function SearchBar() {
  return (
    <Center p={"20px"} pt={"30px"}>
      <Group
        pl={"20px"}
        pr={"20px"}
        w={"100%"}
        justify="space-between"
        bg={"var(--mantine-color-gray-1)"}
        style={{
          height: "60px",
          border: "1px solid white",
          "border-radius": "10px",
        }}
        gap="10px"
      >
        <SearchIcon size={28} />
        <TextInput
          size="md"
          variant="unstyled"
          placeholder="Search here"
          w={"80%"}
        />
      </Group>
    </Center>
  );
}
