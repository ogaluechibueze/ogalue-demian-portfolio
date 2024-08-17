import React from "react";
import {BrowserRouter, Link} from 'react-router-dom'
import { motion } from "framer-motion";
import css from "./Portfolio.module.scss";
import { fadeIn, staggerChildren, textVariant, textVariant2 } from "../../utils/motion";
const Portfolio = () => {
  return (
    <motion.section
    variants={staggerChildren}
    initial="hidden"
    whileInView="show"
    viewport={{ once: false, amount: 0.25 }}
    className={`paddings ${css.wrapper}`}>

      <a className="anchor" id="portfolio"></a>

      <div className={`innerWidth flexCenter ${css.container}`}>


        <motion.div variants={textVariant(.4)} className={`flexCenter ${css.heading}`}>
          <div>
            <span className="primaryText">My Latest Works</span>
            <p style={{marginTop: "10px"}}>Perfect solution for digital experience</p>
          </div>
          <a href="https://demian-portfolio.vercel.app/" className="secondaryText">Explore More Works</a>
        </motion.div>

       
        <div className={`flexCenter ${css.showCase}`}>
       <div className={`flexCenter ${css.Case}`}> 
     <motion.img variants={fadeIn("up", "tween", .5, .6)} src="./geniusbuy.png" alt="project" />
     <p>E-Commerce Shop designed with Vite, styled with Babel css, with TypeScript for Front-end and Back-end, Sanity schema for Database</p>
    <a href="https://genius-buy.vercel.app/">Click To Visit</a>
     </div> 

     <div className={`flexCenter ${css.Case}`}>
        <motion.img variants={fadeIn("up", "tween", .7, .6)} src="./geniussocial.png" alt="project"  />
        <p>A Social Media App Designed with Next js, Styled with Tailwinds css, JavaScript and Prisma Postgresql for back-end and MongoDB for database</p>
        <a href="https://social-genius-app.vercel.app/">Click To Visit</a>
        </div>

        <div className={`flexCenter ${css.Case}`}>
         <motion.img variants={fadeIn("up", "tween", .9, .6)} src="./chatgpt.png" alt="project" />
         <p>ChatGPT designed with React app, styled with SASS css, with NESTFUL API to send response to OPENAI GPT-4o-MINI </p>
         <a href="https://ogaluechibueze.github.io/My-Web-Design/">Click To Visit</a>
         </div>  
         
          <div className={`flexCenter ${css.Case}`}>
         <motion.img variants={fadeIn("up", "tween", .11, .6)} src="./4.jpg" alt="" />
         <p>My personal portfolio designed with next js, styled with Tailwinds css, JavaScript for front-End, Website for my Web design projects</p>
         <a href="https://demian-portfolio.vercel.app/">Click To Visit</a>
         </div>
           
          
          
         
        </div>
        </div>
      
      
    </motion.section>
  );
};

export default Portfolio;
