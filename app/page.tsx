import { posts } from '@/.velite';

// TODO: Add posts maximally 10 posts
export default function Home() {
  return (
    <>
      <h1>Hello World</h1>
      {posts.map(({ title }) => (
        <>{title}</>
      ))}
    </>
  );
}
