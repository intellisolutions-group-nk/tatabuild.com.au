export interface Project {
  slug: string;
  title: string;
  location: string;
  category: string;
  image: string;
  description: string;
  details: string;
  year: string;
  client: string;
  scope: string[];
  gallery: string[];
}

export const projects: Project[] = [
  {
    slug: "modern-coastal-villa",
    title: "Modern Coastal Villa",
    location: "Gold Coast, QLD",
    category: "Residential",
    image: "/images/projects/modern-coastal-villa.png",
    description: "A stunning architectural masterpiece blending contemporary design with the relaxed Gold Coast lifestyle.",
    details: "This high-end residential project involved the design and construction of a two-story luxury villa. The design prioritizes natural light, open-plan living, and seamless integration between indoor and outdoor spaces. High-quality materials like off-form concrete, timber cladding, and expansive glazing were used to create a sophisticated yet durable coastal home.",
    year: "2023",
    client: "Private Residential Client",
    scope: [
      "Architectural Design Coordination",
      "Full Construction Management",
      "Custom Interior Joinery",
      "Landscaping and Pool Construction",
      "Sustainable Energy Integration"
    ],
    gallery: [
      "/images/projects/gallery-modern-coastal-villa-1.jpg",
      "/images/projects/gallery-modern-coastal-villa-2.jpg",
      "/images/projects/gallery-modern-coastal-villa-3.jpg"
    ]
  },
  {
    slug: "downtown-tech-hub",
    title: "Downtown Tech Hub",
    location: "Sydney, NSW",
    category: "Commercial",
    image: "/images/projects/downtown-tech-hub.png",
    description: "A premium commercial fit-out for a leading global technology firm in the heart of Sydney's CBD.",
    details: "The Downtown Tech Hub project involved the complete transformation of three floors within a landmark commercial tower. The design focuses on fostering collaboration and innovation, featuring flexible workspaces, high-tech meeting rooms, and vibrant break-out areas. Tata Build managed the entire process from structural modifications to fine interior finishes, ensuring compliance with strict commercial standards.",
    year: "2023",
    client: "Nexus Global Tech",
    scope: [
      "Complete Floor Fit-out",
      "Structural Steel Modifications",
      "Integrated Smart Office Systems",
      "Acoustic Ceiling Treatments",
      "Commercial-grade Lighting Design"
    ],
    gallery: [
      "/images/projects/gallery-downtown-tech-hub-1.jpg",
      "/images/projects/gallery-downtown-tech-hub-2.jpg",
      "/images/projects/gallery-downtown-tech-hub-3.jpg"
    ]
  },
  {
    slug: "heritage-terrace-renovation",
    title: "Heritage Terrace Renovation",
    location: "Melbourne, VIC",
    category: "Renovation",
    image: "/images/projects/heritage-terrace-renovation-v2.png",
    description: "A delicate restoration and modern extension of a heritage-listed terrace home in Melbourne.",
    details: "This project required a meticulous approach to preserve the historical integrity of the Victorian terrace while adding a contemporary open-plan extension at the rear. The work involved structural repairs to the original masonry, restoration of ornate period details, and the seamless integration of a modern kitchen, living area, and master suite. Tata Build worked closely with heritage consultants to ensure all work respected the building's historical significance.",
    year: "2022",
    client: "Private Residential Client",
    scope: [
      "Heritage Masonry Restoration",
      "Modern Rear Extension",
      "Period Detail Replication",
      "Structural Defect Repair",
      "Custom Heritage Windows"
    ],
    gallery: [
      "/images/projects/gallery-heritage-terrace-renovation-2.jpg",
      "/images/projects/gallery-heritage-terrace-renovation-3.jpg",
      "/images/projects/gallery-modern-coastal-villa-1.jpg"
    ]
  },
  {
    slug: "industrial-logistics-center",
    title: "Industrial Logistics Center",
    location: "Brisbane, QLD",
    category: "Commercial",
    image: "/images/projects/industrial-logistics-center-v2.png",
    description: "A large-scale industrial facility designed for high-efficiency logistics and distribution operations.",
    details: "The Industrial Logistics Center is a state-of-the-art warehouse facility featuring over 10,000 sqm of high-clearance storage space. The project involved extensive site preparation, heavy-duty concrete slab construction, and large-span portal frame erection. Tata Build delivered the project with a focus on durability, safety, and operational efficiency, meeting all industrial compliance requirements.",
    year: "2023",
    client: "Fortress Logistics Group",
    scope: [
      "Bulk Earthworks and Site Prep",
      "Heavy-Duty Industrial Slabs",
      "Steel Portal Frame Construction",
      "Commercial Loading Docks",
      "Fire Suppression Systems"
    ],
    gallery: [
      "/images/projects/gallery-industrial-logistics-center-1.jpg",
      "/images/projects/gallery-industrial-logistics-center-3.jpg",
      "/images/projects/gallery-downtown-tech-hub-1.jpg"
    ]
  },
  {
    slug: "luxury-penthouse-fitout",
    title: "Luxury Penthouse Fitout",
    location: "Perth, WA",
    category: "Interior Fitout",
    image: "/images/projects/luxury-penthouse-fitout.png",
    description: "An ultra-luxury interior fit-out for a flagship penthouse apartment overlooking the Swan River.",
    details: "This project showcased Tata Build's ability to deliver high-end interior finishes for premium residential spaces. The fit-out included bespoke joinery throughout, imported marble flooring, custom lighting solutions, and high-tech home automation. Every detail was executed to the highest standards of craftsmanship, creating an unparalleled living environment.",
    year: "2023",
    client: "Private Executive Client",
    scope: [
      "Bespoke Kitchen Joinery",
      "Imported Marble Installation",
      "Advanced Home Automation",
      "Custom Decorative Plaster",
      "Premium Interior Painting"
    ],
    gallery: [
      "/images/projects/gallery-luxury-penthouse-fitout-1.jpg",
      "/images/projects/gallery-luxury-penthouse-fitout-2.jpg",
      "/images/projects/gallery-modern-coastal-villa-2.jpg"
    ]
  },
  {
    slug: "sustainable-urban-apartments",
    title: "Sustainable Urban Apartments",
    location: "Adelaide, SA",
    category: "Residential",
    image: "/images/projects/sustainable-urban-apartments.png",
    description: "A multi-residential development focusing on environmental sustainability and urban living efficiency.",
    details: "This development consists of 12 modern apartments designed with a commitment to low-impact living. The project features solar energy systems, rainwater harvesting, passive thermal design, and the use of recycled building materials. Tata Build successfully navigated the complex regulatory requirements for sustainable construction, delivering a high-quality development that sets a new standard for urban residential projects.",
    year: "2022",
    client: "GreenSpace Developments",
    scope: [
      "Multi-Unit Construction",
      "Passive Solar Design",
      "Water Recycling Systems",
      "Energy Efficiency Auditing",
      "Sustainable Material Sourcing"
    ],
    gallery: [
      "/images/projects/gallery-sustainable-urban-apartments-1.jpg",
      "/images/projects/gallery-sustainable-urban-apartments-2.jpg",
      "/images/projects/gallery-downtown-tech-hub-3.jpg"
    ]
  },
];
