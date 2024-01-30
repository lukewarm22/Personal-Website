"use client";
import { Grid, Paper, Button, IconButton } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Link from "next/link";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import { useState, useEffect } from "react";

export default function Aboutme() {
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
  if (!isMobile) {
    return (
      <div>
        <Link href="/">
          <Button
            startIcon={<ArrowBackIcon />}
            style={{
              backgroundColor: "transparent",
              borderWidth: 0,
              color: "peru",
              fontSize: "1.25rem",
            }}
          >
            Go Back
          </Button>
        </Link>
        <h1
          style={{
            color: "peru",
            fontSize: "3rem",
            fontWeight: "bold",
            textAlign: "center",
            fontFamily: "sans-serif",
            marginTop: "1%",
          }}
        >
          About Me
        </h1>
        <Paper
          sx={{
            width: "70%",
            margin: "auto",
            marginTop: "2%",

            backgroundColor: "burlywood",
            flexGrow: 1,
          }}
        >
          <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="center"
            sx={{
              width: "90%",
              margin: "auto",
              marginTop: "3%",
              marginRight: "30%",
            }}
          >
            <div style={{ width: "50%" }}>
              <img
                src="/me2.JPG"
                alt="picture of me"
                width={0}
                height={0}
                style={{
                  display: "block",
                  width: 300,
                  height: 400,
                  margin: "auto",
                }}
              />
              <Grid container direction="row" justifyContent="center">
                <IconButton
                  onClick={() => {
                    window.location.href =
                      "https://www.linkedin.com/in/luke-jordan-120578221/";
                  }}
                >
                  <LinkedInIcon />
                </IconButton>
                <IconButton
                  onClick={() => {
                    window.location.href =
                      "https://www.linkedin.com/in/luke-jordan-120578221/";
                  }}
                >
                  <GitHubIcon />
                </IconButton>
              </Grid>
            </div>
            <p
              style={{
                width: "40%",
                borderLeft: "2px solid black",
                paddingLeft: "9%",
                paddingTop: "1%",
                paddingBottom: "1%",
                margin: "auto",
                marginTop: "1%",
                marginBottom: "1%",
              }}
            >
              I'm a software engineer with a passion for crafting creative
              solutions to complex problems. I recently graduated from Clemson
              University with a Bachelor's Degree in Computer Science. One
              accomplishment I'm particularly proud of is managing to keep my
              prestigious Palmetto Fellow's scholarship while working roughly 30
              hours weekly at Starbucks throughout my college career.
              <br />
              <br />
              I love the fulfilling feeling of working through a difficult
              puzzle, which drives my enthusiasm for solving intricate problems
              through code to build applications. My goal as an engineer is to
              develop experiences and products that provide value to others
              through intuitive and seamless interfaces.
              <br />
              <br />
              Outside of software engineering, some of my biggest interests
              include hiking adventures in the great outdoors, diving into the
              world of all things music, building my own video games, and
              staying engrossed in the latest interactive virtual worlds. I'm
              actively developing an indie game project to exercise and showcase
              my programming and creative abilities, using the skills I honed
              while getting my degree.
              <br />
              <br />
              As I progress in my career, my ultimate goal is to leverage my
              academic foundation and ongoing learning as a software engineer to
              build innovative applications and digital experiences. I want to
              help individuals and businesses bring their ideas to life through
              considered software solutions. Please feel free to reach out if
              you'd like to collaborate!
            </p>
          </Grid>
        </Paper>
      </div>
    );
  } else {
    return (
      <div>
        <Link href="/">
          <Button
            startIcon={<ArrowBackIcon />}
            style={{
              backgroundColor: "transparent",
              borderWidth: 0,
              color: "peru",
              fontSize: "1.25rem",
            }}
          >
            Go Back
          </Button>
        </Link>
        <h1
          style={{
            color: "peru",
            fontSize: "3rem",
            fontWeight: "bold",
            textAlign: "center",
            fontFamily: "sans-serif",
            marginTop: "1%",
          }}
        >
          About Me
        </h1>
        <Paper
          sx={{
            width: "90%",
            margin: "auto",
            marginTop: "2%",
            backgroundColor: "burlywood",
            flexGrow: 1,
          }}
        >
          <div style={{ width: "100%", textAlign:"center"}}>
            <img 
              src="/me2.JPG"
              alt="picture of me"
              
              width={0}
              height={0}
              style={{
                width: 300,
                height: 400,
                margin: "auto",
                marginTop: "3%",
                marginLeft: "auto",
              }}
            />
            <Grid container direction="row" justifyContent="center">
              <IconButton
                onClick={() => {
                  window.location.href =
                    "https://www.linkedin.com/in/luke-jordan-120578221/";
                }}
              >
                <LinkedInIcon />
              </IconButton>
              <IconButton
                onClick={() => {
                  window.location.href =
                    "https://www.linkedin.com/in/luke-jordan-120578221/";
                }}
              >
                <GitHubIcon />
              </IconButton>
            </Grid>
          </div>
          <p
            style={{
              width: "90%",
              paddingTop: "1%",
              paddingBottom: "1%",
              margin: "auto",
              marginTop: "1%",
              marginBottom: "1%",
            }}
          >
            I'm a software engineer with a passion for crafting creative
            solutions to complex problems. I recently graduated from Clemson
            University with a Bachelor's Degree in Computer Science. One
            accomplishment I'm particularly proud of is managing to keep my
            prestigious Palmetto Fellow's scholarship while working roughly 30
            hours weekly at Starbucks throughout my college career.
            <br />
            <br />
            I love the fulfilling feeling of working through a difficult puzzle,
            which drives my enthusiasm for solving intricate problems through
            code to build applications. My goal as an engineer is to develop
            experiences and products that provide value to others through
            intuitive and seamless interfaces.
            <br />
            <br />
            Outside of software engineering, some of my biggest interests
            include hiking adventures in the great outdoors, diving into the
            world of all things music, building my own video games, and staying
            engrossed in the latest interactive virtual worlds. I'm actively
            developing an indie game project to exercise and showcase my
            programming and creative abilities, using the skills I honed while
            getting my degree.
            <br />
            <br />
            As I progress in my career, my ultimate goal is to leverage my
            academic foundation and ongoing learning as a software engineer to
            build innovative applications and digital experiences. I want to
            help individuals and businesses bring their ideas to life through
            considered software solutions. Please feel free to reach out if
            you'd like to collaborate!
          </p>
        </Paper>
      </div>
    );
  }
}
