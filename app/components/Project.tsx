import React from "react";
import { build } from "../data";
import Link from "next/link";

export default function Project() {
  return (
    <div>
      {build.map((build) => (
        <div key={build.title}>
          <h2>{build.title}</h2>
          <h2>{build.date}</h2>
          <p>{build.description}</p>
          <span>
            <Link href={build.link}>Visit</Link>
          </span>
        </div>
      ))}
    </div>
  );
}
