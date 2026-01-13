"use client";

import { motion } from "framer-motion";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { BsArrowUpRight, BsGithub } from "react-icons/bs";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import Link from "next/link";
import Image from "next/image";
import WorkSliderBtns from "@/components/WorkSliderBtns";

const projects = [
  {
    num: "01",
    category: "internship",
    title: "Software Engineer: Full-Stack Developer",
    description: "10-month internship at Stepscale.ai (November 2024 – August 2025). Implemented Redis caching reducing LLM response latency by 40% and integrated Amplitude analytics for error tracking. Built Stripe billing APIs, AI sandbox for Docker script execution, and monitored deployments via AWS CloudWatch.",
    stack: [
      { name: "Django" },
      { name: "PostgreSQL" },
      { name: "Langraph" },
      { name: "AWS EBS" },
      { name: "Docker" },
      { name: "Stripe" },
	  { name: "PipeDream" },
	
    ],
    image: "/assets/stepscale.png",
    live: "https://stepscale.ai/",
    github: "",
  },
  {
    num: "02",
    category: "Devops",
    title: "Kubernetes Benchmarking Tool AWS EKS deployable",
    description: "Developed EKS deployable Kubernetes benchmarking tool for pods on t3.small containers. this service mimics a multi-node cluster that collects/reports pod information to a shared redis database. This information can be accessed by any pod to view all cluster information. It's capable of supporting up to 500 concurrent connections and 10,000 rps and scales between 1-10 pods without losing any requests and auto signs TLS certificates with a cert-manager",
    stack: [
      { name: "AWS EKS" },
      { name: "Docker" },
      { name: "Kubernetes" },
      { name: "Helm" },
      { name: "Nginx" },
      { name: "Cert-Manager" },
	  { name: "Redis" },
      { name: "Cron" },
	  { name: "FastAPI" },
	  { name: "Lets Encrypt" },
	  { name: "Route53" },
	  { name: "Eksctl" },
    ],
    image: "/assets/kubernetes.png",
    live: "",
    github: "https://github.com/ewanchukwilliam/devopshealthcheckk8testing",
  },
  {
    num: "03",
    category: "fullstack",
    title: "Job Application Tracker",
    description: "Developed a Job Application Tracker using React, Express, Sequelize, MySQL, Tailwind CSS, and CORS for secure HTTPS requests and database management. Tracks stats, exports to excel, and uses standard REST requests",
    stack: [
      { name: "Html 5" },
      { name: "Express" },
      { name: "Tailwindcss" },
      { name: "Node.Js" },
      { name: "Mysql" },
      { name: "Javascript" },
      { name: "Nginx" },
    ],
    image: "/assets/jobhunting.png",
    live: "",
    github: "http://github.com/ewanchukwilliam/jobhunting",
  },
  {
    num: "04",
    category: "frontend",
    title: "Chess Learning Website",
    description:" a responsive website with HTML, CSS, and JavaScript for practicing and learning chess. Implemented interactive features to enhance user engagement and improve usability.",
    stack: [
      { name: "Html 5" },
      { name: "Next.js" },
      { name: "Tailwindcss" },
      { name: "Node.Js" },
    ],
    image: "/assets/chess.JPG",
    live: "",
    github: "https://github.com/ewanchukwilliam/portfolio",
  },
];

const Work = () => {
  const [project, setProject] = useState(projects[0]);

  const handleSlideChange = (swiper) => {
    const currentIndex = swiper.activeIndex;
    setProject(projects[currentIndex]);
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          <div className="w-full xl:w-[500px] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
            <div className=" flex flex-col gap-[30px] h-[50px]">
              {/* project id */}
              <div className="text-8xl leading-none font-extrabold text-transparent text-outline">
                {project.num}
              </div>
              {/* project Catagory */}
              <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">
				{project.category === "internship" ? "10-Month Internship" : `${project.category} project`}
              </h2>
              {/* project description */}
              <p className="text-white/60">{project.description}</p>
              {/* stack */}
              <ul className="flex gap-4 flex-wrap">
                {project.stack.map((item, index) => {
                  return (
                    <li className="text-xl text-accent" key={index}>
                      {item.name}
                      {/* remove the last comma */}
                      {index !== project.stack.length - 1 && ","}
                    </li>
                  );
                })}
              </ul>
              {/* border */}
              <div className="border border-white.20"></div>
              {/* buttons */}
              <div className="flex items-center gap-4">
                {/* live project buttons */}
				{project.live === "" ? null : (
                <Link href={project.live}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsArrowUpRight className="text-white text-3xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>Live Project</TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
				)}
				{project.github === "" ? null : (
                <Link href={project.github}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsGithub className="text-white text-3xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>Github Link</TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
				)}
              </div>
            </div>
          </div>
          <div className="w-full xl:w-[50%] h-auto">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              className="xl:h-[520px] mb-12"
              onSlideChange={handleSlideChange}
            >
              {projects.map((project, index) => {
                return (
                  <SwiperSlide key={index} className="w-full">
                    <div className="h-[460px] relative group flex justify-center items-center bg-pink-50/20">
                      {/* overlay */}
                      <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10"></div>
                      {/* image */}
                      <div className="relative w-full h-full">
                        <Image
                          src={project.image}
                          fill
                          className="object-cover"
                          alt=""
                        />
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
              {/* slider buttons */}
              <WorkSliderBtns
                containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none"
                btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all"
              />
            </Swiper>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Work;
