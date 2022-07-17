import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import FlashOnIcon from '@mui/icons-material/FlashOn';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import { Link, useNavigate } from 'react-router-dom';
import { GoogleButton } from '../Signin';
import { getAuth, GoogleAuthProvider, signOut } from 'firebase/auth'


const pages = ['Sign In', 'Sign Up'];
const settings = ['Profile', 'Dashboard', 'Logout'];

export const ResponsiveAppBar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);
  const auth = getAuth();
  const navigate = useNavigate();

  const signUsOut = async () =>{
    await signOut(auth)
    navigate('/')
}

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  if(auth.currentUser){
    return (
      <AppBar position="static">
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <FlashOnIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
            <Typography
              variant="h6"
              noWrap
              component='a'
              href = "/"
              sx={{
                mr: 2,
                display: { xs: 'none', md: 'flex' },
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.3rem',
                color: 'inherit',
                textDecoration: 'none',
              }}
            >
              DCU
            </Typography>
  
  
              {/* PROFILE HTML */}
            <Box sx={{ flexGrow: 0 }}>
              <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar alt="Jordy" src="/static/images/avatar/2.jpg" />
                </IconButton>
              </Tooltip>
              <Menu
                sx={{ mt: '45px' }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                <MenuItem key='profile' onClick={handleCloseUserMenu}>
                  <Typography textAlign="center" component = {Link} to={`#`} sx={{
                    textDecoration: 'none',
                    color: 'black',
                  }}>Profile</Typography>
                </MenuItem>
                <MenuItem key='profile' onClick={handleCloseUserMenu}>
                  <Typography textAlign="center" component = {Link} to={`/dashboard`} sx={{
                    textDecoration: 'none',
                    color: 'black',
                  }}>Dashboard</Typography>
                </MenuItem>
                <MenuItem key='profile' onClick={handleCloseUserMenu}>
                  <Typography textAlign="center" onClick = {signUsOut} sx={{
                    textDecoration: 'none',
                    color: 'black',
                  }}>Sign Out</Typography>
                </MenuItem>
              </Menu>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    )
  } else {
    return (
      <AppBar position="static">
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <FlashOnIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
            <Typography
              variant="h6"
              noWrap
              component='a'
              href = "/"
              sx={{
                mr: 2,
                display: { xs: 'none', md: 'flex' },
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.3rem',
                color: 'inherit',
                textDecoration: 'none',
              }}
            >
              DCU
            </Typography>
  
              {/* XS AND S HTML */}
  
              {/* html for small screen DROPDOWN MENU */}
            <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'left',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'left',
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: 'block', md: 'none' },
                }}
              >
                  <MenuItem  onClick={handleCloseNavMenu}>
                    <Typography textAlign="center" component = {Link} to = '/signin' sx ={{
                      textDecoration: 'none',
                      color: 'black'
                    }}>Sign In</Typography>
                  </MenuItem>
                  <MenuItem  onClick={handleCloseNavMenu}>
                    <Typography textAlign="center" component = {Link} to = '/signup' sx ={{
                      textDecoration: 'none',
                      color: 'black'
                    }}>Sign Up</Typography>
                  </MenuItem>
              </Menu>
            </Box>
            {/* MENU DROPDOWN on small screen stops here */}
  
            <FlashOnIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
            <Typography
              variant="h5"
              noWrap
              component="a"
              href=""
              sx={{
                mr: 2,
                display: { xs: 'flex', md: 'none' },
                flexGrow: 1,
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.3rem',
                color: 'inherit',
                textDecoration: 'none',
              }}
            >
              DCU
            </Typography>
            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
  
                <Button
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: 'white', display: 'block' }}
                  component = {Link}
                  to='/signin'
                >
                  Sign In
                </Button>
                <Button
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: 'white', display: 'block' }}
                  component = {Link}
                  to='/signup'
                >
                  Sign Up
                </Button>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    )
  };
};

