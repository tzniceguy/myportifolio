import Link from "next/link";
import React from "react";

export default function Contact() {
  return (
    <div className="space-y-6">
      <h2 className="text-xl font-semibold">connect with me</h2>
      <ul>
        <li>
          <span className="font-semibold">email:</span>
          <Link href="mailto:joeshimbi@gmail.com">joeshimbi@gmail.com</Link>
        </li>
        <li>
          <span className="font-semibold">X, formely twitter:</span>
          <Link href="x.com/tzniceguy">@tzniceguy</Link>
        </li>
        <li>
          <span className="font-semibold">github:</span>
          <Link href="github.com/tzniceguy">@tzniceguy</Link>
        </li>
      </ul>
    </div>
  );
}
