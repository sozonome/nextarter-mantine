"use client";

import { useMantineColorScheme } from "@mantine/core";
import { Within } from "@theme-toggles/react";
import "@theme-toggles/react/css/Within.css";

import styles from "./ThemeToggle.module.css";

const ThemeToggle = () => {
  const { setColorScheme, colorScheme } = useMantineColorScheme({
    keepTransitions: true,
  });
  const toggle = () =>
    setColorScheme(colorScheme === "light" ? "dark" : "light");

  return (
    <Within
      toggled={colorScheme === "light"}
      toggle={toggle}
      duration={250}
      className={styles["theme-toggle"]}
      placeholder={"" as unknown}
      onPointerEnterCapture={() => {}}
      onPointerLeaveCapture={() => {}}
    />
  );
};

export default ThemeToggle;
