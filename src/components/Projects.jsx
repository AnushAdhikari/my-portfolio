import React from 'react'
import { FaExternalLinkAlt } from 'react-icons/fa'

const PROJECTS = [
  {
    tag:   'SEO · Analytics · AI',
    title: 'AI-Enhanced E-commerce Growth Workflows',
    desc:  'A case study built from real Amazon SEO and FBA work such as, AI-assisted keyword research, multilingual listing localisation, and ROAS-led optimisation across European Amazon markets (DE/FR/ES/IT).',
    bullets: [
      'AI keyword research across 4 international markets',
      'Demand forecasting from multi-week impression data',
      'Localisation-driven conversion improvement',
      '20–30% ROAS and net profit uplift',
    ],
    accent: 'from-yellow-400/20 to-yellow-400/0',
  },
  {
    tag:   'React · Tailwind · REST APIs',
    title: 'High-Performance Responsive Interfaces',
    desc:  'Production front-end work from BigO Information Technology such as, React.js and Tailwind CSS builds with a 30% load-time reduction, REST API integration, and component-driven architecture maintained across 50+ reviewed PRs per sprint.',
    bullets: [
      'Component-driven React architecture',
      'Lazy loading & code splitting (–30% load time)',
      'REST API integration and async data flows',
      'Zero production regression across all sprints',
    ],
    accent: 'from-blue-400/20 to-blue-400/0',
  },
  {
    tag:   'Shopify · Liquid · UX',
    title: 'Shopify Storefront Customisation',
    desc:  'End-to-end Shopify development at Cartmade E-Commerce such as, Liquid templating, mobile-responsive storefront designs, performance tuning, accessibility improvements, and client-facing requirements gathering.',
    bullets: [
      'Shopify Liquid custom theme development',
      'Mobile-first conversion-focused UX',
      'Cross-browser and cross-device compatibility',
      'Accessibility and performance enhancements',
    ],
    accent: 'from-emerald-400/20 to-emerald-400/0',
  },
  {
  tag:   'PHP · MySQL · Bootstrap',
  title: 'Full-Stack Cloth Rental Web App (2022)',
  desc:  'Built entirely from scratch without AI tools as my Bachelor\'s Final Year Project in 2022. An end-to-end rental e-commerce platform with a customer-facing storefront, session-based cart with rental date pricing, Khalti payment integration, and a full admin panel for product and category management.',
  bullets: [
    'Custom PHP authentication with bcrypt password hashing',
    'Dynamic rental pricing calculated by delivery and return dates',
    'Admin CRUD panel for products, categories, and inventory',
    'Peer-to-peer "Earn Through Us" cloth submission feature',
    'AJAX-powered live search and wishlist functionality',
    'Khalti payment gateway integration at checkout',
  ],
  accent: 'from-violet-400/20 to-violet-400/0',
},
{
  tag: 'C# · WinForms · OOP',
  title: 'Ticketing System (2021)',
  desc: 'A desktop application built in C# using object-oriented principles to manage visitor records at a recreation center. Features a secure login system, dynamic pricing engine, and real-time reporting with weekly charts.',
  bullets: [
    'Visitor check-in/check-out with auto-calculated duration and pricing',
    'Dynamic pricing engine based on age group, group size, and weekday vs weekend',
    'Weekly earnings and visitor count reports with data grid visualizations',
    'JSON-based file persistence using Newtonsoft.Json for data storage',
  ],
  accent: 'from-blue-400/20 to-blue-400/0',
},
{
  tag: 'Next.js · Supabase · Tailwind ',
  title: 'Recreation Center Ticketing System (Web, 2026)',
  desc: 'A full-stack web rebuild of the original C# desktop app, accessible on any device. Features a real-time PostgreSQL database, dynamic billing engine, and weekly analytics with interactive charts.',
  bullets: [
    'Full-stack Next.js app with Supabase PostgreSQL backend',
    'Real-time visitor check-in/check-out with automatic price calculation',
    'Weekday vs weekend and age-group-based dynamic pricing matrix',
    'Weekly earnings and visitor reports with Recharts bar charts',
  ],
  accent: 'from-cyan-400/20 to-cyan-400/0',
},


]

export default function Projects() {
  return (
    <section id="projects" className="bg-zinc-50 py-24 dark:bg-[#09090e]">
      <div className="shell">
        <div className="reveal max-w-2xl">
          <p className="eyebrow">Projects</p>
          <h2 className="mt-5 text-4xl font-black tracking-tight sm:text-5xl">
            Experience-backed case studies,<br />
            <span className="text-yellow-500">not placeholder apps.</span>
          </h2>
          <p className="mt-5 text-base leading-7 text-zinc-600 dark:text-zinc-300">
            Each card represents a real body of professional work. When you're ready to
            add specific GitHub projects or live URLs, slot them in with the link button below each card.
          </p>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {PROJECTS.map((p, i) => (
            <article
              key={p.title}
              className="reveal glass overflow-hidden rounded-[1.75rem] shadow-[0_8px_32px_rgba(0,0,0,0.06)] dark:shadow-[0_8px_32px_rgba(0,0,0,0.3)]"
              style={{ transitionDelay: `${i * 90}ms` }}
            >
              {/* Accent bar */}
              <div className={`h-1.5 w-full bg-gradient-to-r ${p.accent} via-yellow-400/50`} />
              <div className="p-7">
                <span className="chip">{p.tag}</span>
                <h3 className="mt-5 text-xl font-black leading-snug">{p.title}</h3>
                <p className="mt-3 text-sm leading-6 text-zinc-600 dark:text-zinc-300">{p.desc}</p>
                <ul className="mt-5 space-y-2">
                  {p.bullets.map(b => (
                    <li key={b} className="flex items-center gap-2.5 text-xs text-zinc-700 dark:text-zinc-200">
                      <span className="h-1.5 w-1.5 rounded-full bg-yellow-400" /> {b}
                    </li>
                  ))}
                </ul>
                {/* <a
                  href="#projects"
                  className="mt-6 inline-flex items-center gap-1.5 text-xs font-semibold text-yellow-500 hover:text-yellow-400 transition"
                >
                  View details <FaExternalLinkAlt className="text-[10px]" />
                </a> */}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
