import React from 'react'
import { FaCode, FaGlobe, FaDatabase, FaBrain } from 'react-icons/fa'
import FlagForFlagNepalIcon from './FlagNepal'


const CARDS = [
  {
    icon: <FaCode className="text-2xl text-yellow-400" />,
    title: 'Front-end engineer',
    body: 'I specialise in clean component structures, responsive layouts, and smooth user experiences built with React.js, Tailwind CSS, and modern JavaScript.',
  },
  {
    icon: <FaGlobe className="text-2xl text-yellow-400" />,
    title: 'Global e-commerce view',
    body: 'My SEO and FBA work across European Amazon markets taught me how data, localisation, and customer behaviour directly shape product visibility and conversion.',
  },
  {
    icon: <FaDatabase className="text-2xl text-yellow-400" />,
    title: 'Full stack awareness',
    body: 'I work across the stack; REST APIs, Node.js basics, PHP, MySQL, and Oracle which gave me a practical understanding of how front-end and back-end systems interact.',
  },
  {
    icon: <FaBrain className="text-2xl text-yellow-400" />,
    title: 'AI/ML in practice',
    body: 'Currently pursuing postgraduate study in AI and Machine Learning at Lambton College, Ottawa, applying ML concepts to real-world web and business contexts.',
  },
]

export default function About() {
  return (
    <section id="about" className="bg-white py-20 dark:bg-[#0b0b10]">
      <div className="shell">
        <div className="grid gap-16 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">

          {/* Left: heading + bio */}
          <div className="reveal">
            <p className="eyebrow text-4xl">About me</p>
            <h2 className="mt-5 text-4xl font-black leading-tight tracking-tight sm:text-5xl">
              A developer shaped by <span className="text-yellow-500">web products,<br />e-commerce,<br /></span>
              and AI-driven thinking.
            </h2>
            <p className="mt-6 text-base leading-7 text-zinc-600 dark:text-zinc-300">
              Hi, I'm <strong>Anush Adhikari</strong> originally from <strong>Nepal</strong>
                <span style={{ display: 'inline-flex', 
                alignItems: 'center', 
                verticalAlign: 'middle', 
                margin: '0 2px 2px 4px' }}>
                <FlagForFlagNepalIcon size={22} strokeWidth={0} />
                </span>
              , web developer currently pursuing postgraduate
              studies in Artificial Intelligence and Machine Learning at Lambton College in Ottawa, ON.
            </p>
            <p className="mt-4 text-base leading-7 text-zinc-600 dark:text-zinc-300">
              My professional journey spans responsive React interfaces, Shopify storefront
              customisation, REST API integration, and AI-assisted Amazon marketplace strategy
              across European markets. I'm passionate about shipping clean, scalable code and
              leveraging ML to build smarter web experiences.
            </p>
            <div className="mt-8 flex flex-wrap gap-3 text-sm">
              <span className="chip">Ottawa, ON</span>
              <span className="chip">2+ yrs experience</span>
              <span className="chip">Open to work</span>
            </div>
          </div>

          {/* Right: feature cards */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {CARDS.map((card, i) => (
              <div
                key={card.title}
                className="reveal glass rounded-3xl p-6 shadow-[0_8px_32px_rgba(0,0,0,0.06)] dark:shadow-[0_8px_32px_rgba(0,0,0,0.3)]"
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <div className="mb-4">{card.icon}</div>
                <h3 className="text-base font-bold">{card.title}</h3>
                <p className="mt-2 text-sm leading-6 text-zinc-600 dark:text-zinc-300">{card.body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
