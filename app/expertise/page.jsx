"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowDownRight } from "react-icons/bs";
const areas = [
  {
    num: "01",
    title: "Backend and API Development",
    description: "I enjoy designing my backend applications in object-oriented languages. I prefer to build backends to be easy to maintain, with only the abstractions they need, and prefer interfaces over inheritance. I enforce business invariants through domain-driven design (DDD).",
    href: "/work",
  },
  {
    num: "02",
    title: "DevOps and Platform Engineering",
    description: "I’ve discovered that I really enjoy designing smooth developer workflows. That started with customizing my own development environment in Neovim, grew into building internal tooling, and eventually led me toward DevOps and platform engineering. I build repeatable paths from development to production, automate operational workflows, and create common patterns for deployment, configuration, observability, and recovery. I want infrastructure to reduce the operational burden on developers without hiding how the system actually works.",
    href: "/work"
  },
  {
    num: "03",
    title: "CI/CD and Observability",
    description: "I design pipelines that cleanly separate application development from infrastructure management. The cleaner the design, the less day to day friction for everyone. For observability I use OpenTelemetry for traces, Prometheus for metrics, and Grafana for dashboards.",
    href: "/work",
  },
  {
    num: "04",
    title: "Full Stack Development",
    description: "I build frontends in React and React Native with TypeScript. I keep business rules on the server so the UI stays simple and easy to change. I use TanStack for data fetching and caching instead of rolling my own, and design mobile apps to keep working offline.",
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
