import {
  AcademicCapIcon,
  ArrowDownTrayIcon,
  BuildingOffice2Icon,
  CalendarIcon,
  FlagIcon,
  MapIcon,
  SparklesIcon,
} from '@heroicons/react/24/outline';

import GithubIcon from '../components/Icon/GithubIcon';
// import InstagramIcon from '../components/Icon/InstagramIcon';
import LinkedInIcon from '../components/Icon/LinkedInIcon';
// import StackOverflowIcon from '../components/Icon/StackOverflowIcon';
import TwitterIcon from '../components/Icon/TwitterIcon';
import heroImage from '../images/header-background.webp';
import porfolioImage1 from '../images/portfolio/portfolio-1.jpg';
import porfolioImage2 from '../images/portfolio/portfolio-2.jpg';
import porfolioImage3 from '../images/portfolio/portfolio-3.jpg';
import porfolioImage4 from '../images/portfolio/portfolio-4.jpg';
import porfolioImage5 from '../images/portfolio/portfolio-5.jpg';
import porfolioImage6 from '../images/portfolio/portfolio-6.jpg';
// import porfolioImage7 from '../images/portfolio/portfolio-7.jpg';
// import porfolioImage8 from '../images/portfolio/portfolio-8.jpg';
// import porfolioImage9 from '../images/portfolio/portfolio-9.jpg';
// import porfolioImage10 from '../images/portfolio/portfolio-10.jpg';
// import porfolioImage11 from '../images/portfolio/portfolio-11.jpg';
import profilepic from '../images/profilepic.jpg';
import testimonialImage from '../images/testimonial.webp';
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
} from './dataDef';

/**
 * Page meta data
 */
export const homePageMeta: HomepageMeta = {
  title: 'Prabhjot Singh Chadha',
  description: 'Chief Technology Officer & Full Stack Developer',
};

/**
 * Section definition
 */
export const SectionId = {
  Hero: 'hero',
  About: 'about',
  Contact: 'contact',
  Portfolio: 'portfolio',
  Resume: 'resume',
  Skills: 'skills',
  Stats: 'stats',
  Testimonials: 'testimonials',
} as const;

export type SectionId = (typeof SectionId)[keyof typeof SectionId];

/**
 * Hero section
 */
export const heroData: Hero = {
  imageSrc: heroImage,
  name: `I'm Prabhjot Singh Chadha.`,
  description: (
    <>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        I'm a Remote-based <strong className="text-stone-100">Chief Technology Officer</strong>, most recently working
        at <strong className="text-stone-100">FPS Lounge</strong> where I led the development of a platform for gamers
        to book coaching sessions and access professional courses.
      </p>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        With <strong className="text-stone-100">10+ years of experience</strong>, I specialize in
        <strong className="text-stone-100"> Next.js</strong>, <strong className="text-stone-100">React</strong>,
        <strong className="text-stone-100"> Node.js</strong>, and{' '}
        <strong className="text-stone-100">cloud technologies</strong> to build scalable solutions.
      </p>
    </>
  ),
  actions: [
    {
      href: '/assets/resume.pdf',
      text: 'Resume',
      primary: true,
      Icon: ArrowDownTrayIcon,
    },
    {
      href: `#${SectionId.Contact}`,
      text: 'Contact',
      primary: false,
    },
  ],
};

/**
 * About section
 */
export const aboutData: About = {
  profileImageSrc: profilepic,
  description: `Chief Technology Officer with 10 years of experience leading web development and driving tech innovation. 
  At FPS Lounge, I led a cross-functional team and boosted user engagement by 40% in just six months. 
  I'm passionate about building scalable solutions, mentoring teams, and staying ahead of tech trends.`,
  aboutItems: [
    {label: 'Location', text: 'Remote, India', Icon: MapIcon},
    {label: 'Age', text: '29', Icon: CalendarIcon},
    {label: 'Nationality', text: 'Indian', Icon: FlagIcon},
    {label: 'Interests', text: 'Gaming, Web Development, Tech Trends', Icon: SparklesIcon},
    {label: 'Study', text: 'B.E in Information Technology', Icon: AcademicCapIcon},
    {label: 'Employment', text: 'Previously at FPS Lounge', Icon: BuildingOffice2Icon},
  ],
};

/**
 * Skills section
 */
export const skills: SkillGroup[] = [
  {
    name: 'Frontend Development',
    skills: [
      {
        name: 'Next.js',
        level: 9,
      },
      {
        name: 'React.js',
        level: 9,
      },
      {
        name: 'JavaScript / TypeScript',
        level: 8,
      },
    ],
  },
  {
    name: 'Backend Development',
    skills: [
      {
        name: 'Node.js',
        level: 8,
      },
      {
        name: 'Deno',
        level: 7,
      },
      {
        name: 'Firebase',
        level: 8,
      },
    ],
  },
  {
    name: 'DevOps & Tools',
    skills: [
      {
        name: 'Docker',
        level: 7,
      },
      {
        name: 'GitHub/GitLab',
        level: 8,
      },
      {
        name: 'GCP',
        level: 7,
      },
    ],
  },
  {
    name: 'State Management',
    skills: [
      {
        name: 'Redux',
        level: 8,
      },
      {
        name: 'XState',
        level: 7,
      },
      {
        name: 'Context API',
        level: 8,
      },
    ],
  },
];

/**
 * Portfolio section
 */
export const portfolioItems: PortfolioItem[] = [
  {
    title: 'FPS Lounge Platform',
    description: 'A platform for gamers to book coaching sessions and access professional courses.',
    url: 'https://prabhjotsinghchadha.com',
    image: porfolioImage1,
  },
  {
    title: 'Phuntoken',
    description: 'Led the development and launch of this cryptocurrency project.',
    url: 'https://prabhjotsinghchadha.com',
    image: porfolioImage2,
  },
  {
    title: 'E-commerce Solutions',
    description: 'Implemented successful e-commerce solutions for long-term clients.',
    url: 'https://prabhjotsinghchadha.com',
    image: porfolioImage3,
  },
  // Keep remaining portfolio items as placeholders or remove them
  {
    title: 'Project title 4',
    description: 'Give a short description of your project here.',
    url: 'https://prabhjotsinghchadha.com',
    image: porfolioImage4,
  },
  {
    title: 'Project title 5',
    description: 'Give a short description of your project here.',
    url: 'https://prabhjotsinghchadha.com',
    image: porfolioImage5,
  },
  {
    title: 'Project title 6',
    description: 'Give a short description of your project here.',
    url: 'https://prabhjotsinghchadha.com',
    image: porfolioImage6,
  },
];

/**
 * Resume section
 */
export const education: TimelineItem[] = [
  {
    date: 'April 2014 - May 2018',
    location: 'Oriental Institute of Science & Technology, Bhopal',
    title: 'B.E in Information Technology',
    content: (
      <p>
        Completed Bachelor of Engineering in Information Technology, building a strong foundation in software
        development and engineering principles.
      </p>
    ),
  },
];

export const experience: TimelineItem[] = [
  {
    date: 'March 2023 - February 2025',
    location: 'FPS Lounge, Remote',
    title: 'Chief Technology Officer',
    content: (
      <p>
        Started as Senior Lead Engineer and was promoted to CTO. Single-handedly built the entire platform from
        scratch—initially on WordPress, then migrated to React, and later Next.js for performance and scalability.
        Developed the backend using Firebase & Google Cloud Platform (GCP), ensuring a robust and scalable
        infrastructure. Created a thriving platform where thousands of gamers book coaching sessions and earn money.
      </p>
    ),
  },
  {
    date: 'September 2021 - February 2023',
    location: 'Upwork, Remote',
    title: 'Freelancer',
    content: (
      <p>
        Implemented successful e-commerce solutions for long-term clients, resulting in a significant increase in online
        sales and customer engagement. Led the development and launch of the cryptocurrency project Phuntoken.
        Consistently exceeded client expectations by delivering high-quality results on various projects, including
        those for clients Gumballpoodle, Browtricks, Phunware.
      </p>
    ),
  },
  {
    date: 'July 2018 - August 2021',
    location: 'L&T Technology Services, Mysore',
    title: 'Software Engineer',
    content: (
      <p>
        Led the development of various successful projects at L&T, resulting in increased efficiency and productivity
        for the company. Experience in building both frontend & backend, data services and Microservices at scale.
        Experience leading and architecting major new enhancements. Strong understanding of web services and best
        practices.
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
      name: 'HisWattson',
      text: 'Prabhjot built an incredible platform that allowed me to share my gaming expertise with thousands of students. His technical skills and vision helped turn our course program into a massive success.',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/169.jpg',
    },
    {
      name: 'FPS Lounge Co-founder',
      text: 'Starting with just an idea, Prabhjot architected and built our entire platform from the ground up. His technical leadership and ability to talk to investors were instrumental in our growth and funding success.',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/14.jpg',
    },
    {
      name: 'Upwork Client',
      text: 'Working with Prabhjot on our e-commerce project resulted in significant increases in sales and user engagement. His expertise in Next.js and React delivered a superior user experience that our customers love.',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/69.jpg',
    },
  ],
};

/**
 * Contact section
 */

export const contact: ContactSection = {
  headerText: 'Get in touch.',
  description:
    "Feel free to reach out if you're looking for a CTO, tech consultant, or want to discuss potential projects.",
  items: [
    {
      type: ContactType.Email,
      text: 'prabhjottechs@gmail.com',
      href: 'mailto:prabhjottechs@gmail.com',
    },
    {
      type: ContactType.Location,
      text: 'Remote, India',
      href: 'https://www.google.com/maps/place/India',
    },
    {
      type: ContactType.Github,
      text: 'prabhjotsinghchadha',
      href: 'https://github.com/prabhjotsinghchadha',
    },
    {
      type: ContactType.LinkedIn,
      text: 'mrprabhjot',
      href: 'https://linkedin.com/in/mrprabhjot/',
    },
  ],
};

/**
 * Social items
 */
export const socialLinks: Social[] = [
  {label: 'Github', Icon: GithubIcon, href: 'https://github.com/prabhjotsinghchadha'},
  {label: 'LinkedIn', Icon: LinkedInIcon, href: 'https://linkedin.com/in/mrprabhjot/'},
  {label: 'Twitter', Icon: TwitterIcon, href: 'https://twitter.com/tweet_prabhjot'},
  {label: 'Website', Icon: MapIcon, href: 'https://prabhjotsinghchadha.com/'},
];
