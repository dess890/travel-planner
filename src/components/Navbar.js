import React from 'react'
import { AppBar } from '@mui/material';
import { Toolbar } from '@mui/material';
import { Link } from 'react-router-dom';
import Logo from './img/pin.png'



function Navbar() {
    return (
        <div>
            <AppBar className='navbar' position="static" enableColorOnDark style={{ height: '50px' }}>
                <Toolbar> <img src={Logo} />
                    travelplans
                    <img src={Logo} />
                    <div className='navbar2'>
                        <Link className='link' to="/Home">Home</Link>
                        <Link className='link' to="/Results">Results</Link>
                        <Link className='link' to="/HowItWorks">How it Works</Link>
                    </div>
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default Navbar
