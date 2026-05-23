import React from 'react'
import { useTypewriter, Cursor } from 'react-simple-typewriter'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { HiOutlineMail, HiArrowNarrowRight } from 'react-icons/hi'
import { BsFillPersonLinesFill } from 'react-icons/bs'
import { Link } from 'react-scroll'
import profile from '../profile/profile.jpg'


const HERO_BTNS = [
  {
    href:  'https://www.linkedin.com/in/anush-adhikari-073196218/',
    label: 'LinkedIn',
    icon:  <FaLinkedin />,
    cls:   'btn-blue',
    ext:   true,
  },
  {
    href:  'https://github.com/AnushAdhikari',
    label: 'GitHub',
    icon:  <FaGithub />,
    cls:   'btn-dark',
    ext:   true,
  },
  {
    href:  'mailto:xettrianush@gmail.com',
    label: 'Email',
    icon:  <HiOutlineMail />,
    cls:   'btn-yellow',
    ext:   false,
  },
  {
    href:  '/resume.pdf',
    label: 'Resume',
    icon:  <BsFillPersonLinesFill />,
    cls:   'btn-ghost',
    ext:   true,
  },
]

export default function Home() {
  const [text] = useTypewriter({
    words: ['Web Developer', 'Amazon SEO & FBA Specialist', 'AI / ML Student', 'Shopify Developer'],
    loop: true,
    typeSpeed: 75,
    deleteSpeed: 45,
    delaySpeed: 1600,
  })

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden bg-[#08080c] text-white pt-5"
    >
      {/* Ambient glow blobs */}
      <div className="pointer-events-none absolute right-[-6%] top-[10%] h-[480px] w-[480px] rounded-full bg-yellow-400/[0.09] blur-[100px]" />
      <div className="pointer-events-none absolute bottom-[-4%] left-[-4%] h-[340px] w-[340px] rounded-full bg-yellow-400/[0.06] blur-[80px]" />

      {/* Subtle grid texture */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)',
          backgroundSize: '48px 48px',
        }}
      />

      <div className="shell relative z-10 grid w-full gap-16 py-20 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">

        {/*  Left */}
        <div className="reveal max-w-3xl">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-yellow-400/20 bg-yellow-400/10 px-4 py-1.5">
            <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-xs font-semibold uppercase tracking-[0.28em] text-yellow-400">
              Ottawa, ON · Open to opportunities
            </span>
          </div>

          <h1 className="text-[clamp(2.4rem,5.5vw,5rem)] font-black leading-[1.0] tracking-tight">
            I build fast,<br />
            thoughtful<br />
            <span className="text-yellow-400">web experiences.</span>
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-7 text-zinc-300 sm:text-md">
            Entry-level Web Developer with 2+ years of professional experience in responsive
            React applications, REST API integration, Shopify development, AI-assisted
            e-commerce growth strategies &amp; Amazon SEO strategies.
          </p>

          <p className="mt-4 text-xl font-bold text-yellow-400 sm:text-2xl">
            {text}
            <Cursor cursorColor="#facc15" />
          </p>

          {/* CTA buttons */}
          <div className="mt-5 flex flex-wrap gap-3">
            {HERO_BTNS.map(btn => (
              <a
                key={btn.label}
                href={btn.href}
                target={btn.ext ? '_blank' : undefined}
                rel={btn.ext ? 'noreferrer' : undefined}
                className={`btn ${btn.cls}`}
              >
                <span className="text-base">{btn.icon}</span>
                {btn.label}
              </a>
            ))}
          </div>

          {/* Scroll cue */}
          {/* <div className="mt-14 hidden items-center gap-3 lg:flex">
            <Link to="about" smooth duration={500} offset={-78}
              className="group flex cursor-pointer items-center gap-2 text-sm text-zinc-500 transition hover:text-yellow-400">
              Scroll to explore
              <HiArrowNarrowRight className="transition-transform group-hover:translate-x-1" />
            </Link>
          </div> */}
        </div>

        {/* ── Right: card ────────────────────────── */}
<div className="reveal flex justify-center">
  <div
    style={{
      width: '340px',
      height: '425px',
      borderRadius: '2rem',
      border: '1px solid rgba(255,255,255,0.1)',
      background: 'linear-gradient(135deg, #1c1c1e, #2a2a2e)',
      position: 'relative',
      overflow: 'hidden',
      boxShadow: '0 32px 64px rgba(0,0,0,0.55)',
      flexShrink: 0,
    }}
  >
      <img
    src={profile}
    alt="Anush Adhikari"
    style={{
      position: 'absolute',
      inset: 0,
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      objectPosition: 'top',
    }}
  />
    {/* Top label */}
    <div style={{ position:'absolute', top:20, left:20, fontSize:'10px', fontWeight:'bold', textTransform:'uppercase', letterSpacing:'0.28em', color:'rgb(250 204 21 / var(--tw-text-opacity, 1))', background:'rgba(0,0,0,0.4)', padding:'6px 14px', borderRadius:'9999px' }}>
      Portfolio · 2026
    </div>

    {/* Social icons */}
    <div style={{ position:'absolute', top:20, right:20, display:'flex', gap:10, color:'rgba(255,255,255,0.7)', fontSize:18 }}>
      <a href="https://github.com/AnushAdhikari" target="_blank" rel="noreferrer" style={{ color:'black' }}><FaGithub /></a>
      <a href="https://www.linkedin.com/in/anush-adhikari-073196218/" target="_blank" rel="noreferrer" style={{ color:'black' }}><FaLinkedin /></a>
      <a href="mailto:xettrianush@gmail.com" style={{ color:'black' }}><HiOutlineMail /></a>
    </div>

    {/* Yellow glow */}
    <div style={{ position:'absolute', inset:0, background:'radial-gradient(circle at 75% 18%, rgba(250,204,21,0.18), transparent 38%)' }} />

    {/* Bottom info */}
    <div style={{ position:'absolute', left:16, right:16, bottom:16, borderRadius:'1.5rem', border:'1px solid rgba(255,255,255,0.1)', background:'rgba(0,0,0,0.5)', padding:20, backdropFilter:'blur(12px)' }}>
      <p style={{ fontSize:10, fontWeight:'bold', textTransform:'uppercase', letterSpacing:'0.28em', color:'#facc15', marginBottom:10 }}>Current focus</p>
      {/* <p style={{ fontSize:18, fontWeight:'bold', lineHeight:1.3 }}>React · AI/ML · Web Performance</p> */}
      <p style={{ marginTop:10, fontSize:12, lineHeight:1.6, color:'#a1a1aa' }}>
        Blending front-end engineering, e-commerce strategy, and data-informed product thinking.
      </p>
      <div style={{ marginTop:14, display:'flex', alignItems:'center', gap:8, fontSize:12, color:'#d4d4d8' }}>
        <span style={{ width:8, height:8, borderRadius:'50%', background:'#34d399', display:'inline-block' }} />
        Available for junior roles, co-op, internships &amp; freelance
      </div>
    </div>
  </div>
</div>
      </div>
    </section>
  )
}
