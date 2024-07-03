import React from 'react'

import { Button, ButtonGroup,Typography } from '@mui/material';
import Container from '@mui/material/Container';
export default function Home() {
  return (
    <>
    <div>
        <ButtonGroup variant="contained" color="secondary" >
            <Button gutterBottom >Home</Button>
            <Button gutterBottom >About</Button>
            <Button gutterBottom >Plan Trip</Button>
            <Button gutterBottom >Our Services</Button>
            <Button gutterBottom >Review</Button>
        </ButtonGroup>
        
    </div>
    </>
  )
}


