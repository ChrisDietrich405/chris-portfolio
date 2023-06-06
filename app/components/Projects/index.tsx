import React from 'react'
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';

import styles from "../../projects.module.css";

const Projects = () => {

    const Item = styled(Paper)(() => ({
        backgroundColor: '#98d6a9',
        padding: 8,
        textAlign: 'center',
        color: 'black',
      }));
  return (
    <Container>
         <Grid container spacing={4} className={styles.grid_container}>
            <Grid item xs={4}>
                <h4>Languages</h4>
              <Item elevation={3}>
              <div className={styles.credentials}>
                
             
                    <p>Javascript</p>
                  </div>
                  <div className={styles.credentials}>
                  
                  <p>Typescript</p>
                  </div>
              </Item>
            </Grid>
    
            <Grid item xs={4}>
            <h4>Frameworks</h4>
              <Item elevation={3}>  <div className={styles.credentials}>
                 
                  <p>React</p>
                  </div></Item>
            </Grid>
    
            <Grid item xs={4}>
            <h4>Other Stuff</h4>
              <Item elevation={3}><div className={styles.credentials}>
          
                    <p>Github</p>
                  </div></Item>
            </Grid>
    
          
    
          </Grid>
    </Container>
  )
}

export default Projects