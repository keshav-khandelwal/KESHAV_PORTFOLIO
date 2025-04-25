
import React from "react";
import { motion } from "framer-motion";
import { Moon, Sun, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = ({ theme, toggleTheme }) => {
  const scrollToSection = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed w-full top-0 z-50 bg-background/80 backdrop-blur-sm border-b"
    >
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-xl font-bold gradient-text"
        >
          Portfolio
        </motion.div>

        <div className="hidden md:flex items-center gap-6">
          <Button variant="ghost" onClick={() => scrollToSection("hero")}>
            Home
          </Button>
          <Button variant="ghost" onClick={() => scrollToSection("about")}>
            About
          </Button>
          <Button variant="ghost" onClick={() => scrollToSection("projects")}>
            Projects
          </Button>
          <Button variant="ghost" onClick={() => scrollToSection("achievements")}>
            Achievements
          </Button>
          <Button variant="ghost" onClick={() => scrollToSection("contact")}>
            Contact
          </Button>
          <Button variant="outline" onClick={toggleTheme}>
            {theme === "light" ? <Moon size={20} /> : <Sun size={20} />}
          </Button>
        </div>

        <Button variant="ghost" className="md:hidden">
          <Menu size={24} />
        </Button>
      </div>
    </motion.nav>
  );
};

export default Navbar;
