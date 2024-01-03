import Image from "next/image";
import Link from "next/link";
import postgres from "postgres";
import { Suspense } from "react";

const sql = postgres(process.env.DATABASE_URL!);



async function Work() {
  const work = await sql`
  SELECT * FROM work
  `;
  return (
    <ul>
      {work.map((work) => (
        <li key={work.id} className="underline">
          <Link href={`/work/${work.id}`} >
            {" "}
            {work.name}{" "}
          </Link>
        </li>
      ))}
    </ul>
  );
}
export default function Home() {
  return (
    <section>
      <h1
        style={{
          fontSize: "3rem",
          fontWeight: "bold",
          textAlign: "center",
          fontFamily: "sans-serif",
        }}
      >
        Home
      </h1>
      <Link href="/works">Works </Link>
      
    </section>
  );
}
