import "./IndexCard.css";

// function IndexCard({ data }) {
//     return (
//         <div className="IndexCard">
//             <h1>{data.icao}</h1>
//             <p>Active runway: {data.activeRunway[0]}</p>
//             <p>Visibility: {data.vis}m</p>
//         </div>
//     );
// }

// export default IndexCard

import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export default function IndexCard({ data }) {
    return (
        <Box sx={{ minWidth: 100, borderRadius: "20px", margin: "10px" }}>
            <Card variant="outlined">
                <React.Fragment>
                    <CardContent>
                        <Typography
                            sx={{ fontSize: 14 }}
                            color="text.secondary"
                            gutterBottom
                        ></Typography>
                        <Typography variant="h5" component="div">
                            {data.icao}
                        </Typography>
                        <Typography sx={{ mb: 1.5 }} color="text.secondary">
                            {data.name}
                        </Typography>
                        <Typography variant="body2">
                            well meaning and kindly.
                            <br />
                            {'"a benevolent smile"'}
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="small">Learn More</Button>
                    </CardActions>
                </React.Fragment>
            </Card>
        </Box>
    );
}
