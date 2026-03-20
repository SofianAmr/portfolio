import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

// Fonction pour obtenir les données du resume avec traductions
export function getResumeData(t: (key: string) => string) {
  return {
    name: "Sofian Amirou",
    initials: "SA",
    url: "https://iruma-portfolio.vercel.app",
    location: t("resume.location"),
    locationLink: "https://www.google.com/maps/place/Paris",
    description: t("resume.description"),
    summary: t("resume.summary"),
    avatarUrl: "/me.jpg",
    skills: [
      "Next.js",
      "React",
      "TypeScript",
      "Redux",
      "Vue.js",
      "TailwindCSS",
      "Node.js",
      "Angular",
      "Figma",
      "BigQuery",
      "GCP",
      "Docker",
      "Git",
      "SQL",
    ],
    navbar: [
      { href: "/", icon: HomeIcon, label: t("resume.navbar.home") },
      { href: "/blog", icon: NotebookIcon, label: t("resume.navbar.blog") },
    ],
    contact: {
      email: "sofianamirou@gmail.com",
      tel: "+33612909822",
      social: {
        GitHub: {
          name: "GitHub",
          url: "https://github.com/SofianAmr",
          icon: Icons.github,

          navbar: true,
        },
        LinkedIn: {
          name: "LinkedIn",
          url: "https://www.linkedin.com/in/sofian-amirou-137657b2",
          icon: Icons.linkedin,

          navbar: true,
        },

        email: {
          name: t("resume.contact.email"),
          url: "mailto:sofianamirou@gmail.com",
          icon: Icons.email,

          navbar: false,
        },
      },
    },

    work: [
      {
        company: "Eiffage",
        href: "https://eiffage.com",
        badges: [t("resume.work.badges.freelance")],
        location: t("resume.work.locations.paris_hybrid"),
        title: t("resume.work.positions.frontend_engineer"),
        logoUrl: "/eiffage.png",
        start: "January 2024",
        end: t("resume.work.present"),
        description: t("resume.work.descriptions.eiffage"),
        technologies: [
          "Next.js",
          "TypeScript",
          "Tailwind CSS",
          "Redux Toolkit",
          "BigQuery",
          "GCP",
          "Figma",
        ],
      },
      {
        company: "SQORUS",
        href: "https://sqorus.com",
        badges: [t("resume.work.badges.permanent")],
        location: t("resume.work.locations.paris_france_hybrid"),
        title: t("resume.work.positions.it_consultant"),
        logoUrl: "/sqorus.png",
        start: "March 2019",
        end: "December 2023",
        description: t("resume.work.descriptions.sqorus"),
        technologies: [
          "React",
          "Redux",
          "Vue.js",
          "Next.js",
          "TypeScript",
          "Node.js",
          "Docker",
          "Angular",
        ],
      },
      {
        company: "Gfi Informatique",
        href: "https://www.inetum.com/fr",
        badges: [t("resume.work.badges.internship")],
        location: t("resume.work.locations.arcueil"),
        title: t("resume.work.positions.rd_engineer"),
        logoUrl: "/gfi.png",
        start: "May 2018",
        end: "August 2018",
        description: t("resume.work.descriptions.gfi"),
        technologies: [
          "Angular",
          "Bootstrap",
          "UX Design",
          "Responsive Design",
        ],
      },
      {
        company: "BNP Paribas Leasing Solutions",
        href: "https://leasingsolutions.bnpparibas.com",
        badges: [t("resume.work.badges.internship")],
        location: t("resume.work.locations.rueil_malmaison"),
        title: t("resume.work.positions.support_it"),
        logoUrl: "/bnp.png",
        start: "June 2017",
        end: "August 2017",
        description: t("resume.work.descriptions.bnp_support"),
        technologies: ["Excel", "SAP", "ABAP"],
      },
      {
        company: "BNP Paribas Leasing Solutions",
        href: "https://leasingsolutions.bnpparibas.com",
        badges: [t("resume.work.badges.internship")],
        location: t("resume.work.locations.puteaux"),
        title: t("resume.work.positions.it_monitoring"),
        logoUrl: "/bnp.png",
        start: "June 2016",
        end: "August 2016",
        description: t("resume.work.descriptions.bnp_monitoring"),
        technologies: ["Shell Scripting", "Zabbix", "Splunk"],
      },
      {
        company: "Picto Filmo",
        href: "https://pictofilmo.com",
        badges: [t("resume.work.badges.internship")],
        location: t("resume.work.locations.paris_10"),
        title: t("resume.work.positions.3d_production"),
        logoUrl: "/pictofilmo.png",
        start: "June 2012",
        end: "June 2012",
        description: t("resume.work.descriptions.pictofilmo"),
        technologies: ["Blender", "3D Modeling", "Animation"],
      },
    ],
    education: [
      {
        school: "ESILV - École Supérieure d'Ingénieurs Léonard de Vinci",
        href: "https://www.esilv.fr",
        degree: t("resume.education.degrees.computer_engineering"),
        logoUrl: "/esilv.png",
        start: "2014",
        end: "2019",
        description: t("resume.education.descriptions.esilv"),
      },
      {
        school: "北京交通大学 (Beijing Jiaotong University)",
        href: "https://www.bjtu.edu.cn",
        degree: t("resume.education.degrees.computer_science_m2"),
        logoUrl: "/bjtu.png",
        start: "2018",
        end: "2019",
        description: t("resume.education.descriptions.bjtu"),
      },
      {
        school: "L'Ermitage",
        href: "https://www.ermitage.fr",
        degree: t("resume.education.degrees.scientific_baccalaureate"),
        logoUrl: "/ermitage.png",
        start: "2007",
        end: "2014",
        description: t("resume.education.descriptions.ermitage"),
      },
    ],
    projects: [],
  };
}

// Données de base pour les métadonnées (valeurs qui ne changent pas)
export const METADATA = {
  name: "Sofian Amirou",
  url: "https://iruma-portfolio.vercel.app",
  description:
    "Front-End Developer React/Next.js • 5+ years experience\nFreelance at Eiffage",
} as const;
