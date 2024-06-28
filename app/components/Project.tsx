import React from "react";
import { build } from "../data";
import Link from "next/link";

export default function Project() {
  return (
    <div className="space-y-6">
      {build.map((build) => (
        <div key={build.title} className="pb-2 space-y-3">
          <h2 className="font-semibold">{build.title}</h2>
          <p>{build.description}</p>
          <p>
            <span>
              <Link href={build.link} className="underline">
                Visit
              </Link>
            </span>
          </p>
        </div>
      ))}
    </div>
  );
}
