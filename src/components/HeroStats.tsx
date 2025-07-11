"use client";
import React from "react";
import "../styles/HeroStats.css"; // <-- just import CSS here, don't write it in this file

const HeroStats = () => {
  const stats = [
    {
      value: "1+",
      label: "Years",
    },
    {
      value: "50+",
      label: "Clients",
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
