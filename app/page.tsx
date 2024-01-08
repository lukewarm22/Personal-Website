"use client";
import Image from "next/image";
import Link from "next/link";
import Button from "@mui/material/Button";
import { useState, useEffect } from "react";



export default function Home() {
  
  const [windowWidth, setWindowWidth] = useState(0);

  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  }

  useEffect(() => {
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }
  , [])
  const isMobile = windowWidth <= 500;
  if(!isMobile) return (
    
    <div style={{ minHeight: "80%" }}>
      <img
        src="/me.JPG"
        alt="picture of me"
        width={0}
        height={0}
        sizes="100vw"
        style={{
          display: "block",
          width: 250,
          height: 250,
          marginLeft: "auto",
          marginRight: "auto",
          borderRadius: "100%",
          marginTop: "5%",
          borderColor: "black",
          borderStyle: "solid",
          borderWidth: 4,
        }}
      />
      <h1
        style={{
          color: "peru",
          fontSize: "4rem",
          fontWeight: "bold",
          textAlign: "center",
          marginRight: "auto",
          marginLeft: "auto",
          fontFamily: "sans-serif",
          marginBottom: "3%",
          paddingRight: 0,
          marginTop:2
        }}
      >
      Luke Jordan
      </h1>


      <Button
        variant="contained"
        sx={{
          backgroundColor: "burlywood",
          width: "20%",
          height: 100,
          fontSize: "27px",
          marginLeft: "5%",
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
          width: "20%",
          height: 100,
          fontSize: "27px",
          marginLeft: "25%",
          marginTop: "2%",
        }}
        onClick={() => {
          window.location.href = "https://random.dog";
        }}
      >
        Picture Of A Dog
      </Button>
      <br />
      <Button
        variant="contained"
        sx={{
          backgroundColor: "burlywood",
          width: "20%",
          height: 100,
          fontSize: "27px",
          marginLeft: "28%",
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
          width: "20%",
          height: 100,
          fontSize: "27px",
          marginLeft: "25%",
          marginTop: "2%",
        }}
        onClick={() => {
          window.location.href = "/projects";
        }}
      >
        Contact Me
      </Button>
    </div>
  );
  else return(
    <div style={{ minHeight: "80%" }}>
      <img
        src="/me.JPG"
        alt="picture of me"
        width={0}
        height={0}
        sizes="100vw"
        style={{
          display: "block",
          width: 250,
          height: 250,
          marginLeft: "auto",
          marginRight: "auto",
          borderRadius: "100%",
          marginTop: "5%",
          borderColor: "black",
          borderStyle: "solid",
          borderWidth: 4,
        }}
      />
      <h1
        style={{
          color: "peru",
          fontSize: "4rem",
          fontWeight: "bold",
          textAlign: "center",
          marginRight: "auto",
          marginLeft: "auto",
          fontFamily: "sans-serif",
          marginBottom: "3%",
          paddingRight: 0,
          marginTop:2
        }}
      >
      Luke Jordan
      </h1>


      <Button
        variant="contained"
        sx={{
          backgroundColor: "burlywood",
          width: "40%",
          height: 200,
          fontSize: "27px",
          marginLeft: "3%",
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
          width: "40%",
          height: 200,
          fontSize: "27px",
          marginLeft: "15%",
          marginTop: "2%",
        }}
        onClick={() => {
          window.location.href = "https://random.dog";
        }}
      >
        Picture Of A Dog
      </Button>
      <br />
      <Button
        variant="contained"
        sx={{
          backgroundColor: "burlywood",
          width: "40%",
          height: 200,
          fontSize: "27px",
          marginLeft: "3%",
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
          width: "40%",
          height: 200,
          fontSize: "27px",
          marginLeft: "15%",
          marginTop: "2%",
        }}
        onClick={() => {
          window.location.href = "/projects";
        }}
      >
        Contact Me
      </Button>
    </div>
  );
  
}
