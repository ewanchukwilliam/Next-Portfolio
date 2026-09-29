"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaBlog } from "react-icons/fa";
import { motion } from "framer-motion";

const info = [
  {
    icon: <FaPhoneAlt />,
    title: "Phone",
    description: "(+1) 780 288 7365",
  },
  {
    icon: <FaEnvelope />,
    title: "Email",
    description: "ewanchukwilliam@gmail.com",
  },
  {
    icon: <FaMapMarkerAlt />,
    title: "Location",
    description: "Edmonton, AB",
  },
  {
    icon: <FaBlog />,
    title: "Blog",
    description: "ewanchukwilliam.com",
    href: "https://www.ewanchukwilliam.com",
  },
];

const areas = [
  "Backend & API Development",
  "DevOps & Cloud Infrastructure",
  "CI/CD & Observability",
  "Full Stack Development",
];

const EMAIL = "ewanchukwilliam@gmail.com";

// no backend: builds a mailto: link from the form so the visitor's mail app
// opens a pre-filled draft addressed to me
const handleSubmit = (e) => {
  e.preventDefault();
  const data = Object.fromEntries(new FormData(e.currentTarget));
  const name = `${data.firstname ?? ""} ${data.lastname ?? ""}`.trim();
  const subject = `Portfolio inquiry${data.area ? `: ${data.area}` : ""}${name ? ` from ${name}` : ""}`;
  const body = [
    `Name: ${name || "-"}`,
    `Email: ${data.email || "-"}`,
    `Phone: ${data.phone || "-"}`,
    `Area: ${data.area || "-"}`,
    "",
    data.message ?? "",
  ].join("\n");
  window.location.href = `mailto:${EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
};

const Contact = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="py-6"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-[30px]">
          {/* form */}
          <div className="xl:w-1/2 flex justify-center order-2 xl:order-none">
            <form
              onSubmit={handleSubmit}
              className="w-full max-w-[720px] flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl"
            >
              <h2 className="text-4xl text-accent">Let's Work Together</h2>
              <p className="text-white/60">
                Hiring for a backend or DevOps role? Send me a message.
              </p>
              {/* input */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input type="text" name="firstname" placeholder="Firstname" autoComplete="given-name" required />
                <Input type="text" name="lastname" placeholder="Lastname" autoComplete="family-name" />
                <Input type="email" name="email" placeholder="Email address" autoComplete="email" required />
                <Input type="tel" name="phone" placeholder="Phone number" autoComplete="tel" />
              </div>
              {/* select */}
              <Select name="area">
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="What are you looking for?" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Area of expertise</SelectLabel>
                    {areas.map((area) => (
                      <SelectItem key={area} value={area}>
                        {area}
                      </SelectItem>
                    ))}
                  </SelectGroup>
                </SelectContent>
              </Select>
              {/* text area */}
              <Textarea
                name="message"
                required
                className="h-[200px]"
                placeholder="Type your message here."
              />
              {/* btn */}
              <TooltipProvider delayDuration={100}>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button type="submit" size="md" className="max-w-40">
                      Send Message
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent align="start">
                    <p>
                      <span className="font-bold text-red-600">CAUTION:</span>{" "}
                      Won't work if you don't have an email app set up.
                    </p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </form>
          </div>
          {/* info */}
          <div className="xl:w-1/2 flex items-center justify-center order-1 xl:order-none mb-8 xl:mb-0">
            <ul className="flex flex-col gap-10">
              {info.map((item, index) => {
                return (
                  <li key={index} className="flex items-center gap-6">
                    <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-accent rounded-md flex items-center justify-center">
                      <div className="text-[28px]">{item.icon}</div>
                    </div>
                    <div className="flex-1">
                      <p className="text-white/60">{item.title}</p>
                      <h3 className="text-xl">
                        {item.href ? (
                          <a href={item.href} target="_blank" rel="noreferrer" className="hover:text-accent transition-all">
                            {item.description}
                          </a>
                        ) : (
                          item.description
                        )}
                      </h3>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
