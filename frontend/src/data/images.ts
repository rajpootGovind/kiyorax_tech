/**
 * Central image map.
 *
 * Every photograph on the site is referenced from this file, so replacing a
 * demo asset is a one-line change (or, where the filename is unchanged,
 * simply overwrite the file in /public/images).
 *
 * All current photographs are demo assets. They are not KiyoraX employees or
 * client projects and must be replaced with approved assets before launch.
 */

export type ImageAsset = {
  src: string;
  alt: string;
  width: number;
  height: number;
  demo: boolean;
  blurDataURL?: string;
};

const heroBlur =
  "data:image/jpeg;base64,/9j/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCAAJAAwDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAABAX/xAAhEAABBAEDBQAAAAAAAAAAAAABAAIDBAURMbESNFFzgf/EABQBAQAAAAAAAAAAAAAAAAAAAAL/xAAWEQEBAQAAAAAAAAAAAAAAAAAAARH/2gAMAwEAAhEDEQA/AExX8s2k2Z8T3F+3S3U+ACEa/ksxFY0jbLGC0EgAFX628PqHKPe7p3zhLAlf/9k=";

const founderBlur =
  "data:image/jpeg;base64,/9j/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCAAPAAwDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAABQQG/8QAIhAAAQMDAwUAAAAAAAAAAAAAAQIDEQAEEgUTITFBUWGh/8QAFAEBAAAAAAAAAAAAAAAAAAAAAP/EABcRAAMBAAAAAAAAAAAAAAAAAAABESH/2gAMAwEAAhEDEQA/AEL61BSy6IOI5kTiPPPSq7R5x1ncZU26lRnNJ4NAazqeFlcpbkKcUGAT2AEqP2KywcUkQlSgPRik0Wo//9k=";

export const images = {
  brand: {
    logo: "/logo.svg",
  },
  hero: {
    handshake: {
      src: "/images/hero/human-robot-partnership.jpg",
      alt: "A human hand in a suit shaking hands with an elegant robotic hand in a bright office, representing a trusted partnership between people and technology.",
      width: 1600,
      height: 1200,
      demo: true,
      blurDataURL: heroBlur,
    } satisfies ImageAsset,
  },
  founder: {
    portrait: {
      src: "/images/founder/ramkrushna-gaikwad-portrait.jpg",
      alt: "Demo portrait placeholder for Ramkrushna Vishnu Gaikwad, Founder and CEO of KiyoraX Technologies. To be replaced with the founder's photograph.",
      width: 1000,
      height: 1250,
      demo: true,
      blurDataURL: founderBlur,
    } satisfies ImageAsset,
  },
  team: {
    "ramkrushna-gaikwad": {
      src: "/images/team/ramkrushna-gaikwad.jpg",
      alt: "Demo portrait placeholder for Ramkrushna Vishnu Gaikwad, Founder and CEO. Not an actual photograph of the team member.",
      width: 900,
      height: 1125,
      demo: true,
    },
    "govind-rajpoot": {
      src: "/images/team/govind-rajpoot.jpg",
      alt: "Demo portrait placeholder for Govind Rajpoot, CTO and Co-Founder. Not an actual photograph of the team member.",
      width: 900,
      height: 1125,
      demo: true,
    },
    "nidhi-dubey": {
      src: "/images/team/nidhi-dubey.jpg",
      alt: "Demo portrait placeholder for Nidhi Dubey, Performance Marketing Head. Not an actual photograph of the team member.",
      width: 900,
      height: 1125,
      demo: true,
    },
    "amar-rajpoot": {
      src: "/images/team/amar-rajpoot.jpg",
      alt: "Demo portrait placeholder for Amar Rajpoot, Full Stack Developer. Not an actual photograph of the team member.",
      width: 900,
      height: 1125,
      demo: true,
    },
    "riddhi-ajmera": {
      src: "/images/team/riddhi-ajmera.jpg",
      alt: "Demo portrait placeholder for Riddhi Ajmera, Social Media and Digital Marketing Executive. Not an actual photograph of the team member.",
      width: 900,
      height: 1125,
      demo: true,
    },
    "sneha-abhijit-patil": {
      src: "/images/team/sneha-abhijit-patil.jpg",
      alt: "Demo portrait placeholder for Sneha Abhijit Patil, Team Leader for Telecalling. Not an actual photograph of the team member.",
      width: 900,
      height: 1125,
      demo: true,
    },
    "mala-dodeja": {
      src: "/images/team/mala-dodeja.jpg",
      alt: "Demo portrait placeholder for Mala Dodeja, Lead Generation Executive. Not an actual photograph of the team member.",
      width: 900,
      height: 1125,
      demo: true,
    },
    "bhagyavati-kewat": {
      src: "/images/team/bhagyavati-kewat.jpg",
      alt: "Demo portrait placeholder for Bhagyavati Kewat, Co-Founder. Not an actual photograph of the team member.",
      width: 900,
      height: 1125,
      demo: true,
    },
    "shraddha-tripathi": {
      src: "/images/team/shraddha-tripathi.jpg",
      alt: "Demo portrait placeholder for Shraddha Tripathi, Sales Executive. Not an actual photograph of the team member.",
      width: 900,
      height: 1125,
      demo: true,
    },
  } satisfies Record<string, ImageAsset>,
  /**
   * Optional project screenshots. Leave an entry empty to use the designed
   * preview instead. Add a real, client-approved screenshot to the matching
   * key when one is available.
   */
  portfolio: {
    "edusphere-education-crm": "",
    "lumen-commerce": "",
    "astra-institute": "",
    "meridian-ops-platform": "",
    "northline-property-group": "",
    "kinetiq-sales-crm": "",
  } as Record<string, string>,
} as const;
