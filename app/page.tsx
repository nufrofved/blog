import { posts } from '@/.velite';
import { Fragment } from 'react';

export default function Home() {
  return (
    <>
      {posts.map(({ title }) => (
        <Fragment key={title}>{title}</Fragment>
      ))}
    </>
  );
}
