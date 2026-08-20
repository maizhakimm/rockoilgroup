"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export function AnimationController() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    gsap.registerPlugin(ScrollTrigger);
    const context = gsap.context(() => {
      const intro = gsap.timeline({ defaults: { ease: "power3.out" } });
      intro
        .from(".siteHeader", { y: -30, opacity: 0, duration: 0.8 })
        .from(".heroContent .eyebrow", { y: 16, opacity: 0, duration: 0.55 }, "-=0.35")
        .from(".heroTitleLine > span", { yPercent: 115, duration: 0.9, stagger: 0.1 }, "-=0.25")
        .from(".introBlock", { y: 25, opacity: 0, duration: 0.75 }, "-=0.42")
        .from([".depthScale", ".rovLabel", ".scrollCue"], { opacity: 0, duration: 0.65, stagger: 0.12 }, "-=0.35");

      gsap.from(".capabilityCard", {
        scrollTrigger: { trigger: ".capabilities", start: "top 82%" },
        y: 24,
        duration: 0.65,
        stagger: 0.08,
        ease: "power3.out",
        clearProps: "transform",
      });

      gsap.from(".stat", {
        scrollTrigger: { trigger: ".impact", start: "top 80%" },
        y: 25,
        opacity: 0,
        duration: 0.65,
        stagger: 0.1,
        ease: "power2.out",
      });

      document.querySelectorAll<HTMLElement>("[data-count]").forEach((node) => {
        const target = Number(node.dataset.count);
        const counter = { value: 0 };
        gsap.to(counter, {
          value: target,
          duration: 1.5,
          ease: "power2.out",
          scrollTrigger: { trigger: node, start: "top 88%", once: true },
          onUpdate: () => { node.textContent = `${Math.round(counter.value)}+`; },
        });
      });

      gsap.from(".presence", {
        scrollTrigger: { trigger: ".impact", start: "top 76%" },
        x: 35,
        opacity: 0,
        duration: 0.9,
        ease: "power3.out",
      });

      gsap.from(".closing > *", {
        scrollTrigger: { trigger: ".closing", start: "top 75%" },
        y: 38,
        opacity: 0,
        duration: 0.8,
        stagger: 0.12,
        ease: "power3.out",
      });
    });

    const hero = document.querySelector<HTMLElement>(".hero");
    const image = document.querySelector<HTMLElement>(".heroImage");
    const grid = document.querySelector<HTMLElement>(".techGrid");
    const onMove = (event: PointerEvent) => {
      if (!hero || !image || !grid || event.pointerType === "touch") return;
      const bounds = hero.getBoundingClientRect();
      const x = (event.clientX - bounds.left) / bounds.width - 0.5;
      const y = (event.clientY - bounds.top) / bounds.height - 0.5;
      gsap.to(image, { x: x * 10, y: y * 7, scale: 1.018, duration: 1.2, ease: "power2.out" });
      gsap.to(grid, { x: x * -7, y: y * -5, duration: 1.4, ease: "power2.out" });
    };
    hero?.addEventListener("pointermove", onMove);

    return () => {
      hero?.removeEventListener("pointermove", onMove);
      context.revert();
    };
  }, []);

  return null;
}
