import { SideBar } from "./partials/sideBar";
import { Box } from "@mui/system";
import { Outlet } from "react-router-dom";
import { Grid } from "@mui/material";

export const MainLayout = () => {
    return (
        <Box style={{display:"flex", background: "#fceed7", height:"100vh"}} >
            <SideBar/>
            <Grid container>
                <Grid item xs={12} sx={{pt: 8}}>
                    <Box style={{padding:"25px", maxHeight:"calc(100vh - 64)", maxWidth:"calc(100vw-25px)"}}>
                        <Outlet/>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    )
}