// components/Navbar.tsx
import React from 'react';
import Link from 'next/link';
import { Box, List, ListItem } from '@mui/material';

type NavItem = {
  href: string;
  label: string;
};

const navItems: NavItem[] = [
  { href: '/', label: 'Home' },
  { href: '/contact', label: 'Contact' },
  { href: '/services', label: 'Services' },
];

const Navbar: React.FC = () => {
  return (
    <Box>
      <List>
        {navItems.map((item, index) => (
          <ListItem key={index}>
            <Link href={item.href} >
              
                {item.label}
              
            </Link>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default Navbar;
