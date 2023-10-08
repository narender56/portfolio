import {
  analytics,
  dashboard,
  Provid,
  hoobank,
  quote,
  portfoliosample,
} from '../assets';
  
export const navLinks = [
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'work',
    title: 'Work',
  },
  {
    id: 'contact',
    title: 'Contact',
  },
];

export const services = [
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
  
export const technologies = [
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
  
export const experiences = [
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

export const testimonials = [
  {
    key: 1,
    image: 'social/linkedin.gif',
    link: 'https://www.linkedin.com/in/narenv7/'
  },
  {
    key: 2,
    image: 'social/gmail.gif',
    link: 'mailto:narenderv7@gmail.com'
  },
  {
    key: 3,
    image: 'social/github.gif',
    link: 'https://github.com/narender56',
  }
];
  
export const projects = [
  {
    name: 'Random Quote Generator',
    description: 'A Fully Responsive Random Quote generating website project given by Free Code Camp while completing Front-End Libraries Certifications built using React.JS , Bootstrap CSS and HTML.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'bootstrap',
        color: 'pink-text-gradient',
      },
      {
        name: 'quoteapi',
        color: 'orange-text-gradient',
      },
    ],
    image: quote,
    source_code_link: 'https://github.com/omunite215/FCC-Random-Quote-Generator',
    netlify_link: 'https://randomquotegeneratorbyom.netlify.app/',
  },
  {
    name: 'Admin Dashboard UI',
    description:
      'React Admin Dashboard is a stunning web application that has a beautiful User Interface and has been built using advanced JavaScript concepts, React, and Tailwind CSS which has different graphs, stats and themes.',
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
    image: dashboard,
    source_code_link: 'https://github.com/omunite215/React-Admin-DashBoard',
    netlify_link: 'https://reactadmindashboardbyom.netlify.app/',
  },
  {
    name: 'HooBank',
    description:
      'A responsive Bank HomePage showcasing different features such as various payment gateways integration, easy money transfer, advanced security, etc. It has a beautiful interface made using Tailwind CSS and React',
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
    image: hoobank,
    source_code_link: 'https://github.com/omunite215/hoobank',
    netlify_link: 'https://hoobankbyom.netlify.app/',
  },
  {
    name: 'Provid A Youtube Clone',
    description:
      'Provid is a YouTube clone project built with React, Material UI, and Tailwind CSS. The platform has been designed with a stunning dark mode that enhances the viewing experience. The user interface is intuitive and easy to navigate, ensuring that users can easily find the content they\'re looking for.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'tailwind',
        color: 'green-text-gradient',
      },
      {
        name: 'materialui',
        color: 'orange-text-gradient',
      },
      {
        name: 'rapidapi',
        color: 'blue-text-gradient',
      },
    ],
    image: Provid,
    source_code_link: 'https://github.com/omunite215/Provid-A-YouTube-Clone',
    netlify_link: 'https://providbyom.netlify.app/',
  },
  {
    name: 'Analytics HomePage',
    description:
      'A responsive HomePage which is a product page of an Analytics displaying its products features, clients, feedbacks and many more. It has a beautiful interface made using Tailwind CSS and React.',
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
    image: analytics,
    source_code_link: 'https://github.com/omunite215/Analytics-Web-App',
    netlify_link: 'https://analyticsbyom.netlify.app/',
  },
  {
    name: 'A 3D Developer Portfolio',
    description:
      'A responsive 3D Portfolio website which is made using Three.js a cross-browser JavaScript library and application programming interface used to create and display animated 3D computer graphics in a web browser using WebGL. It has a beautiful interface made using Tailwind CSS and React.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'tailwind',
        color: 'green-text-gradient',
      },
      {
        name: 'threejs',
        color: 'orange-text-gradient',
      },
      {
        name: 'emailjs',
        color: 'pink-text-gradient',
      },
    ],
    image: portfoliosample,
    source_code_link: 'https://github.com/omunite215/portfolio',
    netlify_link: 'https://portfoliobyompatel.netlify.app/',
  },
];
