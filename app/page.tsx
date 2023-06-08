//https://brittanychiang.com/#projects
"use client";
import React from "react";

import Sidebar from "./components/Sidebar";
import Main from "./components/Main";
import SectionProvider from "./context/LinkContext";

const HomePage = () => {
  return (
    <div className="app-container">
      <SectionProvider>
        <Sidebar />
        <Main />
      </SectionProvider>
    </div>
    // <Container className="app-container">
    //   <Grid container>

    //   <Grid item>

    //   <Sidebar/>
    //   </Grid>
    //   <Grid item>

    //   <Main/>
    //   </Grid>
    //   </Grid>
    // </Container>
  );
};

export default HomePage;
