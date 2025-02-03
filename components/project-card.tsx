import React from "react";
import Link from "next/link";

interface CardProps {
  url: string;
  title: string;
  description: string;
  stack?: string[];
}

export default function Card({
  url,
  title,
  description,
  stack = [],
}: CardProps) {
  return (
    <div className="p-2 shadow-md rounded-md hover:shadow-lg transition-shadow">
      <Link href={url} className="font-semibold text-lg mb-4 hover:underline">
        {title}
      </Link>
      <p className="text-md mb-4">{description}</p>
      <div className="flex flex-wrap gap-2">
        {stack.map((tech) => (
          <span key={tech} className="px-2 py-1 text-xs">
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
}
