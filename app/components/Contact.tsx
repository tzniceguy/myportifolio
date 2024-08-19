import Link from "next/link";
import React from "react";

export default function Contact() {
  return (
    <div className="space-y-6 pb-6">
      <h2 className="text-xl font-semibold">connect with me</h2>
      <ul>
        <li>
          <span className="font-semibold">X, formely twitter:</span>
          <a href="x.com/tzniceguy">@tzniceguy</a>
        </li>
        <li>
          <span className="font-semibold">github:</span>
          <a href="github.com/tzniceguy">@tzniceguy</a>
        </li>
      </ul>
    </div>
  );
}
