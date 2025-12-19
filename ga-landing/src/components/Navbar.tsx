import { AppBar, Toolbar, Typography, Box, Button, IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';

const Navbar = () => {
  return (
    <AppBar position="static" color="transparent" elevation={0} sx={{ borderBottom: '1px solid #e0e0e0' }}>
      <Toolbar sx={{ justifyContent: 'space-between', minHeight: '64px' }}>
        {/* Logo */}
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
            {/* Google Logo Placeholder - usually an image or stylized text */}
            <Typography variant="h6" component="div" sx={{ color: '#5f6368', fontWeight: 'bold' }}>
                Google
            </Typography>
        </Box>

        {/* Navigation Links */}
        <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 3 }}>
          {['Home', 'About', 'Services', 'Contact'].map((item) => (
            <Button key={item} color="inherit" sx={{ textTransform: 'none', color: '#5f6368', fontSize: '14px' }}>
              {item}
            </Button>
          ))}
        </Box>

        {/* Icons */}
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <IconButton aria-label="search" color="default">
            <SearchIcon sx={{ color: '#5f6368' }} />
          </IconButton>
          <IconButton aria-label="cart" color="default">
             <ShoppingBagOutlinedIcon sx={{ color: '#5f6368' }} />
          </IconButton>
          <IconButton aria-label="profile" color="default">
            <AccountCircleOutlinedIcon sx={{ color: '#5f6368' }} />
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
