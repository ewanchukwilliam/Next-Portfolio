"use client";

import Link from "next/link";
import { FaGithub, FaLinkedinIn, FaBlog } from "react-icons/fa";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const socials = [
  { icon: <FaGithub />, path: "https://github.com/ewanchukwilliam", label: "GitHub" },
  { icon: <FaLinkedinIn />, path: "https://www.linkedin.com/in/william-ewanchuk-920002239/", label: "LinkedIn" },
  { icon: <FaBlog />, path: "https://www.ewanchukwilliam.com", label: "Blog" },
];

const Social = ({ containerStyles, iconStyles }) => {
  return (
    <TooltipProvider delayDuration={100}>
      <div className={containerStyles}>
        {socials.map((item, index) => {
          return (
            <Tooltip key={index}>
              <TooltipTrigger asChild>
                <Link href={item.path} target="_blank" rel="noreferrer" aria-label={item.label} className={iconStyles}>
                  {item.icon}
                </Link>
              </TooltipTrigger>
              <TooltipContent>{item.label}</TooltipContent>
            </Tooltip>
          );
        })}
      </div>
    </TooltipProvider>
  );
};

export default Social;
