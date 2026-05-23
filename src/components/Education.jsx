import React from 'react'
import { FaGraduationCap, FaAward, FaExternalLinkAlt } from 'react-icons/fa'

const EDUCATION = [
  {
    degree:  'Postgraduate – Artificial Intelligence and Machine Learning',
    school:  'Lambton College',
    meta:    'Ottawa, ON · Expected 2027',
    current: true,
  },
  {
    degree:  'Bachelor of Science (Honours) in Computing',
    school:  'Islington College (London Metropolitan University)',
    meta:    'Kathmandu, Nepal · 2019 – 2022',
    current: false,
  },
]

const CERTS = [
  {
    name: 'IBM Certified: Web Development Fundamentals',
    url:  'https://www.credly.com/badges/97cfe710-8106-458a-a3b1-56747a7567d4/public_url',
  },
  {
    name: 'IBM Certified: AI Literacy',
    url:  'https://www.credly.com/badges/f3aa612f-9596-40a2-86b7-bde60ad65ba8/public_url',
  },
]

export default function Education() {
  return (
    <section id="education" className="bg-white py-24 dark:bg-[#0b0b10]">
      <div className="shell grid gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">

        {/* Left: degrees */}
        <div>
          <div className="reveal">
            <p className="eyebrow">Education</p>
            <h2 className="mt-5 text-4xl font-black tracking-tight sm:text-5xl">
              Academic grounding in<br />
              <span className="text-yellow-500">computing</span> and advanced<br />
              AI / ML study.
            </h2>
            <p className="mt-5 text-base leading-7 text-zinc-600 dark:text-zinc-300">
              My education bridges software development fundamentals and emerging intelligent
              systems, shaping how I approach scalable, user-centred web products.
            </p>
          </div>

          <div className="mt-10 space-y-5">
            {EDUCATION.map((ed, i) => (
              <div
                key={ed.school}
                className="reveal glass rounded-3xl p-6 shadow-[0_8px_32px_rgba(0,0,0,0.05)] dark:shadow-[0_8px_32px_rgba(0,0,0,0.3)]"
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <div className="flex items-start gap-4">
                  <div className="mt-0.5 rounded-2xl bg-yellow-400/15 p-3 text-yellow-500">
                    <FaGraduationCap />
                  </div>
                  <div>
                    <div className="flex items-center gap-2 flex-wrap">
                      <h3 className="text-lg font-bold">{ed.degree}</h3>
                      {ed.current && <span className="chip text-[9px]">Current</span>}
                    </div>
                    <p className="mt-1 font-semibold text-zinc-700 dark:text-zinc-200">{ed.school}</p>
                    <p className="mt-0.5 text-sm text-zinc-500 dark:text-zinc-400">{ed.meta}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right: certifications */}
        <div className="reveal rounded-[2rem] bg-[#09090e] p-8 shadow-[0_32px_64px_rgba(0,0,0,0.35)] dark:border dark:border-white/8">
          <p className="eyebrow text-yellow-400">Certifications</p>
          <p className="mt-3 text-lg font-bold text-white">IBM-verified credentials</p>
          <p className="mt-2 text-sm leading-6 text-zinc-400">
            Independently verified certifications from IBM, demonstrating foundational competency in web development and practical AI literacy.
          </p>
          <div className="mt-8 space-y-4">
            {CERTS.map(cert => (
              <a
                key={cert.name}
                href={cert.url}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-between gap-4 rounded-2xl border border-white/8 bg-white/5 p-5 transition hover:border-yellow-400/40 hover:bg-white/10"
              >
                <div className="flex items-start gap-4">
                  <div className="rounded-xl bg-yellow-400/15 p-2.5 text-yellow-400">
                    <FaAward />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-white leading-5">{cert.name}</p>
                    <p className="mt-0.5 text-xs text-zinc-500">View credential on Credly →</p>
                  </div>
                </div>
                <FaExternalLinkAlt className="flex-shrink-0 text-zinc-500" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
