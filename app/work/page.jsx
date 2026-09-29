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
    description: "Co-op at North American Construction Group (April 2026 – Current) on a company-wide rewrite of the field maintenance platform used at North American and Australian mining sites. Building the .NET backend and a direct integration replacing manual JDE Oracle coordination. Designed the blue/green zero-downtime release pipeline, containerized CI builds (80% faster), owned Azure Blob storage from design to production, and instrumented OpenTelemetry tracing. Also built the React web app and a SQLite-backed offline mode for the React Native client.",
    stack: [
      { name: ".NET 10" },
      { name: "Azure Container Apps" },
      { name: "KEDA" },
      { name: "Docker/ACR" },
      { name: "Azure DevOps" },
      { name: "Blob Storage" },
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
    description: "10-month internship at Stepscale.ai (November 2024 – August 2025) on a Django backend for LLM-powered tooling. Built an isolated Docker sandbox for LangGraph agents to generate and analyze files, added a Redis caching layer that cut LLM response latency by 40%, secured Stripe billing endpoints and webhooks, and refactored the report export pipeline to PDF/Word/Excel/Google Workspace. Monitored deployments with AWS CloudWatch and GitHub Actions.",
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
    category: "Devops",
    title: "EKS Traffic Driven Scaling Platform",
    description: "Deployed a FastAPI service to AWS EKS with Terraform, automated TLS, and PromQL-driven autoscaling to benchmark Gunicorn worker and thread configurations. Helm/AWS CLI deploy pipeline handles Route 53 DNS and Let's Encrypt certificates. KEDA scales on Prometheus traffic metrics, monitored in Grafana and load tested with k6 – sustaining 5k+ RPS at 500 VUs. Pod metrics are shared through a Redis cache.",
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
    num: "04",
    category: "fullstack",
    title: "LittleBrick 3D Printing – E-Commerce Platform",
    description: "Spring Boot and PostgreSQL e-commerce backend for a 3D printing shop. Stripe and Shippo webhooks drive the order lifecycle, live Shippo rate quotes are estimated server-side from cart dimensions, addresses are geocoded via the Google Maps API, and auth uses PostgreSQL-backed bearer sessions with role-based endpoints. Self-hosted on Proxmox, provisioned with Terraform and Ansible, with self-hosted GitHub Actions runners. Next.js frontend with a Three.js product preview.",
    stack: [
      { name: "Spring Boot" },
      { name: "PostgreSQL" },
      { name: "Stripe" },
      { name: "Shippo" },
      { name: "WebSocket/STOMP" },
      { name: "Docker Compose" },
      { name: "Nginx" },
      { name: "Terraform" },
      { name: "Ansible" },
      { name: "Tailscale" },
      { name: "GitHub Actions" },
      { name: "Next.js" },
    ],
    image: "/littlebrick.jpg",
    live: "https://dev.littlebrick3dprinting.ca",
    github: "https://github.com/WilliamsOrganization/Printer-Marketplace",
  },
  {
    num: "05",
    category: "backend",
    title: "Insider Trading Tracker: Back-End Developer",
    description: "Built automated Python ETL pipeline tracking congressional insider trades via hourly cron jobs, aggregating data from 3 financial APIs. Implemented error logging and database monitoring for API performance tracking. Generated plots comparing trade dates with historical options data, deployed via Docker.",
    stack: [
      { name: "Python" },
      { name: "Docker" },
      { name: "PostgreSQL" },
      { name: "Cron" },
      { name: "FMP APIs" },
    ],
    image: "/assets/backendproject.png",
    live: "",
    github: "https://github.com/ewanchukwilliam/Live-Insider-Trading-Analytics",
  },
  {
    num: "06",
    category: "side",
    title: "Terminal Lover – Developer Blog",
    description: "My personal blog documenting what I learn as a developer – internship lessons, take-home exams, and book reflections. Built with Nuxt 4 and Nuxt Content so posts are plain Markdown files that auto-populate the blog listings and navigation menu, with a table of contents, light/dark themes, and a contact form. Prerendered and deployed to Vercel on every push to main.",
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
