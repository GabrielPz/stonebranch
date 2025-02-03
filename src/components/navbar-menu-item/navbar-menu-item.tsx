import { NavbarItem } from '@/entities/navbar';
import { KeyboardArrowDown } from '@mui/icons-material';
import { Box, Button, Menu, MenuItem, Typography } from '@mui/material';
import { useState } from 'react';

export const NavbarMenuItem = (data: NavbarItem) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <Box >
      <Button
        endIcon={<KeyboardArrowDown sx={{
          color: data.onScroll ? 'primary.main' : 'white',
        }}/>}
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onMouseEnter={handleClick}
        sx={{
          textTransform: 'none',
          padding: '0',
        }}
      >
        <Typography
          sx={{
            fontWeight: 600,
            color: data.onScroll ? 'primary.main' : 'white',
          }}
        >
          {data.title}
        </Typography>
      </Button>
      <Menu
        onMouseLeave={handleClose}
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        {data.options.map((item) => (
          <MenuItem key={item.id} onClick={handleClose}>
            {item.title}
          </MenuItem>
        ))}
      </Menu>
    </Box>
  );
};
