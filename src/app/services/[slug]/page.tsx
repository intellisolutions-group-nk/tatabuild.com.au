import { services } from "@/data/servicesData";
import ClientContent from "./ClientContent";

export async function generateStaticParams() {
  return services.map((service) => ({
    slug: service.slug,
  }));
}

export default function ServiceDetail({ params }: { params: { slug: string } }) {
  const serviceData = services.find((s) => s.slug === params.slug);
  if (!serviceData) return <ClientContent service={null} />;
  const { icon, ...service } = serviceData;
  return <ClientContent service={service} />;
}