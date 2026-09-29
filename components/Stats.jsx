"use client";

import CountUp from "react-countup";

const stats = [
  {
    num: 2,
    text: "10-Month Software Engineering Internships",
  },
  {
    num: 3,
    text: "Years of Experience",
  },
  {
    num: 141,
    text: "Leetcode Questions Solved",
  },
  {
    num: 1000,
    suffix: "+",
    text: "Code Commits",
  },
  {
    num: 9,
    text: "Blog Posts Written",
  },
  {
    num: 40,
    suffix: "+",
    text: "Technologies Used",
  },
];

const Stats = () => {
  return (
    <section className="pt-4 pb-12 xl:pt-0 xl:pb-0">
      <div className="container mx-auto">
        <div className="flex flex-col items-center sm:flex-row sm:flex-wrap sm:items-start sm:justify-between gap-x-10 gap-y-8 max-w-[80vw] mx-auto xl:max-w-none">
          {stats.map((item, index) => {
            return (
              <div className="flex gap-4 items-start" key={index}>
                <CountUp
                  end={item.num}
                  suffix={item.suffix}
                  separator=","
                  duration={5}
                  delay={2}
                  className="inline-block text-4xl xl:text-6xl font-extrabold"
                  // reserve the final width so the row doesn't shift while counting up
                  style={{ minWidth: `${`${item.num.toLocaleString("en-US")}${item.suffix ?? ""}`.length}ch` }}
                />
                <p
                  className={`${item.text.length < 15 ? "max-w-[100px]" : "max-w-[150px]"} leading-snug text-white/80`}
                >{item.text}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Stats;
