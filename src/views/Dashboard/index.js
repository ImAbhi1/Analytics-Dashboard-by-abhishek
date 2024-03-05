import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import ImageRoundedIcon from '@mui/icons-material/ImageRounded';
import TableRowsRoundedIcon from '@mui/icons-material/TableRowsRounded';
import DialerSipRoundedIcon from '@mui/icons-material/DialerSipRounded';

import Inbox from 'views/Inbox';
import Scroller from 'views/Scroller';
import Lists from 'views/Lists';
import Footer from 'views/Footer';
import { useState } from 'react';
const drawerWidth = 240;

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen
        }),
        marginLeft: 0
    })
}));

const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open'
})(({ theme, open }) => ({
    transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen
    }),
    ...(open && {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: `${drawerWidth}px`,
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen
        })
    })
}));

const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end'
}));

const Dashboard = () => {
    const theme = useTheme();
    const [open, setOpen] = React.useState(false);
    const [selectedContent, setSelectedContent] = useState('Analytics');

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    const handleDrawerItemClick = (item) => {
        setSelectedContent(item);
    };
    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar position="fixed" open={open}>
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        onClick={handleDrawerOpen}
                        edge="start"
                        sx={{ mr: 2, ...(open && { display: 'none' }) }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h5" noWrap component="div">
                        Analytics Dashboard
                    </Typography>
                </Toolbar>
            </AppBar>
            <Drawer
                sx={{
                    width: drawerWidth,
                    flexShrink: 0,
                    '& .MuiDrawer-paper': {
                        width: drawerWidth,
                        boxSizing: 'border-box'
                    }
                }}
                variant="persistent"
                anchor="left"
                open={open}
            >
                <DrawerHeader>
                    <IconButton onClick={handleDrawerClose}>
                        {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
                    </IconButton>
                </DrawerHeader>
                <Divider />
                <List>
                    {['Analytics', 'Data Images', 'Tables', 'Footer'].map((text, index) => (
                        <ListItem key={text} disablePadding>
                            <ListItemButton
                                onClick={() => handleDrawerItemClick(text)}
                                sx={{
                                    display: 'flex',
                                    color: selectedContent === text ? 'white' : 'black',
                                    backgroundColor: selectedContent === text ? '#017FFA' : 'transparent'
                                }}
                            >
                                <ListItemIcon
                                    sx={{
                                        color: selectedContent === text ? 'white' : 'black'
                                    }}
                                >
                                    {/* {index % 2 === 0 ? <InboxIcon /> : <MailIcon />} */}
                                    {index === 0 ? (
                                        <InboxIcon />
                                    ) : index === 1 ? (
                                        <ImageRoundedIcon />
                                    ) : index === 2 ? (
                                        <TableRowsRoundedIcon />
                                    ) : index === 3 ? (
                                        <DialerSipRoundedIcon />
                                    ) : null}
                                </ListItemIcon>
                                <ListItemText primary={text} />
                            </ListItemButton>
                        </ListItem>
                    ))}
                </List>
                <Divider />
            </Drawer>

            <Main open={open}>
                <DrawerHeader />
                {selectedContent === 'Analytics' && <Inbox />}
                {selectedContent === 'Data Images' && <Scroller />}
                {selectedContent === 'Tables' && <Lists />}
                {selectedContent === 'Footer' && <Footer />}
            </Main>
        </Box>
    );
};
export default Dashboard;
