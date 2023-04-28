// components/Navbar.tsx
import React from "react";
import Link from "next/link";
import { Box, List, ListItem, Theme, styled } from "@mui/material";
import "@/components/Nav/MainNav.module.scss";
import { ThemeOptions } from "@mui/system";

type NavItem = {
  href: string;
  label: string;
};

const navItems: NavItem[] = [
  { href: "/", label: "Home" },
  { href: "/contact", label: "Contact" },
  { href: "/services", label: "Services" },
];

const MenuList = styled(List)(() => ({
  "@media screen and (max-width: 599px)": {
    display: "flex",
  },
}));

const Navbar: React.FC = () => {
  return (
    <Box className="MainNav">
      <MenuList className="MainNav__ul">
        {navItems.map((item, index) => (
          <ListItem key={index} className="MainNav__li">
            <Link href={item.href}>{item.label}</Link>
          </ListItem>
        ))}
      </MenuList>
    </Box>
  );
};

export default Navbar;
