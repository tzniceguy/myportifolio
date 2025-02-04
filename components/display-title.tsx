"use client";
import { usePathname } from "next/navigation";

function formatPathname(pathname: string): string {
  return (
    pathname.slice(1).charAt(0).toUpperCase() + pathname.slice(2) || "About"
  );
}

export default function PageTitle() {
  const pathname = usePathname();
  const title = formatPathname(pathname);
  return <h1 className="font-bold text-3xl md:text-5xl md-6">{title}</h1>;
}
