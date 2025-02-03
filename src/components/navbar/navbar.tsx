'use client';

import { PermPhoneMsgOutlined, Search } from '@mui/icons-material';
import {
  Avatar,
  Box,
  Container,
  IconButton,
  Typography,
  useScrollTrigger,
} from '@mui/material';
import Image from 'next/image';
import { NavbarMenuItem } from '../navbar-menu-item/navbar-menu-item';
import { navbarData } from '@/utils/navbar-data';

type NavbarProps = {
  window?: () => Window;
};

export function Navbar(props: NavbarProps) {
  const trigger = useScrollTrigger({
    target: props.window ? props.window() : undefined,
  });
  console.log(trigger);
  return (
    <>
      <Box height={120} />
      <Box
        sx={{
          top: 0,
          bgcolor: trigger ? 'white' : 'transparent',
          transition: 'all 0.3s',
          boxShadow: trigger ? '0px 10px 10px rgba(0, 0, 0, 0.1)' : 'none',
        }}
        position="fixed"
        zIndex={2}
        width="100%"
      >
        <Container
          sx={{
            display: 'flex',
            // bgcolor: !trigger ? 'red' : 'transparent',
            py: 2,
            alignItems: 'center',
          }}
          maxWidth="lg"
        >
          <Box sx={{}}>
            <Image
              src="/assets/sb-logo-stonebranch.svg"
              alt="logo"
              width={200}
              height={40}
              style={{
                objectFit: 'contain',
              }}
            />
          </Box>
          <Box flex={1} pl={5} display="flex" justifyContent="space-between">
            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              width={'100%'}
            >
              <Box display="flex" alignItems="center" pr={7} gap={2}>
                <IconButton sx={{
                  bgcolor: 'secondary.main',
                }}>
                  <Search
                    sx={{
                      fontSize: 26,
                      color: 'white',
                    }}
                  />
                </IconButton>
             
              </Box>
              <Box display="flex" alignItems="center" gap={2}>
                {navbarData.map((item) => (
                  <NavbarMenuItem
                    onScroll={trigger}
                    key={item.title}
                    title={item.title}
                    options={item.options}
                  />
                ))}
              </Box>
            </Box>
          </Box>
        </Container>
      </Box>
    </>
  );
}
