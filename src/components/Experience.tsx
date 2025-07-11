"use client";

import React from "react";
import "../styles/Experience.css";

const experienceData = [
  {
    title: "Legal Intern",
    company: "District & Sessions Court, Cuttack",
    duration: "Dec 2021 – Jan 2022",
    points: [
      "Observed real-time court proceedings including bail hearings and civil disputes under Justice P.K. Mohapatra.",
      "Gained firsthand experience in litigation and daily court functions.",
    ],
  },
  {
    title: "Legal Intern",
    company: "Human Rights Law Network",
    duration: "June 2022 – July 2022",
    points: [
      "Worked under Adv. Satya Ranjan Swain.",
      "Researched and drafted case briefs on women’s rights and public interest litigation.",
      "Attended legal aid workshops and contributed to real cases.",
    ],
  },
  {
    title: "Legal Intern",
    company: "Odisha Human Rights Commission (OHRC)",
    duration: "Dec 2022 – Jan 2023",
    points: [
      "Drafted reports, assisted in reviewing complaints.",
      "Conducted legal research under Hon’ble Justice B.K. Nayak.",
    ],
  },
  {
    title: "Legal Associate",
    company: "Freelance (Cuttack & Bhubaneswar)",
    duration: "Feb 2023 – Present",
    points: [
      "Independent legal practice focused on criminal and civil cases.",
      "Client consultation, legal notices, and court representation.",
    ],
  },
];

const Experience = () => {
  return (
    <section id="experience" className="experience-section">
      <h2 className="experience-title">Experience</h2>
      <div className="experience-grid">
        {experienceData.map((item, index) => (
          <div className="experience-card" key={index}>
            <div className="experience-header">
              <h3>{item.title}</h3>
              <span className="experience-duration">{item.duration}</span>
            </div>
            <p className="experience-company">{item.company}</p>
            <ul className="experience-points">
              {item.points.map((point, idx) => (
                <li key={idx}>{point}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
