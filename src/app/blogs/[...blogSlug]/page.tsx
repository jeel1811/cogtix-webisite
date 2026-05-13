import type { Metadata } from "next";
import { notFound } from "next/navigation";
import queryGraphql from "@/components/queryGraphql/index";
import { GET_BLOG_BY_SLUG } from "@/graphql/blogs/query";
import type { BlogNode } from "@/components/sections/blogs/types";
import Container from "@/components/ui/Container";
import Image from 'next/image';
import Link from "next/link";
import { Calendar, User, ChevronLeft } from "lucide-react";
import ContactForm from "@/components/sections/ContactForm";

interface BlogDetailPageProps {
  params: Promise<{
    blogSlug: string[];
  }>;
}

async function getBlog(slug: string): Promise<BlogNode | null> {
  try {
    const { data } = await queryGraphql(GET_BLOG_BY_SLUG, { slug });
    return (data?.postBy as BlogNode) ?? null;
  } catch (error) {
    console.error("[blog-detail] Failed to load blog:", error);
    return null;
  }
}

export async function generateMetadata(
  props: BlogDetailPageProps,
): Promise<Metadata> {
  const params = await props.params;
  const slug = params.blogSlug?.[0];

  if (!slug) {
    return {
      title: "Blog Not Found | Cogtix",
      description: "The blog post you are looking for could not be found.",
    };
  }

  const blog = await getBlog(slug);

  if (!blog) {
    return {
      title: "Blog Not Found | Cogtix",
      description: "The blog post you are looking for could not be found.",
    };
  }

  const title = blog.blogs?.blogTitle || blog.title || "Blog Post";
  const description =
    blog.blogs?.previewDesc ||
    blog.blogs?.blogDescription ||
    "Read this article on Cogtix";
  const image =
    blog.featuredImage?.node?.mediaItemUrl ||
    "https://www.cogtix.com/twitterimg.webp";
  const url = `https://www.cogtix.com/blogs/${slug}`;

  return {
    title: `${title} | Cogtix`,
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      type: "article",
      siteName: "Cogtix Solutions",
      publishedTime: blog.date,
      modifiedTime: blog.modified,
      authors: ["Cogtix Solutions"],
      images: [image],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },
  };
}

function formatDate(dateString: string) {
  return new Date(dateString).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

function stripHtml(value: string) {
  return value
    .replace(/<[^>]*>/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

export default async function BlogDetailPage(props: BlogDetailPageProps) {
  const params = await props.params;
  const slug = params.blogSlug?.[0];

  if (!slug) {
    notFound();
  }

  const blog = await getBlog(slug);

  if (!blog) {
    notFound();
  }

  const title = blog.blogs?.blogTitle || blog.title || "Blog Post";
  const description = blog.blogs?.previewDesc || "";
  const content = blog.blogs?.blogDescription || blog.content || "";
  const image =
    blog.blogs?.featuredImage?.mediaItemUrl ||
    blog.featuredImage?.node?.mediaItemUrl;
  const category = blog.blogs?.blogCategory;
  const date = formatDate(blog.date);
  const cleanedDescription = stripHtml(description);

  return (
    <div className="min-h-screen bg-white">
      <section className="relative min-h-[calc(100svh-5rem)] overflow-hidden bg-slate-50 pt-16 pb-10 md:pt-20 md:pb-14">
        <Container className="relative z-10 flex min-h-[calc(100svh-5rem)] items-center">
          <div className="w-full">
            <div className="mb-5 inline-flex items-center gap-2 text-sm font-semibold text-slate-600 transition-colors hover:text-blue-600">
              <ChevronLeft className="h-4 w-4" />
              <Link href="/blogs">Back to Blogs</Link>
            </div>

            <div className="grid items-start gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16 xl:gap-24">
              <div className="max-w-2xl lg:self-start">

                <h1 className="max-w-xl text-3xl font-bold leading-[1.05] tracking-tight text-slate-950 md:text-4xl lg:text-[3.35rem]">
                  {title}
                </h1>

                {cleanedDescription ? (
                  <p className="mt-4 max-w-xl text-base leading-7 text-slate-600 md:text-lg">
                    {cleanedDescription}
                  </p>
                ) : null}

                {category ? (
                  <div className="mt-4 flex flex-wrap items-center gap-3">
                    <span className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-3 py-1 text-[0.6875rem] font-semibold uppercase tracking-[0.16em] text-blue-700 ring-1 ring-blue-100">
                      {category}
                    </span>
                  </div>
                ) : null}

                <div className="mt-5 flex flex-wrap items-center gap-4 border-t border-slate-200 pt-5 text-sm text-slate-600">
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4 text-blue-600" />
                    <span>{date}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <User className="h-4 w-4 text-blue-600" />
                    <span>Cogtix Solutions</span>
                  </div>
                </div>
              </div>

              {image ? (
                <div className="flex justify-center lg:justify-center lg:self-start lg:justify-self-center lg:pt-1">
                  <Image
                    src={image}
                    alt={title}
                    width={640}
                    height={800}
                    className="h-auto w-full max-w-[500px] object-contain lg:max-w-[560px]"
                    priority
                    unoptimized={image.startsWith('http')}
                  />
                </div>
              ) : null}
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-white py-10 md:py-14">
        <Container className="max-w-4xl">
          <article
            id="article-body"
            className="prose max-w-none prose-headings:font-bold prose-headings:tracking-tight prose-h2:mt-10 prose-h2:mb-4 prose-h2:text-3xl prose-h2:text-blue-700 prose-h3:mt-8 prose-h3:mb-3 prose-h3:text-2xl prose-h3:text-slate-900 prose-p:my-4 prose-p:text-slate-700 prose-p:leading-8 prose-li:my-2 prose-li:text-slate-700 prose-a:text-blue-600 prose-a:no-underline hover:prose-a:underline prose-img:my-8 prose-img:mx-auto prose-img:block prose-img:max-w-full prose-img:rounded-2xl prose-img:shadow-sm"
          >
            {content ? (
              <div
                className="text-slate-700 leading-relaxed [&_h2]:mt-10 [&_h2]:mb-4 [&_h2]:text-3xl [&_h2]:font-bold [&_h2]:text-blue-700 [&_h3]:mt-8 [&_h3]:mb-3 [&_h3]:text-2xl [&_h3]:font-bold [&_h3]:text-slate-900 [&_h4]:mt-6 [&_h4]:mb-2 [&_h4]:text-xl [&_h4]:font-bold [&_h4]:text-slate-900 [&_p]:my-4 [&_p]:leading-8 [&_p]:text-slate-700 [&_img]:my-8 [&_img]:mx-auto [&_img]:block [&_img]:max-w-full [&_img]:rounded-2xl [&_img]:shadow-sm [&_ul]:my-4 [&_ul]:pl-6 [&_ul]:list-disc [&_ol]:my-4 [&_ol]:pl-6 [&_ol]:list-decimal [&_li]:my-2 [&_li>p]:my-0 [&_li_ul]:mt-2 [&_li_ol]:mt-2 [&_li_ul]:pl-6 [&_li_ol]:pl-6"
                dangerouslySetInnerHTML={{ __html: content }}
              />
            ) : (
              <p className="text-slate-600 italic">
                Full content not available. Please check back soon.
              </p>
            )}
          </article>
        </Container>
      </section>

      <ContactForm />
    </div>
  );
}
