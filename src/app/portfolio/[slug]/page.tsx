import { projects } from "@/data/projects";
import ClientContent from "./ClientContent";

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export default function ProjectDetail({ params }: { params: { slug: string } }) {
  const project = projects.find((p) => p.slug === params.slug);
  return <ClientContent project={project} />;
}