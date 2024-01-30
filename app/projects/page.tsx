import Image from "next/image";
import Link from "next/link";
import postgres from "postgres";
import { Suspense } from "react";
import { Grid, Button } from "@mui/material";
import MakeWork from "./MakeWork";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

const sql = postgres(process.env.DATABASE_URL!);

async function Work() {
  const work = await sql`
  SELECT * FROM work
  `;
  return (
    <Grid
      sx={{
        marginTop: "3%",
        display: "grid",
        margin: "auto",
        gridTemplateColumns: "repeat(2, 1fr)",
      }}
    >
      {work.map((work) => (
        <MakeWork
          key={work.id}
          name={work.name}
          image={work.image}
          link={work.link}
        />
      ))}
    </Grid>
  );
}
export default function Home() {
  return (
    <section>
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
        Projects
      </h1>
      <Suspense fallback={<p>Loading...</p>}>
        <Work />
      </Suspense>
    </section>
  );
}
