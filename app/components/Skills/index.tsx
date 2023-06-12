"use client";
import React, { useState } from "react";
import { css } from "@mui/system";

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
  const [color, setColor] = useState("");

  const Item = styled(Paper)(() => ({
    backgroundColor: "#98d6a9",
    padding: 8,
    textAlign: "center",
    color: "black",
  }));

  const theme = {
    spacing: 8,
  };

  const changeColor = () => {
    setColor("#15223f");
  };

  const changeColorFrameworks = () => {
    setColor("#15223f");
  };

  const returnColor = () => {
    setColor("#0f182c");
  };

  return (
    <>
      <Container sx={{ mt: 2 }}>
        <h2 className={styles.title}>Skills</h2>

        <Grid container spacing={4} className={styles.grid_container}>
          <Grid
            onMouseOver={changeColor}
            onMouseLeave={returnColor}
            style={{
              backgroundColor: color,
              transition: "0.5s",
              borderRadius: "14px",
            }}
            item
            xs={12}
            md={3}
            className={`${styles.individual_grid}`}
            id="languages-card"
          >
            <h4
              className={`${styles.hover} ${styles.cover}`}
              onMouseOver={changeColor}
              style={{ backgroundColor: color, transition: "0.5s" }}
            >
              Languages
            </h4>

            <div
              className={`${styles.credentials} ${styles.cover}`}
              onMouseOver={changeColor}
              style={{ backgroundColor: color, transition: "0.5s" }}
            >
              <IoLogoJavascript
                onMouseOver={changeColor}
                style={{ backgroundColor: color, transition: "0.5s" }}
                className={`${styles.individual_icon} ${styles.cover}`}
              />
              <p
                className={`${styles.individual_icon} ${styles.cover}`}
                onMouseOver={changeColor}
                style={{ backgroundColor: color, transition: "0.5s" }}
              >
                Javascript
              </p>
            </div>
            <div
              className={`${styles.credentials} ${styles.cover}`}
              onMouseOver={changeColor}
              style={{ backgroundColor: color, transition: "0.5s" }}
            >
              <SiTypescript
                onMouseOver={changeColor}
                style={{ backgroundColor: color, transition: "0.5s" }}
                className={`${styles.individual_icon} ${styles.cover}`}
              />
              <p
                className={`${styles.individual_icon} ${styles.cover}`}
                onMouseOver={changeColor}
                style={{ backgroundColor: color, transition: "0.5s" }}
              >
                Typescript
              </p>
            </div>
            <div
              className={`${styles.credentials} ${styles.cover}`}
              onMouseOver={changeColor}
              style={{ backgroundColor: color, transition: "0.5s" }}
            >
              <FaHtml5
                onMouseOver={changeColor}
                style={{ backgroundColor: color, transition: "0.5s" }}
                className={`${styles.individual_icon} ${styles.cover}`}
              />
              <p
                className={`${styles.individual_icon} ${styles.cover}`}
                onMouseOver={changeColor}
                style={{ backgroundColor: color, transition: "0.5s" }}
              >
                HTML
              </p>
            </div>

            <div
              className={`${styles.credentials} ${styles.cover}`}
              onMouseOver={changeColor}
              style={{ backgroundColor: color, transition: "0.5s" }}
            >
              <FaCss3Alt
                onMouseOver={changeColor}
                style={{ backgroundColor: color, transition: "0.5s" }}
                className={`${styles.individual_icon} ${styles.cover}`}
              />
              <p
                className={`${styles.individual_icon} ${styles.cover}`}
                onMouseOver={changeColor}
                style={{ backgroundColor: color, transition: "0.5s" }}
              >
                CSS
              </p>
            </div>
          </Grid>
        </Grid>
      </Container>
      <Grid container>
        <Grid
          style={{
            backgroundColor: color,
            transition: "0.5s",
            borderRadius: "14px",
          }}
          item
          xs={12}
          md={3}
          className={`${styles.individual_grid}`}
          id="languages-card"
        >
          <h4
            className={`${styles.hover} ${styles.cover}`}
            style={{ backgroundColor: color, transition: "0.5s" }}
          >
            Languages
          </h4>

          <div
            className={`${styles.credentials} ${styles.cover}`}
            style={{ backgroundColor: color, transition: "0.5s" }}
          >
            <IoLogoJavascript
              style={{ backgroundColor: color, transition: "0.5s" }}
              className={`${styles.individual_icon} ${styles.cover}`}
            />
            <p
              className={`${styles.individual_icon} ${styles.cover}`}
              style={{ backgroundColor: color, transition: "0.5s" }}
            >
              Javascript
            </p>
          </div>
          <div
            className={`${styles.credentials} ${styles.cover}`}
            style={{ backgroundColor: color, transition: "0.5s" }}
          >
            <SiTypescript
              style={{ backgroundColor: color, transition: "0.5s" }}
              className={`${styles.individual_icon} ${styles.cover}`}
            />
            <p
              className={`${styles.individual_icon} ${styles.cover}`}
              style={{ backgroundColor: color, transition: "0.5s" }}
            >
              Typescript
            </p>
          </div>
          <div
            className={`${styles.credentials} ${styles.cover}`}
            style={{ backgroundColor: color, transition: "0.5s" }}
          >
            <FaHtml5
              style={{ backgroundColor: color, transition: "0.5s" }}
              className={`${styles.individual_icon} ${styles.cover}`}
            />
            <p
              className={`${styles.individual_icon} ${styles.cover}`}
              style={{ backgroundColor: color, transition: "0.5s" }}
            >
              HTML
            </p>
          </div>

          <div
            className={`${styles.credentials} ${styles.cover}`}
            style={{ backgroundColor: color, transition: "0.5s" }}
          >
            <FaCss3Alt
              style={{ backgroundColor: color, transition: "0.5s" }}
              className={`${styles.individual_icon} ${styles.cover}`}
            />
            <p
              className={`${styles.individual_icon} ${styles.cover}`}
              style={{ backgroundColor: color, transition: "0.5s" }}
            >
              CSS
            </p>
          </div>
        </Grid>
      </Grid>
    </>
  );
};

export default Skills;
