import React from 'react';
import {Typography} from "@mui/material";

function Error(props) {
    return (
        <div>
            <Typography variant={'h1'} textAlign={'center'} color='error' >404</Typography>
        </div>
    );
}

export default Error;