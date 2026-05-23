import React, { useState, useEffect } from 'react'
import { Link } from 'react-scroll'
import { FaBars, FaTimes, FaMoon, FaSun } from 'react-icons/fa'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'
import { BsFillPersonLinesFill } from 'react-icons/bs'

const NAV_LINKS = [
  { to: 'home',       label: 'Home' },
  { to: 'about',      label: 'About' },
  { to: 'skills',     label: 'Skills' },
  { to: 'experience', label: 'Experience' },
  { to: 'projects',   label: 'Projects' },
  { to: 'education',  label: 'Education' },
  { to: 'contact',    label: 'Contact' },
]

const SOCIAL = [
  { href: 'https://www.linkedin.com/in/anush-adhikari-073196218/', icon: <FaLinkedin />, label: 'LinkedIn' },
  { href: 'https://github.com/AnushAdhikari',                     icon: <FaGithub />,   label: 'GitHub'   },
  { href: 'mailto:xettrianush@gmail.com',                         icon: <HiOutlineMail />, label: 'Email' },
  { href: '/resume.pdf',                                           icon: <BsFillPersonLinesFill />, label: 'Resume' },
]

export default function Navbar({ dark, setDark }) {
  const [open, setOpen]         = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 32)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${scrolled ? 'border-b border-white/10 bg-[#08080c]/80 backdrop-blur-xl' : 'bg-transparent'}`}>
      <div className="shell flex h-20 items-center justify-between">

        {/* ── Logo ───────────────────────────────── */}
        <div className="flex-shrink-0">
          <p className="text-lg font-extrabold tracking-tight text-white">
            Anush<span className="text-yellow-400"> Adhikari</span>
          </p>
          <p className="hidden text-[10px] font-medium uppercase tracking-[0.28em] text-zinc-400 sm:block">
            {/* Web Developer · AI/ML Student */}
          </p>
        </div>

        {/* ── Desktop nav ────────────────────────── */}
        <nav className="hidden items-center gap-6 xl:flex">
          {NAV_LINKS.map(link => (
            <Link
              key={link.to}
              to={link.to}
              smooth
              duration={500}
              offset={-78}
              spy
              activeClass="text-yellow-400"
              className="cursor-pointer text-sm font-medium text-zinc-300 transition-colors hover:text-yellow-400"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* ── Right controls ─────────────────────── */}
        <div className="flex items-center gap-2">
          {/* social icons – always visible on desktop */}
          {SOCIAL.map(s => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noreferrer"
              aria-label={s.label}
              className="hidden h-9 w-9 items-center justify-center rounded-full border border-white/10 text-zinc-300 transition hover:border-yellow-400/50 hover:text-yellow-400 lg:flex"
            >
              {s.icon}
            </a>
          ))}
          {/* theme toggle */}
          <button
            aria-label="Toggle colour theme"
            onClick={() => setDark(v => !v)}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-zinc-300 transition hover:border-yellow-400/50 hover:text-yellow-400"
          >
            {dark ? <FaSun size={14} /> : <FaMoon size={14} />}
          </button>
          {/* hamburger */}
          <button
            aria-label="Toggle menu"
            onClick={() => setOpen(v => !v)}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-zinc-300 xl:hidden"
          >
            {open ? <FaTimes size={15} /> : <FaBars size={15} />}
          </button>
        </div>
      </div>

      {/* ── Mobile menu ──────────────────────────── */}
      {open && (
        <div className="border-t border-white/10 bg-[#08080c]/95 px-5 py-5 xl:hidden">
          <div className="flex flex-col gap-4">
            {NAV_LINKS.map(link => (
              <Link
                key={link.to}
                to={link.to}
                smooth
                duration={500}
                offset={-78}
                onClick={() => setOpen(false)}
                className="cursor-pointer text-sm font-medium text-zinc-200 hover:text-yellow-400"
              >
                {link.label}
              </Link>
            ))}
            <div className="mt-2 flex flex-wrap gap-3 border-t border-white/10 pt-4">
              {SOCIAL.map(s => (
                <a key={s.label} href={s.href} target="_blank" rel="noreferrer"
                   className="btn btn-ghost text-xs">
                  <span>{s.icon}</span> {s.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
