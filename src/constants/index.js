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
      id: "home",
      title: "Home",
    },
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
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },

    {
      name: "TailWind",
      icon: tailwind,
    },
    
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
      name: "MySQL",
      icon: mysql,
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
    },
    {
      name: "figma",
      icon: figma,
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
        `Swayambhu is a great professional to work with. We worked together at uFaber on several projects where in he handled the frontend designs and api integrations while I was focused on api creation. He is keen on learning new things and keeping himself updated with latest frameworks.
        His ability to deal with challenges and come up with new ideas to achieve the results were always an inspiration. I’m delighted, I had the chance to learn a lot from him.`,
      name: "Ashutosh Dhondkar",
      designation: "Software Engineer",
      company: "Karza Technologies",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "Swayambhu is very good at analytical thinking and a quick learner. Knows when and how to apply knowledge. He has good acumen of software development as a whole which make working with him easy.",
      name: "Dishank Tak",
      designation: "Backend SDE ||",
      company: "Neo Wealth and Asset Management",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "In the short time frame in which we worked together, I've found Swayambhu to be a very hard working and passionate individual who deeply values his own work and asks the right questions. Proficient in both frontend and backend development, he will surely bring great value to any team he's working with.",
      name: "Cyber Naskar",
      designation: "Consulting Backend Engineer",
      company: "Alleyway Capital",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "ParkEz",
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
      icon: "bi bi-github"
    },
    {
      link: "https://www.linkedin.com/in/swayambhu-dhuri/",
      icon: "bi bi-linkedin"
    },
    {
      link: "https://www.instagram.com/swayam____0809/",
      icon: "bi bi-instagram"
    },
    {
      link: "tel:+13473224419",
      icon: "bi bi-telephone"
    },
    {
      link: "https://wa.me/13473224419",
      icon: "bi bi-whatsapp"
    },
    
  ]
  
  export { services, technologies, experiences, testimonials, projects, socials };