import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import HomeHero from '@/components/HomeHero'
import ProjectList from '@/components/ProjectList'

const focus = [
  ['Web Development', 'Building web experiences and learning modern frontend development practices.'],
  ['Programming', 'Strengthening programming fundamentals and problem-solving skills.'],
  ['Artificial Intelligence & Data Science', 'Developing an academic foundation in AI, machine learning, and data science.'],
  ['Software Engineering', 'Learning how requirements, development processes, structure, and documentation contribute to better projects.'],
]

export default function Home() {
  return <>
    <HomeHero />
    <section className="home-introduction editorial-section"><span className="section-label">A FOUNDATION IN THE MAKING</span><p>Building digital experiences<br /><em>while exploring software, AI, and data.</em></p><Link href="/about/" className="text-link">Meet the person behind the projects <ArrowUpRight size={17} /></Link></section>
    <section className="editorial-section selected-work" id="selected-work" aria-labelledby="selected-heading"><div className="section-heading"><div><span className="section-label">01 / SELECTED WORK</span><h2 className="section-title" id="selected-heading">Ideas explored<br /><em>through projects.</em></h2></div><div className="section-aside"><p>A collection of projects and concepts through which I explore web development, interface design, and software problem-solving.</p><Link href="/skills-projects/#projects" className="text-link">Explore all projects <ArrowUpRight size={17} /></Link></div></div><ProjectList /></section>
    <section className="editorial-section current-exploration" aria-labelledby="focus-heading"><div className="section-heading"><div><span className="section-label">02 / LEARNING IN PROGRESS</span><h2 className="section-title" id="focus-heading">Currently<br /><em>exploring.</em></h2></div><p className="section-aside">A broad curiosity, a growing foundation.<br />These are the areas I’m developing through study and practice.</p></div><div className="focus-grid">{focus.map(([title, text], index) => <article key={title} className="focus-item"><span className="focus-number">0{index + 1}</span><h3>{title}</h3><p>{text}</p></article>)}</div></section>
    <section className="journey-section"><span className="section-label">EVERY PROJECT IS A STEP FORWARD</span><h2>The journey is<br /><em>part of the work.</em></h2><div className="journey-bottom"><p>I’m continuously learning, experimenting with new ideas, and building projects that help me turn concepts into practical experience.</p><Link href="/about/" className="button button-outline">Explore My Journey <ArrowUpRight size={17} /></Link></div><span className="journey-asterisk" aria-hidden="true">✳</span></section>
  </>
}
