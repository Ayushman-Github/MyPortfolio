import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import SearchIcon from '@mui/icons-material/Search';
import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import Login from "../Buttons/Login"
import { Link } from "react-router-dom"
import { useSelector } from 'react-redux';
import Badge from '@mui/material/Badge';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Signup from "../Buttons/Signup"



const pages = [
    {
        link: "",
        name: "Home"
    },
    {
        link: "Mens",
        name: "Mens"
    },
    {
        link: "Womens",
        name: "Womens"
    },
    {
        link: "Kids",
        name: "Kids"
    },
    {
        link: "Accessories",
        name: "Accessories"
    },
    {
        link: "Electronics",
        name: "Electronics"
    }

]

const ResponsiveAppBar = () => {


    const getdata = useSelector((state) => state.cartreducer.carts);
    // console.log(getdata)


    const [anchorElNav, setAnchorElNav] = React.useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const Search = styled('div')(({ theme }) => ({
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: alpha(theme.palette.common.white, 0.15),
        '&:hover': {
            backgroundColor: alpha(theme.palette.common.white, 0.15),
        },
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing(1),
            width: 'auto',
        },
    }));

    const SearchIconWrapper = styled('div')(({ theme }) => ({
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'left',
    }));
    const StyledInputBase = styled(InputBase)(({ theme }) => ({
        color: 'inherit',
        '& .MuiInputBase-input': {
            padding: theme.spacing(1, 1, 1, 0),
            // vertical padding + font size from searchIcon
            paddingLeft: `calc(1em + ${theme.spacing(4)})`,
            transition: theme.transitions.create('width'),
            width: '100%',
            [theme.breakpoints.up('sm')]: {
                width: '12ch',
                '&:focus': {
                    width: '20ch',
                },
            },
        },
    }));

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => {
        setOpen(open);
    };

    const StyledBadge = styled(Badge)(({ theme }) => ({
        '& .MuiBadge-badge': {
            right: -3,
            top: 13,
            border: `2px solid ${theme.palette.background.paper}`,
            padding: '0 4px',
        },
    }));


    return (
        <AppBar position="sticky" style={{ backgroundColor: "white", boxShadow: "none" }}>



            <Container maxWidth="xl">
                <Toolbar disableGutters>



                    {/* LARGE SCREEN VIEW================================================================================ */}

                    <Typography variant="h5"
                        sx={{
                            mr: 4,
                            display: {
                                xs: 'none',
                                md: 'flex'
                            },
                            fontWeight: 700,
                            color: '#1A6EFF',
                            textDecoration: 'none',
                        }}>
                        Quickart
                    </Typography>

                    {/* SMALL SCREEN VIEW=========================================================================================== */}

                    {/* CATAGORY SECTION ON SMALL SCREEN VIEW */}

                    <Box
                        sx={{
                            flexGrow: 1,
                            display: {
                                xs: 'flex',
                                md: 'none'
                            }
                        }}>

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
                            }} >
                            {pages.map((page, index) => (
                                <MenuItem key={index} onClick={handleCloseNavMenu}>
                                    <Typography textAlign="center">
                                        <Link to={`/${page.link}`} style={{ textDecoration: "none", color: "black" }}>{page.name}</Link>
                                    </Typography>
                                </MenuItem>
                            ))}
                            <div>
                                <button style={{ border: "none" }}>
                                    <Signup />
                                </button>
                            </div>
                        </Menu>
                    </Box>


                    <Typography
                        variant="h5"
                        sx={{
                            mr: 2,
                            display: {
                                xs: 'flex',
                                md: 'none'
                            },
                            flexGrow: 0.2,
                            fontWeight: 700,
                            color: 'black',
                            textDecoration: 'none',
                            justifyContent: 'center'
                        }}
                    >
                        Quickart
                    </Typography>

                    <Box
                        sx={{
                            flexGrow: 1,
                            display: {
                                xs: 'flex',
                                md: 'none'
                            }
                        }}>
                        <Search style={{ backgroundColor: "#ECECEC", color: "black" }}>
                            <SearchIconWrapper>
                                <SearchIcon />
                            </SearchIconWrapper>
                            <StyledInputBase placeholder="Search…" inputProps={{ 'aria-label': 'search' }} />
                        </Search>
                    </Box>


                    {/* LARGE SCREEN VIEW=========================================================================================== */}






                    <Box
                        sx={{
                            flexGrow: 1,
                            display: { xs: 'none', md: 'flex' }
                        }}
                    >
                        {pages.map((page, index) => (
                            <Button key={index} onClick={handleCloseNavMenu} sx={{ my: 2, color: 'black', display: 'block', }} >
                                <Link to={`/${page.link}`} className="navbar-link" style={{ color: "#1A6EFF" }} >{page.name}</Link>
                            </Button>
                        ))}
                    </Box>

                    <Box
                        sx={{
                            display: {
                                xs: 'none',
                                md: 'flex'
                            }
                        }}>
                        <Search style={{ backgroundColor: "#1A6EFF", color: "black" }}>
                            <SearchIconWrapper>
                                <SearchIcon />
                            </SearchIconWrapper>
                            <StyledInputBase placeholder="Search…" inputProps={{ 'aria-label': 'search' }} />
                        </Search>
                    </Box>

                    <Link to="/Cart">
                        <IconButton aria-label="cart" style={{ paddingLeft: "25px", color: "#1A6EFF" }}>
                            <StyledBadge badgeContent={getdata.length} color="primary">
                                <ShoppingCartIcon />
                            </StyledBadge>
                        </IconButton>
                    </Link>

                    {/* LARGE SCREEN VIEW=============================================================== */}

                    <Box
                        sx={{
                            display: {
                                xs: 'none',
                                md: 'flex'
                            }
                        }}
                    >
                        <Login onClick={handleOpen} />
                    </Box>


                    {/* MOBILE SCREEN VIEW======================================================= */}

                    <Box
                        sx={{
                            flexGrow: 1,
                            display: {
                                xs: 'flex',
                                md: 'none'
                            }
                        }}>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                            style={{ color: "black" }}
                        >
                            <MenuIcon />
                        </IconButton>
                    </Box>



                </Toolbar>
            </Container>
        </AppBar>

    );
};
export default ResponsiveAppBar;



