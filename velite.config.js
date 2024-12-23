import { defineCollection, defineConfig, s } from 'velite';

const posts = defineCollection({
  name: 'Post',
  pattern: 'posts/**/*.md',
  schema: s.object({
    title: s.unique(s.string().max(99)),
    date: s.isodate(),
    metadata: s.metadata(),
    summary: s.string(),
    content: s.markdown(),
    slug: s.slug('posts'),
  }),
});

export default defineConfig({
  collections: { posts },
  prepare: ({ posts }) => {
    posts = posts.sort((a, b) => {
      return new Date(b.date) - new Date(a.date);
    });

    return { posts };
  },
});
