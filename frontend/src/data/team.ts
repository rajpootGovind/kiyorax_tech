import { images } from "./images";

export type TeamMember = {
  id: string;
  name: string;
  role: string;
  focus: string;
  bio: string;
  leadership: boolean;
  initials: string;
  portrait: keyof typeof images.team;
};

export const team: TeamMember[] = [
  {
    id: "ramkrushna-gaikwad",
    name: "Ramkrushna Vishnu Gaikwad",
    role: "Founder & CEO",
    focus: "Vision, strategy, and the products behind it.",
    bio: "Leads company vision, business strategy, innovation, and digital product development across websites, applications, e-commerce, and SaaS.",
    leadership: true,
    initials: "RG",
    portrait: "ramkrushna-gaikwad",
  },
  {
    id: "govind-rajpoot",
    name: "Govind Rajpoot",
    role: "CTO & Co-Founder",
    focus: "Technical direction and dependable engineering.",
    bio: "Leads technical strategy and engineering, with hands-on experience in software development, system architecture, and scalable, maintainable application development.",
    leadership: true,
    initials: "GR",
    portrait: "govind-rajpoot",
  },
  {
    id: "bhagyavati-kewat",
    name: "Bhagyavati Kewat",
    role: "Co-Founder",
    focus: "Growth, partnerships, and digital solutions.",
    bio: "Contributes to company vision, strategic growth, innovation, business development, and digital solutions.",
    leadership: true,
    initials: "BK",
    portrait: "bhagyavati-kewat",
  },
  {
    id: "nidhi-dubey",
    name: "Nidhi Dubey",
    role: "Performance Marketing Head",
    focus: "Campaigns measured by real outcomes.",
    bio: "Two years of performance and social media marketing experience, including Meta Ads, Google Ads, audience targeting, and campaign optimisation.",
    leadership: false,
    initials: "ND",
    portrait: "nidhi-dubey",
  },
  {
    id: "amar-rajpoot",
    name: "Amar Rajpoot",
    role: "Full Stack Developer",
    focus: "Frontend and backend, working as one.",
    bio: "Works across frontend and backend development to build practical, scalable, and user-friendly applications.",
    leadership: false,
    initials: "AR",
    portrait: "amar-rajpoot",
  },
  {
    id: "riddhi-ajmera",
    name: "Riddhi Ajmera",
    role: "Social Media & Digital Marketing Executive",
    focus: "Content, community, and brand presence.",
    bio: "Six years of experience in social media planning, content strategy, online communities, and brand presence.",
    leadership: false,
    initials: "RA",
    portrait: "riddhi-ajmera",
  },
  {
    id: "sneha-patil",
    name: "Sneha Abhijit Patil",
    role: "Team Leader — Telecalling",
    focus: "Outreach, demonstrations, and relationships.",
    bio: "Over six years of experience across technology and financial sectors, with strengths in outreach, live demonstrations, and customer relationships.",
    leadership: false,
    initials: "SP",
    portrait: "sneha-abhijit-patil",
  },
  {
    id: "mala-dodeja",
    name: "Mala Dodeja",
    role: "Lead Generation Executive",
    focus: "Careful research and consistent follow-through.",
    bio: "Focuses on teamwork, continuous learning, lead generation, and professional, results-oriented work.",
    leadership: false,
    initials: "MD",
    portrait: "mala-dodeja",
  },
  {
    id: "shraddha-tripathi",
    name: "Shraddha Tripathi",
    role: "Sales Executive",
    focus: "Listening closely, then finding the right fit.",
    bio: "Focuses on client relationships, understanding customer requirements, communication, and business growth.",
    leadership: false,
    initials: "ST",
    portrait: "shraddha-tripathi",
  },
];

export const founder = team[0];
export const leadership = team.filter((member) => member.leadership);
export const specialists = team.filter((member) => !member.leadership);
