export const navLinks = [
  {
    id: 'about',
    title: 'About Me',
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
    tech: ['React', 'Angular 18', 'Vue', 'Svelte', 'SolidJS'],
    icon: 'services/web_development.gif',
  },
  {
    title: 'Mobile Developer',
    tech: ['Flutter', 'Ionic Framework', 'NativeScript','React Naitve'],
    icon: 'services/mobile_development.gif',
  },
  {
    title: 'Backend Developer',
    tech: ['Node JS', 'NestJS', 'MongoDB', 'Express'],
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
    name: 'Flutter',
    icon: 'technologies/flutter.gif',
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
    description: 'At AVIV Group, I play a key role in leveraging Mircofrontend architecture, resulting in smoother and more efficient UI development. This approach significantly minimizes redundant code and ensures a consistent user experience. Additionally, I focus on optimizing our applications for speed and responsiveness. Being an integral part of an agile team allows us to swiftly adapt to changes. I also contribute by conducting code reviews, providing guidance to junior developers, and fostering a culture of continuous learning, ultimately enhancing our development process.',
  },
  {
    title: 'Frontend Developer',
    company_name: 'ABOUT YOU GmbH',
    icon: 'work/aboutyou.png',
    iconBg: '#F3F3F3',
    date: 'March 2021 - Sep 2022',
    description: 'At ABOUTYOU, I focused on improving the user checkout process, making it smoother and more user-friendly. I worked with a team to integrate different payment options, making sure customers could easily complete their purchases. This resulted in more successful transactions and happier customers. Additionally, I was part of a team that adapted quickly to changes and worked closely with others to review code and help junior developers. This collaborative environment made our development process more effective.',
  },
  {
    title: 'Senior Engineer',
    company_name: 'Paypal(Altimetric)',
    icon: 'work/paypal.png',
    iconBg: '#016DD9',
    date: 'Sep 2020 - Feb 2021',
    description: 'At PayPal, I developed web applications tailored for fraud analysis. This involved creating user interfaces that allowed easy exploration of large sets of data. We focused on making sure the applications were secure, scalable, and could handle a lot of data. I also worked with an international team to thoroughly test and debug the applications, ensuring they worked well on different devices and browsers.'
  },
  {
    title: 'Senior UI Developer',
    company_name: 'Techolution',
    icon: 'work/techolution.png',
    iconBg: '#93bA3B',
    date: 'May 2017 - Aug 2020',
    description: 'At Techolution, I collaborated with an international (HearstAutos) team to develop and refine the caranddriver website. We used modern tools to ensure it was secure, scalable, and provided a seamless experience for users. I also conducted extensive testing to make sure the site worked well on various devices and browsers. I worked closely with the team to fix any issues that came up during development, ensuring a high-quality end product.',
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
