import { imageAssets } from "./site";

export type CourseCategory =
  | "Marine Courses"
  | "Shipping & Logistics"
  | "Oil & Gas"
  | "Cruise Ship Training"
  | "Industrial Safety"
  | "Other Professional Programs";

export type Course = {
  slug: string;
  name: string;
  category: CourseCategory;
  summary: string;
  description: string;
  eligibility: string;
  duration: string;
  fees: string;
  certification: string;
  curriculum: string[];
  careers: string[];
  placement: string;
  image: string;
  level: "Foundation" | "Professional" | "Advanced";
};

export const categories: {
  slug: string;
  name: CourseCategory;
  description: string;
  image: string;
}[] = [
  {
    slug: "marine-courses",
    name: "Marine Courses",
    description: "STCW-aligned maritime foundations, deck operations, seamanship, and shipboard readiness.",
    image: imageAssets.ship,
  },
  {
    slug: "shipping-logistics",
    name: "Shipping & Logistics",
    description: "Port operations, freight forwarding, documentation, and supply chain execution.",
    image: imageAssets.logistics,
  },
  {
    slug: "oil-gas",
    name: "Oil & Gas",
    description: "Entry-ready offshore, rig safety, permit systems, and operational awareness training.",
    image: imageAssets.safety,
  },
  {
    slug: "cruise-ship-training",
    name: "Cruise Ship Training",
    description: "Hospitality, safety, guest service, and shipboard life preparation for cruise careers.",
    image: imageAssets.cruise,
  },
  {
    slug: "industrial-safety",
    name: "Industrial Safety",
    description: "Workplace safety, fire prevention, first aid, and compliance-focused practical training.",
    image: imageAssets.safety,
  },
  {
    slug: "professional-programs",
    name: "Other Professional Programs",
    description: "Career-oriented communication, interview, computer, and employability programs.",
    image: imageAssets.classroom,
  },
];

export const courses: Course[] = [
  {
    slug: "pre-sea-general-purpose-rating",
    name: "Pre-Sea General Purpose Rating",
    category: "Marine Courses",
    summary: "A practical entry program for candidates preparing for deck and engine rating roles.",
    description:
      "Build shipboard discipline, basic safety knowledge, watchkeeping awareness, and operational readiness for merchant navy entry-level roles.",
    eligibility: "10th pass or equivalent, medically fit for sea service.",
    duration: "6 months",
    fees: "₹95,000",
    certification: "Institute completion certificate with safety training records.",
    curriculum: [
      "Ship terminology and seamanship",
      "Basic marine engineering awareness",
      "Personal survival and fire prevention",
      "Watchkeeping and shipboard discipline",
      "Interview and documentation readiness",
    ],
    careers: ["Deck Rating", "Engine Rating", "Trainee Seaman", "Ship Support Crew"],
    placement: "Placement cell support with interview scheduling, documentation guidance, and recruiter referrals.",
    image: imageAssets.ship,
    level: "Foundation",
  },
  {
    slug: "shipping-logistics-management",
    name: "Shipping & Logistics Management",
    category: "Shipping & Logistics",
    summary: "Learn port, cargo, freight, and documentation workflows used by logistics teams.",
    description:
      "A job-focused program covering shipping documentation, container operations, import-export basics, and logistics coordination.",
    eligibility: "12th pass, graduate, or working professional.",
    duration: "3 months",
    fees: "₹45,000",
    certification: "Professional certificate in shipping and logistics management.",
    curriculum: [
      "Freight forwarding and customs basics",
      "Bill of lading, manifests, and invoices",
      "Port and container operations",
      "Incoterms and trade documentation",
      "Logistics software workflow practice",
    ],
    careers: ["Logistics Executive", "Documentation Executive", "Freight Coordinator", "Port Operations Assistant"],
    placement: "Resume preparation, job alerts, mock interviews, and partner company introductions.",
    image: imageAssets.logistics,
    level: "Professional",
  },
  {
    slug: "offshore-oil-gas-safety",
    name: "Offshore Oil & Gas Safety",
    category: "Oil & Gas",
    summary: "Safety-first offshore orientation for candidates entering oil, gas, and rig environments.",
    description:
      "Understand hazard identification, permit-to-work systems, emergency response, PPE, and safe working expectations offshore.",
    eligibility: "10th pass or above, medically fit for industrial work.",
    duration: "45 days",
    fees: "₹38,000",
    certification: "Offshore safety orientation certificate.",
    curriculum: [
      "Offshore workplace hazards",
      "Permit to work and toolbox talks",
      "Fire safety and emergency response",
      "Working at height and confined spaces",
      "PPE, housekeeping, and reporting culture",
    ],
    careers: ["Safety Assistant", "Rig Support Trainee", "Offshore Helper", "Industrial Safety Trainee"],
    placement: "Candidate profiling and recruiter mapping for offshore support and safety roles.",
    image: imageAssets.safety,
    level: "Foundation",
  },
  {
    slug: "cruise-hospitality-crew",
    name: "Cruise Hospitality & Crew Training",
    category: "Cruise Ship Training",
    summary: "Prepare for cruise hospitality roles with service, safety, communication, and grooming modules.",
    description:
      "A practical bridge program for cruise career aspirants covering guest service, shipboard etiquette, safety, and interview readiness.",
    eligibility: "12th pass with basic English communication.",
    duration: "2 months",
    fees: "₹55,000",
    certification: "Cruise hospitality and crew readiness certificate.",
    curriculum: [
      "Guest service standards",
      "Housekeeping and food service basics",
      "Shipboard culture and grooming",
      "Safety drills and emergency awareness",
      "English communication and interviews",
    ],
    careers: ["Cabin Steward", "F&B Trainee", "Housekeeping Assistant", "Guest Service Crew"],
    placement: "Cruise CV preparation, grooming audits, video interview support, and agency referrals.",
    image: imageAssets.cruise,
    level: "Professional",
  },
  {
    slug: "industrial-safety-management",
    name: "Industrial Safety Management",
    category: "Industrial Safety",
    summary: "A practical safety program for construction, manufacturing, port, and plant environments.",
    description:
      "Develop the competence to identify hazards, support compliance, conduct safety briefings, and assist incident prevention.",
    eligibility: "10th pass, ITI, diploma, graduate, or working professional.",
    duration: "3 months",
    fees: "₹42,000",
    certification: "Industrial safety management certificate.",
    curriculum: [
      "Hazard identification and risk assessment",
      "Fire prevention and first aid",
      "Scaffolding and work-at-height safety",
      "Incident reporting and audits",
      "Legal compliance overview",
    ],
    careers: ["Safety Supervisor", "HSE Assistant", "Site Safety Coordinator", "Fire Safety Assistant"],
    placement: "Interview preparation and hiring-company referrals for safety and HSE openings.",
    image: imageAssets.safety,
    level: "Professional",
  },
  {
    slug: "professional-communication-employability",
    name: "Professional Communication & Employability",
    category: "Other Professional Programs",
    summary: "Improve workplace English, interviews, digital confidence, and professional presentation.",
    description:
      "A career booster for students who need stronger communication, resume, interview, and workplace behavior skills.",
    eligibility: "Open to students and job seekers.",
    duration: "6 weeks",
    fees: "₹18,000",
    certification: "Employability skills certificate.",
    curriculum: [
      "Spoken English and confidence building",
      "Resume and email writing",
      "Interview and group discussion practice",
      "Basic computer and digital workplace skills",
      "Professional behavior and reporting",
    ],
    careers: ["Entry-Level Executive", "Trainee Coordinator", "Customer Support", "Operations Assistant"],
    placement: "Mock interviews, resume review, and entry-level opportunity guidance.",
    image: imageAssets.classroom,
    level: "Foundation",
  },
];

export function getCourse(slug: string) {
  return courses.find((course) => course.slug === slug);
}

export function getCategory(slug: string) {
  return categories.find((category) => category.slug === slug);
}

export function getCoursesByCategory(categoryName: CourseCategory) {
  return courses.filter((course) => course.category === categoryName);
}
