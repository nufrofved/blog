import { posts } from '@/.velite';
import { Posts } from './components/posts';

export default function Home() {
  return <Posts data={posts} />;
}
