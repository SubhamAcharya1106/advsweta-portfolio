"use client";
import React from "react";
import "../styles/Hero.css";
import HeroStats from "./HeroStats";

const Hero = () => {
  return (
    <section className="hero-section" id="hero">
      <div className="hero-left">
        <h1 className="hero-title">Advocate Sweta Tripathy</h1>
        <h2 className="hero-subtitle">Practicing in Civil, Criminal &amp; Corporate Law</h2>
        <p className="hero-location">Based in Bhubaneswar, India</p>

        <p className="hero-description">
          I&apos;m Advocate Sweta, a practicing legal firm based in Cuttack with a strong background
          in Civil, Criminal, and Corporate Law. I&apos;ve handled a wide range of cases across District Courts
          and High Court jurisdictions, representing clients with diligence, integrity, and compassion.
        </p>

        <div className="hero-about">
          <h3>About Me</h3>
          <p>
            With over 3 years of experience in litigation, legal consulting, and contract drafting,
            I strive to deliver timely legal solutions that protect rights and promote justice.
            I believe in a client-first approach backed by thorough research and ethical practice.
          </p>
        </div>
      </div>

      <div className="hero-right">
        <div className="hero-image-wrapper">
          <img
            src="/sweta.jpg"
            alt="Advocate Sweta"
            className="hero-image"
          />
        </div>
      </div>
      <HeroStats />
    </section>
  );
};

export default Hero;
