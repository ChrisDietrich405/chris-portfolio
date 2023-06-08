import React from "react";
import Link from "next/link";

import { useContext } from "react";
import { SectionContext } from "@/app/context/LinkContext";
import useScroll from "../../hooks/useScroll";

import styles from "./styles.module.css";

const Sidebar = () => {
  const { getInTouchRef, aboutMeRef, projectRef } = useContext(SectionContext);

  const { scrollToSection } = useScroll();

  return (
    <aside className="sidebar-container">
      <div className={styles.intro_container}>
        <h1 className={styles.name_title}>Chris Dietrich</h1>
        <h3 className={styles.job_title}>Front End Developer</h3>
        <p>
          I build accessible, inclusive products and digital experiences for the
          web.
        </p>
      </div>
    
      <button
        className={styles.section_button}
        onClick={() => scrollToSection(projectRef.current.offsetTop)}
      >
        Projects
      </button>
      <button
        className={styles.section_button}
        onClick={() => scrollToSection(aboutMeRef.current.offsetTop)}
      >
        About me
      </button>
      <button
        className={styles.section_button}
        onClick={() => scrollToSection(getInTouchRef.current.offsetTop)}
      >
        Get in touch
      </button>

    </aside>
  );
};

export default Sidebar;
