"use client";

import { Grid, Paper } from "@mui/material";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function MakeWork({
  name,
  image,
  link,
}: {
  name: string;
  image: string;
  link: string;
}) {
  const [windowWidth, setWindowWidth] = useState(0);

  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  const isMobile = windowWidth <= 500;
  if (isMobile) {
    return (
      <Paper
        sx={{
          p: 3,
          margin: "auto",
          marginTop: "2%",
          
          backgroundColor: "burlywood",
          flexGrow: 1,
        }}
      >
        <div style={{ textAlign: "center" }}>
          <h2>{name}</h2>

          <a href={link} target="_blank" rel="noreferrer">
            <Image src={image} alt={name} width={140} height={93.333} />
          </a>
        </div>
      </Paper>
    );

  }
  else{
    return (
      <Paper
        sx={{
          p: 2,
          margin: "auto",
          marginTop: "2%",
          backgroundColor: "burlywood",
          flexGrow: 1,
        }}
      >
        <div style={{ textAlign: "center" }}>
          <h2>{name}</h2>

          <a href={link} target="_blank" rel="noreferrer">
            <Image src={image} alt={name} width={600} height={400} />
          </a>
        </div>
      </Paper>
    );
  }
}
