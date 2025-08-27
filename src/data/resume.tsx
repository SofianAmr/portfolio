import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Sofian Amirou",
  initials: "SA",
  url: "https://iruma-portfolio.vercel.app",
  location: "Paris, France",
  locationLink: "https://www.google.com/maps/place/Paris",
  description:
    "Front-End Developer React/Next.js • 5+ years experience • Freelance at Eiffage",
  summary:
    "Computer Engineering graduate from ESILV, I'm a passionate front-end developer specialized in React and Next.js applications.\n\n**Currently freelancing at Eiffage** since January 2024, I develop modern web applications using Next.js, TypeScript and cloud technologies. My key projects include an AI platform with +1000 daily users and a secure file explorer.\n\n**My background:** 4+ years as IT consultant at SQORUS on large-scale projects for AXA, SEB, and Colas. This experience gave me strong expertise in the front-end ecosystem and quality-focused development.\n\nI bring together technical skills and user experience focus to create effective solutions.",
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
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "hello@example.com",
    tel: "+123456789",
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
        name: "Send Email",
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
      badges: ["Freelance"],
      location: "Paris, Hybride",
      title: "Front-End Engineer",
      logoUrl: "/eiffage.png",
      start: "Janvier 2024",
      end: "Présent",
      description:
        "Building modern web applications with focus on user experience. Key projects include Eiffage Chat (AI platform with 1000+ daily users), DataFile Exchange (secure file explorer), and MyProbes (probe monitoring platform).",
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
      badges: ["CDI"],
      location: "Paris, France · Hybride",
      title: "IT Consultant",
      logoUrl: "/sqorus.png",
      start: "Mars 2019",
      end: "Décembre 2023",
      description:
        "Working on multiple large-scale projects for AXA, Eiffage, SEB, and Colas. Developed front-end applications while handling UX/UI design and built API integrations with multi-client configurations.",
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
      badges: ["Stage"],
      location: "Arcueil, Île-de-France, France",
      title: "R&D Engineer - Web Development",
      logoUrl: "/gfi.png",
      start: "Mai 2018",
      end: "Août 2018",
      description:
        "External consultant for Caisse des Dépôts IT department focusing on UX design and front-end development. Contributed to integration test automation to improve quality and deployment processes.",
      technologies: ["Angular", "Bootstrap", "UX Design", "Responsive Design"],
    },
    {
      company: "BNP Paribas Leasing Solutions",
      href: "https://leasingsolutions.bnpparibas.com",
      badges: ["Stage"],
      location: "Rueil-Malmaison, France",
      title: "Support IT",
      logoUrl: "/bnp.png",
      start: "Juin 2017",
      end: "Août 2017",
      description:
        "Provided IT support and handled technical tasks including reporting. Developed programs and worked on technical solutions for the RS Trucks division.",
      technologies: ["Excel", "SAP", "ABAP"],
    },
    {
      company: "BNP Paribas Leasing Solutions",
      href: "https://leasingsolutions.bnpparibas.com",
      badges: ["Stage"],
      location: "Puteaux, France",
      title: "IT Monitoring & Metrics Internship",
      logoUrl: "/bnp.png",
      start: "Juin 2016",
      end: "Août 2016",
      description:
        "Internship in IT system supervision and metrology within Technical Infrastructure Services. Gained experience with network fundamentals and monitoring systems.",
      technologies: ["Shell Scripting", "Zabbix", "Splunk"],
    },
    {
      company: "Picto Filmo",
      href: "https://pictofilmo.com",
      badges: ["Stage"],
      location: "Paris Xème, France",
      title: "3D Post-Production Intern",
      logoUrl: "/pictofilmo.png",
      start: "Juin 2012",
      end: "Juin 2012",
      description:
        "One-month internship in a 3D post-production studio specializing in computer-generated imagery. Contributed to 3D modeling, animation, and texturing.",
      technologies: ["Blender", "3D Modeling", "Animation"],
    },
  ],
  education: [
    {
      school: "ESILV - École Supérieure d'Ingénieurs Léonard de Vinci",
      href: "https://www.esilv.fr",
      degree: "Diplôme d'ingénieur, Informatique",
      logoUrl: "/esilv.png",
      start: "2014",
      end: "2019",
      description:
        "Logiciels : 3D - SolidWorks | Programmation : C#, C, Python, J2E, Java | Développement Web : HTML/CSS/JS, Bootstrap4, MaterialUI, Node.JS, Express, React | Base de données : SQL, CQL, Cassandra, MongoDB, Elasticsearch",
    },
    {
      school: "北京交通大学 (Beijing Jiaotong University)",
      href: "https://www.bjtu.edu.cn",
      degree: "Master 2 (M2), Informatique",
      logoUrl: "/bjtu.png",
      start: "2018",
      end: "2019",
      description:
        "Cours Principaux : Embedded Platform development technology, Mobile Application Development, Big data fusion and data warehouse, Game Design and Implementation, Service Oriented Software Architecture and Cloud Computing | Cours Secondaire : Chinese",
    },
    {
      school: "L'Ermitage",
      href: "https://www.ermitage.fr",
      degree: "Baccalauréat Scientifique Spécialité Mathématiques",
      logoUrl: "/ermitage.png",
      start: "2007",
      end: "2014",
      description:
        "International School of France : Collège et Lycée - Maisons-Laffitte 78600",
    },
  ],
  projects: [],
} as const;
