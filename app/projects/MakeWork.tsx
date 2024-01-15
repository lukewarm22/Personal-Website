"use client";

import { Grid, Paper} from "@mui/material";
import Image from "next/image";


export default function MakeWork({name, image, link}: {name: string, image: string, link: string}) {
  return (
    <Paper
        sx={{
          p: 2,
          margin: "auto",
          marginTop: "2%",
          backgroundColor:"burlywood",
          flexGrow: 1
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