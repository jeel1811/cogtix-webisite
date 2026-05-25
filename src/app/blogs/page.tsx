import type { Metadata } from 'next';
import ContactForm from '@/components/sections/ContactForm';
import BlogsHero from '@/components/sections/BlogsHero';
import BlogsGrid from '@/components/sections/BlogsGrid';
import queryGraphql from '@/components/queryGraphql/index';
import { WORDPRESS_BLOG_CATEGORY } from '@/constants/index';
import { BLOGS_LIST } from '@/graphql/blogs/query';
import type { BlogEdge } from '@/components/sections/blogs/types';
import { buildMetadata } from '@/lib/seo';

export const metadata: Metadata = buildMetadata({
  title: 'Engineering Blogs | Cloud, AI, Data & .NET',
  description:
    'Read Cogtix Solutions engineering blogs on software development, cloud, AI/ML, data, .NET, Microsoft technologies, DevOps, and product delivery.',
  path: '/blogs',
  keywords: [
    'software development blog',
    'cloud engineering blog',
    'AI ML blog articles',
    'data engineering blog',
    'DevOps articles',
    '.NET development blog',
    'Microsoft technologies blog',
    'product engineering insights',
    'Cogtix blog',
  ],
});

async function getBlogs(): Promise<BlogEdge[]> {
  try {
    // Try fetching with category filter first
    let response = await queryGraphql(BLOGS_LIST, {
      where: { categoryIn: WORDPRESS_BLOG_CATEGORY.id },
      first: 100,
    });

    // If no blogs found with category, try without category filter
    if (!response.data?.posts?.edges || response.data.posts.edges.length === 0) {
      console.warn('[blogs] No blogs found with category filter, trying without filter...');
      response = await queryGraphql(BLOGS_LIST, {
        first: 100,
      });
    }

    return (response.data?.posts?.edges as BlogEdge[]) ?? [];
  } catch (error) {
    console.error('[blogs] Failed to load blogs list', error);
    return [];
  }
}

export default async function BlogsPage() {
  const blogs = await getBlogs();

  return (
    <div className="min-h-screen bg-white">
      <BlogsHero />
      <BlogsGrid blogs={blogs} />
      <ContactForm />
    </div>
  );
}
