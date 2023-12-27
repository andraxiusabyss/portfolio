"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

import { motion, useInView } from "framer-motion";
import { TiDownload } from "react-icons/ti";
import { SiMinutemailer } from "react-icons/si";

export default function Hero() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    let profileCardEl = document.querySelectorAll<HTMLElement>(".heroCard");

    profileCardEl.forEach((heroCard) => {
      heroCard.addEventListener("mouseover", function () {
        profileCardEl.forEach((eachCard) => {
          eachCard.classList.remove("active");
        });
        heroCard.classList.add("active");
      });
    });
  }, []);

  return (
    <div id="hero" className="hero">
      <motion.div
        className="hero__portrait"
        ref={ref}
        style={{
          scale: isInView ? 1 : 0,
          opacity: isInView ? 1 : 0,
          transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.1s",
        }}
      >
        <Image
          src="/hero.jpg"
          width={1000}
          height={1000}
          alt="A picture of Andrei Sager"
        />
      </motion.div>

      <div className="hero__headline">
        <div>
          <motion.h1
            className="sectionOverline !text-center lg:!text-left"
            ref={ref}
            style={{
              transform: isInView ? "translateY(0px)" : "translateY(200px)",
              opacity: isInView ? 1 : 0,
              transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.2s",
            }}
          >
            Andrei Sager
          </motion.h1>
          <motion.h1
            className="sectionHeading !text-4xl !text-center lg:!text-left"
            ref={ref}
            style={{
              transform: isInView ? "translateY(0px)" : "translateY(200px)",
              opacity: isInView ? 1 : 0,
              transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.3s",
            }}
          >
            Software Developer
          </motion.h1>
        </div>

        <motion.p
          className="sectionLeading !text-center lg:!text-left"
          ref={ref}
          style={{
            transform: isInView ? "translateY(0px)" : "translateY(200px)",
            opacity: isInView ? 1 : 0,
            transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.4s",
          }}
        >
          I specialize in constructing websites and mobile applications while
          immersing myself in diverse aspects of the digital spectrum that pique
          my interest.
        </motion.p>

        <div className="hero__headline__buttons">
          <motion.a
            href="#"
            className="cta__outline"
            ref={ref}
            style={{
              transform: isInView ? "translateY(0px)" : "translateY(200px)",
              opacity: isInView ? 1 : 0,
              transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
            }}
          >
            <TiDownload size={20} />
            <p>Download CV</p>
          </motion.a>
          <motion.a
            href="#projects"
            className="cta__solid"
            ref={ref}
            style={{
              transform: isInView ? "translateY(0px)" : "translateY(200px)",
              opacity: isInView ? 1 : 0,
              transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.6s",
            }}
          >
            <SiMinutemailer size={20} />
            See Projects
          </motion.a>
        </div>
      </div>

      {/* Animated Lavalamp Squares */}
      <ul className="hero__squares">
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
    </div>
  );
}
