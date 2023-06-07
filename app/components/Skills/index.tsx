"use client"
import React from 'react'
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import { IoLogoJavascript,} from "react-icons/io";
import {SiTypescript} from "react-icons/si"
import {FaReact} from "react-icons/fa"
import {FaGithubSquare} from "react-icons/fa"
import {FaHtml5} from "react-icons/fa"
import {FaCss3Alt} from "react-icons/fa"
import {FaBootstrap} from "react-icons/fa"


import styles from "../../skills.module.css";
// import {
    // CgArrowUpR,
    // FaReact,
    // FaBootstrap,
    // FaHtml5,
    // FaCss3Alt,
    // FaSass,
    // FaGithubSquare,

    // SiVisualstudio,
    // SiFigma,
    // SiFirebase,
    // SiPostman,
    // SiRedux,
    // SiTypescript,
    // ImNext,
//   } from "react-icons/all";

const Skills = () => {
  
    const Item = styled(Paper)(() => ({
        backgroundColor: '#98d6a9',
        padding: 8,
        textAlign: 'center',
        color: 'black',
      }));
    
      return (
        <>
        <Container>

    <h1 className={styles.title}>Skills</h1>
          <Grid container spacing={4} className={styles.grid_container}>
            <Grid item xs={12} md={4} >
                <h4>Languages</h4>
              <Item elevation={3}>
              <div className={styles.credentials}>
                
                   
                    <IoLogoJavascript/>
                    <p>Javascript</p>
                  </div>
                  <div className={styles.credentials}>
                  <SiTypescript/>
                  <p>Typescript</p>
                  </div>
                  <div className={styles.credentials}>
                  <FaHtml5 color="#e44d26" />
                  <p>HTML</p>
                  </div>
                  <div className={styles.credentials}>
                  <FaCss3Alt color="#264de4" />
                  <p>CSS</p>
                  </div>

               
                  
              </Item>
            </Grid>
            <Grid item xs={12} md={4} >
                <h4>Frameworks</h4>
              <Item elevation={3}>
              <div className={styles.credentials}>
                
                   
                  <FaReact color="#61dafb"/>
                    <p>React</p>
                  </div>
                  <div className={styles.credentials}>
                  <FaBootstrap color="#080135" />
                  <p>Bootstrap</p>
                  </div>
                  <div className={styles.credentials}>
                  <FaHtml5 color="#e44d26" />
                  <p>HTML</p>
                  </div>
                  <div className={styles.credentials}>
                  <FaCss3Alt color="#264de4" />
                  <p>CSS</p>
                  </div>

               
                  
              </Item>
            </Grid>

           
         
            <Grid item xs={12} md={4} >
                <h4>Languages</h4>
              <Item elevation={3}>
              <div className={styles.credentials}>
                
                   
              
              <FaGithubSquare color="#000000" />
                    <p>Github</p>
                  </div>
                  
                  <div className={styles.credentials}>
                  <SiTypescript/>
                  <p>Typescript</p>
                  </div>
                  <div className={styles.credentials}>
                  <FaHtml5 color="#e44d26" />
                  <p>HTML</p>
                  </div>
                  <div className={styles.credentials}>
                  <FaCss3Alt color="#264de4" />
                  <p>CSS</p>
                  </div>

               
                  
              </Item>
            </Grid>
           
           
    
            <Grid item xs={12} md={4}>
            <h4>Other Stuff</h4>
             
            </Grid>
            
    
          
    
          </Grid>
        </Container>
        </>
  )
}

export default Skills