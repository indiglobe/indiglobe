import { cn } from "@/lib/utils";
import { NavBar } from "./navbar";

export default function Header() {
  return (
    <header className={cn(`py-2`)}>
      <NavBar />
    </header>
  );
}
