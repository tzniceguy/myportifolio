import React from "react";
import Link from "next/link";
const navbaritems = [
  { title: "about", href: "/" },
  { title: "services", href: "/experiences" },
  { title: "blog", href: "/blog" },
];
export default function NavBar() {
  return (
    <div className="space-y-6">
      <ul className="flex space-x-6 justify-end">
        {navbaritems.map((item) => (
          <li key={item.title}>
            <Link href={item.href}>{item.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
