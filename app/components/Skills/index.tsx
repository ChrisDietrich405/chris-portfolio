"use client";
import React from "react";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import { IoLogoJavascript } from "react-icons/io";
import { SiTypescript } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { FaBootstrap } from "react-icons/fa";

import styles from "./styles.module.css";
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
    backgroundColor: "#98d6a9",
    padding: 8,
    textAlign: "center",
    color: "black",
  }));

  const theme = {
    spacing: 8,
  };

  const changeBackground = () => {
    const elementItem = 16;
    for (let i = 0; i < elementItem; i++) {
      const element = document.getElementsByClassName(styles.hover)[
        i
      ] as HTMLElement;

      if (element) {
        element.style.backgroundColor = "yellow";
      }
    }
  };

  return (
    <>
      <Container sx={{ mt: 2 }}>
        <h2 className={styles.title}>Skills</h2>

        <Grid container spacing={4} className={styles.grid_container}>
          <Grid
            onMouseOver={changeBackground}
            item
            xs={12}
            md={3}
            className={`${styles.individual_grid} ${styles.hover}`}

  
          >
            <h4 className={styles.hover}>Languages</h4>

            <div className={`${styles.credentials} ${styles.hover}`}>
              <IoLogoJavascript
                className={`${styles.individual_icon} ${styles.hover}`}
              />
              <p className={`${styles.individual_icon} ${styles.hover}`}>
                Javascript
              </p>
            </div>
            <div className={`${styles.credentials} ${styles.hover}`}>
              <SiTypescript
                className={`${styles.individual_icon} ${styles.hover}`}
              />
              <p className={`${styles.individual_icon} ${styles.hover}`}>
                Typescript
              </p>
            </div>
            <div className={`${styles.credentials} ${styles.hover}`}>
              <FaHtml5
                className={`${styles.individual_icon} ${styles.hover}`}
              />
              <p className={`${styles.individual_icon} ${styles.hover}`}>
                HTML
              </p>
            </div>
            <div className={`${styles.credentials} ${styles.hover}`}>
              <FaCss3Alt
                className={`${styles.individual_icon} ${styles.hover}`}
              />
              <p className={`${styles.individual_icon} ${styles.hover}`}>CSS</p>
            </div>
          </Grid>
          <Grid item xs={12} md={4} className={styles.individual_grid}>
            <h4>Frameworks</h4>

            <div className={styles.credentials}>
              <FaReact color="#61dafb" />
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
          </Grid>

          <Grid item xs={12} md={3} className={styles.individual_grid}>
            <h4>Dev Tools</h4>

            <div className={styles.credentials}>
              <FaGithubSquare color="#000000" />
              <p>Github</p>
            </div>

            <div className={styles.credentials}>
              <SiTypescript />
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
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default Skills;
