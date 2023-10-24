import { Box, Button, Card, CardActions, CardContent, Typography } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom'

export const WhiskyCard = (props) => {
    const navigate = useNavigate();
    const whisky = props.whisky;
    return <Box>
        <Card sx={{ width: 300 , margin: 2 }}>
            <CardContent>
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                    {whisky.distillery}
                </Typography>
                <Typography variant="h5" component="div">
                    {whisky.name}
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    {`Year: ${whisky.year}`}
                </Typography>
                <Typography variant="body2">
                    {`Year bottled: ${whisky.yearBottled}`}
                    <br />
                    Region:  {whisky.region}
                </Typography>
                
            </CardContent>
            <CardContent style={{ color: "blue"}}>
                {
                    whisky.distilleryWebsite !== "N/A" || whisky.distilleryWebsite !== "" ?
                        <Link target="_blank" to={`${whisky.distilleryWebsite}`}>{whisky.distilleryWebsite}</Link> :
                        <Box>{whisky.distilleryWebsite}</Box>
                }
                
            </CardContent>
            <CardActions>
                <Button
                    size="small"
                    onClick={() => navigate("/whisky-details")}
                    >
                    Details
                </Button>
            </CardActions>
        </Card>
    </Box>;
};
