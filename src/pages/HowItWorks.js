import * as React from 'react';
import HIWcard from '../components/HIWcard'
import Columns from '../components/Columns'
import { Grid } from '@mui/material';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { grid } from '@mui/system';
import img from '../components/img/roadmap.png'

const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

function HowItWorks() {
    return (
        <div>
            <HIWcard />
            <Columns />
            <div className='hiwdiv'>
                <div className='div1'>
                    <h1>
                        Discover new places.
                    </h1>
                    <Grid className='div1' item xs={4}>
                        <Item style={{ textAlign: 'center' }}>Instantly find top-rated attractions nearby, even while you’re on the go: Download soon our app for iOS or Android in late October 2022!</Item>
                    </Grid>
                    <h1>
                        Plan out your trips thoroughly.
                    </h1>
                    <Grid item xs={4}>
                        <Item style={{ textAlign: 'center' }}>
                            Create a Schedule
                            and Add Trip Notes
                            Keep track of your time and trip details, not
                            leaving either to chance. Adding trip notes to your
                            plan is a simple way to keep yourself reminded of
                            the little things while on the go. </Item>
                    </Grid>
                    <h1>
                        Give me your monies.
                    </h1>
                    <Grid item xs={4}>
                        <Item style={{ textAlign: 'center' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </Item>
                    </Grid>
                </div>
                {/* <div className='imgforhiw'>
                    <img src={img} style={{ width: '300px', height: '300px' }}></img>
                </div> */}
                <div className='div2'>
                    <h1>Technologies used.</h1>
                    <Grid item xs={4}>
                        <Item style={{ textAlign: 'center' }}>
                            The Google Maps API is one of those clever bits of Google technology that helps you take the power of Google Maps and put it directly on your own site.
                            It lets you add relevant content that is useful to your visitors and customize the look and feel of the map to fit with the style of your site.
                            <br />
                            <br />
                            We work alongside with the Google API to reate better experiences and improve operations with rich,
                            detailed geospatial data, helpful mapping tools, and industry-leading reliability.
                            <br />
                            <br />
                            Help users discover the world with rich place data for over 200 million points of interest.
                            Enable them to find specific places using phone numbers, addresses, and more.
                            <br />
                            <br />
                            Our services also return a list of places like local businesses and points of interest based on user’s location,
                            text query, phone number, or search string. Includes Find Place.
                            <br />
                            <br />
                        </Item>
                    </Grid>
                </div>
            </div>
        </div>
    )
}

export default HowItWorks