export const navLinks = [
  {
    id: 'about',
    title: 'About me',
  },
  {
    id: 'experience',
    title: 'Experience',
  },
  {
    id: 'projects',
    title: 'Projects',
  },
  {
    id: 'contact',
    title: 'Contact',
  },
];

export interface Service {
  title: string;
  tech: string[];
  icon: string;
}

export const services: Service[] = [
  {
    title: 'Front-End Developer',
    tech: ['React', 'Angular', 'Vue', 'Svelte'],
    icon: 'services/web_development.gif',
  },
  {
    title: 'Mobile Developer',
    tech: ['React Naitve', 'Ionic Framework', 'NativeScript'],
    icon: 'services/mobile_development.gif',
  },
  {
    title: 'Backend Developer',
    tech: ['Node JS', 'MongoDB', 'Express'],
    icon: 'services/backend_development.gif',
  },
  {
    title: 'UI/UX Designer',
    tech: ['Figma'],
    icon: 'services/ui-ux-designer.gif',
  },
];

export interface Technology {
  name: string;
  icon: string;
}
  
export const technologies: Technology[] = [
  {
    name: 'HTML 5',
    icon: 'technologies/html.png',
  },
  {
    name: 'CSS 3',
    icon: 'technologies/css.png',
  },
  {
    name: 'JavaScript',
    icon: 'technologies/javascript.png',
  },
  {
    name: 'TypeScript',
    icon: 'technologies/typescript.png',
  },
  {
    name: 'React JS',
    icon: 'technologies/react.png',
  },
  {
    name: 'Vue JS',
    icon: 'technologies/vue.png',
  },
  {
    name: 'Angular',
    icon: 'technologies/angular.png',
  },
  {
    name: 'Svelte',
    icon: 'technologies/svelte.png',
  },
  {
    name: 'Node JS',
    icon: 'technologies/nodejs.png',
  },
  {
    name: 'MongoDB',
    icon: 'technologies/mongodb.png',
  },
  {
    name: 'React Native',
    icon: 'technologies/react-native.png',
  },
  {
    name: 'NativeScript',
    icon: 'technologies/nativescript.png',
  },
  {
    name: 'Ionic',
    icon: 'technologies/ionic.png',
  },
];

export interface Experience {
  title: string;
  company_name: string;
  icon: string;
  iconBg: string;
  date: string;
  description: string;
};
  
export const experiences: Experience[] = [
  {
    title: 'Senior Frontend Developer',
    company_name: 'AVIV Group GmBH',
    icon: 'work/immowelt.png',
    iconBg: '#F7C604',
    date: 'Nov 2022 -  Present',
    description: 'As a Senior Frontend Developer at AVIV Group (Immowelt), I bring a wealth of experience in crafting seamless user interfaces. I collaborate closely with cross-functional teams, leveraging cutting-edge technologies to create intuitive, visually appealing, and highly responsive web applications. With a keen eye for detail and a passion for performance optimisation, I ensure our products provide an exceptional user experience across devices and browsers. Additionally, I actively contribute to code reviews and mentor junior developers, fostering a collaborative and knowledge-sharing environment, ultimately playing a pivotal role in elevating front-end development efforts at AVIV Group.',
  },
  {
    title: 'Frontend Developer',
    company_name: 'ABOUT YOU GmbH',
    icon: 'work/aboutyou.png',
    iconBg: '#F3F3F3',
    date: 'March 2021 - Sep 2022',
    description: 'As a front-end developer for the Checkout team, I worked on improving the user checkout process and enhancing the purchase lifecycle by offering a range of payment options. Collaborated with the team to integrate multiple payment gateways and optimize the checkout process. The end result was a streamlined and user-friendly checkout process, leading to increased successful purchases and customer satisfaction.',
  },
  {
    title: 'Senior Engineer',
    company_name: 'Paypal(Altrimetric)',
    icon: 'work/paypal.png',
    iconBg: '#016DD9',
    date: 'Sep 2020 - Feb 2021',
    description: 'As a member of the PayPal team, I worked on developing enterprise web applications and next-generation web applications that catered to the needs of fraud analysts. To meet their requirements, we designed user interfaces that allowed users to explore, analyze, and view a large number of data points. To achieve this, we used modern development frameworks and tools to develop applications that were scalable, secure, and could handle large amounts of data. We also collaborated closely with the fraud analysts to understand their needs and requirements and incorporated their feedback into the design and development process.'
  },
  {
    title: 'Senior UI Developer',
    company_name: 'Techolution',
    icon: 'work/techolution.png',
    iconBg: '#93bA3B',
    date: 'May 2017 - Aug 2020',
    description: 'As part of the Techolution(Hearst Autos) team, I worked side-by-side with international developers, project managers, analytics managers, and account managers to successfully develop, test, and debug the caranddriver.com website. We utilized modern development frameworks and tools to ensure the site is scalable, secure, and provides a seamless user experience. Additionally, we conducted extensive testing to ensure the site is responsive and accessible on various devices and browsers. We collaborated closely with the team to identify and fix any bugs or issues that arose during development, ensuring a high-quality end product.',
  },
  {
    title: 'Software Developer',
    company_name: 'nibbleMatrix',
    icon: 'work/nibblematrix.png',
    iconBg: '#BA1D08',
    date: 'May 2017 - Aug 2020',
    description: 'I began my career here and worked on numerous minor projects, where I acquired many technical skills from colleagues. In response to the client\'s needs, we developed an e-commerce online food application that catered to both day-to-day and weekly orders. The solution included an intuitive user interface that allowed customers to browse and select their preferred food items and place orders. Additionally, the application provided real-time notifications to the client regarding new orders, enabling them to manage their online food orders efficiently. To ensure that the application met the client\'s business needs, we worked closely with them to identify their specific requirements, such as payment gateways, inventory management, and order processing. We also integrated features to enable customers to leave reviews and ratings, helping the client to improve their customer service and reputation.'
  },
];

export interface Social {
  image: string;
  link: string;
}

export const SocialLinks: Social[] = [
  {
    image: 'social/linkedin.gif',
    link: 'https://www.linkedin.com/in/narenv7/'
  },
  {
    image: 'social/gmail.gif',
    link: 'https://mail.google.com/mail/?view=cm&fs=1&to=narenderv7@gmail.com'
  },
  {
    image: 'social/github.gif',
    link: 'https://github.com/narender56',
  },
  {
    image: 'social/whatsapp.gif',
    link: 'https://wa.me/15751408499',
  }
];

export interface ProjectsTag {
  name: string;
  color: string;
};

export interface Project {
  name: string;
  description: string;
  image: string;
  url: string;
  tags: ProjectsTag[];
}
  
export const projects: Project[] = [
  {
    name: 'Car and Driver',
    description: 'Car and Driver is a respected automotive publication known for its comprehensive reviews, industry insights, and engaging content, catering to the interests of car enthusiasts worldwide. With a legacy of excellence, it continues to be a trusted source of information in the dynamic world of automobiles.',
    tags: [
      {
        name: 'Angular 2',
        color: 'blue-text-gradient',
      },
      {
        name: 'JavaScript',
        color: 'pink-text-gradient',
      },
      {
        name: 'TypeScript',
        color: 'orange-text-gradient',
      },
    ],
    image: 'projects/car-and-driver.png',
    url: 'https://www.caranddriver.com',
  },
  {
    name: 'ABOUT YOU',
    description: 'About You is a pioneering fashion-tech company that combines personalized shopping experiences with cutting-edge technology. With a focus on individuality, they provide curated recommendations tailored to each customer\'s unique style. Embracing sustainability and inclusivity, About You is revolutionizing the way we shop for fashion.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'Syncfusion UI',
        color: 'orange-text-gradient',
      },
      {
        name: 'tailwind',
        color: 'green-text-gradient',
      },
    ],
    image: 'projects/about-you.png',
    url: 'https://en.aboutyou.de/',
  },
  {
    name: 'Immowelt',
    description: 'Immowelt, a flagship platform of AVIV Group, stands as a prominent real estate marketplace renowned for its innovative property solutions. As a Senior Frontend Developer, I spearhead the creation of seamless, visually engaging web applications. By optimizing performance and offering mentorship to junior developers, I play a pivotal role in ensuring Immowelt\'s user-friendly and high-performing platform. This enables users to effortlessly navigate through an extensive array of property listings, making their real estate experience with Immowelt a breeze.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'tailwind',
        color: 'green-text-gradient',
      },
    ],
    image: 'projects/immowelt.png',
    url: 'https://www.immowelt.de/',
  },
];
