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
    label: "10-Month Internship",
    title: "Full Stack Developer/DevOps",
    description: "Deploying and rewriting WorX, NACG's app for coordinating mining equipment, parts, technicians, and work orders. Designed the beta release pipeline with migration checks, changelog validation, and blue/green deploys. Cut build times 80% with Docker caching, owned Azure Blob Storage, added OpenTelemetry tracing, and built offline mobile sync.",
    stack: [
      { name: ".NET 10" },
      { name: "Azure Container Apps" },
      { name: "KEDA" },
      { name: "Docker/ACR" },
      { name: "Azure DevOps" },
      { name: "Blob Storage" },
      { name: "Static Web Apps" },
      { name: "OpenTelemetry" },
      { name: "App Insights" },
      { name: "SQLite" },
      { name: "Cloudflare" },
      { name: "React/TanStack" },
      { name: "React Native" },
    ],
    image: "/nacg-homepage.png",
    live: "https://nacg.ca/",
    github: "",
  },
  {
    num: "02",
    category: "internship",
    label: "10-Month Internship",
    title: "Software Engineering Intern",
    description: "Django backend for LLM tooling. Built a Docker sandbox for LangGraph agents, a Redis cache that cut response latency 40%, and secured Stripe billing endpoints. Added Amplitude analytics and monitored deploys with CloudWatch.",
    stack: [
      { name: "Django" },
      { name: "PostgreSQL" },
      { name: "LangGraph" },
      { name: "LangChain" },
      { name: "Redis" },
      { name: "AWS EBS" },
      { name: "Docker" },
      { name: "Stripe" },
      { name: "Amplitude" },
      { name: "PipeDream" },
    ],
    image: "/assets/stepscale.png",
    live: "https://stepscale.ai/",
    github: "",
  },
  {
    num: "03",
    category: "fullstack",
    label: "Freelance",
    title: "LittleBrick 3D Printing",
    description: "E-commerce site for a local 3D printing business. The Spring Boot backend handles live shipping quotes, Stripe and Shippo webhooks, and order tracking with Google Maps. Self-hosted on Proxmox with Terraform, Ansible, and Cloudflare Tunnels.",
    stack: [
      { name: "Spring Boot" },
      { name: "PostgreSQL" },
      { name: "Stripe" },
      { name: "Shippo" },
      { name: "Google Maps" },
      { name: "Docker" },
      { name: "Nginx" },
      { name: "Terraform" },
      { name: "Ansible" },
      { name: "Proxmox" },
      { name: "Tailscale" },
      { name: "Cloudflare Tunnels" },
      { name: "Actions Runners" },
      { name: "Next.js" },
      { name: "TypeScript" },
    ],
    image: "/littlebrick.jpg",
    live: "https://dev.littlebrick3dprinting.ca",
    github: "https://github.com/WilliamsOrganization/Printer-Marketplace",
  },
  {
    num: "04",
    category: "Devops",
    title: "EKS Traffic Driven Scaling Platform",
    description: "FastAPI service on AWS EKS, provisioned with Terraform and deployed with Helm. KEDA scales on Prometheus traffic metrics, monitored in Grafana. Load tested with k6 at 5k+ RPS and 500 VUs.",
    stack: [
      { name: "AWS EKS" },
      { name: "Kubernetes" },
      { name: "Helm" },
      { name: "KEDA" },
      { name: "Terraform" },
      { name: "Prometheus" },
      { name: "Grafana" },
      { name: "Redis" },
      { name: "FastAPI" },
      { name: "Nginx" },
      { name: "Route53" },
      { name: "K6 Load Testing" },
    ],
    image: "/k8s-benchmarking.jpg",
    live: "https://api.codeseeker.dev/page",
    github: "https://github.com/ewanchukwilliam/K8s-Api-Benchmarking-Lab",
  },
  {
    num: "05",
    category: "side",
    label: "Read My Blog",
    title: "rm -rf thefrench",
    description: "Documentation recording my trials and tribulations as a developer. Might become more technical in the future, but for now just covers guiding principals, learned goodies, and interesting books/resources I find throughout my software development journey",
    stack: [
      { name: "Nuxt 4" },
      { name: "Vue" },
      { name: "TypeScript" },
      { name: "Nuxt Content" },
      { name: "Nuxt UI" },
      { name: "Tailwind CSS" },
      { name: "SQLite" },
      { name: "Vercel" },
    ],
    image: "/blob-homepage.png",
    live: "https://www.ewanchukwilliam.com",
    github: "https://github.com/ewanchukwilliam/Live-Blog",
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
      className="min-h-[80vh] flex flex-col py-12 xl:py-8 xl:px-0"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:items-center xl:gap-[60px] xl:min-h-[calc(100svh-176px)]">
          <div className="w-full xl:w-[40%] flex flex-col order-2 xl:order-none">
            <div className="flex flex-col gap-[20px]">
              {/* project id */}
              <div className="text-8xl leading-none font-extrabold text-transparent text-outline">
                {project.num}
              </div>
              {/* project Catagory */}
              <h2 className="text-[42px] font-bold leading-none text-white capitalize">
                {project.label ?? `${project.category} project`}
              </h2>
              {/* project title */}
              <h3 className="text-2xl font-semibold text-white/90">{project.title}</h3>
              {/* project description */}
              <p className="text-white/60">{project.description}</p>
              {/* stack */}
              <ul className="flex gap-x-3 gap-y-1 flex-wrap">
                {project.stack.map((item, index) => {
                  return (
                    <li className="text-lg text-accent" key={index}>
                      {item.name}
                      {/* remove the last comma */}
                      {index !== project.stack.length - 1 && ","}
                    </li>
                  );
                })}
              </ul>
              {/* border */}
              <div className="border border-white/20"></div>
              {/* buttons */}
              <div className="flex items-center gap-4">
                <TooltipProvider delayDuration={100}>
                  {/* live project buttons */}
                  {project.live === "" ? null : project.category === "Devops" ? (
                    // Disabled state (no Link, just UI)
                    <Tooltip>
                      <TooltipTrigger
                        className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center opacity-40 cursor-not-allowed"
                        aria-disabled="true"
                      >
                        <BsArrowUpRight className="text-white text-3xl" />
                      </TooltipTrigger>
                      <TooltipContent>AVAILABLE UPON REQUEST (20 min spinup)</TooltipContent>
                    </Tooltip>
                  ) : (
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Link
                          href={project.live}
                          target="_blank"
                          rel="noreferrer"
                          className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group"
                        >
                          <BsArrowUpRight className="text-white text-3xl group-hover:text-accent" />
                        </Link>
                      </TooltipTrigger>
                      <TooltipContent>{project.live}</TooltipContent>
                    </Tooltip>
                  )}
                  {project.github === "" ? null : (
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Link
                          href={project.github}
                          target="_blank"
                          rel="noreferrer"
                          className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group"
                        >
                          <BsGithub className="text-white text-3xl group-hover:text-accent" />
                        </Link>
                      </TooltipTrigger>
                      <TooltipContent>Github Link</TooltipContent>
                    </Tooltip>
                  )}
                </TooltipProvider>
              </div>
            </div>
          </div>
          <div className="w-full xl:flex-1 min-w-0">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              grabCursor
              className="mb-12"
              onSlideChange={handleSlideChange}
            >
              {projects.map((project, index) => {
                return (
                  <SwiperSlide key={index} className="w-full">
                    <div className="w-full aspect-[16/10] relative group flex justify-center items-center bg-white/5 rounded-xl overflow-hidden">
                      {/* overlay */}
                      <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10"></div>
                      {/* image */}
                      <div className="relative w-full h-full">
                        <Image
                          src={project.image}
                          fill
                          sizes="(min-width: 1200px) 60vw, 100vw"
                          priority={index === 0}
                          draggable={false}
                          className="object-cover"
                          alt={project.title}
                        />
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
              {/* slider buttons */}
              <WorkSliderBtns
                containerStyles="flex gap-2 absolute px-2 xl:px-0 right-0 bottom-[calc(50%_-_22px)] xl:bottom-4 xl:right-4 z-20 w-full justify-between xl:w-max xl:justify-none"
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
