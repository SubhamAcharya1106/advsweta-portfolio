"use client";
import React from "react";
import "../styles/PracticeAreas.css";

const practiceAreas = [
  {
    title: "Civil Law",
    icon: "📜",
    description:
      "Expertise in property disputes, civil contracts, compensation claims, and injunctions.",
  },
  {
    title: "Criminal Law",
    icon: "⚖️",
    description:
      "Experienced in criminal defense, bail matters, FIR quashing, and anticipatory bail.",
  },
  {
    title: "Corporate Law",
    icon: "🏢",
    description:
      "Handling company formations, legal compliance, contract drafting, and commercial disputes.",
  },
];

const PracticeAreas = () => {
  return (
    <section className="practice-section" id="practice">
      <h2 className="practice-heading">Practice Areas</h2>
      <div className="practice-cards">
        {practiceAreas.map((area, index) => (
          <div className="practice-card" key={index}>
            <div className="practice-icon">{area.icon}</div>
            <h3 className="practice-title">{area.title}</h3>
            <p className="practice-description">{area.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PracticeAreas;
