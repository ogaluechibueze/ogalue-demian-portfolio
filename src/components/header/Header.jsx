import React, { useEffect, useRef, useState } from "react";
import css from "./Header.module.scss";
import { BiPhoneCall, BiMenuAltRight } from "react-icons/bi";
import { motion } from "framer-motion";
import { getMenuStyles, headerVariants } from "../../utils/motion";
import useOutsideAlerter from "../../hooks/useOutsideAlerter";
import useHeaderShadow from "../../hooks/useHeaderShadow";

const Header = () => {
  const menuRef = useRef(null);
  const [menuOpened, setMenuOpened] = useState(false);
  const headerShadow = useHeaderShadow();

  //to handle click outside of sidebar on mobile
  useOutsideAlerter({
    menuRef,
    setMenuOpened,
  });

  return (
    <motion.div
      variants={headerVariants}
      initial="hidden"
      whileInView="show"
      className={`bg-primary paddings ${css.wrapper}`}
      viewport={{ once: true, amount: 0.25 }}
      style={{boxShadow: headerShadow}}
    >
      <div className={`innerWidth ${css.container} flexCenter`}>
        <div className={css.name}>OGALUE  DEMIAN <br/><a href="mailto:ogaluechibueze@yahoo.com">ogaluechibueze@yahoo.com</a> <p>+2348035152675</p></div>
        <ul
          style={getMenuStyles(menuOpened)}
          className={`flexCenter ${css.menu}`}
          ref={menuRef}
          
        >
          <li><a href="#experties">Achievement</a></li>
          <li><a href="#work">Experience</a></li>
          <li><a href="#portfolio">Portfolio</a></li>
          <li><a href="#people">My Certification</a></li>
          <li><a href="https://drive.google.com/file/d/1mptsWBJokjofbmMCUwUaIFqAuQTjPZVq/view?pli=1">View My CV</a></li>
          </ul>

        {/* for medium and small screens */}
        <div
          className={css.menuIcon}
          onClick={() => setMenuOpened((prev) => !prev)}
        >
          <BiMenuAltRight size={30} />
        </div>
      </div>
    </motion.div>
  );
};

export default Header;
