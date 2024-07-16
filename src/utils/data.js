import { HiOutlineDesktopComputer } from "react-icons/hi";
import { CiMobile1 } from "react-icons/ci";
import { MdWorkspacesOutline } from "react-icons/md";
export const projectExperience = [
  {
    name: "Website Design",
    projects: 6,
    icon: HiOutlineDesktopComputer,
    bg: "#286F6C",
  },
  {
    name: "Mobile App Design",
    projects: 7,
    icon: CiMobile1,
    bg: "#EEC048",
  },
  {
    name: "Brand Identity",
    projects: 5,
    icon: MdWorkspacesOutline,
    bg: "#F26440",
  },
];

export const WhatDoIHelp = [
  "Maintaining databases and ensuring system security.",
  "Training end-users on hardware functionality and software programs.",
  "Providing IT assistance to staff and customers.",
  "Participating in the design and creation of scalable software.",
  "Writing clean, functional code on the front-end and back-end.",
  "Testing and fixing bugs or other coding issues."
];

export const workExp = [
  {
    place: "Benin Electricity Distribution Company",
    tenure: "December 2015 - To Date",
    role: "IT Support Engineer/Full Stack Developer",
    detail:
      "A Full stack Developer and IT Support Engineer that worked with a team in building Apps for Revenue Protection and for daily business",
  },
  {
    place: "Beta Glass PLC",
    tenure: "February 2014 - November 2015",
    role: "Process Maintenace Engineer",
    
     detail:
     "Worked with a team that Design drawing of machine parts for fabrication and daily maintenance of Factory equipments."
  },
  {
    place: "Benek Engineering Limited",
    tenure: "March 2013 - January 2014",
    role: "Maintenance Supervisor",
    detail:
      "Work with team that carry general maintenance on heavy duty equipment such as Swamp buggies, excavators, cranes, generators, trucks etc.",
  },
];


export const comments = [
  { 
    name: "Full Stack Software Developer",
    post: "IBM Certificate",
    comment:
      "Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    img: "./full-stack.png",
  },
  {
    name: "Microsoft Azure Cloud Services",
    post: "Microsoft Azure Certificate",
    comment:
      "Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    img: "./Azure.png",
  },
  {
    name: "Meta Back-end Development",
    post: "Meta Certificate",
    comment:
      "Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    img: "./back-end.png",
  },
  {
    name: "Meta Front-End Development",
    post: "Meta Certificate",
    comment:
      "Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    img: "./front-end.png",
  },
  {
    name: "IBM Cloud Computing",
    post: "IBM Certificate",
    comment:
      "Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    img: "./cloud-computing.png",
  },
  {
    name: "Microsoft Introduction to Computers",
    post: "Microsoft Certificate",
    comment:
      "Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    img: "./computer.png",
  },
  {
    name: "Microsoft Secure Network",
    post: "Microsoft Certificate",
    comment:
      "Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    img: "./secure-network.png",
  },
  
];

export const sliderSettings = {
  dots: true,
  infinite: false,
  speed: 1000,
  slidesToShow: 3,
  slidesToScroll: 1,
  initialSlide: 0,
  touchMove: true,
  useCSS: true,

  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 1000,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};
