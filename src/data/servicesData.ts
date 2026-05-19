import {
  Home as HomeIcon,
  Building2,
  Hammer,
  Settings,
  Paintbrush,
  Stethoscope,
  Layers,
  Trees,
  Lightbulb,
  TrendingUp,
} from "lucide-react";

export interface FAQItem {
  question: string;
  answer: string;
}

export interface Service {
  slug: string;
  title: string;
  description: string;
  details: string;
  icon: any;
  image: string;
  features: string[];
  faqs: FAQItem[];
  process: {
    title: string;
    description: string;
  }[];
}

export const services: Service[] = [
  {
    slug: "residential-construction",
    title: "Residential Construction",
    description: "New home construction built to the highest standards, from concept through to handover.",
    details: "We build new homes that reflect our clients' vision and lifestyle, applying quality materials, skilled tradespeople, and rigorous project management at every stage. From initial design review and council approvals through to slab, frame, lockup, fitout, and final handover, Tata Build manages the complete residential construction process. We work closely with homeowners throughout the build, maintaining open communication and delivering a home that exceeds client expectations.",
    icon: HomeIcon,
    image: "/images/service/Residential-Construction.jpg",
    features: [
      "Custom New Home Builds",
      "Council Approval Management",
      "Full Project Management",
      "High-Quality Materials",
      "Licensed Trade Coordination"
    ],
    faqs: [
      {
        question: "How long does it take to build a new home?",
        answer: "A typical new home build takes between 6 to 12 months, depending on the complexity of the design, site conditions, and council approval timelines."
      },
      {
        question: "Do you handle the Development Application (DA) process?",
        answer: "Yes, we fully coordinate the DA and CDC (Complying Development Certificate) processes, working with certifiers and local councils to get your project approved."
      },
      {
        question: "Can I make changes to the design during construction?",
        answer: "While it is best to finalize designs early, we accommodate 'variations' through a formal process to ensure budget and timeline impacts are clearly understood."
      },
      {
        question: "What building warranties do you provide?",
        answer: "We provide all statutory warranties required under Australian law, including Home Building Compensation insurance and structural guarantees."
      }
    ],
    process: [
      { title: "Project Visioning", description: "Initial meeting to discuss your new home goals, budget, and site constraints." },
      { title: "Design & Approvals", description: "Coordinating with architects and local councils for DA/CDC approvals." },
      { title: "Construction Phase", description: "Our expert team builds your home with daily site supervision and quality checks." },
      { title: "Final Handover", description: "Comprehensive final inspection and handing over the keys to your new home." }
    ]
  },
  {
    slug: "commercial-construction",
    title: "Commercial Construction",
    description: "Commercial building projects delivered with precision and safety.",
    details: "Our commercial construction capability spans office buildings, retail fitouts, industrial facilities, and mixed-use developments. We apply the same commitment to quality and safety on commercial projects as we do on residential builds, backed by experienced site supervisors and skilled tradespeople.",
    icon: Building2,
    image: "/images/service/Commercial-Construction.webp",
    features: [
      "Office & Retail Construction",
      "Industrial Facilities",
      "Strict Timeline Management",
      "Turnkey Solutions"
    ],
    faqs: [
      {
        question: "What commercial sectors do you specialize in?",
        answer: "We handle projects across retail fit-outs, corporate office spaces, industrial warehouses, and mixed-use commercial developments."
      },
      {
        question: "How do you manage site safety in high-traffic areas?",
        answer: "We implement strict WHS protocols, including detailed traffic management plans and secure perimeter hoarding to ensure public and worker safety."
      },
      {
        question: "Can you work outside of normal business hours?",
        answer: "Yes, for commercial renovations and fit-outs, we often schedule works after hours or on weekends to minimize disruption to your business operations."
      },
      {
        question: "Do you offer turnkey commercial solutions?",
        answer: "Absolutely. We can manage everything from initial shell construction to the final interior fit-out and systems integration."
      }
    ],
    process: [
      { title: "Feasibility Audit", description: "Evaluating project scope against site constraints and commercial objectives." },
      { title: "Project Planning", description: "Ensuring all designs meet project requirements and safety standards." },
      { title: "Rapid Execution", description: "Strict project management to hit commercial deadlines without compromising quality." },
      { title: "Project Completion", description: "Final handover of a complete commercial space." }
    ]
  },
  {
    slug: "renovations-extensions",
    title: "Renovations & Extensions",
    description: "Quality home renovations and extensions that add space, value, and functionality to existing properties.",
    details: "Whether you are adding a new bedroom, extending the living area, updating a kitchen or bathroom, or undertaking a whole-home renovation, Tata Build delivers renovation and extension projects that transform existing properties. We work with homeowners to understand their goals, provide honest guidance on scope and budget, and execute the work to a high standard.",
    icon: Hammer,
    image: "/images/service/renovations-extensions.webp",
    features: [
      "Kitchen & Bathroom Remodels",
      "Structural Extensions",
      "Home Modernization",
      "Seamless Integration",
      "Value-Adding Upgrades"
    ],
    faqs: [
      {
        question: "Can I live in the house during a renovation?",
        answer: "Depending on the scope, we often zone the construction to allow you to remain in the home. However, for major structural extensions, we may recommend temporary relocation."
      },
      {
        question: "How do you ensure the extension matches the existing house?",
        answer: "We carefully source matching bricks, roof tiles, and architectural details to ensure the new extension integrates seamlessly with your home's original aesthetic."
      },
      {
        question: "Do home extensions always require council approval?",
        answer: "Most structural extensions require either a DA or CDC. We assess your property's specific zoning and constraints to determine the fastest approval path."
      },
      {
        question: "Can you provide a fixed-price contract for renovations?",
        answer: "Yes, once the full scope is defined and site inspections are complete, we provide fixed-price contracts to prevent unexpected budget overruns."
      }
    ],
    process: [
      { title: "Scope Assessment", description: "Detailed walkthrough of your existing space to determine renovation possibilities." },
      { title: "Design Integration", description: "Ensuring new extensions blend seamlessly with your home's original character." },
      { title: "Careful Construction", description: "Working respectfully within your home to execute upgrades with minimal disruption." },
      { title: "Project Reveal", description: "Final cleanup and inspection of your transformed and modernized living space." }
    ]
  },
  {
    slug: "project-management-consulting",
    title: "Project Management & Consulting",
    description: "Expert construction project management ensuring every build is delivered on time, within budget, and to specification.",
    details: "Our project management and consulting service provides clients with experienced construction management expertise to oversee and coordinate their build from start to finish. We develop detailed project programmes, manage subcontractors and suppliers, and monitor progress against schedule and budget.",
    icon: Settings,
    image: "/images/service/project-management-consulting.webp",
    features: [
      "Detailed Project Programming",
      "Subcontractor Coordination",
      "Budget & Schedule Oversight",
      "Quality Control Inspections",
      "Independent Consulting"
    ],
    faqs: [
      {
        question: "Why should I hire a construction project manager?",
        answer: "A professional manager ensures your project stays on schedule, avoids costly mistakes, maintains safety standards, and coordinates all trades efficiently."
      },
      {
        question: "How do you handle project delays?",
        answer: "We use proactive scheduling tools to identify risks early. If a delay occurs (e.g., weather), we adjust resources to recover time where possible."
      },
      {
        question: "Can you consult on projects already in progress?",
        answer: "Yes, we offer audit and recovery services for projects that are experiencing difficulties or have stalled."
      }
    ],
    process: [
      { title: "Project Audit", description: "Reviewing existing plans, budgets, and schedules to identify optimization areas." },
      { title: "Strategic Planning", description: "Developing a robust project roadmap with clear milestones and risk mitigation." },
      { title: "Oversight & Management", description: "Daily coordination of trades and vendors to keep the project on track." },
      { title: "Quality Assurance", description: "Continuous monitoring to ensure every stage meets specified building requirements." }
    ]
  },
  {
    slug: "interior-fitouts",
    title: "Interior Fitouts",
    description: "Professional interior fitout services for residential and commercial spaces, combining functionality with quality finish.",
    details: "Our interior fitout team delivers high-quality finishing work for both new builds and renovation projects. We manage joinery, flooring, tiling, painting, lighting, and all interior trades to create spaces that are functional, durable, and visually impressive.",
    icon: Paintbrush,
    image: "/images/service/interior-fitouts.webp",
    features: [
      "Custom Joinery & Cabinets",
      "Premium Flooring Solutions",
      "Commercial Workspace Design",
      "Residential Interior Finishes",
      "Lighting & Electrical Setup"
    ],
    faqs: [
      {
        question: "Do you handle custom joinery?",
        answer: "Yes, we work with master cabinet makers to deliver bespoke joinery for kitchens, offices, and retail displays."
      },
      {
        question: "What types of commercial flooring do you offer?",
        answer: "We provide polished concrete, industrial-grade carpets, luxury vinyl planks (LVP), and durable hardwood options."
      }
    ],
    process: [
      { title: "Design Selection", description: "Choosing materials, colors, and finishes that match your interior vision." },
      { title: "Site Preparation", description: "Protecting existing surfaces and preparing the area for new installations." },
      { title: "Precision Fitting", description: "Expert installation of joinery, flooring, and decorative elements." },
      { title: "Polishing & Handover", description: "Final cleaning and detailed walkthrough to ensure a flawless finish." }
    ]
  },
  {
    slug: "structural-repairs-maintenance",
    title: "Structural Repairs & Maintenance",
    description: "Assessment and repair of structural defects and ongoing building maintenance for residential and commercial properties.",
    details: "Our structural repair and maintenance service addresses defects, deterioration, and damage in existing buildings. We conduct thorough assessments to identify the cause of structural issues, then develop and execute repair programmes using appropriate materials.",
    icon: Stethoscope,
    image: "/images/service/Structural-Repairs.webp",
    features: [
      "Defect Assessment",
      "Foundation Repairs",
      "Concrete Remediation",
      "Preventative Maintenance",
      "Asset Life Extension"
    ],
    faqs: [
      {
        question: "What are common signs of structural failure?",
        answer: "Cracked walls (larger than 3mm), doors that won't close, uneven floors, and sagging roof lines are key indicators that require professional assessment."
      },
      {
        question: "Do you provide structural reports?",
        answer: "We work alongside qualified structural engineers to provide comprehensive reports and repair specifications."
      }
    ],
    process: [
      { title: "Expert Assessment", description: "Thorough inspection to identify the root cause of structural issues." },
      { title: "Engineering Review", description: "Coordinating with structural engineers to develop repair plans." },
      { title: "Precision Repair", description: "Executing repairs using high-grade materials and specialized techniques." },
      { title: "Safety Verification", description: "Final checks to ensure structural integrity and building safety." }
    ]
  },
  {
    slug: "concrete-formwork",
    title: "Concrete & Formwork",
    description: "Specialist concrete and formwork services for foundations, slabs, driveways, and structural concrete elements.",
    details: "Tata Build's concrete and formwork specialists deliver precision concrete work for residential and commercial projects. We handle footings and foundations, suspended slabs, ground floor slabs, driveways, and pathways.",
    icon: Layers,
    image: "/images/service/concrete-formwork.webp",
    features: [
      "Slab on Ground",
      "Suspended Concrete Slabs",
      "Specialist Formwork Design",
      "Reinforcement Fixing",
      "Decorative Concrete Finishes"
    ],
    faqs: [
      {
        question: "How long does it take for a concrete slab to cure?",
        answer: "While concrete sets within 24 hours, it takes 28 days to reach its full design strength. We advise on proper curing methods to ensure longevity."
      },
      {
        question: "What reinforcement do you use for residential slabs?",
        answer: "We typically use SL82 or SL92 steel mesh with appropriate trench mesh for footings, strictly following engineering specifications."
      }
    ],
    process: [
      { title: "Site Prep & Boxing", description: "Excavation and setting up formwork precisely to engineering plans." },
      { title: "Reinforcement", description: "Placing steel mesh and bar according to structural specifications." },
      { title: "Pour & Finish", description: "Expert concrete pouring and specialized finishing (smooth, brushed, or decorative)." },
      { title: "Curing Management", description: "Advising on proper moisture retention for maximum structural strength." }
    ]
  },
  {
    slug: "site-preparation-earthworks",
    title: "Site Preparation & Earthworks",
    description: "Full site preparation, clearing, levelling, and earthworks services ready for construction commencement.",
    details: "Proper site preparation is critical to the success of any construction project. Tata Build provides comprehensive services including site clearing, demolition, bulk earthworks, and subgrade preparation.",
    icon: Trees,
    image: "/images/service/site-preparation-earthworks.webp",
    features: [
      "Bulk Earthworks & Leveling",
      "Site Clearing & Demolition",
      "Retaining Wall Preparation",
      "Drainage & Utility Trenches"
    ],
    faqs: [
      {
        question: "Do you handle site clearing and demolition?",
        answer: "Yes, we manage the removal of existing structures, vegetation, and debris, ensuring the site is level and ready for construction."
      }
    ],
    process: [
      { title: "Site Survey", description: "Determining existing utility locations and site boundaries." },
      { title: "Clearing & Demo", description: "Removal of structures, vegetation, and debris with full safety." },
      { title: "Bulk Earthworks", description: "Excavation and leveling to prepare the site for building platforms." },
      { title: "Subgrade Approval", description: "Ensuring the base is compacted and ready for structural foundations." }
    ]
  },
  {
    slug: "design-planning-advisory",
    title: "Design & Planning Advisory",
    description: "Practical design and planning guidance to help clients navigate approvals, permits, and construction planning in Australia.",
    details: "Our design and planning advisory service helps clients understand the approval and planning requirements for their construction project and make informed decisions before committing to build.",
    icon: Lightbulb,
    image: "/images/service/design-planning-advisory.webp",
    features: [
      "Council DA Guidance",
      "Building Permit Coordination",
      "Construction Feasibility",
      "Cost Planning Input",
      "Material Selection Advice"
    ],
    faqs: [
      {
        question: "Can you help with the design phase?",
        answer: "Yes, we offer advisory services to optimize your design for construction feasibility and budget before you finalize plans."
      }
    ],
    process: [
      { title: "Initial Consultation", description: "Reviewing your concepts and providing feasibility feedback." },
      { title: "Regulation Review", description: "Checking local council codes and building requirements for your area." },
      { title: "Plan Optimization", description: "Advising on material choices and construction methods to fit your budget." },
      { title: "Permit Roadmap", description: "Developing a clear path for obtaining all necessary building approvals." }
    ]
  },
  {
    slug: "property-development",
    title: "Property Development",
    description: "End-to-end property development support from site acquisition and planning through to construction and project completion.",
    details: "For investors and developers, Tata Build provides end-to-end property development support that combines our construction expertise with project feasibility guidance and development management.",
    icon: TrendingUp,
    image: "/images/service/property-development.jpg",
    features: [
      "Feasibility Assessments",
      "Site Acquisition Support",
      "Development Management",
      "Multi-Unit Construction",
      "Investment Strategy Guidance"
    ],
    faqs: [
      {
        question: "Do you handle multi-unit developments?",
        answer: "Yes, we have extensive experience in duplex, townhouse, and low-rise multi-residential developments."
      },
      {
        question: "Can you assist with project feasibility?",
        answer: "We provide detailed cost analysis and construction timelines to help you determine the ROI of a potential development site."
      }
    ],
    process: [
      { title: "Site Analysis", description: "Evaluating potential development sites for ROI and feasibility." },
      { title: "Strategic Planning", description: "Developing development programs that maximize site potential." },
      { title: "Development Mgmt", description: "Coordinating all stages from planning approvals to construction." },
      { title: "Asset Completion", description: "Delivering a market-ready development on time and within budget." }
    ]
  },
];
