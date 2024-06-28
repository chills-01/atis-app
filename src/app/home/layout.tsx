import { Container, Group } from "@mantine/core";
import { SearchIcon } from "../ui/components/icons";
import SearchBar from "../ui/components/SearchBar";
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
    <SearchBar />
      {children}
    </>
  );
}
