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
    <div className="group rounded-lg  p-4 transition-all">
      <div className="flex items-center gap-2 mb-4">
        <Link
          href={url}
          target="_blank"
          className="font-semibold text-lg hover:text-marshland-600 hover:underline dark:hover:text-marshland-400 transition-colors"
        >
          {title}
        </Link>
        <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
      </div>

      <p className="text-gray-700 dark:text-gray-300 mb-4 line-clamp-5">
        {description}
      </p>

      <div className="flex flex-wrap gap-2">
        {stack.map((tech) => (
          <span
            key={tech}
            className="px-3 py-1 text-xs rounded-full bg-marshland-100 dark:bg-marshland-800 text-marshland-700 dark:text-marshland-300"
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
}
