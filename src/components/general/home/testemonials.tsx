"use client";

import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "@/components/acernityComponents/infiniteCards";

export function InfiniteMovingCardsTestemonials() {
  return (
    <div className="h-[40rem] rounded-md flex flex-col antialiased dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
      <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="slow"
        pauseOnHover={false}
      />
    </div>
  );
}

const testimonials = [
  {
    quote: "the ai automation saved me tons of dirty work in my office",
    name: "abdelrahman gasser",
    title: "Founder of tailored tech",
  },
  {
    quote: "I believe in you and your team (the sky is your limit)",
    name: "Dr mohamed el harthy",
    title: "Founder of Marafek",
  },
  {
    quote:
      "I am so happy with the results, I will definitely recommend you to my friends",
    name: "Ossama amin",
    title: "founder of daas ai",
  },
  {
    quote:
      "35 people have worked on that system before and they didn't accomplish what you did",
    name: "Gasser Hassan",
    title: "super intendant at Bahri",
  },
  {
    quote: "you really create a wonderful experience for the user",
    name: "every one saud that",
    title: "",
  },
];
