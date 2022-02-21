import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import img from './img/zooatl.jpeg'


export default function MultiActionAreaCard() {
    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    height="200"
                    image={img}
                    alt="atl"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        Zoo Atlanta
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Zoo Atlanta is an Association of Zoos and Aquariums accredited zoological park in Atlanta, Georgia.
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button size="small" color="primary">
                    LEARN MORE
                </Button>
            </CardActions>
        </Card>
    );
}
