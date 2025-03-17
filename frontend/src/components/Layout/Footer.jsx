import React, { useContext } from "react";
import { Context } from "../../main";
import { Link } from "react-router-dom";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { RiInstagramFill } from "react-icons/ri";
function Footer() {
  const { isAuthorized } = useContext(Context);
  return (
    <footer className={isAuthorized ? "footerShow" : "footerHide"}>
      <div>&copy; All Rights Reserved by Rahul.</div>
      <div>
        <Link to={"https://github.com/rahulg88"} target="github">
          <FaGithub></FaGithub>
        </Link>

        <Link to={"inkedin.com/in/rahul-gupta-9aba5a263/"} target="linkedin">
          <FaLinkedin></FaLinkedin>
        </Link>
        <Link to={"https://www.instagram.com/_rahul___g/"} target="instagram">
          <RiInstagramFill></RiInstagramFill>
        </Link>
      </div>
    </footer>
  );
}

export default Footer;
