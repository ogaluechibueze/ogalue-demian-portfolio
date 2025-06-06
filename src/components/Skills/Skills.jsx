import React from "react";
import { comments, skills, sliderSettings } from "../../utils/data";
import css from "./Skill.module.scss";
import Slider from "react-slick";
import {motion} from 'framer-motion'
import { footerVariants, staggerChildren, textVariant, textVariant2 } from "../../utils/motion";

const Skills = () => {
  return (
    <motion.section
    variants={staggerChildren}
    initial="hidden"
    whileInView="show"
    viewport={{ once: false, amount: 0.25 }}
    section className={`paddings ${css.wrapper}`}>

      <a className="anchor"></a>

      <motion.div
      variants={footerVariants}
      className={`yPaddings innerWidth ${css.container}`}>


        <div className={`flexCenter ${css.heading}`}>
          <span className="primaryText">MY TECH STACKS:</span>
          <div className="skill">
          <ul >
            <li> Python</li>
            <li> NodeJS</li>
             <li> DJango</li>
            <li> JavaScript</li>
            <li> TypeScript</li>
            <li> MongoDB</li>
            <li> React</li>
            <li>PowerApp</li>
            <li>Power Automate</li>
            <li> Advanced Excel</li>
            <li> NestJS</li>
            <li> ExpreesJs</li>
            <li> Tailwind CSS</li>
            <li> Figma</li>
            <li> MySQL</li>
            <li> PostgreSQL</li>
            <li> Git</li>
            <li> Docker</li>
            <li> Azure</li>
            <li> Google Cloud Platform</li>
            <li> Microsoft 365</li>
          </ul>
          </div>

        </div>



        <div className={`yPaddings ${css.comments}`}>
          {/* to use slider , we have to inlcude css in index.html head */}
          <Slider {...sliderSettings} className={css.slider}>
            {skills.map((comment, i) => {
              return (
                <div className={`flexCenter ${css.comment}`}>
                  <img src={comment.img} alt="" />
                  <div className={css.line}></div>
                  <div className={css.bio}>
                    <span>{comment.name}</span>
                    
                    
                  </div>
                </div>
              );
            })}
          </Slider>
         
        </div>
        <p className="slide-dot">Click on the dots to display more Tech Skills</p>

      </motion.div>

    </motion.section>
  );
};

export default Skills;
