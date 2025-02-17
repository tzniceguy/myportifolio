"use client";

import React from "react";
import Link from "next/link";
import { motion } from "motion/react";

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
    <div className="md:shadow-md rounded-md border-2 p-2">
      <div className="flex">
        <Link
          href={url}
          target="_blank"
          className="font-semibold text-lg mb-4 hover:underline"
        >
          {title}
        </Link>
        <div className="w-2 h-2 my-2 bg-green-500 rounded-full animate-pulse" />
      </div>
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
1;
