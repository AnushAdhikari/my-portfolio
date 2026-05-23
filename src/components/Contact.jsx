import React from 'react'
import { HiOutlineMail, HiArrowNarrowRight } from 'react-icons/hi'
import { FaGithub, FaLinkedin, FaPhone } from 'react-icons/fa'

const LINKS = [
  { label: 'Email',    value: 'xettrianush@gmail.com',  href: 'mailto:xettrianush@gmail.com',                                  icon: <HiOutlineMail /> },
  { label: 'Phone',    value: '+1 (613) 324-5733',       href: 'tel:+16133245733',                                               icon: <FaPhone /> },
  { label: 'LinkedIn', value: 'linkedin.com/in/anush-adhikari-073196218', href: 'https://www.linkedin.com/in/anush-adhikari-073196218/', icon: <FaLinkedin /> },
  { label: 'GitHub',   value: 'github.com/AnushAdhikari',href: 'https://github.com/AnushAdhikari',                               icon: <FaGithub /> },
]

export default function Contact() {
  return (
    <section id="contact" className="bg-zinc-50 py-24 dark:bg-[#09090e]">
      <div className="shell">
        <div className="reveal overflow-hidden rounded-[2rem] bg-[#09090e] text-white shadow-[0_32px_64px_rgba(0,0,0,0.45)]">

          {/* Yellow top stripe */}
          <div className="h-1.5 w-full bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-400/40" />

          <div className="grid gap-10 p-8 sm:p-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-start lg:p-14">

            {/* Heading */}
            <div>
              <p className="eyebrow text-yellow-400">Contact</p>
              <h2 className="mt-5 text-4xl font-black leading-tight tracking-tight sm:text-5xl">
                Let's build something<br />
                <span className="text-yellow-400">useful, fast,</span><br />
                and well-crafted.
              </h2>
              <p className="mt-6 max-w-lg text-base leading-7 text-zinc-300">
                I'm based in Ottawa and interested in internships, junior developer roles, and
                freelance opportunities where I can contribute across front-end development,
                e-commerce, and AI-informed product work.
              </p>
              <a
                href="mailto:xettrianush@gmail.com"
                className="btn btn-yellow mt-8 inline-flex"
              >
                Send me an email <HiArrowNarrowRight />
              </a>
            </div>

            {/* Links */}
            <div className="grid gap-3 self-start">
              {LINKS.map(l => (
                <a
                  key={l.label}
                  href={l.href}
                  target={l.href.startsWith('http') ? '_blank' : undefined}
                  rel={l.href.startsWith('http') ? 'noreferrer' : undefined}
                  className="flex items-center gap-4 rounded-2xl border border-white/8 bg-white/5 px-5 py-4 transition hover:border-yellow-400/40 hover:bg-white/10"
                >
                  <span className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full bg-yellow-400/15 text-yellow-400">
                    {l.icon}
                  </span>
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-[0.28em] text-zinc-500">{l.label}</p>
                    <p className="mt-0.5 text-sm font-medium text-zinc-200">{l.value}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
