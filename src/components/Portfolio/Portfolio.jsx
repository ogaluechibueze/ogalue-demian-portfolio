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
          <span className="secondaryText">Explore More Works</span>
        </motion.div>

       
        <div className={`flexCenter ${css.showCase}`}>
         
         <motion.img variants={fadeIn("up", "tween", .5, .6)} src="./geniusbuy.png" alt="project" />
        
         

         
        <motion.img variants={fadeIn("up", "tween", .7, .6)} src="./kyc.png" alt="project" />
        
        

        
         <motion.img variants={fadeIn("up", "tween", .9, .6)} src="./revenue.png" alt="project" />
        
         

         
          <motion.img variants={fadeIn("up", "tween", .11, .6)} src="./4.jpg" alt="" />
          
           
          
          
         
        
        </div>
      
      </div>
    </motion.section>
  );
};

export default Portfolio;
