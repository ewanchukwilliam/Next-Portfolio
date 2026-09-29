"use client";

import Link from "next/link";
import { FaGithub, FaLinkedinIn, FaBlog } from "react-icons/fa";

const socials = [
  { icon: <FaGithub />, path: "https://github.com/ewanchukwilliam" },
  { icon: <FaLinkedinIn />, path: "https://www.linkedin.com/in/william-ewanchuk-920002239/" },
  { icon: <FaBlog />, path: "https://www.ewanchukwilliam.com" },
];

const Social = ({ containerStyles, iconStyles }) => {
  return (
    <div className={containerStyles}>
      {socials.map((item, index) => {
        return (
          <Link key={index} href={item.path} target="_blank" rel="noreferrer" className={iconStyles}>
            {item.icon}
          </Link>
        );
      })}
    </div>
  );
};

export default Social;
