import postgres from "postgres";
const sql = postgres(process.env.POSTGRES_URL!);

async function Work({ id }: { id: number }) {
  const work = await sql`
  SELECT * FROM work WHERE id = ${id}
  `;
  return (
    <div>
      <h1>{work[0].name}</h1>
      <a href={work[0].link} className="underline">GitHub Link</a>
    </div>
  );
}

export default function WorkPage({ params }: { params: { id: number } }) {
  return (
    <section>
      <Work id={params.id} />
      
    </section>
  );
}
