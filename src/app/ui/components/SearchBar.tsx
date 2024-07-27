import { Center, Group, TextInput } from "@mantine/core";
import { SearchIcon } from "./icons";

export default function SearchBar() {
  return (
    <Center p={"20px"}>
      <Group
        pl={"20px"}
        pr={"20px"}
        w={"100%"}
        justify="space-between"
        style={{
          height: "60px",
          border: "1px solid red",
          "border-radius": "10px",
        }}
        gap={"xs"}
      >
        <SearchIcon size={30} />
        <TextInput variant="unstyled" placeholder="Search here" w={"80%"}/>
      </Group>
    </Center>
  );
}
