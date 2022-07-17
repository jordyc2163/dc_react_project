import React, { useState } from "react";
import {
    Drawer as MUIDrawer,
    ListItem,
    List,
    ListItemText,
    AppBar,
    Toolbar,
    IconButton,
    Typography,
    Divider,
    Button,
    CssBaseline,
    Box,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle
} from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import { ChevronRight, ChevronLeft } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { theme } from "../../Theme/themes";
import { DataTableHero, DataTableVillain, CharForm } from "../../components";
import { getAuth } from 'firebase/auth';

const drawerWidth = 240;

const myStyles = {
    appBar: {
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },
    appBarShift: {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: drawerWidth,
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    hide: {
        display: 'none',
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0
    },
    drawerPaper: {
        width: drawerWidth,
    },
    drawerHeader: {
        display: 'flex',
        width: drawerWidth,
        alignItems: 'center',
        padding: theme.spacing(0, 1),
        // necessary for content to be below app bar
        ...theme.mixins.toolbar,
        justifyContent: 'flex-end',
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        marginLeft: 0,
    },
    contentShift: {
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
        marginLeft: 0,
    },
    toolbar_button: {
        marginLeft: 'auto',
        backgroundColor: theme.palette.primary.contrastText
    }
};



export const Dashboard = () => {
    const navigate = useNavigate();
    const [open, setOpen] = useState(false);
    const [dialogOpen, setDialogOpen] = useState(false);
    const auth = getAuth();

    const handleDrawerOpen = () => {
        setOpen(true)
    }
    const handleDrawerClose = () => {
        setOpen(false)
    }

    const handleDialogOpen = () => {
        setDialogOpen(true)
    }
    const handleDialogClose = () => {
        setDialogOpen(false)
    }

    const itemsList = [
        {
            text: 'Home',
            onClick: () => navigate('/')
        },
        {
            text: 'Sign Out',
            onClick: () => navigate('/signin')
        }
    ]


    if(auth.currentUser){
    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar
                sx={open ? myStyles.appBarShift : myStyles.appBar}
                position="fixed"
            >
                <Toolbar sx={{ display: 'flex' }}>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        onClick={handleDrawerOpen}
                        edge="start"
                        sx={open ? myStyles.hide : myStyles.menuButton}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" noWrap> Dashboard</Typography>
                    <Button sx={myStyles.toolbar_button} onClick={handleDialogOpen}>Create New Character</Button>

                    <Dialog open={dialogOpen} onClose={handleDialogClose} aria-labelledby='form-dialog-title'>
                        <DialogTitle id="form-dialog-title">Add New Character</DialogTitle>
                        <DialogContent>
                            <DialogContentText>Fill Out All Fields</DialogContentText>
                            <CharForm />
                        </DialogContent>
                        <DialogActions>
                            <Button onClick={handleDialogClose} color="primary">Cancel</Button>
                        </DialogActions>
                    </Dialog>
                </Toolbar>
            </AppBar>
            <MUIDrawer
                sx={open ? myStyles.drawer : myStyles.hide}
                variant="persistent"
                anchor="left"
                open={open}
                style={{ width: drawerWidth }}
            >
                <Box
                    sx={myStyles.drawerHeader}>
                    <IconButton onClick={handleDrawerClose}>
                        {theme.direction === 'ltr' ? <ChevronLeft /> : <ChevronRight />}
                    </IconButton>
                </Box>
                <Divider />
                <List>
                    {itemsList.map((item) => {
                        const { text, onClick } = item;
                        return (
                            <ListItem button key={text} onClick={onClick}>
                                <ListItemText primary={text} />
                            </ListItem>
                        );
                    })}
                </List>
            </MUIDrawer>
            <Box sx={myStyles.content} >
                <Box sx={myStyles.drawerHeader} />
                <DataTableHero />
            </Box>
            <Box sx={myStyles.content} >
                <Box sx={myStyles.drawerHeader} />
                <DataTableVillain />
            </Box>
        </Box>
    )} else {
        return (
            <h1>You must be Signed In</h1>
        )
    }
}