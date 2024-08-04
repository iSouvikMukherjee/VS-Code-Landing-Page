import { Moon, Sun } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { useTheme } from "@/components/theme-provider"
import { useEffect, useState } from "react";

export function ModeToggle() {

//   const { setTheme } = useTheme()

const { theme, setTheme } = useTheme();
const [currentTheme, setCurrentTheme] = useState(theme);

useEffect(() => {
  setCurrentTheme(theme);
}, [theme]);

const toggleTheme = () => {
  const newTheme = currentTheme === "dark" ? "light" : "dark";
  setTheme(newTheme);
  setCurrentTheme(newTheme);
};

  return (
    // <DropdownMenu>
    //   <DropdownMenuTrigger asChild>
    //     <Button variant="myVariant" size="icon">
    //       <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-0 transition-all dark:-rotate-90 dark:scale-100" />
    //       <Moon className="absolute h-[1.2rem] w-[1.2rem] -rotate-90 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
    //       <span className="sr-only">Toggle theme</span>
    //     </Button>
    //   </DropdownMenuTrigger>
    //   <DropdownMenuContent align="end">
    //     <DropdownMenuItem onClick={() => setTheme("light")}>
    //       Light
    //     </DropdownMenuItem>
    //     <DropdownMenuItem onClick={() => setTheme("dark")}>
    //       Dark
    //     </DropdownMenuItem>
    //     <DropdownMenuItem onClick={() => setTheme("system")}>
    //       System
    //     </DropdownMenuItem>
    //   </DropdownMenuContent>
    // </DropdownMenu>

    <Button variant="myVariant" size="icon" onClick={toggleTheme}>
      {currentTheme === "dark" ? (
        <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-0 transition-all dark:-rotate-90 dark:scale-100" />
      ) : (
        <Moon className="absolute h-[1.2rem] w-[1.2rem] -rotate-90 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
      )}
      <span className="sr-only">Toggle theme</span>
    </Button>
  )
}
