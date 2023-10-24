import { SideBar } from "./partials/sideBar";
import { Box } from "@mui/system";
import { Outlet } from "react-router-dom";
import { Grid } from "@mui/material";

export const MainLayout = () => {
    return (
        <Box style={{display:"flex"}} bgcolor="#E8e1e2">
            <SideBar/>
            <Grid container>
                <Grid item xs={12} maxHeight={"10"} sx={{pt: 8}}>
                    <Box style={{padding:"25px", height:"calc(100vh - 64px)"}}>
                        <Outlet/>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    )
}