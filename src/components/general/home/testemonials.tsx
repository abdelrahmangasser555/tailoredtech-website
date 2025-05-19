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
    quote:
      "We create tailored software solutions designed specifically for your unique business needs and challenges.",
    name: "Custom Development",
    title: "Personalized Solutions",
  },
  {
    quote:
      "Our AI automation systems streamline workflows and eliminate repetitive tasks across your organization.",
    name: "AI Integration",
    title: "Smart Business Processes",
  },
  {
    quote:
      "We design intuitive user interfaces that enhance user experience and drive customer engagement.",
    name: "UX/UI Design",
    title: "User-Centered Approach",
  },
  {
    quote:
      "Our enterprise solutions seamlessly integrate with your existing systems while adding powerful new capabilities.",
    name: "Enterprise Solutions",
    title: "Scalable Architecture",
  },
  {
    quote:
      "We provide continuous support and maintenance to ensure your software evolves alongside your business needs.",
    name: "Ongoing Support",
    title: "Long-term Partnership",
  },
];
