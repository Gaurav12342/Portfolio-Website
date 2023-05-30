import {
  AcademicCapIcon,
  ArrowDownTrayIcon,
  BuildingOffice2Icon,
  CalendarIcon,
  FlagIcon,
  MapIcon,
  SparklesIcon,
} from "@heroicons/react/24/outline";

import GithubIcon from "../components/Icon/GithubIcon";
import InstagramIcon from "../components/Icon/InstagramIcon";
import LinkedInIcon from "../components/Icon/LinkedInIcon";
import StackOverflowIcon from "../components/Icon/StackOverflowIcon";
import TwitterIcon from "../components/Icon/TwitterIcon";
import heroImage from "../images/header-background.webp";
import porfolioImage1 from "../images/portfolio/portfolio-1.jpg";
import porfolioImage2 from "../images/portfolio/portfolio-2.jpg";
import porfolioImage3 from "../images/portfolio/portfolio-3.jpg";
import porfolioImage4 from "../images/portfolio/portfolio-4.jpg";
import porfolioImage5 from "../images/portfolio/portfolio-5.jpg";
import porfolioImage6 from "../images/portfolio/portfolio-6.jpg";
import porfolioImage7 from "../images/portfolio/portfolio-7.jpg";
import porfolioImage8 from "../images/portfolio/portfolio-8.jpg";
import porfolioImage9 from "../images/portfolio/portfolio-9.jpg";
import porfolioImage10 from "../images/portfolio/portfolio-10.jpg";
import porfolioImage11 from "../images/portfolio/portfolio-11.jpg";
import profilepic from "../images/profilepic.jpeg";
import testimonialImage from "../images/testimonial.webp";
import {
  About,
  ContactSection,
  ContactType,
  Hero,
  HomepageMeta,
  PortfolioItem,
  SkillGroup,
  Social,
  TestimonialSection,
  TimelineItem,
} from "./dataDef";

/**
 * Page meta data
 */
export const homePageMeta: HomepageMeta = {
  title: "React Resume Template",
  description: "Example site built with Tim Baker's react resume template",
};

/**
 * Section definition
 */
export const SectionId = {
  Hero: "hero",
  About: "about",
  Contact: "contact",
  // Portfolio: "portfolio",
  Resume: "resume",
  Skills: "skills",
  Stats: "stats",
  // Testimonials: "testimonials",
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
        A Frontend focused Web Developer building the Frontend of Websites and
        Web Applications that leads to the success of the overall product
      </p>
    </>
  ),
  actions: [
    {
      href: "/assets/resume.pdf",
      text: "Resume",
      primary: true,
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
      I'm a <strong className="text-stone-100">Frontend Web Developer </strong>
      building the Front-end of Websites and Web Applications that leads to the
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
    name: "Spoken languages",
    skills: [
      {
        name: "English",
        level: 10,
      },
      {
        name: "French",
        level: 4,
      },
      {
        name: "Spanish",
        level: 3,
      },
    ],
  },
  {
    name: "Frontend development",
    skills: [
      {
        name: "React",
        level: 9,
      },
      {
        name: "Typescript",
        level: 7,
      },
      {
        name: "GraphQL",
        level: 6,
      },
    ],
  },
  {
    name: "Backend development",
    skills: [
      {
        name: "Node.js",
        level: 8,
      },
      {
        name: "Rust",
        level: 5,
      },
      {
        name: "Golang",
        level: 4,
      },
    ],
  },
  {
    name: "Mobile development",
    skills: [
      {
        name: "React Native",
        level: 9,
      },
      {
        name: "Flutter",
        level: 4,
      },
      {
        name: "Swift",
        level: 3,
      },
    ],
  },
];

/**
 * Portfolio section
 */
export const portfolioItems: PortfolioItem[] = [
  {
    title: "Project title 1",
    description: "Give a short description of your project here.",
    url: "https://timbaker.me",
    image: porfolioImage1,
  },
  {
    title: "Project title 2",
    description: "Give a short description of your project here.",
    url: "https://timbaker.me",
    image: porfolioImage2,
  },
  {
    title: "Project title 3",
    description: "Give a short description of your project here.",
    url: "https://timbaker.me",
    image: porfolioImage3,
  },
  {
    title: "Project title 4",
    description: "Give a short description of your project here.",
    url: "https://timbaker.me",
    image: porfolioImage4,
  },
  {
    title: "Project title 5",
    description: "Give a short description of your project here.",
    url: "https://timbaker.me",
    image: porfolioImage5,
  },
  {
    title: "Project title 6",
    description: "Give a short description of your project here.",
    url: "https://timbaker.me",
    image: porfolioImage6,
  },
  {
    title: "Project title 7",
    description: "Give a short description of your project here.",
    url: "https://timbaker.me",
    image: porfolioImage7,
  },
  {
    title: "Project title 8",
    description: "Give a short description of your project here.",
    url: "https://timbaker.me",
    image: porfolioImage8,
  },
  {
    title: "Project title 9",
    description: "Give a short description of your project here.",
    url: "https://timbaker.me",
    image: porfolioImage9,
  },
  {
    title: "Project title 10",
    description: "Give a short description of your project here.",
    url: "https://timbaker.me",
    image: porfolioImage10,
  },
  {
    title: "Project title 11",
    description: "Give a short description of your project here.",
    url: "https://timbaker.me",
    image: porfolioImage11,
  },
];

/**
 * Resume section -- TODO: Standardize resume contact format or offer MDX
 */
export const education: TimelineItem[] = [
  {
    date: "April 2007",
    location: "Clown college",
    title: "Masters in Beer tasting",
    content: (
      <p>
        Describe your experience at school, what you learned, what useful skills
        you have acquired etc.
      </p>
    ),
  },
  {
    date: "March 2003",
    location: "School of Business",
    title: "What did you study 101",
    content: (
      <p>
        Describe your experience at school, what you learned, what useful skills
        you have acquired etc.
      </p>
    ),
  },
];

export const experience: TimelineItem[] = [
  {
    date: "March 2010 - Present",
    location: "Awesome Development Company",
    title: "Senior UX Engineer",
    content: (
      <p>
        Describe work, special projects, notable achievements, what technologies
        you have been working with, and anything else that would be useful for
        an employer to know.
      </p>
    ),
  },
  {
    date: "March 2007 - February 2010",
    location: "Garage Startup Studio",
    title: "Junior bug fixer",
    content: (
      <p>
        Describe work, special projects, notable achievements, what technologies
        you have been working with, and anything else that would be useful for
        an employer to know.
      </p>
    ),
  },
];

/**
 * Testimonial section
 */
export const testimonial: TestimonialSection = {
  imageSrc: testimonialImage,
  testimonials: [
    {
      name: "John Doe",
      text: "Use this as an opportunity to promote what it is like to work with you. High value testimonials include ones from current or past co-workers, managers, or from happy clients.",
      image:
        "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/169.jpg",
    },
    {
      name: "Jane Doe",
      text: "Here you should write some nice things that someone has said about you. Encourage them to be specific and include important details (notes about a project you were on together, impressive quality produced, etc).",
      image:
        "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/14.jpg",
    },
    {
      name: "Someone else",
      text: "Add several of these, and keep them as fresh as possible, but be sure to focus on quality testimonials with strong highlights of your skills/work ethic.",
      image:
        "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/69.jpg",
    },
  ],
};

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
