import { imageAssets } from "./site";

export type CourseCategory =
  | "Offshore Training"
  | "Onshore Training"
  | "Wharehouse Management in Logistics and Supply Chain"
  | "Shipbuilding Careers"
  | "Diploma in Fire and Safety Engineering";

export type Course = {
  slug: string;
  name: string;
  category: CourseCategory;
  summary: string;
  overview: string;
  description: string;
  eligibility: string;
  duration: string;
  fees: string;
  certification: string;
  curriculumLabel: string;
  curriculum: string[];
  trainingIncludes?: string[];
  suitableFor?: string[];
  careers: string[];
  placement: string;
  image: string;
  level: "Foundation" | "Professional" | "Advanced";
  keywords: string[];
};

export const categories: {
  slug: string;
  name: CourseCategory;
  description: string;
  image: string;
}[] = [
  {
    slug: "onshore-training",
    name: "Onshore Training",
    description:
      "Build a successful career in the onshore oil & gas industry with practical training for refineries, petrochemical plants, power plants, construction projects, and oil & gas facilities.",
    image: imageAssets.onshoreTraining,
  },
  {
    slug: "offshore-training",
    name: "Offshore Training",
    description:
      "Build a career in the global oil & gas industry with offshore and onshore training designed for beginners and aspiring professionals.",
    image: imageAssets.offshoreTraining,
  },
  {
    slug: "warehouse-logistics",
    name: "Wharehouse Management in Logistics and Supply Chain",
    description:
      "Practical warehouse, logistics, inventory, store keeping, and supply chain career training with placement assistance.",
    image: imageAssets.warehouseLogistics,
  },
  {
    slug: "shipbuilding-careers",
    name: "Shipbuilding Careers",
    description:
      "Hands-on shipbuilding training for rewarding careers in leading shipyards across India and abroad.",
    image: imageAssets.shipbuildingCareers,
  },
  {
    slug: "fire-safety-careers",
    name: "Diploma in Fire and Safety Engineering",
    description:
      "Fire and safety training for industrial, offshore, emergency response, and HSE career pathways.",
    image: imageAssets.fireSafetyCareers,
  },
];

const offshoreOverview =
  "Prepare yourself for rewarding opportunities in the offshore and onshore oil & gas sector with industry-focused training designed for beginners and aspiring professionals. Our practical programs help candidates develop the knowledge, safety awareness, and workplace skills required for international standards.";

const offshorePlacement =
  "Professional training and dedicated placement support help candidates take the first step toward a safer, stronger, and more successful future in the global oil & gas industry.";

const onshoreOverview =
  "Our Onshore Training Programs are designed to equip candidates with the technical knowledge, practical skills, and safety awareness required to work in refineries, petrochemical plants, power plants, construction projects, and oil & gas facilities. Whether you are a fresher or an experienced professional looking to enhance your skills, our industry-oriented training prepares you for successful careers in India and overseas.";

const onshorePlacement =
  "With practical skills, safety-focused learning, and placement support, candidates are prepared to take on rewarding roles in refineries, petrochemical plants, power plants, and oil & gas projects around the world.";

const warehouseOverview =
  "Learn warehouse operations, inventory control, material handling, logistics coordination, and supply chain processes with practical, job-focused training for warehouse and logistics career pathways.";

const warehousePlacement =
  "Job-oriented training and placement support help candidates prepare for warehouse operations, inventory, logistics coordination, and supply chain roles in India and overseas.";

const shipbuildingOverview =
  "Start your career in the shipbuilding and marine industry with practical training in ship construction, fabrication, welding, fitting, marine operations, maintenance, and shipyard safety.";

const shipbuildingPlacement =
  "Practical shipbuilding training and placement support help candidates prepare for opportunities in shipyards, marine construction companies, fabrication units, and industrial maintenance projects.";

const fireSafetyOverview =
  "Build practical skills in fire prevention, industrial safety, emergency response, risk assessment, hazard control, accident prevention, and workplace safety for safety operations careers.";

const fireSafetyPlacement =
  "Industry-oriented fire and safety training with placement support helps candidates prepare for roles in industrial safety, emergency response, fire prevention, and workplace safety operations.";

export const courses: Course[] = [
  {
    slug: "rigging-slinging",
    name: "Rigging & Slinging",
    category: "Offshore Training",
    summary: "Safe handling, lifting, and movement of heavy equipment using rigging accessories.",
    overview: offshoreOverview,
    description:
      "Learn the safe handling, lifting, and movement of heavy equipment using slings, shackles, chains, and lifting accessories. Gain practical knowledge of lifting operations, inspection procedures, load calculations, and safe work practices.",
    eligibility: "Freshers, 10th / 12th pass candidates, ITI / diploma holders, and candidates seeking offshore careers.",
    duration: "Contact admissions for batch details",
    fees: "Enquire for fees",
    certification: "Professional certification support",
    curriculumLabel: "Key Skills",
    curriculum: ["Safe lifting techniques", "Sling inspection", "Load handling", "Rigging equipment usage", "Workplace safety"],
    careers: ["Rigger", "Slinger", "Lifting Assistant", "Offshore Support Trainee"],
    placement: offshorePlacement,
    image: imageAssets.riggingSlinging,
    level: "Foundation",
    keywords: ["rigging and slinging course", "offshore lifting training", "oil and gas rigging training"],
  },
  {
    slug: "banksman-training",
    name: "Banksman Training",
    category: "Offshore Training",
    summary: "Crane signaling, vehicle marshalling, communication, and lifting coordination training.",
    overview: offshoreOverview,
    description:
      "Develop the skills required to safely guide cranes, vehicles, and heavy machinery during lifting and movement operations. Learn standard hand signals, communication techniques, and hazard identification.",
    eligibility: "Freshers, 10th / 12th pass candidates, ITI / diploma holders, and candidates seeking offshore careers.",
    duration: "Contact admissions for batch details",
    fees: "Enquire for fees",
    certification: "Professional certification support",
    curriculumLabel: "Key Skills",
    curriculum: ["Crane signaling", "Vehicle marshalling", "Communication procedures", "Risk assessment", "Safe lifting coordination"],
    careers: ["Banksman", "Crane Signalman", "Vehicle Marshal", "Lifting Operations Assistant"],
    placement: offshorePlacement,
    image: imageAssets.banksmanTraining,
    level: "Foundation",
    keywords: ["banksman training", "crane signaling course", "vehicle marshalling training"],
  },
  {
    slug: "oil-gas-field-training",
    name: "Oil & Gas Field Training",
    category: "Offshore Training",
    summary: "Field operations, equipment, safety systems, and oil and gas industry standards.",
    overview: offshoreOverview,
    description:
      "Gain a strong understanding of upstream, midstream, and downstream operations in the oil and gas industry. This program introduces candidates to field operations, equipment, safety systems, and industry best practices.",
    eligibility: "Beginners and aspiring professionals preparing for oil and gas field careers.",
    duration: "Contact admissions for batch details",
    fees: "Enquire for fees",
    certification: "Professional certification support",
    curriculumLabel: "Course Highlights",
    curriculum: ["Oil and gas production process", "Field equipment overview", "Safety regulations", "Operational procedures", "Industry standards"],
    careers: ["Oil & Gas Field Trainee", "Field Operations Assistant", "Plant Support Trainee", "Production Support Trainee"],
    placement: offshorePlacement,
    image: imageAssets.oilGasFieldTraining,
    level: "Foundation",
    keywords: ["oil and gas field training", "oil gas production course", "field operations training"],
  },
  {
    slug: "roustabout-training",
    name: "Roustabout (Unskilled) Training",
    category: "Offshore Training",
    summary: "Entry-level training for offshore drilling, production, support, and safety procedures.",
    overview: offshoreOverview,
    description:
      "An ideal entry-level course for candidates looking to begin a career in offshore drilling and production. Learn basic offshore operations, manual handling, housekeeping, equipment support, and safety procedures.",
    eligibility: "Freshers, 10th / 12th pass candidates, ITI / diploma holders, and candidates seeking offshore careers.",
    duration: "Contact admissions for batch details",
    fees: "Enquire for fees",
    certification: "Professional certification support",
    curriculumLabel: "Key Skills / Learning Areas",
    curriculum: ["Basic offshore operations", "Manual handling", "Housekeeping", "Equipment support", "Safety procedures"],
    suitableFor: ["Freshers", "10th / 12th pass candidates", "ITI / diploma holders", "Candidates seeking offshore careers"],
    careers: ["Roustabout", "Offshore Helper", "Rig Support Trainee", "Drilling Support Assistant"],
    placement: offshorePlacement,
    image: imageAssets.roustaboutTraining,
    level: "Foundation",
    keywords: ["roustabout training", "offshore drilling entry course", "rig support training"],
  },
  {
    slug: "offshore-onshore-industry-training",
    name: "Offshore & Onshore Industry Training",
    category: "Offshore Training",
    summary: "Operational environment training for offshore platforms and onshore oil and gas facilities.",
    overview: offshoreOverview,
    description:
      "Receive comprehensive training covering the operational environments of both offshore platforms and onshore oil and gas facilities. Understand work procedures, equipment handling, safety protocols, and industry expectations.",
    eligibility: "Freshers and experienced professionals looking to upgrade industry skills.",
    duration: "Contact admissions for batch details",
    fees: "Enquire for fees",
    certification: "Professional certification support",
    curriculumLabel: "Training Includes",
    curriculum: ["Offshore operations", "Onshore plant operations", "PPE usage", "Workplace safety", "Emergency response basics"],
    trainingIncludes: ["Offshore operations", "Onshore plant operations", "PPE usage", "Workplace safety", "Emergency response basics"],
    careers: ["Offshore Operations Trainee", "Onshore Plant Trainee", "Industrial Support Assistant", "Oil & Gas Helper"],
    placement: offshorePlacement,
    image: imageAssets.offshoreOnshoreIndustryTraining,
    level: "Professional",
    keywords: ["offshore onshore industry training", "oil gas plant training", "offshore platform training"],
  },
  {
    slug: "bosiet",
    name: "BOSIET",
    category: "Offshore Training",
    summary: "Basic Offshore Safety Induction and Emergency Training for offshore environments.",
    overview: offshoreOverview,
    description:
      "A globally recognized safety training program that prepares personnel for working safely in offshore environments. The course focuses on emergency procedures, survival techniques, firefighting, and sea survival.",
    eligibility: "Candidates preparing to work safely in offshore environments.",
    duration: "Contact admissions for batch details",
    fees: "Enquire for fees",
    certification: "Professional certification support",
    curriculumLabel: "Training Modules",
    curriculum: ["Offshore safety induction", "Firefighting awareness", "Sea survival", "Emergency escape procedures", "Helicopter safety awareness"],
    trainingIncludes: ["Offshore safety induction", "Firefighting awareness", "Sea survival", "Emergency escape procedures", "Helicopter safety awareness"],
    careers: ["Offshore Trainee", "Rig Support Personnel", "Marine Support Personnel", "Oil & Gas Safety Trainee"],
    placement: offshorePlacement,
    image: imageAssets.bosiet,
    level: "Professional",
    keywords: ["BOSIET course", "basic offshore safety induction", "offshore emergency training"],
  },
  {
    slug: "huet",
    name: "HUET",
    category: "Offshore Training",
    summary: "Helicopter underwater escape, survival procedures, and emergency preparedness training.",
    overview: offshoreOverview,
    description:
      "HUET provides practical training for emergency escape from a helicopter following a water landing. Candidates learn underwater escape techniques, survival procedures, and confidence-building exercises under expert supervision.",
    eligibility: "Candidates preparing for helicopter travel and offshore work environments.",
    duration: "Contact admissions for batch details",
    fees: "Enquire for fees",
    certification: "Professional certification support",
    curriculumLabel: "Course Covers",
    curriculum: ["Helicopter emergency procedures", "Underwater escape techniques", "Survival equipment usage", "Water confidence training", "Emergency preparedness"],
    careers: ["Offshore Worker", "Oil & Gas Support Personnel", "Marine Support Personnel", "Rig Crew Trainee"],
    placement: offshorePlacement,
    image: imageAssets.huet,
    level: "Professional",
    keywords: ["HUET course", "helicopter underwater escape training", "offshore survival training"],
  },
  {
    slug: "mechanical-fitter",
    name: "Mechanical Fitter",
    category: "Onshore Training",
    summary: "Assembly, installation, maintenance, repair, alignment, and tool handling training.",
    overview: onshoreOverview,
    description:
      "Develop the skills required to assemble, install, maintain, and repair mechanical equipment used in industrial plants. The course includes practical training on tools, machinery, alignment techniques, and preventive maintenance.",
    eligibility: "Freshers and experienced professionals; suitable for 10th, 12th, ITI, diploma, and degree candidates.",
    duration: "Contact admissions for batch details",
    fees: "Enquire for fees",
    certification: "Professional certification support",
    curriculumLabel: "Key Skills",
    curriculum: ["Equipment installation", "Mechanical assembly", "Preventive maintenance", "Tool handling", "Industrial safety practices"],
    careers: ["Mechanical Fitter", "Maintenance Fitter", "Plant Fitter", "Industrial Maintenance Trainee"],
    placement: onshorePlacement,
    image: imageAssets.mechanicalFitter,
    level: "Foundation",
    keywords: ["mechanical fitter course", "industrial fitter training", "oil gas mechanical fitter"],
  },
  {
    slug: "pipe-fitter",
    name: "Pipe Fitter",
    category: "Onshore Training",
    summary: "Pipe installation, fabrication, isometric drawings, measurement, alignment, and safety.",
    overview: onshoreOverview,
    description:
      "Learn to install, assemble, and maintain piping systems used in oil and gas plants, refineries, and industrial facilities. Gain hands-on experience in pipe fabrication, reading isometric drawings, and fitting techniques.",
    eligibility: "Freshers and experienced professionals; suitable for 10th, 12th, ITI, diploma, and degree candidates.",
    duration: "Contact admissions for batch details",
    fees: "Enquire for fees",
    certification: "Professional certification support",
    curriculumLabel: "Key Skills",
    curriculum: ["Pipe installation", "Isometric drawing interpretation", "Pipe measurement and alignment", "Flange assembly", "Safety procedures"],
    careers: ["Pipe Fitter", "Piping Assistant", "Fabrication Support Trainee", "Refinery Piping Trainee"],
    placement: onshorePlacement,
    image: imageAssets.pipeFitter,
    level: "Foundation",
    keywords: ["pipe fitter course", "piping training", "isometric drawing pipe fitter"],
  },
  {
    slug: "general-fitter",
    name: "General Fitter",
    category: "Onshore Training",
    summary: "Fitting, fabrication support, workshop operations, maintenance, and safety fundamentals.",
    overview: onshoreOverview,
    description:
      "This program provides comprehensive training in fitting, fabrication support, maintenance, and workshop operations. Candidates learn the fundamentals required to work across various industrial sectors.",
    eligibility: "Freshers and experienced professionals; suitable for 10th, 12th, ITI, diploma, and degree candidates.",
    duration: "Contact admissions for batch details",
    fees: "Enquire for fees",
    certification: "Professional certification support",
    curriculumLabel: "Course Covers",
    curriculum: ["Workshop practices", "Mechanical fitting", "Equipment maintenance", "Measuring instruments", "Workplace safety"],
    careers: ["General Fitter", "Workshop Assistant", "Fabrication Support Trainee", "Maintenance Helper"],
    placement: onshorePlacement,
    image: imageAssets.generalFitter,
    level: "Foundation",
    keywords: ["general fitter course", "workshop fitter training", "industrial fitting course"],
  },
  {
    slug: "instrument-technician",
    name: "Instrument Technician",
    category: "Onshore Training",
    summary: "Instrumentation, calibration, troubleshooting, process control, and automation basics.",
    overview: onshoreOverview,
    description:
      "Gain expertise in installing, calibrating, troubleshooting, and maintaining industrial instruments used for monitoring and controlling plant operations. The course introduces process control systems, sensors, transmitters, and instrumentation standards.",
    eligibility: "Freshers and experienced professionals; suitable for ITI, diploma, degree, and technical candidates.",
    duration: "Contact admissions for batch details",
    fees: "Enquire for fees",
    certification: "Professional certification support",
    curriculumLabel: "Key Skills",
    curriculum: ["Instrument calibration", "Process control systems", "Pressure, temperature, and flow instruments", "Troubleshooting techniques", "Industrial automation basics"],
    careers: ["Instrument Technician", "Calibration Assistant", "Process Control Trainee", "Instrumentation Maintenance Trainee"],
    placement: onshorePlacement,
    image: imageAssets.instrumentTechnician,
    level: "Professional",
    keywords: ["instrument technician course", "instrument calibration training", "industrial automation basics"],
  },
  {
    slug: "electrical-technician",
    name: "Electrical Technician",
    category: "Onshore Training",
    summary: "Industrial electrical systems, wiring, motors, switchgear, testing, and fault diagnosis.",
    overview: onshoreOverview,
    description:
      "Learn the installation, testing, maintenance, and repair of electrical systems in industrial environments. This course focuses on electrical safety, wiring systems, motors, switchgear, and fault diagnosis.",
    eligibility: "Freshers and experienced professionals; suitable for ITI, diploma, degree, and technical candidates.",
    duration: "Contact admissions for batch details",
    fees: "Enquire for fees",
    certification: "Professional certification support",
    curriculumLabel: "Key Skills",
    curriculum: ["Industrial electrical systems", "Motor installation and maintenance", "Cable termination", "Electrical troubleshooting", "Safety standards"],
    careers: ["Electrical Technician", "Industrial Electrician", "Maintenance Electrician", "Electrical Maintenance Trainee"],
    placement: onshorePlacement,
    image: imageAssets.electricalTechnician,
    level: "Professional",
    keywords: ["electrical technician course", "industrial electrical training", "motor maintenance training"],
  },
  {
    slug: "mechanical-technician",
    name: "Mechanical Technician",
    category: "Onshore Training",
    summary: "Rotating and stationary equipment maintenance, inspection, planning, and fault diagnosis.",
    overview: onshoreOverview,
    description:
      "This course prepares candidates to maintain and repair rotating and stationary equipment commonly found in oil and gas facilities. Training combines theoretical knowledge with practical applications.",
    eligibility: "Freshers and experienced professionals; suitable for ITI, diploma, degree, and technical candidates.",
    duration: "Contact admissions for batch details",
    fees: "Enquire for fees",
    certification: "Professional certification support",
    curriculumLabel: "Training Includes",
    curriculum: ["Pumps and compressors", "Valves and mechanical systems", "Equipment inspection", "Maintenance planning", "Fault diagnosis"],
    trainingIncludes: ["Pumps and compressors", "Valves and mechanical systems", "Equipment inspection", "Maintenance planning", "Fault diagnosis"],
    careers: ["Mechanical Technician", "Maintenance Technician", "Plant Technician", "Oil & Gas Mechanical Trainee"],
    placement: onshorePlacement,
    image: imageAssets.mechanicalTechnician,
    level: "Professional",
    keywords: ["mechanical technician course", "oil gas mechanical technician", "pump compressor training"],
  },
  {
    slug: "firewatch-holewatch",
    name: "Firewatch / Holewatch",
    category: "Onshore Training",
    summary: "Hot work safety, confined space monitoring, hazard identification, and emergency response.",
    overview: onshoreOverview,
    description:
      "Learn the responsibilities of a Firewatch and Holewatch professional responsible for ensuring workplace safety during hot work and confined space operations. The course emphasizes hazard identification, emergency response, and safety compliance.",
    eligibility: "Freshers and experienced professionals preparing for industrial safety support roles.",
    duration: "Contact admissions for batch details",
    fees: "Enquire for fees",
    certification: "Professional certification support",
    curriculumLabel: "Course Highlights",
    curriculum: ["Fire prevention procedures", "Confined space monitoring", "Hot work safety", "Emergency response", "Safety communication"],
    careers: ["Fire Watch", "Hole Watch", "Safety Assistant", "Confined Space Attendant"],
    placement: onshorePlacement,
    image: imageAssets.firewatchHolewatch,
    level: "Foundation",
    keywords: ["firewatch training", "holewatch course", "confined space monitoring training"],
  },
  {
    slug: "permit-receiver-job-performer-lead-worker",
    name: "Permit Receiver / Job Performer / Lead Worker / Lead Executor / Permit Coordinator",
    category: "Onshore Training",
    summary: "Permit-to-work procedures, job planning, hazard assessment, LOTO, safety documentation, and team coordination.",
    overview: onshoreOverview,
    description:
      "This specialized training prepares candidates to understand and manage Permit-to-Work (PTW) systems used in industrial plants. Participants learn safe work planning, permit coordination, hazard assessment, and compliance with industry safety standards.",
    eligibility: "Freshers, experienced professionals, lead workers, permit coordinators, and industrial job performers.",
    duration: "Contact admissions for batch details",
    fees: "Enquire for fees",
    certification: "Professional certification support",
    curriculumLabel: "Key Learning Areas",
    curriculum: ["Permit-to-Work procedures", "Job planning and execution", "Hazard identification and risk assessment", "Lockout/Tagout (LOTO) awareness", "Safety documentation and compliance", "Team coordination and communication"],
    careers: ["Permit Receiver", "Job Performer", "Lead Worker", "Lead Executor", "Permit Coordinator"],
    placement: onshorePlacement,
    image: imageAssets.permitReceiverJobPerformerLeadWorker,
    level: "Advanced",
    keywords: ["permit receiver training", "job performer course", "permit to work training", "lead worker training"],
  },
  {
    slug: "warehouse-operations-inventory-management",
    name: "Warehouse Operations & Inventory Management",
    category: "Wharehouse Management in Logistics and Supply Chain",
    summary: "Job-oriented training in warehouse operations, inventory management, material handling, logistics, and supply chain processes.",
    overview: warehouseOverview,
    description:
      "Build practical knowledge of warehouse operations, inventory management, material handling, logistics workflows, and supply chain processes through job-oriented training.",
    eligibility: "Freshers, 10th / 12th pass candidates, ITI / diploma holders, graduates, and candidates seeking warehouse and logistics careers.",
    duration: "Contact admissions for batch details",
    fees: "Enquire for fees",
    certification: "Professional certification support",
    curriculumLabel: "Training Includes",
    curriculum: ["Warehouse operations", "Inventory management", "Material handling", "Logistics processes", "Supply chain basics"],
    careers: ["Warehouse Associate", "Inventory Assistant", "Material Handler", "Logistics Trainee", "Supply Chain Assistant"],
    placement: warehousePlacement,
    image: imageAssets.warehouseOperationsInventoryManagement,
    level: "Foundation",
    keywords: ["warehouse operations course", "inventory management training", "material handling course"],
  },
  {
    slug: "warehouse-material-handling-logistics",
    name: "Warehouse Material Handling & Logistics",
    category: "Wharehouse Management in Logistics and Supply Chain",
    summary: "Learn warehouse operations, inventory control, material handling, and logistics with practical industry-focused training.",
    overview: warehouseOverview,
    description:
      "Gain practical skills in warehouse operations, inventory control, material handling, logistics movement, and workplace coordination for warehouse and logistics roles.",
    eligibility: "Freshers, 10th / 12th pass candidates, ITI / diploma holders, graduates, and candidates interested in logistics operations.",
    duration: "Contact admissions for batch details",
    fees: "Enquire for fees",
    certification: "Professional certification support",
    curriculumLabel: "Key Skills",
    curriculum: ["Inventory control", "Material handling", "Warehouse safety", "Logistics movement", "Operational coordination"],
    careers: ["Warehouse Operator", "Material Handling Assistant", "Logistics Assistant", "Store Assistant", "Inventory Support Trainee"],
    placement: warehousePlacement,
    image: imageAssets.warehouseMaterialHandlingLogistics,
    level: "Foundation",
    keywords: ["material handling training", "warehouse logistics course", "inventory control training"],
  },
  {
    slug: "inventory-handling-stock-management-logistics-coordination",
    name: "Inventory Handling, Stock Management & Logistics Coordination",
    category: "Wharehouse Management in Logistics and Supply Chain",
    summary: "Learn warehouse operations, inventory handling, stock management, and logistics coordination through practical job-focused training.",
    overview: warehouseOverview,
    description:
      "Prepare for warehouse and logistics roles with practical training in inventory handling, stock management, warehouse documentation, dispatch coordination, and logistics support.",
    eligibility: "Freshers, 10th / 12th pass candidates, ITI / diploma holders, graduates, and candidates preparing for warehouse documentation and coordination roles.",
    duration: "Contact admissions for batch details",
    fees: "Enquire for fees",
    certification: "Professional certification support",
    curriculumLabel: "Course Covers",
    curriculum: ["Inventory handling", "Stock management", "Warehouse documentation", "Dispatch coordination", "Logistics coordination"],
    careers: ["Inventory Controller", "Stock Assistant", "Warehouse Coordinator", "Dispatch Assistant", "Logistics Coordinator"],
    placement: warehousePlacement,
    image: imageAssets.warehouseStockLogisticsCoordination,
    level: "Professional",
    keywords: ["inventory handling course", "stock management training", "logistics coordination course"],
  },
  {
    slug: "logistics-management-supply-chain-training",
    name: "Logistics Management & Supply Chain Training",
    category: "Wharehouse Management in Logistics and Supply Chain",
    summary: "Master warehouse operations, inventory control, stock handling, and logistics management with practical industry-oriented training.",
    overview: warehouseOverview,
    description:
      "Develop industry-oriented knowledge of logistics management, warehouse operations, inventory control, stock handling, supply chain movement, and transport coordination.",
    eligibility: "Freshers, graduates, diploma holders, working professionals, and candidates seeking logistics and supply chain management careers.",
    duration: "Contact admissions for batch details",
    fees: "Enquire for fees",
    certification: "Professional certification support",
    curriculumLabel: "Training Includes",
    curriculum: ["Logistics management", "Supply chain processes", "Inventory control", "Stock handling", "Transport coordination"],
    careers: ["Logistics Executive", "Supply Chain Assistant", "Warehouse Supervisor Trainee", "Inventory Executive", "Transport Coordinator"],
    placement: warehousePlacement,
    image: imageAssets.logisticsSupplyChainManagement,
    level: "Professional",
    keywords: ["logistics management course", "supply chain training", "warehouse operations logistics"],
  },
  {
    slug: "ship-construction-fabrication-marine-operations",
    name: "Ship Construction, Fabrication & Marine Operations",
    category: "Shipbuilding Careers",
    summary: "Build a career in ship construction, fabrication, welding, fitting, and marine operations with practical industry-focused training.",
    overview: shipbuildingOverview,
    description:
      "Learn practical ship construction, fabrication, welding, fitting, and marine operations skills for career pathways in shipyards and marine industrial projects.",
    eligibility: "Freshers, 10th / 12th pass candidates, ITI / diploma holders, graduates, and candidates seeking shipbuilding or marine careers.",
    duration: "Contact admissions for batch details",
    fees: "Enquire for fees",
    certification: "Professional certification support",
    curriculumLabel: "Training Includes",
    curriculum: ["Ship construction basics", "Fabrication practices", "Welding awareness", "Fitting fundamentals", "Marine operations"],
    careers: ["Shipyard Technician", "Fabrication Assistant", "Marine Operations Trainee", "Shipbuilding Helper", "Fitter Trainee"],
    placement: shipbuildingPlacement,
    image: imageAssets.shipConstructionFabrication,
    level: "Foundation",
    keywords: ["ship construction training", "shipbuilding course", "marine operations training"],
  },
  {
    slug: "shipyard-construction-fabrication-fitting-welding",
    name: "Shipyard Construction, Fabrication, Fitting & Welding",
    category: "Shipbuilding Careers",
    summary: "Get industry-focused training in ship construction, fabrication, fitting, welding, and marine operations for careers in leading shipyards.",
    overview: shipbuildingOverview,
    description:
      "Prepare for shipyard roles with industry-focused training in construction workflows, fabrication support, fitting, welding awareness, marine operations, and workplace safety.",
    eligibility: "Freshers, ITI candidates, diploma holders, and candidates interested in shipyard fabrication and fitting careers.",
    duration: "Contact admissions for batch details",
    fees: "Enquire for fees",
    certification: "Professional certification support",
    curriculumLabel: "Key Skills",
    curriculum: ["Shipyard construction", "Fabrication support", "Fitting methods", "Welding basics", "Shipyard safety"],
    careers: ["Shipyard Fitter", "Fabrication Trainee", "Welding Helper", "Shipyard Operations Assistant", "Marine Support Trainee"],
    placement: shipbuildingPlacement,
    image: imageAssets.shipyardConstructionOperations,
    level: "Foundation",
    keywords: ["shipyard training", "fabrication fitting welding course", "shipbuilding careers"],
  },
  {
    slug: "shipbuilding-marine-maintenance-training",
    name: "Shipbuilding & Marine Maintenance Training",
    category: "Shipbuilding Careers",
    summary: "Start your career in the shipbuilding and marine industry with practical training in construction, fabrication, welding, fitting, and maintenance.",
    overview: shipbuildingOverview,
    description:
      "Develop job-focused skills for shipbuilding and marine maintenance, including ship construction awareness, fabrication support, welding, fitting, equipment handling, and maintenance fundamentals.",
    eligibility: "Freshers, 10th / 12th pass candidates, ITI / diploma holders, and candidates preparing for marine maintenance roles.",
    duration: "Contact admissions for batch details",
    fees: "Enquire for fees",
    certification: "Professional certification support",
    curriculumLabel: "Course Covers",
    curriculum: ["Marine maintenance basics", "Ship construction", "Fabrication support", "Fitting and alignment", "Workplace safety"],
    careers: ["Marine Maintenance Trainee", "Shipbuilding Technician", "Maintenance Helper", "Mechanical Support Trainee", "Shipyard Assistant"],
    placement: shipbuildingPlacement,
    image: imageAssets.marineShipbuildingMaintenance,
    level: "Professional",
    keywords: ["marine maintenance training", "shipbuilding maintenance course", "shipyard technician training"],
  },
  {
    slug: "fabrication-welding-pipe-fitting-shipyard-operations",
    name: "Fabrication, Welding, Pipe Fitting & Shipyard Operations",
    category: "Shipbuilding Careers",
    summary: "Prepare for shipbuilding and marine opportunities with practical skills in fabrication, welding, pipe fitting, mechanical work, and shipyard operations.",
    overview: shipbuildingOverview,
    description:
      "Gain practical, industry-oriented training in fabrication, welding awareness, pipe fitting, mechanical work, shipyard operations, safety practices, and marine project support.",
    eligibility: "Freshers, ITI candidates, diploma holders, mechanical trade candidates, and learners preparing for shipyard operations.",
    duration: "Contact admissions for batch details",
    fees: "Enquire for fees",
    certification: "Professional certification support",
    curriculumLabel: "Training Includes",
    curriculum: ["Fabrication practices", "Welding awareness", "Pipe fitting basics", "Mechanical work", "Shipyard operations"],
    careers: ["Pipe Fitter Trainee", "Fabrication Assistant", "Mechanical Helper", "Shipyard Operations Trainee", "Marine Project Assistant"],
    placement: shipbuildingPlacement,
    image: imageAssets.shipyardFabricationPipeFitting,
    level: "Professional",
    keywords: ["pipe fitting shipyard course", "fabrication welding training", "shipyard operations training"],
  },
  {
    slug: "fire-prevention-industrial-safety-emergency-response",
    name: "Fire Prevention, Industrial Safety & Emergency Response",
    category: "Diploma in Fire and Safety Engineering",
    summary: "Build essential skills in fire prevention, industrial safety, emergency response, risk assessment, and workplace safety through practical job-oriented training.",
    overview: fireSafetyOverview,
    description:
      "Learn practical fire prevention, industrial safety, emergency response, risk assessment, and workplace safety skills for safety operations in industrial and construction environments.",
    eligibility: "Freshers, 10th / 12th pass candidates, ITI / diploma holders, graduates, and candidates seeking fire and safety careers.",
    duration: "Contact admissions for batch details",
    fees: "Enquire for fees",
    certification: "Professional certification support",
    curriculumLabel: "Training Includes",
    curriculum: ["Fire prevention", "Industrial safety", "Emergency response", "Risk assessment", "Workplace safety"],
    careers: ["Fire Safety Assistant", "Safety Trainee", "Emergency Response Assistant", "Industrial Safety Helper", "Fire Watch"],
    placement: fireSafetyPlacement,
    image: imageAssets.firePreventionIndustrialSafety,
    level: "Foundation",
    keywords: ["fire prevention training", "industrial safety course", "emergency response training"],
  },
  {
    slug: "safety-management-risk-assessment-industrial-safety",
    name: "Safety Management, Risk Assessment & Industrial Safety",
    category: "Diploma in Fire and Safety Engineering",
    summary: "Gain practical knowledge in fire prevention, safety management, emergency response, risk assessment, and industrial safety for a successful career in safety operations.",
    overview: fireSafetyOverview,
    description:
      "Develop practical knowledge of safety management, fire prevention, emergency response, risk assessment, industrial safety systems, and workplace compliance.",
    eligibility: "Freshers, ITI candidates, diploma holders, graduates, and candidates interested in safety management roles.",
    duration: "Contact admissions for batch details",
    fees: "Enquire for fees",
    certification: "Professional certification support",
    curriculumLabel: "Key Skills",
    curriculum: ["Safety management", "Risk assessment", "Fire prevention", "Emergency response", "Industrial safety compliance"],
    careers: ["Safety Assistant", "HSE Trainee", "Risk Assessment Assistant", "Fire Safety Trainee", "Industrial Safety Coordinator Trainee"],
    placement: fireSafetyPlacement,
    image: imageAssets.safetyManagementEmergencyResponse,
    level: "Professional",
    keywords: ["safety management course", "risk assessment training", "industrial safety training"],
  },
  {
    slug: "fire-safety-hazard-identification-accident-prevention",
    name: "Fire Safety, Hazard Identification & Accident Prevention",
    category: "Diploma in Fire and Safety Engineering",
    summary: "Develop professional skills in fire safety, industrial safety, emergency management, hazard identification, and accident prevention with practical training.",
    overview: fireSafetyOverview,
    description:
      "Prepare for safety operations roles with training in fire safety, hazard identification, accident prevention, emergency management, and industrial safety practices.",
    eligibility: "Freshers, 10th / 12th pass candidates, ITI / diploma holders, graduates, and candidates preparing for safety support roles.",
    duration: "Contact admissions for batch details",
    fees: "Enquire for fees",
    certification: "Professional certification support",
    curriculumLabel: "Course Covers",
    curriculum: ["Fire safety procedures", "Hazard identification", "Accident prevention", "Emergency management", "Industrial safety"],
    careers: ["Safety Technician Trainee", "Fire Safety Assistant", "Hazard Control Assistant", "Accident Prevention Trainee", "HSE Assistant"],
    placement: fireSafetyPlacement,
    image: imageAssets.fireSafetyHazardAccidentPrevention,
    level: "Professional",
    keywords: ["hazard identification training", "accident prevention course", "fire safety course"],
  },
  {
    slug: "workplace-safety-hazard-control-emergency-handling",
    name: "Workplace Safety, Hazard Control & Emergency Handling",
    category: "Diploma in Fire and Safety Engineering",
    summary: "Learn fire prevention, industrial safety, emergency handling, hazard control, and workplace safety with practical industry-oriented training.",
    overview: fireSafetyOverview,
    description:
      "Gain industry-oriented skills in workplace safety, hazard control, emergency handling, fire prevention, industrial safety awareness, and safe work practices.",
    eligibility: "Freshers, working professionals, ITI / diploma holders, graduates, and candidates seeking workplace safety careers.",
    duration: "Contact admissions for batch details",
    fees: "Enquire for fees",
    certification: "Professional certification support",
    curriculumLabel: "Training Includes",
    curriculum: ["Workplace safety", "Hazard control", "Emergency handling", "Fire prevention", "Safe work practices"],
    careers: ["Workplace Safety Assistant", "Safety Supervisor Trainee", "Hazard Control Trainee", "Emergency Handling Assistant", "Industrial Safety Assistant"],
    placement: fireSafetyPlacement,
    image: imageAssets.workplaceSafetyHazardControl,
    level: "Foundation",
    keywords: ["workplace safety training", "hazard control course", "emergency handling training"],
  },
];

export const mainCourses = courses.slice(0, 5);

export function getCourse(slug: string) {
  return courses.find((course) => course.slug === slug);
}

export function getCategory(slug: string) {
  return categories.find((category) => category.slug === slug);
}

export function getCoursesByCategory(categoryName: CourseCategory) {
  return courses.filter((course) => course.category === categoryName);
}
