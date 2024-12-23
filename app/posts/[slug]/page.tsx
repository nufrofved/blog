import { ChevronsLeft, ChevronsRight } from 'lucide-react';

import { posts } from '@/.velite';
import { Button } from '@/components/ui/button';
import { formatDate } from '@/lib/format';
import Link from 'next/link';

export default async function Post({
  params,
}: Readonly<{
  params: Promise<{ slug: string }>;
}>) {
  const { slug } = await params;
  const postIndex = posts.findIndex((post) => post.slug === slug);

  if (postIndex === -1) {
    return null;
  }

  const post = posts[postIndex];
  const previousPost = posts[postIndex + 1] || null;
  const nextPost = posts[postIndex - 1] || null;
  const isPaginationEnabled = previousPost || nextPost;

  const {
    title,
    content,
    date,
    metadata: { readingTime, wordCount },
  } = post;

  return (
    <>
      <section className="prose dark:prose-invert">
        <h1>{title}</h1>
        <p className="text-sm text-gray-500 dark:text-gray-400">
          Last updated on{' '}
          <span className="font-semibold text-gray-700 dark:text-gray-200">
            {formatDate(date)}{' '}
          </span>
          <span className="block text-gray-700 font-semibold dark:text-gray-200">
            {readingTime} min read{' '}
            <span className="text-gray-500 font-normal dark:text-gray-400">
              (word count: {wordCount})
            </span>
          </span>
        </p>
        <div dangerouslySetInnerHTML={{ __html: content }} />
      </section>
      {isPaginationEnabled && (
        <div className="my-8">
          <hr />
          <div className="flex justify-between my-4 gap-2 flex-wrap">
            {previousPost && (
              <Button
                asChild
                variant="link"
                className="text-ellipsis whitespace-normal min-h-fit mr-auto px-0"
              >
                <Link href={`/posts/${previousPost.slug}`}>
                  <ChevronsLeft />
                  {previousPost.title}
                </Link>
              </Button>
            )}
            {nextPost && (
              <Button
                asChild
                variant="link"
                className="text-ellipsis whitespace-normal min-h-fit ml-auto px-0"
              >
                <Link href={`/posts/${nextPost.slug}`}>
                  {nextPost.title}
                  <ChevronsRight />
                </Link>
              </Button>
            )}
          </div>
        </div>
      )}
    </>
  );
}
