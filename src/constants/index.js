import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
    github_logo,
    linkedin,
    instagram,
    phone,
    whatsapp,
    ufaber,
    harmony,
    python,
    django,
    fastapi,
    aws, 
    firebase,
    mysql,
    postgresql
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "experience",
      title: "Experience",
    },
    {
      id: "projects",
      title: "Projects",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Full Stack Developer",
      icon: web,
    },
    {
      title: "Front-End Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Security Researcher",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "Python",
      icon: python,
    },
    {
      name: "DJango",
      icon: django,
    },
    {
      name: "FastAPI",
      icon: fastapi,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    // {
    //   name: "HTML 5",
    //   icon: html,
    // },
    // {
    //   name: "CSS 3",
    //   icon: css,
    // },
    
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Postgresql",
      icon: postgresql,
    },
    {
      name: "Firebase",
      icon: firebase,
    },
    
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "docker",
      icon: docker,
    }
  ];
  
  const experiences = [
    {
      title: "Software Developer",
      company_name: "Ufaber EduTech Pvt. Ltd",
      icon: ufaber,
      iconBg: "#ffffff",
      date: "Aug 2020 - Aug 2021",
      points: [
        "Architected and built a scalable and secure authentication microservice using Node.js and Express.js, which simplified the authentication and user management system for 100,000+ internal and external users across the company.",
        "Programmed and deployed a fluency evaluation meter by utilizing speech-to-text analysis cloud function on the Google Cloud Platform (GCP) to improve the speech recognition model and provide feedback to users.",
        "Built a Content Management System (CMS) using React.js and Django that serves over 10,000 users per day.",
        "Developed a data structure for caching user data that reduced query time by 20%.",
      ],
    },
    {
      title: "Freelance Software Developer",
      company_name: "Harmony Aquatic Club",
      icon: harmony,
      iconBg: "#0C2370",
      date: "Aug 2018 - Jan 2020",
      points: [
        "Reduced labor costs by 30% by developing and implementing software solutions with Python Django and React.js.",
        "Built an end-to-end system to track and monitor users and payments with Django and PostgreSQL.",
        "Developed and Optimized SEO-Friendly user interface with ReactJS, Redux, jQuery, and Bootstrap.",
        "Deployed a PostgreSQL database to store 5000+ users’ data, implementing a RESTful API to automate information processing.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Car Rent",
      description:
        "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/",
    },
    {
      name: "Job IT",
      description:
        "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        {
          name: "scss",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/",
    },
    {
      name: "Trip Guide",
      description:
        "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "supabase",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/",
    },
  ];

  const socials = [
    {
      link: "https://github.com/swayambhu",
      icon: "fa-brands fa-github"
    },
    {
      link: "https://www.linkedin.com/in/swayambhu-dhuri/",
      icon: "fa-brands fa-linkedin"
    },
    {
      link: "https://www.instagram.com/swayam____0809/",
      icon: "fa-brands fa-instagram"
    },
    {
      link: "tel:+13473224419",
      icon: "fa-solid fa-phone"
    },
    {
      link: "https://wa.me/13473224419",
      icon: "fa-brands fa-whatsapp"
    },
    
  ]
  
  export { services, technologies, experiences, testimonials, projects, socials };