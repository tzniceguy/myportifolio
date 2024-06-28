"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";

const navbaritems = [
  { title: "about", href: "/" },
  { title: "services", href: "/work" },
  { title: "blog", href: "/blog" },
];
export default function NavBar() {
  const pathname = usePathname();

  return (
    <div className="space-y-6">
      <ul className="flex space-x-6 justify-end">
        {navbaritems.map((link) => (
          <li key={link.title}>
            <Link
              href={link.href}
              className={clsx("underline", {
                "no-underline text-marshland-300": pathname === link.href,
              })}
            >
              {link.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
