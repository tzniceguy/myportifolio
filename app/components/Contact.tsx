import Link from "next/link";
import React from "react";

export default function Contact() {
  return (
    <div className="space-y-6 pb-6">
      <h2 className="text-xl font-semibold">connect with me</h2>
      <ul>
        <li>
          <span className="font-semibold">X, formely twitter:</span>
          <Link href="https://x.com/tzniceguy">@tzniceguy</Link>
        </li>
        <li>
          <span className="font-semibold">github:</span>
          <Link href="https://github.com/tzniceguy">@tzniceguy</Link>
        </li>
      </ul>
    </div>
  );
}
