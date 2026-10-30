export type TeamMember = {
  id: string;
  name: string;
  role: string;
  bio: string;
  leadership: boolean;
  initials: string;
  accent: string;
};

export const team: TeamMember[] = [
  {
    id: "ramkrushna-gaikwad",
    name: "Ramkrushna Vishnu Gaikwad",
    role: "Founder & CEO",
    bio: "Ramkrushna Vishnu Gaikwad is the Founder and CEO of KiyoraX Technologies, driven by a vision to build innovative technology solutions for modern businesses. He leads business strategy, innovation, and organizational growth, focusing on delivering impactful digital products including websites, web applications, mobile applications, e-commerce platforms, and SaaS solutions that empower businesses to grow in the digital era.",
    leadership: true,
    initials: "RG",
    accent: "from-[#00c8f5]/40 via-[#286bff]/25 to-[#852eff]/40",
  },
  {
    id: "govind-rajpoot",
    name: "Govind Rajpoot",
    role: "CTO & Co-Founder",
    bio: "Govind Rajpoot is the CTO and Co-Founder of KiyoraX Technologies, bringing hands-on software development experience and a strong focus on modern application architecture. He leads technical strategy, oversees development workflows, and manages engineering teams to deliver scalable, maintainable, and production-ready software solutions. His expertise spans full-stack development, backend engineering, and building reliable digital products aligned with business requirements.",
    leadership: true,
    initials: "GR",
    accent: "from-[#286bff]/40 via-[#00c8f5]/20 to-[#852eff]/35",
  },
  {
    id: "bhagyavati-kewat",
    name: "Bhagyavati Kewat",
    role: "Co-Founder",
    bio: "Bhagyavati Kewat is the Co-Founder of KiyoraX Technologies, contributing to the company's vision, strategic growth, and innovation. She is passionate about technology, business development, and building impactful digital solutions that help businesses grow and succeed in the digital era.",
    leadership: true,
    initials: "BK",
    accent: "from-[#852eff]/40 via-[#286bff]/20 to-[#00c8f5]/35",
  },
  {
    id: "nidhi-dubey",
    name: "Nidhi Dubey",
    role: "Performance Marketing Head",
    bio: "Nidhi Dubey is a digital marketing professional with two years of experience in performance marketing and social media marketing. She specializes in managing Meta Ads and Google Ads campaigns, focusing on audience targeting, campaign optimization, and improving marketing performance to achieve measurable business goals.",
    leadership: false,
    initials: "ND",
    accent: "from-[#00c8f5]/35 via-[#286bff]/20 to-[#852eff]/35",
  },
  {
    id: "amar-rajpoot",
    name: "Amar Rajpoot",
    role: "Full Stack Developer",
    bio: "Amar Rajpoot is a Full Stack Developer with hands-on experience in developing and maintaining production-level web applications. He works across frontend and backend technologies, focusing on building functional, scalable, and user-friendly digital solutions.",
    leadership: false,
    initials: "AR",
    accent: "from-[#286bff]/35 via-[#00c8f5]/20 to-[#852eff]/30",
  },
  {
    id: "riddhi-ajmera",
    name: "Riddhi Ajmera",
    role: "Social Media & Digital Marketing Executive",
    bio: "Riddhi Ajmera is a social media and digital marketing professional with six years of experience in planning and executing social media strategies. She focuses on building engaging online communities, developing content strategies, managing social media platforms, and strengthening brand presence.",
    leadership: false,
    initials: "RA",
    accent: "from-[#852eff]/35 via-[#286bff]/20 to-[#00c8f5]/30",
  },
  {
    id: "sneha-patil",
    name: "Sneha Abhijit Patil",
    role: "Team Leader – Telecalling",
    bio: "Sneha Abhijit Patil leads the telecalling team with over six years of sales experience across the technology and financial sectors. She drives outreach strategies, leads live solution demonstrations, and empowers her team to build strong customer relationships through effective communication and a customer-focused approach.",
    leadership: false,
    initials: "SP",
    accent: "from-[#00c8f5]/35 via-[#852eff]/20 to-[#286bff]/30",
  },
  {
    id: "mala-dodeja",
    name: "Mala Dodeja",
    role: "Lead Generation Executive",
    bio: "Mala Dodeja is a dedicated professional focused on lead generation, teamwork, and contributing to business growth. She brings a proactive attitude, a commitment to continuous learning, and a professional approach to identifying potential opportunities and supporting the sales process.",
    leadership: false,
    initials: "MD",
    accent: "from-[#286bff]/35 via-[#852eff]/20 to-[#00c8f5]/30",
  },
  {
    id: "shraddha-tripathi",
    name: "Shraddha Tripathi",
    role: "Sales Executive",
    bio: "Shraddha Tripathi is a results-driven Sales Executive focused on building strong client relationships, understanding customer requirements, and driving business growth through effective communication and customer-focused solutions.",
    leadership: false,
    initials: "ST",
    accent: "from-[#852eff]/35 via-[#00c8f5]/20 to-[#286bff]/30",
  },
];

export const leadership = team.filter((member) => member.leadership);
export const specialists = team.filter((member) => !member.leadership);
