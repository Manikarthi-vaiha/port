import {
  ArrowDownTrayIcon,
  BuildingOffice2Icon,
  CalendarIcon,
  FlagIcon,
  MapIcon,
} from '@heroicons/react/24/outline';

import GithubIcon from '../components/Icon/GithubIcon';
import InstagramIcon from '../components/Icon/InstagramIcon';
import LinkedInIcon from '../components/Icon/LinkedInIcon';
import StackOverflowIcon from '../components/Icon/StackOverflowIcon';
import heroImage from '../images/header-background.webp';
import porfolioImage2 from '../images/portfolio/portfolio-2.jpg';
import porfolioImage3 from '../images/portfolio/portfolio-3.jpg';
import porfolioImage4 from '../images/portfolio/portfolio-4.jpg';
import porfolioImage5 from '../images/portfolio/portfolio-5.jpg';
import porfolioImage6 from '../images/portfolio/portfolio-6.jpg';
import porfolioImage7 from '../images/portfolio/portfolio-7.jpg';
import porfolioImage8 from '../images/portfolio/portfolio-8.jpg';
import porfolioImage9 from '../images/portfolio/portfolio-9.jpg';
import porfolioImage10 from '../images/portfolio/portfolio-10.jpg';
import porfolioImage11 from '../images/portfolio/portfolio-11.jpg';
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
  title: 'Mani-portfolio',
  description: "Skills & Project experiance has been updated on the site, chat with me if any enquiries, thank you",
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
  name: `I'm Manikandan.`,
  description: (
    <>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
      Hey! I'm Abdul Rahman, I've been close to a computer since an early age, and been passionate about it ever since.
        {/* I'm a India based <strong className="text-stone-100">Mobile Application Developer</strong>, <strong className="text-stone-100"> Relevantz Technology Services
          </strong> helping build a modern, mobile-first, domain
        registrar and site builder. */}
      </p>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        In my free time time, you can catch me training in <strong className="text-stone-100">Muay Thai</strong>,
        plucking my <strong className="text-stone-100">banjo</strong>, or exploring beautiful{' '}
        <strong className="text-stone-100">Vancouver Island</strong>.
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
  description: `Hey! I'm Manikandan, 8 years of Mobile app development experience in software industry and
  hard-working, Detail-oriented, methodical professional and self-motivated Mobile Application Developer.
  Worked as an Application Developer with vast experience in continuously developing,
  implementing and adopting new technologies to maximize development efficiency and innovate applications;
  skills involve design, develop, implement and enhance highly optimized cross-platform hybrid mobile apps and methods to meet both internal and external analysis requirements.`,
  aboutItems: [
    {label: 'Location', text: 'Chennai, India', Icon: MapIcon},
    {label: 'Age', text: '30', Icon: CalendarIcon},
    {label: 'Nationality', text: 'Indian', Icon: FlagIcon},
    {label: 'Employment', text: 'Relevantz Technology Services', Icon: BuildingOffice2Icon},
  ],
};

/**
 * Skills section
 */
export const skills: SkillGroup[] = [
  {
    name: 'Spoken languages',
    skills: [
      {
        name: 'English',
        level: 10,
      },
      {
        name: 'Tamil',
        level: 10,
      },
      {
        name: 'Malayalam',
        level: 8,
      },
    ],
  },
  {
    name: 'Frontend development',
    skills: [
      {
        name: 'React',
        level: 9,
      },
      {
        name: 'Typescript',
        level: 7,
      },
      {
        name: 'GraphQL',
        level: 8,
      },
    ],
  },
  {
    name: 'Mobile development',
    skills: [
      {
        name: 'React Native',
        level: 10,
      },
      {
        name: 'Flutter',
        level: 10,
      },
      {
        name: 'Swift',
        level: 10,
      },
      {
        name: 'Objective-C',
        level: 7,
      },
    ],
  },
];

/**
 * Portfolio section
 */
export const portfolioItems: PortfolioItem[] = [
  {
    title: 'Loyale app',
    description: 'At Loyale, we are constantly striving to enhance your shopping experience. We are thrilled to introduce four fantastic new features that will make using the Loyale App even more rewarding and convenient.',
    url: 'https://apps.apple.com/bh/app/loyale-app/id1511516966',
    image: porfolioImage2,
  },
  {
    title: 'Loyale app Merchant',
    description: 'Welcome to Loyale, your ultimate solution for marketing and loyalty needs. With Loyale, you can effortlessly retain and reward loyal customers, boosting revenue and creating a personalized experience for your customers. Our platform offers a variety of rewards, including Video, Birthday, and Referral rewards, to enhance customer loyalty and appreciation. All rights reserved ©2023 2 Attract new customers with our customizable loyalty scheme, creating enticing offers that captivate and convert. Loyale is the go-to platform for all your marketing and loyalty requirements, delivering seamless customer engagement and driving business growth. Join us today and unlock the full potential of customer retention and loyalty.',
    url: 'https://apps.apple.com/us/app/loyale-app-merchant/id1601195842',
    image: porfolioImage3,
  },
  {
    title: 'Smartility Gate',
    description: 'Get notified when your visitor arrives/leaves at gate and you can approve or deny their entry right in the app. An invite for one time guests like family & friends, handyman services, cabs, etc, An EasyPass for regular visitors like maids, tutors, nearby shop deliveries, etc',
    url: 'https://apps.apple.com/in/app/smartility-gate/id1533521084',
    image: porfolioImage4,
  },
  {
    title: 'The Eve App',
    description: 'Eve shopping app is the first destination for Women to shop for fashion and beauty in Bahrain. Enjoy online shopping with over 100 brands and over 10,500 products across Gold, Abaya, clothing, Perfumes, and more.',
    url: 'https://apps.apple.com/us/app/the-eve-app/id1642302113',
    image: porfolioImage5,
  },
  {
    title: 'UniFind',
    description: 'UniFind App is your gateway to apply for universities. List of universities based on the chosen country. List of degrees offered by universities. List of programs in each degree. Ability to apply for any program in different universities from different countries. Ability to modify details of the application.',
    url: 'https://apps.apple.com/us/app/unifind/id1551525717',
    image: porfolioImage6,
  },
  {
    title: 'ShulCloud Mobile Payments',
    description: 'ShulCloud Mobile Payments empowers ShulCloud clients in the USA to swiftly and effortlessly gather and record both online (credit card) and offline (cash, paper check) payments via mobile devices. A ShulCloud Integrated Payments merchant account is required. Payments are seamlessly recorded in ShulCloud. Credit card details may originate from the payers ShulCloud account or a card presented in person (scanned using Tap to Pay or the Stripe Reader M2, or entered manually). Additionally, Bill to Account is available if desired. Clients can choose how to manage payments from non-account holders, if permissible (create a new account, allocate to a catch-all account, or generate a standard public payment in ShulCloud). Optionally, clients can gather payer information such as name and address for lead generation purposes. Additionally, clients can decide whether to collect an optional or mandatory payment processing fee. Finally, clients can create a team of ordinary ShulCloud users empowered to collect payments at specific events, without the need to assign permissions or grant broader data access.',
    url: 'https://apps.apple.com/us/app/shulcloud-mobile-payments/id6453163340',
    image: porfolioImage7,
  },
  {
    title: 'ShulCloud Administrator App',
    description: 'The ShulCloud administrator app lets synagogue staff and volunteers manage the most critical tasks for the shul directly on their smartphone. Administrators can look up member data, view account balances, process transactions, send statements, send quick emails or push notifications, look up lifecycle events, manage CRM features and much more.',
    url: 'https://apps.apple.com/us/app/shulcloud-administrator-app/id1216362644',
    image: porfolioImage8,
  },
  {
    title: 'Or Torah',
    description: 'Or Torah app keeps you up-to-date with the latest news, events, minyanim and happenings at the synagogue.',
    url: 'https://apps.apple.com/app/or-torah/id1149083082',
    image: porfolioImage9,
  },
  {
    title: 'Ohel Yaacob Congregation',
    description: 'Ohel Yaacob Congregation app keeps you up-to-date with the latest news, events, minyanim and happenings at the synagogue. It also gives you the localized zmanim for the shuls location and the users current location.',
    url: 'https://apps.apple.com/us/app/ohel-yaacob-congregation/id1381514711',
    image: porfolioImage10,
  },
  {
    title: 'Congregation Shaare Zion',
    description: 'Congregation Shaare Zion app keeps you up-to-date with the latest news, events, minyanim and happenings at the synagogue. It also gives you the localized zmanim for the shuls location and the users current location.',
    url: 'https://apps.apple.com/us/app/congregation-shaare-zion/id955829157',
    image: porfolioImage11,
  },
];

/**
 * Resume section -- TODO: Standardize resume contact format or offer MDX
 */
export const education: TimelineItem[] = [
  {
    date: 'April 2016',
    location: 'Coimbatore, India',
    title: 'Bachelors of computer science & engineering',
    content: <p />,
  },
  {
    date: 'March 2013',
    location: 'Diploma',
    title: 'Computer scince & technology',
    content: <p />,
  },
];

export const experience: TimelineItem[] = [
  {
    date: 'October 2022 - Present',
    location: 'Relevantz Technology Services',
    title: 'Senior Software Engineer',
    content: (
      <p>
        Describe work, special projects, notable achievements, what technologies you have been working with, and
        anything else that would be useful for an employer to know.
      </p>
    ),
  },
  {
    date: 'October 2019 - September-2022',
    location: 'Hola Mundo Graphics Design',
    title: 'Senior iOS Developer',
    content: (
      <p>
        Conferred with data processing or project managers to obtain information on limitations or capabilities for data processing projects.<br />
        Consulted with customers and other departments on project status, proposals, and technical issues, such as software system design and maintenance.<br />
        Responded quickly to meet customer needs and resolve problems.
      </p>
    ),
  },
  {
    date: 'May 2018 - Aug-2019',
    location: 'WafiApps, Bahrain',
    title: 'iOS Developer',
    content: (
      <p>
        Worked with coworkers to complete tasks.<br />
        Participated in ongoing training to enhance own job skills and knowledge.
      </p>
    ),
  },
  {
    date: 'January 2017 - May-2018',
    location: 'Vaiha Software Solution',
    title: 'Junior iOS Developer',
    content: (
      <p>
        Learning Swift/Objective-C programming skills<br />
        Worked with coworkers to complete tasks.<br />
        Wrote well-designed, testable code.<br />
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
      name: 'Steve Jobs',
      text: 'I want to put a ding in the universe',
      image: 'https://i.insider.com/656e93d10ec98e92f74c0510?width=700',
    },
    {
      name: 'Felienne Hermans',
      text: 'Confustion is part of programming',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSn0bBpsiTBAp88UT8Dd_LjguyTr5pkJH_gyLlOfNEeTTCGoQ2U',
    },
    {
      name: 'Linus Torvalds',
      text: 'Talk is cheep show me the code',
      image: 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcR2a8LLjkXzYOMMMUVGQES3mrBHRxb5cyHW7DNzxnt7aVRkHItR',
    },
  ],
};

/**
 * Contact section
 */

export const contact: ContactSection = {
  headerText: 'Get in touch.',
  description: "Reach out to me, Let's be internet Bffs",
  items: [
    {
      type: ContactType.Email,
      text: 'manikarthi.vaiha@gmail.com',
      href: 'mailto:manikarthi.vaiha@gmail.com',
    },
    {
      type: ContactType.Location,
      text: 'Coimbatore, Tamil Nadu, India',
      href: 'https://www.google.ca/maps/place/Coimbatore,+Tamil+Nadu/@11.0141263,76.884833,12z',
    },
    {
      type: ContactType.Instagram,
      text: 'Manikandan',
      href: 'https://www.instagram.com/itsme_mani_7/',
    },
    {
      type: ContactType.Github,
      text: 'Manikarthi-vaiha',
      href: 'https://github.com/Manikarthi-vaiha',
    },
  ],
};

/**
 * Social items
 */
export const socialLinks: Social[] = [
  {label: 'Github', Icon: GithubIcon, href: 'https://github.com/Manikarthi-vaiha'},
  {label: 'Stack Overflow', Icon: StackOverflowIcon, href: 'https://stackoverflow.com/users/11065564/manikandan-s'},
  {label: 'LinkedIn', Icon: LinkedInIcon, href: 'https://www.linkedin.com/in/manibasto/'},
  {label: 'Instagram', Icon: InstagramIcon, href: 'https://www.instagram.com/itsme_mani_7/'},
];
