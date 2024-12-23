import { posts } from '@/.velite';
import Link from 'next/link';
import { cn } from './utils/cn';
import { formatDate } from './utils/format';

// from-gray-400 to-gray-700 from header
const gradientColors = [
  'text-gray-700',
  'text-gray-600',
  'text-gray-500',
  'text-gray-400',
];
export default function Home() {
  const coloredTitlePosts = posts.map((post, i) => {
    const colorLength = gradientColors.length;
    const segmentSize = Math.ceil(posts.length / colorLength);
    const colorIndex = Math.floor(i / segmentSize);

    return {
      ...post,
      color: gradientColors[colorIndex % colorLength],
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
                  <p className="text-xs text-gray-700">
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
