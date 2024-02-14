import { ArrowDownTrayIcon } from "@heroicons/react/24/outline";
import GithubIcon from "../components/Icon/GithubIcon";
import InstagramIcon from "../components/Icon/InstagramIcon";
import LinkedInIcon from "../components/Icon/LinkedInIcon";
import StackOverflowIcon from "../components/Icon/StackOverflowIcon";
import TwitterIcon from "../components/Icon/TwitterIcon";
import heroImage from "../images/header-background.webp";
import profilepic from "../images/profilepic.jpeg";
import {
  About,
  ContactSection,
  ContactType,
  Hero,
  HomepageMeta,
  SkillGroup,
  Social,
  TimelineItem,
} from "./dataDef";

/**
 * Page meta data
 */
export const homePageMeta: HomepageMeta = {
  title: "Personal Portfolio",
  description:
    "Example site built with Gaurav Pendharkar's personal portfolio template",
};

/**
 * Section definition
 */
export const SectionId = {
  Hero: "hero",
  About: "about",
  Contact: "contact",
  Resume: "resume",
  Skills: "skills",
  Stats: "stats",
} as const;

export type SectionId = (typeof SectionId)[keyof typeof SectionId];

/**
 * Hero section
 */
export const heroData: Hero = {
  imageSrc: heroImage,
  name: `I'm Gaurav Pendharkar.`,
  description: (
    <>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        A MERN stack developer specializes in crafting the frontend user
        experience as well as the backend logic using the MERN technology stack. They are adept at
        building responsive and visually appealing user interfaces that enhance
        the overall functionality and success of websites and web applications.
      </p>
    </>
  ),
  actions: [
    {
      href: "/resume.pdf",
      text: "Resume",
      primary: true,
      idDownload: true,
      Icon: ArrowDownTrayIcon,
    },
    {
      href: `#${SectionId.Contact}`,
      text: "Contact",
      primary: false,
    },
  ],
};

/**
 * About section
 */
export const aboutData: About = {
  profileImageSrc: profilepic,
  description: (
    <>
      I'm a <strong className="text-stone-100">MERN stack Developer </strong>
      building the Web based Applications that leads to the
      success of the overall products. <br /> <br /> I also like sharing content
      related to the stuff that I have learned over the years in Web Development
      so it can help other people of the Dev Community. Feel free to Connect or
      Follow me on my Linkedin where I post useful content related to Web
      Development and Programming <br /> <br /> I'm open to{" "}
      <strong className="text-stone-100">Job</strong> opportunities where I can
      contribute, learn and grow. If you have a good opportunity that matches my
      skills and experience then don't hesitate to{" "}
      <strong className="text-stone-100">contact</strong> me.
    </>
  ),
};

/**
 * Skills section
 */
export const skills: SkillGroup[] = [
  {
    name: "Frontend development",
    skills: [
      {
        name: "JavaScript",
      },
      {
        name: "React.Js",
      },
      {
        name: "React-Hooks",
      },
      {
        name: "HookAPI",
      },
      {
        name: "React-Redux",
      },
      {
        name: "TypeScript",
      },
      {
        name: "Tailwind CSS",
      },
      {
        name: "Apollo Client GraphQL",
      },
      {
        name: "NextJs",
      },
      {
        name: "HTML5",
      },
      {
        name: "CSS3",
      },
      {
        name: "SCSS",
      },
      {
        name: "Redux-Toolkit",
      },
      {
        name: "FlexBox",
      },
      {
        name: "Grid",
      },
      {
        name: "Storybook",
      },
      {
        name: "Jest",
      },
      {
        name: "Cypress",
      },
      {
        name: "React Testing library",
      },
    ],
  },
  {
    name: "Third Party Library",
    skills: [
      {
        name: "Lodash",
      },
      {
        name: "Moment",
      },
      {
        name: "Styled Component",
      },
      {
        name: "React hook form",
      },
      {
        name: "React Query",
      },
      {
        name: "Axios",
      },
    ],
  },
  {
    name: "Backend development",
    skills: [
      {
        name: "Node.js",
      },
      {
        name: "Express.JS",
      },
      {
        name: "Mongoose.js",
      },
      {
        name: "MongoDB",
      },
      {
        name: "Ejs.js",
      },
      {
        name: "nodemailer",
      },
      {
        name: "Etherial.js",
      },
      {
        name: "MVC pattern with service",
      },
      {
        name: "Swagger doc",
      },
      {
        name: "JWT",
      },
      {
        name: "Bcrypt",
      },
      {
        name: "GraphQL API setup",
      },
    ],
  },
  {
    name: "Extra's",
    skills: [
      {
        name: "PostMan",
      },
      {
        name: "Swagger",
      },
      {
        name: "Git",
      },
      {
        name: "GitHub",
      },
      {
        name: "JIRA",
      },
      {
        name: "TSLint",
      },
      {
        name: "ESLint",
      },
      {
        name: "YARN",
      },
      {
        name: "NPM",
      },
      {
        name: "Figma",
      },
      {
        name: "WebStrom",
      },
      {
        name: "VsCode",
      },
      {
        name: "Slack",
      },
    ],
  },

  {
    name: "UI Library",
    skills: [
      {
        name: "Material UI",
      },
      {
        name: "Ant design",
      },
      {
        name: "Core UI",
      },
      {
        name: "Tailwind CSS",
      },
    ],
  },
];

/**
 * Resume section -- TODO: Standardize resume contact format or offer MDX
 */
export const education: TimelineItem[] = [
  {
    date: "April 2020",
    location: "Clown college",
    title: "Master Of Computer Application ( MCA )",
    content: (
      <p>
        MCA is Master's in Computer Applications, it is a Post-graduate/Master's
        degree which gives hands-on training in Computer Applications. It covers
        practical concepts in specializations like Cloud Computing, Data Science
        & Full Stack Development.
      </p>
    ),
  },
  {
    date: "March 2018",
    location: "Clown college",
    title: "Bachelor Of Computer Application ( BCA )",
    content: (
      <p>
        BCA is Bachelor's in Computer Application, it is academic base for an
        advanced career in Computer Applications. The course of BCA includes
        database management systems, operating systems, software engineering,
        web technology and languages such as C, C++, HTML, Java etc
      </p>
    ),
  },
];

export const experience: TimelineItem[] = [
  {
    date: "June 2023 - Present",
    location: "PortPro",
    title: "MERN stack developer",
    content: (
      <>
        <p>
          <strong>PortPro</strong>
          <br />
          Working on transportation management software and it's transforming
          operations for company, freight forwarders, beneficial cargo owners,
          and brokers.
        </p>
      </>
    ),
  },
  {
    date: "March 2021 - May 2023",
    location: "Code Winglet Pvt. Ltd",
    title: "MERN stack developer",
    content: (
      <>
        <p>
          <strong>RH.com</strong>
          <br />
          Which is an upscale American home-furnishings company headquartered in
          Corte Madera, California. The company sells its merchandise through
          its retail stores, catalog, and online. In that, I have worked as a
          frontend developer for full time.
        </p>
        <br />

        <p>
          <strong>OXIT.com</strong>
          <br />
          Describe work, special projects, notable achievements, what
          technologies you have been working with, and anything else that would
          be useful for an employer to know.
        </p>
        <br />

        <p>
          <strong>DIGIRYTE.com</strong>
          <br />
          Digiryte was born out of necessity with the mission to create superior
          quality next generation applications using the latest technologies,
          help startups and enterprises achieve faster growth by solving complex
          digital challenges, and build more secure and robust applications with
          our cross-functional team to deliver fast results.
        </p>
        <br />

        <p>
          <strong>LOTIC.ai</strong>
          <br />
          Lotic is a place for you to tell your story through short recordings.
          It’s a safe, secure space for you to learn about yourself and identify
          patterns in your thoughts, feelings, and behaviors.
        </p>
      </>
    ),
  },
  {
    date: "September 2020 - February 2021",
    location: "Coruscate Solutions Pvt. Ltd.",
    title: "Programmer Analyst",
    content: (
      <p>
        <strong>Writi.ca</strong>
        <br />
        Writi is a team of health care professionals, engineers, and developers
        with a passion for design and quality improvement. We work
        interprofessionally with management, front-line staff, and
        industry-leading experts to tackle the challenges facing our health care
        system.
      </p>
    ),
  },
];


/**
 * Contact section
 */

export const contact: ContactSection = {
  headerText: "Get in touch.",
  description:
    "Here is a good spot for a message to your readers to let them know how best to reach out to you.",
  items: [
    {
      type: ContactType.Email,
      text: "reachout@gauravpendharkar",
      href: "mailto:gauravpendharkar2@gmail.com",
    },
    {
      type: ContactType.Instagram,
      text: "@gauravpendharkar",
      href: "https://www.instagram.com/mr_gaurav_sali98/",
    },
    {
      type: ContactType.Github,
      text: "gauravpendharkar",
      href: "https://github.com/Gaurav12342",
    },
  ],
};

/**
 * Social items
 */
export const socialLinks: Social[] = [
  { label: "Github", Icon: GithubIcon, href: "https://github.com/Gaurav12342" },
  {
    label: "Stack Overflow",
    Icon: StackOverflowIcon,
    href: "https://stackoverflow.com/users/10334473/gaurav-pendharkar",
  },
  {
    label: "LinkedIn",
    Icon: LinkedInIcon,
    href: "https://www.linkedin.com/in/gaurav-pendharkar-8b7b411a5/",
  },
  {
    label: "Instagram",
    Icon: InstagramIcon,
    href: "https://www.instagram.com/mr_gaurav_sali98/",
  },
  {
    label: "Twitter",
    Icon: TwitterIcon,
    href: "https://twitter.com/GauravPend71345",
  },
];
