"use client";

import React from "react";
import "../styles/Services.css";
import { useRouter } from "next/navigation";

const services = [
  {
    slug: "legal-consultation",
    title: "Legal Consultation",
    icon: "🧑‍⚖️",
    description:
      "One-on-one professional legal advice for civil, criminal, or corporate matters.",
  },
  {
    slug: "criminal-law",
    title: "Criminal Lawyer Services",
    icon: "🚨",
    description:
      "Preparation of agreements, notices, contracts, and affidavits with legal accuracy.",
  },
  {
    slug: "civil-disputes",
    title: "Civil Dispute Resolution",
    icon: "📊",
    description:
      "Representing clients in District Courts and High Court for litigation matters.",
  },
  {
    slug: "corporate-law",
    title: "Corporate Law & Business Support",
    icon: "🏛️",
    description:
      "Quick response and assistance for bail, FIR quashing, and criminal defense.",
  },
  {
    slug: "documentation",
    title: "Document Drafting & Verification",
    icon: "📄",
    description:
      "Helping startups and firms stay compliant with company law and regulations.",
  },
];

const Services = () => {
  const router = useRouter();

  return (
    <section id="services" className="services-section">
      <h2 className="services-heading">My Legal Services</h2>
      <div className="services-container">
        {services.map((service, index) => (
          <div className="service-box" key={index}>
            <div className="service-top">
              <span className="service-icon">{service.icon}</span>
              <h3 className="service-title">{service.title}</h3>
            </div>
            <p className="service-description">{service.description}</p>
            <button
              className="know-more-btn"
              onClick={() => router.push(`/services/${service.slug}`)}
            >
              Know More →
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
