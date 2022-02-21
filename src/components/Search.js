import * as React from 'react';
import TextField from '@mui/material/TextField';
import Background from './img/cpt2.jpg'




function Search() {
    return (
        <div className='home-search' style={{
            height: '300px',
            paddingTop: '50px',
            backgroundImage: `url(${Background})`
        }}>
            <TextField id="outlined-uncontrolled"
                label="where to?" />
        </div>
    )
}

export default Search
