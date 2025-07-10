"use client";
import React from "react";
import "../styles/HeroStats.css";

const HeroStats = () => {
  const stats = [
    {
      value: "3+",
      label: "Years of Experience",
    },
    {
      value: "50+",
      label: "Clients Represented",
    },
    {
      value: "100+",
      label: "Court Appearances",
    },
  ];

  return (
    <section className="stats-wrapper">
      <div className="stats-container">
        {stats.map((stat, index) => (
          <div key={index} className="stat-box">
            <p className="stat-value">{stat.value}</p>
            <p className="stat-label">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HeroStats;
