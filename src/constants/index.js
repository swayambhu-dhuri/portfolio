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
    parkez,
    youtube,
    todo,
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
    postgresql,
    bny
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
          title: "Software Developer Engineer",
          company_name: "KeeperAI"
          icon: docker,
          iconBg: "#ffffff",
          date: "Dec 2023 - May 2024",
          points: [
            "Spearheaded the modular redesign of user-facing components using React.js, Redux, and Tailwind CSS, enhancing UI responsiveness and reducing render latency across real-time dashboards.",
            "Engineered RESTful APIs with FastAPI and PostgreSQL to deliver optimized backend services, enabling seamless sentiment data retrieval across multiple integrated systems.",
            "Implemented real-time synchronization with Firebase Realtime Database, allowing live sentiment score updates across team dashboards without manual refresh.",
            "Containerized frontend and backend applications using Docker and managed reverse proxy routing through NGINX, improving deployment efficiency and maintainability.",
            "Conducted API integration testing via Postman and automated deployment pipelines with GitHub Actions to ensure CI/CD compliance and rapid feature delivery.",
            "Collaborated cross-functionally to modernize legacy codebases and reduced onboarding time for new developers by 80% through isolated container environments and documentation."
          ],
      },
    {
      title: "Software Developer Engineer",
      company_name: "Bank of New York (BNY) Mellon",
      icon: bny,
      iconBg: "#ffffff",
      date: "Dec 2023 - May 2024",
      points: [
        "Devised a logging framework that uses machine learning algorithms to improve test case creation, leading to substantially more accurate workflow pattern analysis and generating more effective test cases.",
        "Remodeled a Python FastAPI-based RESTful API for test case generation, implemented DRY principles to reduce code redundancy and improve document storage, and observed noticeable gains in storage efficiency and API performance.",
        "Designed a user interface to collect user prompts and documents, enabling file sharing via the REST API, and presented responses in an easily understandable format, contributing to a smoother user experience.",
      ],
    },
    {
      title: "Full Stack Web Developer",
      company_name: "UFaber EduTech Pvt. Ltd.",
      icon: ufaber,
      iconBg: "#ffffff",
      date: "Aug 2020 - Jul 2021",
      points: [
        "Architected and built a scalable and secure authentication microservice using Node.js and Express.js, which simplified the authentication and user management system for 100,000+ internal and external users across the company.",
        "Programmed and deployed a fluency evaluation meter by utilizing speech-to-text analysis cloud function on the Google Cloud Platform (GCP) to improve the speech recognition model and provide feedback to users.",
        "Built a Content Management System (CMS) using React.js and Django that serves over 10,000 users per day.",
        "Developed a data structure for caching user data that reduced query time by 20%.",
      ],
    },
    // {
    //   title: "Freelance Software Developer",
    //   company_name: "Harmony Aquatic Club",
    //   icon: harmony,
    //   iconBg: "#0C2370",
    //   date: "Aug 2018 - Jan 2020",
    //   points: [
    //     "Reduced labor costs by 30% by developing and implementing software solutions with Python Django and React.js.",
    //     "Built an end-to-end system to track and monitor users and payments with Django and PostgreSQL.",
    //     "Developed and Optimized SEO-Friendly user interface with ReactJS, Redux, jQuery, and Bootstrap.",
    //     "Deployed a PostgreSQL database to store 5000+ users’ data, implementing a RESTful API to automate information processing.",
    //   ],
    // },
  ];
  
  const testimonials = [
    {
      testimonial:
        `I highly recommend Swayambhu for his exceptional skills in JavaScript, data science, app development, web development, and full stack engineering. He is dependable, quick, and consistently delivers tasks on time. His innovative thinking and go-getter attitude, combined with strong communication skills, make him an invaluable asset to our team. Swayambhu is a growing rock star developer who continually impresses us with his dedication and expertise.`,
      name: "Naresh Kumar Korrapati",
      designation: "Senior Vice President",
      company: "BNY Mellon",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
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
        "ParkEZ is a versatile web platform connecting users with optimal parking solutions, empowering businesses to streamline lot management, and enabling targeted advertising opportunities.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "postgresql",
          color: "green-text-gradient",
        },
        {
          name: "fastapi",
          color: "pink-text-gradient",
        },
      ],
      image: parkez,
      source_code_link: "https://github.com/swayambhu-dhuri/parkEz",
    },
    {
      name: "YouTube Clone",
      description:
        "This app transforms video-watching online. Effortlessly explore and filter content to match your unique preferences, ensuring a seamless and customized viewing experience on the internet.",
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
          name: "firebase",
          color: "pink-text-gradient",
        },
      ],
      image: youtube,
      source_code_link: "https://github.com/swayambhu-dhuri/Youtube-clone-React",
    },
    {
      name: "Task Manager",
      description:
        "A task manager app streamlining task organization with department-specific filters and an intuitive interface, enhancing task management and facilitating efficient tracking.",
      tags: [
        {
          name: "HTML5",
          color: "blue-text-gradient",
        },
        {
          name: "CSS3",
          color: "green-text-gradient",
        },
        {
          name: "firebase",
          color: "pink-text-gradient",
        },
      ],
      image: todo,
      source_code_link: "https://github.com/swayambhu-dhuri/To-Do-APP-Pure-JS",
    },
  ];

  const socials = [
    {
      link: "https://github.com/swayambhu-dhuri",
      icon: "bi bi-github"
    },
    {
      link: "https://www.linkedin.com/in/swayambhu-dhuri/",
      icon: "bi bi-linkedin"
    },
    {
      link: "https://leetcode.com/u/swayambhu-dhuri/",
      icon: "bi bi-code-slash"
    },
    // {
    //   link: "tel:+13473224419",
    //   icon: "bi bi-telephone"
    // },
    // {
    //   link: "https://wa.me/13473224419",
    //   icon: "bi bi-whatsapp"
    // },
    
  ]
  
  export { services, technologies, experiences, testimonials, projects, socials };
