import React from "react";
import { footerVariants, staggerChildren } from "../../utils/motion";
import css from "./Footer.module.scss";
import {motion} from 'framer-motion'
const Footer = () => {
  return (
    <motion.section
    variants={staggerChildren}
    initial="hidden"
    whileInView="show"
    viewport={{ once: false, amount: 0.25 }}
    className={`paddings ${css.wrapper}`}>
      
      
      <motion.div
      variants={footerVariants}
      className={`innerWidth yPaddings flexCenter ${css.container}`}>
        <div className={css.left}>
          <span className="primaryText">
            I am open to Network <br />
            Let's work together
          </span>
          <span className="primaryText">
            Contact me via  <a href="mailto:ogaluechibueze@yahoo.com">My Email</a>
          </span>
        </div>

        <div className={css.right}>
          <div className={css.info}>
            <span className="secondaryText">Information</span>
            <p>5 akpakpava road, Benin city</p>
          </div>
          <ul className={css.menu}>
            <li><a href="https://x.com/@GeniusWorldOCD">My Twitter page</a></li>
            <li><a href="https://www.linkedin.com/in/engr-chibueze-ogalue">My Linkedin Page</a></li>
            <li><a href="https://demian-portfolio.vercel.app/">My personal Portfolio page</a></li>
            <li><a href="https://github.com/ogaluechibueze">My github page</a></li>
          </ul>
        </div>
      </motion.div>
    </motion.section>
  );
};

export default Footer;
