import { useEffect, useState } from "react";
import { styled, useTheme, Theme, CSSObject } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar, { AppBarProps } from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import LiquorIcon from '@mui/icons-material/Liquor';
import UndoIcon from '@mui/icons-material/Undo';
import StarIcon from '@mui/icons-material/Star';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { useLocation, useNavigate } from "react-router-dom";
import Button from '@mui/material/Button'


const drawerWidth = 240;

const openedMixin = (theme) => ({
    width: drawerWidth,
    transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
    }),
    overflowX: "hidden",
});

const closedMixin = (theme) => ({
    transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: "hidden",
    width: `calc(${theme.spacing(7)} + 1px)`,
    [theme.breakpoints.up("sm")]: {
        width: `calc(${theme.spacing(8)} + 1px)`,
    },
});

const DrawerHeader = styled("div")(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== "open",
    })(({ theme, open }) => ({
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(["width", "margin"], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(["width", "margin"], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
        }),
    }),   
    }));

const Drawer = styled(MuiDrawer, {
    shouldForwardProp: (prop) => prop !== "open",
    })(({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: "nowrap",
    boxSizing: "border-box",
    ...(open && {
        ...openedMixin(theme),
        "& .MuiDrawer-paper": openedMixin(theme),
    }),
    ...(!open && {
        ...closedMixin(theme),
        "& .MuiDrawer-paper": closedMixin(theme),
    }),
}));

export const SideBar = () => {
    const theme = useTheme();
    const [open, setOpen] = useState(false);
    const [pageTitle, setPageTitle] = useState("");
    const navigate = useNavigate();

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    const onclick = (to) => {
        navigate(to)
    }

    const location = useLocation();
    
    useEffect(() => {
        switch (location.pathname) {
            case "/inventory":
                setPageTitle("Inventory");
                break;
            case "/home":
            case "/":
                setPageTitle("Welcome");
                break;
            case "/empty-bottles":
                setPageTitle("Empty Bottles");
                break;
            case "/recommendations":
                setPageTitle("Recommendations");
                break;
            case "/login":
                setPageTitle("Login");
                break;
            case "/whisky-details":
                setPageTitle("Details");
                break;
            case "/account":
                setPageTitle("Account details");
                break;
            // case "/inventory":
            //     setPageTitle("Inventory");
            //     break;
            default:
                break;
        }
    }, [location.pathname]);

    return (
        <Box sx={{ display: "flex" }} >
        <CssBaseline />
        <AppBar position="fixed" open={open} style={{background: "#a16400"}}>
            <Toolbar>
                <IconButton
                    color="inherit"
                    aria-label="open drawer"
                    onClick={handleDrawerOpen}
                    edge="start"
                    sx={{
                    marginRight: 5,
                    ...(open && { display: "none" }),
                    }}
                >
                    <MenuIcon />
                </IconButton>
                <Typography variant="h6" noWrap component="div">
                    { pageTitle }
                </Typography>
            </Toolbar>
        </AppBar>
        <Drawer variant="permanent" open={open} >
            <DrawerHeader style={{ background: "#a16400"}}>
                <IconButton onClick={handleDrawerClose}>
                    {theme.direction === "rtl" ? (
                    <ChevronRightIcon />
                    ) : (
                    <ChevronLeftIcon />
                    )}
                </IconButton>
            </DrawerHeader>
            <Box style={{ background: "#db8902"}} flex={12}>
            <List>
                <ListItem 
                disablePadding sx={{ display: "block" }}
                onClick={() => onclick("/inventory")}
                >
                    <ListItemButton
                        sx={{
                            minHeight: 48,
                            justifyContent: open ? "initial" : "center",
                            px: 2.5,
                        }}
                    >
                        <ListItemIcon
                        sx={{
                            minWidth: 0,
                            mr: open ? 3 : "auto",
                            justifyContent: "center",
                        }}
                        >
                            <LiquorIcon/>
                        </ListItemIcon>
                        <ListItemText primary={"Inventory"} sx={{ opacity: open ? 1 : 0 }} />
                    </ListItemButton>
                </ListItem>
                <ListItem 
                    disablePadding sx={{ display: "block" }}
                    onClick={() => onclick("/empty-bottles")}
                    >
                    <ListItemButton
                        sx={{
                        minHeight: 48,
                        justifyContent: open ? "initial" : "center",
                        px: 2.5,
                        }}
                    >
                        <ListItemIcon
                        sx={{
                            minWidth: 0,
                            mr: open ? 3 : "auto",
                            justifyContent: "center",
                        }}
                        >
                            <UndoIcon/>
                        </ListItemIcon>
                        <ListItemText primary={"Empty bottles"} sx={{ opacity: open ? 1 : 0 }} />
                    </ListItemButton>
                </ListItem>
                <ListItem 
                    disablePadding sx={{ display: "block" }}
                    onClick={() => onclick("/recommendations")}
                    >
                    <ListItemButton
                        sx={{
                        minHeight: 48,
                        justifyContent: open ? "initial" : "center",
                        px: 2.5,
                        }}
                    >
                        <ListItemIcon
                        sx={{
                            minWidth: 0,
                            mr: open ? 3 : "auto",
                            justifyContent: "center",
                        }}
                        >
                            <StarIcon/>
                        </ListItemIcon>
                        <ListItemText primary={"Recommendations"} sx={{ opacity: open ? 1 : 0 }} />
                    </ListItemButton>
                </ListItem>
                <ListItem 
                        disablePadding 
                        sx={{ display: "block", position:'fixed', top: 'auto', bottom: 0 }}
                        onClick={() => onclick("/login")}
                    >
                        <ListItemButton
                            sx={{
                            minHeight: 48,
                            justifyContent: open ? "initial" : "center",
                            px: 2.5,
                            }}
                        >
                            <ListItemIcon
                            sx={{
                                minWidth: 0,
                                mr: open ? 3 : "auto",
                                justifyContent: "center",
                            }}
                            >
                                <AccountCircleIcon/>
                            </ListItemIcon>
                            <ListItemText primary={"Login"} sx={{ opacity: open ? 1 : 0 }} />
                        </ListItemButton>
                </ListItem>
            </List>
            
            </Box>
            
        </Drawer>
        </Box>
    );
};