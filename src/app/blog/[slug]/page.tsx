import { blogs } from "@/data/blogs";
import ClientContent from "./ClientContent";

export async function generateStaticParams() {
  return blogs.map((blog) => ({
    slug: blog.slug,
  }));
}

export default function BlogPost({ params }: { params: { slug: string } }) {
  const blog = blogs.find((b) => b.slug === params.slug);
  return <ClientContent blog={blog} />;
}