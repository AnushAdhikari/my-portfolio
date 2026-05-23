import React from 'react'
import { FaBriefcase } from 'react-icons/fa'

const JOBS = [
  {
    title:    'Amazon SEO & FBA Specialist',
    company:  'Arete Viva SEO Pvt Ltd',
    period:   'Nov 2024 – Dec 2025',
    location: 'Nepal',
    points: [
      'Leveraged AI-powered keyword research across 4 European Amazon markets (DE/FR/ES/IT), improving organic product ranking, impressions, and CTR.',
      'Used AI-assisted analytics on multi-week sales and impression data to forecast demand trends and optimise ad spend efficiency.',
      'Localised product listings for German, French, Spanish, and Italian markets using AI translation tools to accelerate cross-border expansion.',
      'Built AI-driven performance strategies from historical sales and ROAS data, contributing to a 20–30% improvement in ROAS and net profit.',
    ],
  },
  {
    title:    'Web Developer',
    company:  'BigO Information Technology Pvt Ltd',
    period:   'Feb 2023 – Aug 2024',
    location: 'Nepal',
    points: [
      'Built multiple responsive web interfaces using React.js and Tailwind CSS, reducing average page load time by 30% through code splitting and lazy loading.',
      'Integrated REST APIs and implemented scalable, maintainable front-end architecture patterns.',
      'Collaborated in cross-functional Agile teams to deliver high-quality, tested, and optimised web solutions.',
      'Reviewed 50+ pull requests per sprint, identifying critical bugs pre-deployment and maintaining a zero production regression rate.',
    ],
  },
  {
    title:    'Shopify Web Developer (Intern)',
    company:  'Cartmade E-Commerce Pvt Ltd',
    period:   'Nov 2021 – May 2022',
    location: 'Nepal',
    points: [
      'Customised Shopify storefronts using Liquid templating to meet client-specific business requirements.',
      'Developed mobile-responsive, cross-platform designs prioritising user experience and conversion optimisation.',
      'Enhanced storefront performance and accessibility through targeted UI/UX improvements.',
      'Translated client requirements into technical solutions and managed delivery timelines for successful project outcomes.',
    ],
  },
]

export default function Experience() {
  return (
    <section id="experience" className="bg-white py-24 dark:bg-[#0b0b10]">
      <div className="shell">
        <div className="reveal max-w-2xl">
          <p className="eyebrow">Experience</p>
          <h2 className="mt-5 text-4xl font-black tracking-tight sm:text-5xl">
            Professional work across<br />
            <span className="text-yellow-500">interfaces, Shopify,</span><br />
            and marketplace growth.
          </h2>
          <p className="mt-5 text-base leading-7 text-zinc-600 dark:text-zinc-300">
            Each role sharpened a different part of my toolkit — performance-focused React development,
            storefront customisation, and AI-assisted e-commerce decision making.
          </p>
        </div>

        <div className="mt-14 space-y-10">
          {JOBS.map((job, i) => (
            <div key={job.title} className="reveal grid gap-5 md:grid-cols-[200px_1fr]" style={{ transitionDelay: `${i * 100}ms` }}>

              {/* Date + location */}
              <div className="tl-line">
                <span className="tl-dot"><FaBriefcase /></span>
                <p className="text-sm font-bold uppercase tracking-[0.2em] text-yellow-500">{job.period}</p>
                <p className="mt-1.5 text-xs text-zinc-500 dark:text-zinc-400">{job.location}</p>
              </div>

              {/* Card */}
              <div className="glass rounded-3xl p-7 shadow-[0_8px_32px_rgba(0,0,0,0.06)] dark:shadow-[0_8px_32px_rgba(0,0,0,0.3)]">
                <h3 className="text-2xl font-black">{job.title}</h3>
                <p className="mt-1 text-sm font-semibold uppercase tracking-[0.2em] text-zinc-500 dark:text-zinc-400">{job.company}</p>
                <ul className="mt-5 space-y-3">
                  {job.points.map(pt => (
                    <li key={pt} className="flex gap-3 text-sm leading-6 text-zinc-600 dark:text-zinc-300">
                      <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-yellow-400" />
                      {pt}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
