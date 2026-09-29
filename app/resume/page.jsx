"use client";

import {
	SiMysql,
	SiPython,
	SiC,
	SiCplusplus,
	SiReact,
	SiDocker,
	SiTypescript,
	SiOpenjdk,
	SiDotnet,
	SiGnubash,
	SiDjango,
	SiSpringboot,
	SiFastapi,
	SiPostgresql,
	SiSqlite,
	SiMongodb,
	SiRedis,
	SiKubernetes,
	SiHelm,
	SiTerraform,
	SiAnsible,
	SiProxmox,
	SiNginx,
	SiCloudflare,
	SiLinux,
	SiAmazonaws,
	SiMicrosoftazure,
	SiAzuredevops,
	SiGithubactions,
	SiGitlab,
	SiGrafana,
	SiPrometheus,
	SiOpentelemetry,
	SiJunit5,
	SiGit,
	SiNeovim,
} from "react-icons/si";
import { TbBrandCSharp, TbSql } from "react-icons/tb";

const about = {
	title: "About me",
	description:
		"Computer Engineering Co-op student at the University of Alberta, focused on backend and DevOps. Currently a co-op at North American Construction Group after a 10-month internship at Stepscale.ai.",
	info: [
		{
			fieldName: "Name",
			fieldValue: "William Ewanchuk",
		},
		{
			fieldName: "Phone",
			fieldValue: "(+1) 780 288 7365",
		},
		{
			fieldName: "Location",
			fieldValue: "Edmonton, AB",
		},
		{
			fieldName: "Email",
			fieldValue: "ewanchukwilliam@gmail.com",
		},
		{
			fieldName: "School Email",
			fieldValue: "wewanchu@ualberta.ca",
		},
		{
			fieldName: "Blog",
			fieldValue: "ewanchukwilliam.com",
		},
	],
};

// experience <data value=""></data>
const experience = {
	icon: "assets/resume/badge.svg",
	title: "My experience",
	description:
		"Two internships. Currently building release pipelines and Azure infrastructure for WorX at NACG. Previously built Django backends and LLM tooling at Stepscale.ai. Background in server infrastructure and emergency medical response.",
	items: [
		{
			company: "NACG",
			position: "Full Stack Developer/DevOps",
			duration: "April 2026 to Present",
		},
		{
			company: "Stepscale.ai",
			position: "Software Engineering Intern",
			duration: "November 2024 to August 2025",
		},
		{
			company: "LittleBrick3dPrinting",
			position: "Software Developer",
			duration: "June 2025 to Present",
		},
		{
			company: "Recon Audio Visual",
			position: "Server Technician",
			duration: "June 2024 to July 2024",
		},
	],
};

// education data
const education = {
	icon: "assets/resume/badge.svg",
	title: "My education",
	description:
		"B.Sc. Computer Engineering Co-op student at the University of Alberta, expected to graduate May 2027.",
	items: [
		{
			insitution: "University of Alberta",
			degree: "B.Sc. Computer Engineering Co-op",
			duration: "2021 to May 2027 (expected)",
		},
		{
			insitution: "Western Institute of Emergency Education",
			degree: "Emergency Medical Responder",
			duration: "2021",
		},
	],
};

// skills data
const skills = {
	title: "My skills",
	description:
		"Backend and DevOps developer working in Spring Boot, .NET, Django, and FastAPI. I ship to Azure and AWS with Docker, Kubernetes, and Terraform, and monitor with OpenTelemetry, Prometheus, and Grafana.",
	skillList: [
		// core backend and devops
		{ icon: <SiOpenjdk />, name: "Java" },
		{ icon: <SiSpringboot />, name: "Spring Boot" },
		{ icon: <TbBrandCSharp />, name: "C#" },
		{ icon: <SiDotnet />, name: ".NET" },
		{ icon: <SiPython />, name: "Python" },
		{ icon: <SiDjango />, name: "Django" },
		{ icon: <SiFastapi />, name: "FastAPI" },
		{ icon: <SiDocker />, name: "Docker" },
		{ icon: <SiKubernetes />, name: "Kubernetes / KEDA" },
		{ icon: <SiMicrosoftazure />, name: "Azure" },
		{ icon: <SiAmazonaws />, name: "AWS" },
		{ icon: <SiTerraform />, name: "Terraform" },
		{ icon: <SiPostgresql />, name: "PostgreSQL" },
		{ icon: <SiRedis />, name: "Redis" },
		{ icon: <TbSql />, name: "SQL" },
		{ icon: <SiGnubash />, name: "Bash" },
		{ icon: <SiLinux />, name: "Linux/Unix" },
		// infrastructure, ci/cd and observability
		{ icon: <SiHelm />, name: "Helm" },
		{ icon: <SiAnsible />, name: "Ansible" },
		{ icon: <SiProxmox />, name: "Proxmox" },
		{ icon: <SiNginx />, name: "Nginx" },
		{ icon: <SiCloudflare />, name: "Cloudflare" },
		{ icon: <SiAzuredevops />, name: "Azure DevOps" },
		{ icon: <SiGithubactions />, name: "GitHub Actions" },
		{ icon: <SiGitlab />, name: "GitLab CI" },
		{ icon: <SiOpentelemetry />, name: "OpenTelemetry" },
		{ icon: <SiPrometheus />, name: "Prometheus" },
		{ icon: <SiGrafana />, name: "Grafana" },
		// other tools
		{ icon: <SiTypescript />, name: "TypeScript" },
		{ icon: <SiSqlite />, name: "SQLite" },
		{ icon: <SiMysql />, name: "MySQL" },
		{ icon: <SiMongodb />, name: "MongoDB" },
		{ icon: <SiJunit5 />, name: "JUnit" },
		{ icon: <SiGit />, name: "Git" },
		{ icon: <SiNeovim />, name: "Vim / Neovim" },
		// frontend
		{ icon: <SiReact />, name: "React / React Native" },
		// embedded
		{ icon: <SiC />, name: "C" },
		{ icon: <SiCplusplus />, name: "C++" },
	],
};

// scholarships data
const scholarships = {
	title: "Scholarships & Awards",
	description:
		"$7,600 in scholarships for academic excellence.",
	items: [
		{
			name: "Faculty of Engineering Iron Standard Entrance Scholarship",
			amount: "$5,000",
			year: "2021",
		},
		{
			name: "Walter and Edith (Hughes) Fryers Undergraduate Scholarship",
			amount: "$1,300",
			year: "2022",
		},
		{
			name: "Alex Rutherford Scholarship",
			amount: "$1,300",
			year: "2021",
		},
	],
};

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import {
	Tooltip,
	TooltipContent,
	TooltipProvider,
	TooltipTrigger,
} from "@/components/ui/tooltip";

import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";

const Resume = () => {
	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{
				opacity: 1,
				transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
			}}
			className="py-12 xl:py-8"
		>
			<div className="container mx-auto">
				<Tabs
					defaultValue="experience"
					className="flex flex-col xl:flex-row gap-[60px]"
				>
					<TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
						<TabsTrigger value="experience">Experience</TabsTrigger>
						<TabsTrigger value="education">Education</TabsTrigger>
						<TabsTrigger value="skills">Skills</TabsTrigger>
						<TabsTrigger value="scholarships">Awards</TabsTrigger>
						<TabsTrigger value="about">About me</TabsTrigger>
					</TabsList>
					{/* content */}
					<div className="w-full">
						{/* experience */}
						<TabsContent value="experience" className="w-full">
							<div className="flex flex-col gap-[30px] text-center xl:text-left h-[calc(100svh-192px)] xl:h-[calc(100svh-176px)] min-h-[420px]">
								<h3 className="text-4xl font-bold ">{experience.title}</h3>
								<p className="max-w-[600px] xl:max-w-none text-white/60 mx-auto xl:mx-0">
									{experience.description}
								</p>
								<ScrollArea className="flex-1 min-h-0">
									<ul className="grid grid-col-1 lg:grid-cols-2 gap-[30px]">
										{experience.items.map((item, index) => {
											return (
												<li
													key={index}
													className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
												>
													<span className="text-accent">{item.duration}</span>
													<h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
														{item.position}
													</h3>
													<div className="flex items-center gap-3">
														{/* dot */}
														<span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
														<p className="text-white/60">{item.company}</p>
													</div>
												</li>
											);
										})}
									</ul>
								</ScrollArea>
							</div>
						</TabsContent>
						{/* education */}

						<TabsContent value="education" className="w-full">
							<div className="flex flex-col gap-[30px] text-center xl:text-left h-[calc(100svh-192px)] xl:h-[calc(100svh-176px)] min-h-[420px]">
								<h3 className="text-4xl font-bold ">{education.title}</h3>
								<p className="max-w-[600px] xl:max-w-none text-white/60 mx-auto xl:mx-0">
									{education.description}
								</p>
								<ScrollArea className="flex-1 min-h-0">
									<ul className="grid grid-col-1 lg:grid-cols-2 gap-[30px]">
										{education.items.map((item, index) => {
											return (
												<li
													key={index}
													className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
												>
													<span className="text-accent">{item.insitution}</span>
													<h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
														{item.degree}
													</h3>
													<div className="flex items-center gap-3">
														{/* dot */}
														<span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
														<p className="text-white/60">{item.duration}</p>
													</div>
												</li>
											);
										})}
									</ul>
								</ScrollArea>
							</div>
						</TabsContent>
						{/* skills */}

						<TabsContent value="skills" className="w-full">
							<div className="flex flex-col gap-[30px] h-[calc(100svh-192px)] xl:h-[calc(100svh-176px)] min-h-[420px]">
								<div className="flex flex-col gap-[30px] text-center xl:text-left">
									<h3 className="text-4xl font-bold">{skills.title}</h3>
									<p className="max-w-[600px] xl:max-w-none text-white/60 mx-auto xl:mx-0">
										{skills.description}
									</p>
								</div>
								<ScrollArea className="flex-1 min-h-0">
									<ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 xl:gap-[24px] gap-4">
									{skills.skillList.map((skill, index) => {
										return (
											<li key={index}>
												<TooltipProvider delayDuration={100}>
													<Tooltip>
														<TooltipTrigger className=" w-full h-[120px] bg-[#232329] rounded-xl flex justify-center items-center">
															<div className="text-6xl group-hover:tetxt-accent transition-all duration-300">
																{skill.icon}
															</div>
														</TooltipTrigger>
														<TooltipContent>
															<p className="capitalize">{skill.name}</p>
														</TooltipContent>
													</Tooltip>
												</TooltipProvider>
											</li>
										);
									})}
								</ul>
								</ScrollArea>
							</div>
						</TabsContent>
						{/* scholarships */}
						<TabsContent value="scholarships" className="w-full">
							<div className="flex flex-col gap-[30px] text-center xl:text-left h-[calc(100svh-192px)] xl:h-[calc(100svh-176px)] min-h-[420px]">
								<h3 className="text-4xl font-bold ">{scholarships.title}</h3>
								<p className="max-w-[600px] xl:max-w-none text-white/60 mx-auto xl:mx-0">
									{scholarships.description}
								</p>
								<ScrollArea className="flex-1 min-h-0">
									<ul className="grid grid-col-1 lg:grid-cols-2 gap-[30px]">
										{scholarships.items.map((item, index) => {
											return (
												<li
													key={index}
													className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
												>
													<div className="flex items-center gap-3">
														<p className="text-2xl font-semibold text-accent">{item.amount}</p>
														<span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
														<p className="text-white/60">{item.year}</p>
													</div>
													<span className="">{item.name}</span>
												</li>
											);
										})}
									</ul>
								</ScrollArea>
							</div>
						</TabsContent>
						{/* about */}
						<TabsContent
							value="about"
							className="w-full text-center xl:text-left"
						>
							<div className="flex flex-col gap-[30px]">
								<h3 className="text-4xl font-bold">{about.title}</h3>
								<p className="max-w-[600px] xl:max-w-none text-white/60 mx-auto xl:mx-0">
									{about.description}
								</p>
								<ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0 gap-x-12">
									{about.info.map((item, index) => {
										return (
											<li
												key={index}
												className="flex items-center justify-center xl:justify-start gap-4"
											>
												<span className="text-white/60">{item.fieldName}</span>
												<span className="text-xl">{item.fieldValue}</span>
											</li>
										);
									})}
								</ul>
							</div>
						</TabsContent>
					</div>
				</Tabs>
			</div>
		</motion.div>
	);
};

export default Resume;
