'use client';

import React from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import './ServiceDetail.css';

const servicesData: Record<string, {
  title: string;
  intro: string;
  handle: string;
  image?: string;
}> = {
  'legal-consultation': {
    title: 'Legal Support Made Easy',
    intro: `Legal consultation is your gateway to expert legal guidance — whether you&apos;re facing a dispute, signing a contract, or launching a business.
    Our goal is to simplify the law and provide clarity, not confusion. We take pride in offering calm, professional, and actionable advice, personalized to your unique legal situation.
    From civil to corporate concerns, we help you make informed decisions with full confidence.`,
    handle: `
    • I will personally listen to your case details without judgment.
    • I’ll explain your legal standing in simple, understandable terms.
    • We’ll explore all options — legal notices, out-of-court settlements, or litigation strategy.
    • You’ll leave with clarity and a clear plan of action.

    Whether it’s over a phone call, video meet, or in person — you’ll receive focused, confidential advice tailored to protect your rights.`,
    image: '/service-banners/legal-banner.png',
  },
  'criminal-law': {
    title: 'Criminal Lawyer Services',
    image: '/service-banners/criminal-law.png',
    intro: `
      Booked for any crime or offense? Don&apos;t get panicked. Our Criminal Law practice brings in-depth
      knowledge and experience tackling all types of criminal cases. We&apos;ve delivered satisfying results
      for clients facing charges.

      Our services range from anticipatory bail to defending clients in sessions and high courts.
      We ensure you are represented fairly at every stage of your case.
    `,
    handle: `
      • File Legal Notices or Complaints as necessary
      • Assistance in Filing FIRs or Quashing
      • Seek Regular, Interim, or Anticipatory Bail
      • Represent your case in District, Session, and High Courts

      We protect your rights and safeguard your interests throughout.
    `,
  },
  'civil-disputes': {
    title: 'Civil Dispute Resolution',
    image: '/service-banners/civil-disputes.png',
    intro: `
      Civil disputes can drain time and energy — whether it&apos;s a property disagreement, landlord-tenant
      conflict, or inheritance case.
      Our goal is to resolve your issue swiftly and fairly through strategic legal remedies and negotiation.
    `,
    handle: `
      • Analyze your civil matter thoroughly
      • Advise on legal claims, compensation, or injunctions
      • Represent you in court or assist with settlements

      We ensure your civil rights are preserved while maintaining dignity in dispute resolution.
    `,
  },
  'corporate-law': {
    title: 'Corporate Law & Business Support',
    image: '/service-banners/corporate-law.png',
    intro: `
      Running a business comes with legal responsibilities. We help startups and companies handle
      incorporation, compliance, contracts, and regulatory filings.
      From formation to dispute management — I assist businesses at every stage.
    `,
    handle: `
      • Draft and review contracts and MOUs
      • Assist in company registration, GST filings, or due diligence
      • Represent businesses in disputes, arbitration, or NCLT matters

      You run your business, I handle your legal safety net.
    `,
  },
  'documentation': {
    title: 'Document Drafting & Verification',
    image: '/service-banners/documentation.png',
    intro: `
      Well-drafted documents are your shield in legal matters. I help create, verify, and register
      documents like wills, contracts, affidavits, and property deeds.
    `,
    handle: `
      • Understand your requirement clearly
      • Draft error-free, customized legal documents
      • Verify, notarize or register documents with authorities as needed

      You get legally sound paperwork that safeguards your intent.
    `,
  },
};

export default function ServiceDetailPage() {
  const params = useParams();
  const { slug } = params;

  const service = servicesData[slug as string];

  if (!service) return <div className="service-container">Service not found</div>;

  return (
    <div className="service-container">
      <h1 className="service-title">{service.title}</h1>

      <div className="service-detail-wrapper">
        {service.image && (
          <Image
            src={service.image}
            alt={service.title}
            width={1200}
            height={400}
            className="service-banner"
          />
        )}

        <div className="service-text">
          <h2 className="section-heading">About the Service</h2>
          <p className="service-description">{service.intro}</p>

          <h2 className="section-heading">How Will I Handle It?</h2>
          <p className="service-description">{service.handle}</p>

          <Link href="/" className="back-link">&larr; Back to Services</Link>
        </div>
      </div>

      <div className="sticky-contact-box">
        <strong>Contact Me:</strong><br />
        📞 +91-7064986280<br />
        📧 swetatripathy1999@gmail.com
      </div>
    </div>
  );
}
