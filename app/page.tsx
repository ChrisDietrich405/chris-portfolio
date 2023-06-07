//https://brittanychiang.com/#projects
"use client"
import React from 'react'
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';

import Sidebar from './components/Sidebar'
import Main from './components/Main'

const HomePage = () => {
  return (
    <Container className="app-container">
      <Grid container>

      <Grid item>

      <Sidebar/>
      </Grid>
      <Grid item>

      <Main/>
      </Grid>
      </Grid>
    </Container>
  )
}

export default HomePage