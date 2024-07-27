import { Stack } from "@mantine/core";
import SearchBar from "../ui/components/SearchBar";
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    // Wrapper to keep the whole layout to size of screen
    <Stack h={"100vh"} p={0} gap={0}>
      <SearchBar />
      {children}
    </Stack>
  );
}
