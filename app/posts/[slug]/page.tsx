import { posts } from '@/.velite';
import { formatDate } from '@/app/utils/format';
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
  const previousPost = posts[postIndex - 1] || null;
  const nextPost = posts[postIndex + 1] || null;
  const isPaginationEnabled = previousPost || nextPost;

  const {
    title,
    content,
    date,
    metadata: { readingTime, wordCount },
  } = post;

  return (
    <>
      <section className="prose">
        <h1>{title}</h1>
        <p className="text-sm text-gray-500">
          Last updated on{' '}
          <span className="font-semibold text-gray-700">
            {formatDate(date)}{' '}
          </span>
          <span className="block text-gray-700 font-semibold">
            {readingTime} min read{' '}
            <span className="text-gray-500 font-normal">
              (word count: {wordCount})
            </span>
          </span>
        </p>
        <div dangerouslySetInnerHTML={{ __html: content }} />
      </section>
      {isPaginationEnabled && (
        <div className="my-8">
          <hr />
          <div className="flex justify-between my-4">
            {previousPost && (
              <Link href={`/posts/${previousPost.slug}`}>
                {previousPost.title}
              </Link>
            )}
            {nextPost && (
              <Link href={`/posts/${nextPost.slug}`}>{nextPost.title}</Link>
            )}
          </div>
        </div>
      )}
    </>
  );
}
