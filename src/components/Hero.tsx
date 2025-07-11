"use client";

import React from "react";
import Image from "next/image";
import "../styles/Hero.css";
import HeroStats from "./HeroStats";

const Hero = () => {
  return (
    <section className="hero-section" id="hero">
      <div className="hero-content">
        {/* LEFT: Text */}
        <div className="hero-left">
          <h1 className="hero-title">Advocate Sweta Tripathy</h1>
          <h2 className="hero-subtitle">
            Practicing in Civil, Criminal &amp; Corporate Law
          </h2>
          <p className="hero-location">Based in Bhubaneswar, India</p>

          <p className="hero-description">
            I&apos;m Advocate Sweta, a practicing legal firm based in Cuttack with a strong
            background in Civil, Criminal, and Corporate Law. I&apos;ve handled a wide range of
            cases across District Courts and High Court jurisdictions, representing clients with
            diligence, integrity, and compassion.
          </p>

          <div className="hero-about">
            <h3>About Me</h3>
            <p>
              Advocate with experience in civil, criminal, and corporate law. Skilled in litigation,
              legal drafting, and client advisory. Focused on ethical, result-oriented legal
              solutions. Committed to justice through strategic legal practice.
            </p>
          </div>
        </div>

        {/* RIGHT: Image and Stats in single line */}
        <div className="hero-visual-block">
          <div className="hero-image-wrapper">
            <Image
              src="/sweta1.jpg"
              alt="Advocate Sweta"
              width={300}
              height={400}
              className="hero-image"
            />
          </div>
          <HeroStats />
        </div>
      </div>
    </section>
  );
};

export default Hero;