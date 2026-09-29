"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowDownRight } from "react-icons/bs";
const areas = [
  {
    num: "01",
    title: "Backend & API Development",
    description:
      "I design and build APIs and backend services with .NET, Spring Boot, Django, and FastAPI on PostgreSQL, SQLite, and Redis. I've owned features end-to-end – Azure Blob storage with user-delegation SAS tokens, Stripe and Shippo webhook-driven order lifecycles, database-backed auth sessions, Redis caching layers, and sandboxed LangGraph agents.",
    href: "/work",
  },
  {
    num: "02",
    title: "DevOps & Cloud Infrastructure",
    description:
      "I deploy and scale services on Azure (Container Apps, ACR, Blob Storage) and AWS (EKS, EC2, S3, RDS) with Docker, Kubernetes, KEDA, and Helm. Infrastructure is provisioned as code with Terraform and Ansible – from traffic-driven autoscaling on EKS to self-hosted Proxmox servers behind Tailscale and Cloudflare.",
    href: "/work",
  },
  {
    num: "03",
    title: "CI/CD & Observability",
    description:
      "I build release pipelines in Azure DevOps, GitHub Actions, and GitLab CI – containerized builds with cached dependencies (80% faster), database migrations, and blue/green zero-downtime deployments. I instrument systems with OpenTelemetry, Application Insights, Prometheus, and Grafana so issues are visible before users report them.",
    href: "/work",
  },
  {
    num: "04",
    title: "Full Stack Development",
    description:
      "When a project needs a frontend, I build it in React and Next.js with TypeScript on top of the backends I design – from internal field-maintenance tools to an e-commerce checkout – keeping the UI thin and the business logic on the server.",
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
