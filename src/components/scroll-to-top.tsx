"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { BsArrowUp } from "react-icons/bs";

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);
  const [isScrolling, setIsScrolling] = useState(false);

  useEffect(() => {
    let lastScrollTop = 0;
    let ticking = false;

    const handleScroll = () => {
      const scrollTop = window.scrollY;

      if (!ticking) {
        window.requestAnimationFrame(() => {
          setVisible(scrollTop > 300);
          lastScrollTop = scrollTop;
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsScrolling(true);

    const duration = 500;
    const startPosition = window.scrollY;
    const startTime = performance.now();

    const easeInOutCubic = (t: number): number => {
      return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
    };

    const scroll = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);

      const easeProgress = easeInOutCubic(progress);
      const position = startPosition - startPosition * easeProgress;

      window.scrollTo(0, position);

      if (progress < 1) {
        requestAnimationFrame(scroll);
      } else {
        setIsScrolling(false);
      }
    };

    requestAnimationFrame(scroll);
  };

  return (
    <Link
      href="#"
      onClick={scrollToTop}
      id="back-to-top"
      className={`back-to-top fixed text-lg rounded-full z-10 bottom-5 end-5 h-9 w-9 flex items-center justify-center bg-[#9761FF] hover:bg-[#8044FF] text-white leading-9 transition-all duration-300 ease-in-out transform ${
        visible
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-4 pointer-events-none"
      } ${isScrolling ? "scale-90" : "scale-100 hover:scale-110"}`}
      aria-label="Scroll to top"
    >
      <BsArrowUp
        className={`transition-transform duration-300 ${
          isScrolling ? "-translate-y-1" : "translate-y-0"
        }`}
      />
    </Link>
  );
}
