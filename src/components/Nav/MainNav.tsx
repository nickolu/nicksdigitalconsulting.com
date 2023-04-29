// components/Navbar.tsx
import React from "react";
import Link from "next/link";
import {
  Box,
  List,
  styled,
} from "@mui/material";
import "@/components/Nav/MainNav.module.scss";

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
    <Box className="MainNav" display="flex" justifyContent={"space-between"}>
      {navItems.map((item, index) => (
        <Box key={index}>
          <Box
            p={2}
            mt={-3}
            sx={{
              fontSize: "0.7rem",
              textDecoration: "none",
              "&:visited": {
                color: "black",
              },
              "&:active": {
                color: "black",
              },
              "&:hover": {
                textDecoration: "underline",
              },
            }}
          >
            <Link
              style={{ color: "inherit", textDecoration: "none" }}
              className="MainNav__Link"
              href={item.href}
            >
              {item.label}
            </Link>
          </Box>
        </Box>
      ))}
    </Box>
  );
};

export default Navbar;
