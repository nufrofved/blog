'use client';

import { Post } from '@/.velite';
import { formatDate } from '@/lib/format';
import { cn } from '@/lib/utils';
import { useTheme } from 'next-themes';
import Link from 'next/link';

const titleColors = {
  light: ['text-gray-700', 'text-gray-600', 'text-gray-500', 'text-gray-400'],
  dark: ['text-cyan-500', 'text-cyan-600', 'text-cyan-700', 'text-cyan-800'],
};

export function Posts({
  data,
}: Readonly<{
  data: Post[];
}>) {
  const { resolvedTheme } = useTheme();
  const colors =
    titleColors[resolvedTheme as keyof typeof titleColors] || titleColors.dark;
  const coloredTitlePosts = data.map((post, i) => {
    const colorLength = colors.length;
    const segmentSize = Math.ceil(data.length / colorLength);
    const colorIndex = Math.floor(i / segmentSize);

    return {
      ...post,
      color: colors[colorIndex % colorLength],
    };
  });

  return (
    <ul>
      {coloredTitlePosts.map(
        ({ title, slug, metadata: { readingTime }, date, summary, color }) => {
          const formattedDate = formatDate(date);
          return (
            <li key={slug} className="mb-8">
              <Link href={`/posts/${slug}`}>
                <article>
                  <h2 className={cn('text-2xl font-semibold', color)}>
                    {title}
                  </h2>
                  <p className="text-xs text-gray-700 dark:text-gray-400">
                    {formattedDate} &middot; <span>{readingTime} min read</span>
                  </p>
                  <p className="truncate">{summary}</p>
                </article>
              </Link>
            </li>
          );
        }
      )}
    </ul>
  );
}
