"use client"
import React from 'react'
import Image from "next/image"
import Link from "next/link"
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import {BsArrowUpRight} from "react-icons/bs"

import styles from "../../projects.module.css";

const Projects = () => {

    const Item = styled(Paper)(() => ({
        backgroundColor: '#98d6a9',
        padding: 8,
        textAlign: 'center',
        color: 'black',
      }));
  return (
    <Container className={styles.container}>
                <h2 className={styles.title}>Projects</h2>
                <p>Click thumbnail to navigate to the website and the arrow to navigate to the Github repo</p>
         <Grid container>
          <Grid item>
            
          </Grid>

         </Grid>
         
         
         
         
         
         <div className={styles.grid_container}>
           
              <div className={styles.credentials}>
              <Link href="https://gcshop-b5488.web.app/"
              
              target="_blank"
            >
              <Image
      src="/images/cgshop.png"
      width={150}
      height={150}
      alt="Picture of the author"
      />
      </Link>
             <div>
                    <div className={styles.title_container}>
                    <p>CG Shop</p>
                    <a href="https://github.com/ChrisDietrich405/cg.shop"><BsArrowUpRight/></a>
                    </div>
                    <ul>
                        <li>React</li>
                        <li>Context API</li>
                        <li>TypeScript</li>
                        <li>React Router Dom</li>
                        <li>Axios</li>
                    </ul>
             </div>
                  </div>
                
              
    
              
           
    
          
    
          </div>
          <div className={styles.grid_container}>
           
           <div className={styles.credentials}>
           <Link href="https://english-in-eight-minutes.web.app/"
              
              target="_blank"
            >
           <Image
   src="/images/english-in-eight.png"
   width={150}
   height={150}
   alt="Picture of the author"
 />
 </Link>
          <div>
                 <div className={styles.title_container}>
                 <p>English in Eight Minutes</p>
                 <a href="https://github.com/ChrisDietrich405/english-in-eight-react-final"><BsArrowUpRight/></a>
                 </div>
                 <ul>
                     <li>React</li>
                     <li>Context API</li>
                     <li>TypeScript</li>
                     <li>React Router Dom</li>
                     <li>Axios</li>
                 </ul>
          </div>
               </div>
             
           
 
           
        
 
       
 
       </div>
  
       <div className={styles.grid_container}>
           
           <div className={styles.credentials}>
           <Image
   src="/images/earthsave-baltimore.png"
   width={150}
   height={150}
   alt="Picture of the author"
 />
          <div>
                 <div className={styles.title_container}>
                 <p>Earthsave Baltimore</p>
                 <BsArrowUpRight/>
                 </div>
                 <ul>
                     <li>React</li>
                     <li>Context API</li>
                     <li>TypeScript</li>
                     <li>React Router Dom</li>
                     <li>Axios</li>
                 </ul>
          </div>
               </div>
             
           
 
           
        
 
       
 
       </div>
       <div className={styles.grid_container}>
           
           <div className={styles.credentials}>
           <Image
   src="/images/beauty-by-jo.png"
   width={150}
   height={150}
   alt="Picture of the author"
 />
          <div>
                 <div className={styles.title_container}>
                 <p>Beauty By Jo</p>
                 <BsArrowUpRight/>
                 </div>
                 <ul>
                     <li>React</li>
                     <li>Context API</li>
                     <li>TypeScript</li>
                     <li>React Router Dom</li>
                     <li>Axios</li>
                 </ul>
          </div>
               </div>
             
           
 
           
        
 
       
 
       </div>
       <div className={styles.grid_container}>
           
           <div className={styles.credentials}>
           <Image
   src="/images/dietrich-landcare.png"
   width={150}
   height={150}
   alt="Picture of the author"
 />
          <div>
                 <div className={styles.title_container}>
                 <p>Dietrich Landcare</p>
                 <a href="https://en.wikipedia.org/wiki/Next.js"><BsArrowUpRight/></a>
                 
                 </div>
                 <ul>
                     <li>React</li>
                     <li>Context API</li>
                     <li>TypeScript</li>
                     <li>React Router Dom</li>
                     <li>Axios</li>
                 </ul>
          </div>
               </div>
             
           
 
           
        
 
       
 
       </div>
    </Container>
  )
}

export default Projects