import Link from 'next/link'
import { ArrowDownRight, ArrowUpRight } from 'lucide-react'
import { projects } from '@/data/projects'

export default function ProjectList({ detailed = false }: { detailed?: boolean }) {
  return <div className={`project-list ${detailed ? 'project-list-detailed' : ''}`}>{projects.map(project => <article className="project-entry" key={project.id} id={detailed ? project.id : undefined}>
    <div className="project-number">{project.number}<span>/</span></div>
    <div className="project-body"><div className="project-eyebrow">{project.category}</div><h3>{project.name}</h3><p className="project-summary">{project.summary}</p>
      {detailed ? <div className="project-details"><div><h4>Purpose</h4><p>{project.purpose}</p></div><div><h4>Learning focus</h4><p>{project.learning}</p></div><div><h4>Technology stack</h4><p>{project.stack.join(' · ')}</p></div><div><h4>Implementation</h4><ul>{project.features.map(feature => <li key={feature}>{feature}</li>)}</ul></div><div className="project-status"><span className="gold-dot" /><p>{project.status}</p></div><p className="project-missing">Live project and source-code links: to be added.</p></div> : <div className="project-meta"><span>WEB DEVELOPMENT</span><span>STACK TO BE CONFIRMED</span></div>}
    </div>
    {detailed ? <ArrowDownRight className="project-direction" size={32} strokeWidth={1} aria-hidden="true" /> : <Link className="project-open" href={`/skills-projects/#${project.id}`} aria-label={`Read about ${project.name}`}><ArrowUpRight size={25} strokeWidth={1.3} /></Link>}
  </article>)}</div>
}
