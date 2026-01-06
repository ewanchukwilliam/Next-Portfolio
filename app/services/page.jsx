"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowDownRight } from "react-icons/bs";
const services = [
  {
    num: "01",
    title: "Web Development",
    description:
      "I leverage the latest technologies including MySQL, Node.js, Express, JavaScript, HTML5, and CSS3 to create dynamic and responsive websites. I specialize in Next.js for server-side rendering and Tailwind CSS for modern, scalable design.",
    href: "",
  },
  {
    num: "02",
    title: "UI/UX Design",
    description:
      "I craft user-centric designs using Tailwind CSS, Bootstrap, HTML5, and CSS3 to ensure seamless, intuitive, and visually appealing interfaces. My focus on usability and aesthetics ensures that your applications provide an exceptional user experience.",
    href: "",
  },
  {
    num: "03",
    title: "Full Stack Development/Server Management",
    description:
      "I utilize technologies like Node.js, Express, MySQL, and JavaScript for full stack development and server management. I handle everything from front-end development with React and Next.js to back-end server management and deployment, ensuring a robust and scalable infrastructure.",
    href: "",
  },
  {
    num: "04",
    title: "DevOps & Cloud Infrastructure",
    description:
      "I build and maintain scalable cloud infrastructure using AWS (EC2, CloudWatch, Elastic Beanstalk), Docker containerization, and CI/CD pipelines with GitHub Actions. I specialize in deployment automation, Nginx reverse proxies, and monitoring solutions to ensure reliable, high-performance applications.",
    href: "",
  },
];
const Services = () => {
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
          {services.map((service, index) => {
            return (
              <div
                className="flex-1 flex flex-col justify-center gap-6 group"
                key={index}
              >
                {/* top */}
                <div className="w-full flex justify-between items-center">
                  <div
                    className="text-5xl font-extrabold text-outline group-hover:text-outline-hover text-transparent transition-all duration-500"
                    key={index}
                  >
                    {service.num}
                  </div>
                  <Link href={service.href} className="w-[70px] h-[70px] rounded-full bg-white group-hover:bg-accent transition-all duration-500 flex justify-center items-center hover:-rotate-45">
                    <BsArrowDownRight className=" text-primary text-3xl"/>
                  </Link>
                </div>

                {/* title */}
                <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500" key={index}>{service.title}</h2>

                {/* description */}
                <p className="text-white/60" key={index}>{service.description}</p>
                <div key={index}>{service.title}</div>

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

export default Services;
