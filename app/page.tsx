"use client";
import Image from "next/image";
import Link from "next/link";

import Button from "@mui/material/Button";

export default function Home() {
  return (
    <div style={{ minHeight: "80%" }}>
      <h1
        style={{
          fontSize: "3rem",
          fontWeight: "bold",
          textAlign: "center",
          marginRight: "10%",
          fontFamily: "sans-serif",
          paddingTop: "15%",
          marginBottom: 2,
        }}
      >
        Hello I'm Luke Jordan
      </h1>
      <p style={{marginTop: 0,marginLeft:"32.7%", width:"25%"}}>
        I am a software developer who is passionate about creating technology. Whether that technology is web applications, video games, or anything in between, I want to create something that I am proud of and that others can enjoy.
      </p>

      <Button
        variant="contained"
        sx={{
          backgroundColor: "burlywood",
          width: "15%",
          height: 100,
          fontSize: "27px",
          marginLeft: "10%",
          marginTop: "2%",
        }}
        onClick={() => {
          window.location.href = "/projects";
        }}
      >
        Projects
      </Button>
      <Button
        variant="contained"
        sx={{
          backgroundColor: "burlywood",
          width: "15%",
          height: 100,
          fontSize: "27px",
          marginLeft: "25%",
          marginTop: "2%",
        }}
        onClick={() => {
          window.location.href = "/projects";
        }}
      >
        Projects
      </Button>
      <br/>
      <Button
        variant="contained"
        sx={{
          backgroundColor: "burlywood",
          width: "15%",
          height: 100,
          fontSize: "27px",
          marginLeft: "30%",
          marginTop: "2%",
        }}
        onClick={() => {
          window.location.href = "/projects";
        }}
      >
        About Me
      </Button>
      <Button
        variant="contained"
        sx={{
          backgroundColor: "burlywood",
          width: "15%",
          height: 100,
          fontSize: "27px",
          marginLeft: "25%",
          marginTop: "2%",
        }}
        onClick={() => {
          window.location.href = "/projects";
        }}
      >
        Projects
      </Button>
    </div>
  );
}
