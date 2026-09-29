"use client";

import Link from "next/link";
import confetti from "canvas-confetti";
import { Button } from "./ui/button";

const HireMeButton = () => {
  const handleClick = (e) => {
    // burst from the button's position on screen
    const rect = e.currentTarget.getBoundingClientRect();
    confetti({
      particleCount: 120,
      // the button sits in the top right corner, so fire down and left into the page
      angle: 215,
      spread: 80,
      startVelocity: 45,
      origin: {
        x: (rect.left + rect.width / 2) / window.innerWidth,
        y: (rect.top + rect.height / 2) / window.innerHeight,
      },
      colors: ["#00ff99", "#00e187", "#ffffff"],
    });
  };

  return (
    <Link href="/contact" onClick={handleClick}>
      <Button>Hire Me</Button>
    </Link>
  );
};

export default HireMeButton;
