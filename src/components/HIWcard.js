import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const bull = (
    <Box
        component="span"
        sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
    >
        •
    </Box>
);

export default function BasicCard() {
    return (
        <Card sx={{ minWidth: 275 }}>
            <CardContent>
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                    How it Works
                </Typography>
                <Typography variant="h5" component="div">
                    jour{bull}ney
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    noun
                </Typography>
                <Typography variant="body2">
                    a long and often difficult process of personal change and development.
                    <br />
                </Typography>
            </CardContent>
        </Card>
    );
}
