import Link from "next/link";
import React from "react";

export default function Contact() {
  return (
    <div className="border-b-2 m-2">
      <h2 className="text-xl font-semibold">Connect</h2>
      <ul>
        <li>
          <span className="font-semibold">Email:</span>
          <Link href="mailto:joeshimbi@gmail.com">joeshimbi@gmail.com</Link>
        </li>
        <li>
          <span className="font-semibold">X, Formely Twitter:</span>
          <Link href="x.com/tzniceguy">@tzniceguy</Link>
        </li>
        <li>
          <span className="font-semibold">Github:</span>
          <Link href="github.com/tzniceguy">@tzniceguy</Link>
        </li>
      </ul>
    </div>
  );
}
