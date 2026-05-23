import React from 'react'
import {
  FaHtml5, FaCss3Alt, FaJs, FaReact, FaBootstrap,
  FaNodeJs, FaPhp, FaPython, FaGitAlt, FaGithub,
  FaWordpress, FaDatabase, FaCode, FaTools
} from 'react-icons/fa'
import { SiTailwindcss, SiMysql, SiWebpack, SiShopify } from 'react-icons/si'
import { MdApi } from 'react-icons/md'
import { SiNextdotjs } from "@icons-pack/react-simple-icons";



const CATEGORIES = [
  {
    label: 'Frontend',
    icon: <FaReact className="text-[#339933]" />,
    skills: [
      { name: 'React.js',          icon: <FaReact       className="text-[#61DAFB]" /> },
      { name: 'Next.js', icon: <SiNextdotjs className="text-black dark:text-white" /> },
      { name: 'JavaScript (ES6+)', icon: <FaJs          className="text-[#F7DF1E]" /> },
      { name: 'HTML5',             icon: <FaHtml5       className="text-[#E34F26]" /> },
      { name: 'CSS3',              icon: <FaCss3Alt     className="text-[#1572B6]" /> },
      { name: 'Tailwind CSS',      icon: <SiTailwindcss className="text-[#06B6D4]" /> },
      { name: 'Bootstrap',         icon: <FaBootstrap   className="text-[#7952B3]" /> },
    ],
  },
  {
    label: 'Backend & Databases',
    icon: <FaDatabase className="text-[#339933]" />,
    skills: [
      { name: 'Node.js',  icon: <FaNodeJs   className="text-[#339933]" /> },
      { name: 'PHP',      icon: <FaPhp      className="text-[#777BB4]" /> },
      { name: 'Python',   icon: <FaPython   className="text-[#3776AB]" /> },
      { name: 'MySQL',    icon: <SiMysql    className="text-[#4479A1]" /> },
      { name: 'Oracle', icon: <FaDatabase className="text-[#F80000]" /> },
      { name: 'SQL',      icon: <FaDatabase className="text-yellow-500" /> },
    ],
  },
  {
    label: 'Tools & Dev Practices',
    icon: <FaTools className="text-yellow-500" />,
    skills: [
      { name: 'Git',         icon: <FaGitAlt   className="text-[#F05032]" /> },
      { name: 'GitHub',      icon: <FaGithub   className="text-zinc-800 dark:text-white" /> },
      { name: 'VS Code', icon: <FaCode className="text-[#007ACC]" /> },
      { name: 'REST APIs',   icon: <MdApi      className="text-emerald-500" /> },
      { name: 'Agile/Scrum', icon: <FaTools className="text-yellow-500" /> },
      { name: 'Webpack',     icon: <SiWebpack  className="text-[#8DD6F9]" /> },
    ],
  },
  {
    label: 'E-Commerce & CMS',
    icon: <SiShopify className="text-[#96BF48]" />,
    skills: [
      { name: 'Shopify (Liquid)', icon: <SiShopify   className="text-[#96BF48]" /> },
      { name: 'WordPress',        icon: <FaWordpress className="text-[#21759B]" /> },
    ],
  },
]

export default function Skills() {
  return (
  <section id="skills" className="bg-zinc-50 py-24 dark:bg-[#09090e]">
    <div className="shell">
      <div className="reveal max-w-2xl">
        <p className="eyebrow">Skills</p>
        <h2 className="mt-5 text-4xl font-black tracking-tight sm:text-5xl">
          A practical stack built through<br />
          <span className="text-yellow-500">production work</span> and ongoing study.
        </h2>
        <p className="mt-5 text-base leading-7 text-zinc-600 dark:text-zinc-300">
          Every technology listed here was used in a real professional context; not just studied in a tutorial.
        </p>
      </div>

      <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-4">
        {CATEGORIES.map((cat, ci) => (
          <div
            key={cat.label}
            className="reveal glass rounded-3xl p-5 sm:p-6 shadow-[0_8px_32px_rgba(0,0,0,0.06)] dark:shadow-[0_8px_32px_rgba(0,0,0,0.3)]"
            style={{ transitionDelay: `${ci * 90}ms` }}
          >
            <div className="mb-5 flex items-center gap-3">
              <span className="text-2xl">{cat.icon}</span>
              <p className="eyebrow text-[10px]">{cat.label}</p>
            </div>

            <ul className="grid grid-cols-1 gap-2.5 sm:grid-cols-2 xl:grid-cols-1">
              {cat.skills.map(skill => (
                <li
                  key={skill.name}
                  className="flex items-center gap-2.5 rounded-xl border border-black/5 bg-white/60 px-3 py-2.5 text-sm font-medium dark:border-white/5 dark:bg-white/5"
                >
                  <span className="flex-shrink-0 text-lg">{skill.icon}</span>
                  <span className="truncate">{skill.name}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  </section>
)
}
