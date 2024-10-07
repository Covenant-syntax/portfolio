import {
  algorithms,
  devnotes,
  dmp,
  fts,
  oscs,
  ptf,
} from "../assets";

export const navLinks = [
  {
    id: "hero",
    title: "Hero",
  },
  {
    id: "portfolio",
    title: "Portfolio",
  },
  {
    id: "experience",
    title: "Experience",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const experiences = [
  {
    title: "Class Representative & Tutor",
    company_name: "IT Center, University of Calabar",
    date: "2024",
    details: [
      "Assist the supervisor in tutoring fellow students on web development, ensuring a smooth learning process and a strong grasp of essential web technologies.",
      "Organized and coordinated lectures, bridging the gap between students and instructors to facilitate seamless communication.",
    ],
  },
  {
    title: "Founder & CEO",
    company_name: "CodeFlex Web Hub",
    date: "2024",
    details: [
      "Founded an all-around tech solutions company specializing in web development, SEO, software development, and consultation services.",
      "Partnered with fellow tech experts to form a remote network of professionals offering collaborative tech solutions.",
      "Successfully delivered services to various companies, enhancing their digital presence and functionality through tailored tech solutions.",
    ],
  },
  {
    title: "Web Developer",
    company_name: "Nyanneh's Company Ltd",
    date: "2023 - Present",
    details: [
      "Collaborated with teams to develop, maintain, and update websites, ensuring high performance and user-friendly experiences.",
      "Worked on multiple client projects, delivering tailored web solutions that align with their business needs.",
    ],
  },
  {
    title: "Computer Science Student",
    company_name: "University of Calabar",
    date: "2022 - Present",
    details: [
      "Pursuing a Bachelor's degree in Computer Science with a focus on software development, algorithms, and data structures.",
      "Gained hands-on experience in programming, web development, and software engineering through academic and extracurricular projects.",
    ],
  },
];

const portfolio = [
  {
    name: "Feed the Street With MURPHY",
    description:
      "A community outreach project aimed at feeding and empowering underprivileged individuals. The website provides details of the initiative, donation options, and upcoming events, offering a platform for supporters to engage and contribute to the cause.",
    image: fts,
  },
  {
    name: "Dumep Classic",
    description:
      "An e-commerce fashion website for women's bespoke clothing, featuring collections of tops, bottoms, gowns, and 2-piece sets. Customers can explore and purchase tailored outfits with a seamless shopping experience.",
    image: dmp,
  },
  {
    name: "3D Parallax Developer Portfolio",
    description:
      "A stunning and simple portfolio website using React, Tailwind CSS, and Three.js for a smooth 3D parallax effect and animations. It's an excellent showcase of design aesthetics with interactive visuals and modern web technologies.",
    image: ptf,
  },
];

export { experiences, portfolio };

