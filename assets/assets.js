import user_image from "./user-image-2.png";
import user_image_dark from "./user-image-2-dark.png";
import code_icon from "./code-icon.png";
import code_icon_dark from "./code-icon-dark.png";
import edu_icon from "./edu-icon.png";
import edu_icon_dark from "./edu-icon-dark.png";
import project_icon from "./project-icon.png";
import project_icon_dark from "./project-icon-dark.png";
import html from "./html.svg";
import css from "./css.svg";
import javascript from "./javascript.svg";
import typescript from "./typescript.svg";
import php from "./php.png";
import nodejs from "./nodejs.svg";
import react from "./react.svg";
import next from "./next.svg";
import express from "./express.svg";
import prisma from "./prisma.svg";
import mysql from "./mysql.svg";
import mongodb from "./mongodb.png";
import supabase from "./supabase.svg";
import vscode from "./vscode.png";
import figma from "./figma.png";
import git from "./git.png";
import right_arrow_white from "./right-arrow-white.png";
import logo from "./logo-2.png";
import logo_dark from "./logo-dark-2.png";
import mail_icon from "./mail_icon.png";
import mail_icon_dark from "./mail_icon_dark.png";
import profile_img from "./profile-img-2.png";
import download_icon from "./download-icon.png";
import hand_icon from "./hand-icon.png";
import header_bg_color from "./header-bg-color.png";
import moon_icon from "./moon_icon.png";
import sun_icon from "./sun_icon.png";
import arrow_icon from "./arrow-icon.png";
import arrow_icon_dark from "./arrow-icon-dark.png";
import menu_black from "./menu-black.png";
import menu_white from "./menu-white.png";
import close_black from "./close-black.png";
import close_white from "./close-white.png";
import backend_icon from "./backend-icon.png";
import frontend_icon from "./frontend-icon.png";
import fullstack_icon from "./fullstack-icon.png";
import ui_ux_icon from "./ui-ux-icon.png";
import right_arrow from "./right-arrow.png";
import send_icon from "./send-icon.png";
import right_arrow_bold from "./right-arrow-bold.png";
import right_arrow_bold_dark from "./right-arrow-bold-dark.png";
import github_logo from "./github-logo.svg";
import github_logo_dark from "./github-logo-dark.png";
import linkedin_logo from "./linkedin-logo.svg";
import linkedin_logo_dark from "./linkedin-logo-dark.png";
import instagram_logo from "./instagram-logo.svg";
import instagram_logo_dark from "./instagram-logo-dark.png";

export const assets = {
  user_image,
  user_image_dark,
  code_icon,
  code_icon_dark,
  edu_icon,
  edu_icon_dark,
  project_icon,
  project_icon_dark,
  html,
  css,
  javascript,
  typescript,
  php,
  nodejs,
  react,
  next,
  express,
  prisma,
  mysql,
  mongodb,
  supabase,
  vscode,
  figma,
  git,
  right_arrow_white,
  logo,
  logo_dark,
  mail_icon,
  mail_icon_dark,
  profile_img,
  download_icon,
  hand_icon,
  header_bg_color,
  moon_icon,
  sun_icon,
  arrow_icon,
  arrow_icon_dark,
  menu_black,
  menu_white,
  close_black,
  close_white,
  backend_icon,
  frontend_icon,
  fullstack_icon,
  ui_ux_icon,
  right_arrow,
  send_icon,
  right_arrow_bold,
  right_arrow_bold_dark,
  github_logo,
  github_logo_dark,
  linkedin_logo,
  linkedin_logo_dark,
  instagram_logo,
  instagram_logo_dark,
};

export const workData = [
  {
    id: "sipetik",
    title: "Sipetik",
    description: "Employee Web App",
    bgImage: "/sipetik-thumbnail.png",
    detailUrl: "/work/sipetik",
    fullDescription:
      "Sipetik is a web application developed to manage employee data at the Ministry of Foreign Affairs of Indonesia, specifically within the IT and Communications Center, Personnel, and Official Documents Division. It provides features for managing detailed employee information such as leave, allowances, and training history, as well as an interactive dashboard for statistical insights. The project was completed during my internship as part of a three-person team, where I contributed as the backend developer.",
    screenshots: [
      "/sipetik/dashboard.png",
      "/sipetik/pegawai.png",
      "/sipetik/detail-akun.png",
    ],
    technologies: [
      "HTML, CSS, Javascript, React, Node.js, Express.js, Sequelize, Sass, MySQL",
    ],
    githubLink: "https://...",
  },
  {
    id: "inventrix",
    title: "Inventrix",
    description: "Inventory Web App",
    bgImage: "/inventrix-thumbnail.png",
    detailUrl: "/work/inventrix",
    fullDescription:
      "Inventrix is a web application designed to manage online borrowing of school inventory items such as projectors, cables, and other learning equipment. It features an admin dashboard for managing items, monitoring student borrowings, and confirming requests, as well as a student dashboard to view available items and track borrowing history. The project was developed as a final assignment for a Software Project course by a three-person team, where I contributed as the backend developer.",
    screenshots: [
      "/inventrix-login.png",
      "/inventrix-dashboard-admin.png",
      "/inventrix-dashboard-admin-2.png",
      "/inventrix-modal.png",
    ],
    technologies: [
      "HTML, Tailwind CSS, Javascript, React, Node.js, Express.js, Sequelize, MySQL",
    ],
    githubLink: "https://github.com/bayusbkt/inventrix-backend",
  },
  {
    id: "sixtap",
    title: "Sixtap",
    description: "Presence Web App",
    bgImage: "/sixtap-thumbnail.png",
    detailUrl: "/work/sixtap",
    fullDescription:
      "Sixtap is a web-based application that provides automated attendance and transaction services using RFID cards for students of SMK Negeri 6 Jakarta. Developed by a three-person team, I contributed as the backend developer responsible for the attendance system. Key features include RFID-based attendance processing, role-based dashboards (RBAC), and a backend system for managing student data. This project also involved unit testing with Vitest and bottom-up integration testing with Postman, and it served as my undergraduate thesis project.",
    screenshots: [
      "/sixtap-login.png",
      "/sixtap-admin-dashboard.png",
      "/sixtap-history-absence.png",
    ],
    technologies: [
      "HTML, Javascript, React, Node.js, Express.js, Sequelize, MySQL",
    ],
    githubLink: "https://github.com/dewanthaaa/sixtap-absence-backend",
  },
  {
    id: "dewa-learning",
    title: "Dewa Learning",
    description: "LMS Web App",
    bgImage: "/dewa-learning-thumbnail.png",
    detailUrl: "/work/dewa-learning",
    fullDescription:
      "Dewa Learning is a web-based learning management system that I developed independently as my first fullstack project, handling both frontend and backend. It features RBAC to separate manager and user roles—managers can manage classes and learning content (videos and texts), while users can access enrolled classes and study materials online. The system also integrates a payment simulation using Midtrans, enabling users to simulate class enrollment and transactions.",
    screenshots: [
      "/dewalearning-login.png",
      "/dewalearning-dashboard.png",
      "/dewalearning-course.png",
      "/dewalearning-manage-course.png",
    ],
    technologies: [
      "HTML, Tailwind CSS, Javascript, React, Node.js, Express.js, Prisma, Zod, MongoDB",
    ],
    githubLink:
      "https://github.com/dewanthaaa/Frontend-Learning-Management-System",
  },
];

export const serviceData = [
  {
    icon: assets.backend_icon,
    title: "Backend Development",
    description:
      "I develop the backend by building secure APIs, managing databases efficiently, and ensuring system stability by following best practices.",
    link: "",
  },
  {
    icon: assets.frontend_icon,
    title: "Frontend Development",
    description:
      "I design and develop responsive, user-friendly interfaces by implementing clean code, optimizing performance, and ensuring the best user experience through modern frontend practices.",
    link: "",
  },
  {
    icon: assets.fullstack_icon,
    title: "Fullstack Development",
    description:
      "I build complete web solutions by developing robust backends, crafting intuitive frontends, and ensuring seamless integration between both, following modern fullstack best practices.",
    link: "",
  },
  {
    icon: assets.ui_ux_icon,
    title: "UI/UX Design",
    description:
      "I design intuitive and visually appealing user interfaces while ensuring seamless user experiences through research, wireframing, prototyping, and usability best practices.",
    link: "",
  },
];

export const infoList = [
  {
    icon: assets.code_icon,
    iconDark: assets.code_icon_dark,
    title: "Languages",
    description: "HTML, CSS, Javascript, Node Js, React Js, Next Js",
  },
  {
    icon: assets.edu_icon,
    iconDark: assets.edu_icon_dark,
    title: "Education",
    description: "Bachelor of Informatics and Computer Engineering Education",
  },
  {
    icon: assets.project_icon,
    iconDark: assets.project_icon_dark,
    title: "Projects",
    description:
      "Inventory Management, Employee Data Management, Learning Management System, and More",
  },
];

export const toolsData = [
  assets.html,
  assets.css,
  assets.javascript,
  assets.typescript,
  assets.php,
  assets.nodejs,
  assets.react,
  assets.next,
  assets.express,
  assets.prisma,
  assets.mysql,
  assets.mongodb,
  assets.supabase,
  assets.vscode,
  assets.figma,
  assets.git,
];
