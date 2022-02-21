import { Container } from '@mui/material'
import React from 'react'
import Search from '../components/Search'
import Cards from '../components/Cards'
import Cards2 from '../components/Cards2'
import Cards3 from '../components/Cards3'
import Cards4 from '../components/Cards4'

import { Grid } from '@mui/material'



function Home() {
    return (
        <div>
            <div>
                <Search />
            </div>
            <h1>welcome to travelplans.</h1>
            <h2>here, there, everywhere...made easier!</h2>
            <h3>This Week's Featured City: Atlanta</h3>

            <Grid
                container
                direction="row"
                justifyContent="center"
                alignItems="center"
            >
                <Cards />
                <Cards2 />
                <Cards3 />
                <Cards4 />
            </Grid>
        </div>
    )
}

export default Home