import Link from "next/link";
import React from "react";

export default function Contact() {
  return (
    <div className="border-b-2 m-2">
      <h2 className="text-xl font-semibold">Connect</h2>
      <ul>
        <li>
          Email:{" "}
          <Link href="mailto:joeshimbi@gmail.com">joeshimbi@gmail.com</Link>
        </li>
      </ul>
    </div>
  );
}
