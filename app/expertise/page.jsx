"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowDownRight } from "react-icons/bs";
const areas = [
  {
    num: "01",
    title: "Backend and API Development",
    description: "I build backend services primarily in object-oriented languages, with an emphasis on clear domain models and maintainable APIs. I use domain-driven design (DDD) where the problem warrants it, keeping business invariants close to the domain and abstractions proportional to the complexity they solve. I generally favor composition and explicit interfaces over deep inheritance hierarchies.",
    href: "/work",
  },
  {
    num: "02",
    title: "DevOps and Platform Engineering",
    description: "I work on the systems between source code and production: build and deployment pipelines, infrastructure, runtime environments, observability, and developer tooling. I care about reproducibility, safe delivery, useful operational feedback, and reducing toil through automation and self-service. I try to keep the platform proportional to the problem—adding orchestration and abstraction where they provide clear operational value.",
    href: "/work"
  },
  {
    num: "03",
    title: "CI/CD and Observability",
    description: "I build delivery pipelines around repeatable builds, explicit deployment stages, and clear boundaries between application and infrastructure changes. In production, I instrument applications with OpenTelemetry and use metrics, traces, logs, and dashboards to make system behavior and failures easier to understand.",
    href: "/work",
  },
  {
    num: "04",
    title: "Full Stack Development",
    description: "I build web applications with React and TypeScript and mobile applications with React Native. I use TanStack Query for server state and data fetching, and component libraries where they make sense. Most of my frontend work supports the backend systems and APIs I build.",
    href: "/work",
  },
];
const Expertise = () => {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
          }}
          className="grid grid-cols-1 md:grid-cols-2 gap-[60px]"
        >
          {areas.map((area, index) => {
            return (
              <div
                className="flex-1 flex flex-col justify-start gap-6 group"
                key={index}
              >
                {/* top */}
                <div className="w-full flex justify-between items-center">
                  <div
                    className="text-5xl font-extrabold text-outline group-hover:text-outline-hover text-transparent transition-all duration-500"
                    key={index}
                  >
                    {area.num}
                  </div>
                  <Link href={area.href} className="w-[70px] h-[70px] rounded-full bg-white group-hover:bg-accent transition-all duration-500 flex justify-center items-center hover:-rotate-45">
                    <BsArrowDownRight className=" text-primary text-3xl"/>
                  </Link>
                </div>

                {/* title */}
                <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500" key={index}>{area.title}</h2>

                {/* description */}
                <p className="text-white/60" key={index}>{area.description}</p>

                {/* border */}
                <div className="border-b border-white/20 w-full"></div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Expertise;
