import type { Metadata } from 'next'
import ProjectList from '@/components/ProjectList'

export const metadata: Metadata = {
  title: 'Skills & Projects',
  description:
    'Explore Ali Mapari’s developing foundations in web development, programming, AI and data science, design, and software engineering, alongside educational projects and website concepts.',
}

const skillCategories = [
  {
    number: '01',
    title: 'Web Development',
    description:
      'Building a foundation in how web pages are structured, styled, and adapted across different screen sizes.',
    topics: ['HTML', 'CSS', 'Tailwind CSS', 'Next.js', 'Responsive layouts', 'Component organization'],
    note: 'HTML, CSS, and Tailwind foundations. Next.js and component-based development are current learning areas.',
  },
  {
    number: '02',
    title: 'Programming',
    description:
      'Strengthening the fundamentals of writing code and thinking through a problem one step at a time.',
    topics: ['Python', 'JavaScript', 'Programming fundamentals', 'Problem-solving'],
    note: 'A developing foundation in Python and JavaScript, with a focus on understanding the logic behind a solution.',
  },
  {
    number: '03',
    title: 'AI & Data Science',
    description:
      'Exploring intelligent systems, data, and the computational thinking behind practical applications through academic study.',
    topics: ['Artificial intelligence', 'Machine learning', 'Data science', 'Data problem-solving', 'Computational tasks'],
    note: 'Current academic focus. I am building the conceptual and programming foundations for more advanced work.',
  },
  {
    number: '04',
    title: 'Design',
    description:
      'Developing the visual foundations that help an interface communicate clearly and feel consistent.',
    topics: ['Figma fundamentals', 'Layout & hierarchy', 'Typography & spacing', 'Wireframes & prototypes', 'Responsive planning', 'Design consistency'],
    note: 'A supporting foundation for planning interfaces and connecting design decisions with frontend implementation.',
  },
  {
    number: '05',
    title: 'Software Engineering',
    description:
      'Learning to understand requirements, organize a project, and document decisions before adding implementation complexity.',
    topics: ['SDLC', 'Functional & nonfunctional requirements', 'Waterfall', 'Iterative & incremental models', 'Spiral model', 'Documentation & planning', 'CMS structure'],
    note: 'Academic foundations in development processes, basic planning, and the structure of software systems.',
  },
  {
    number: '06',
    title: 'WordPress',
    description:
      'Understanding the core building blocks of a content management system and how website content is maintained.',
    topics: ['Pages & posts', 'Themes', 'Plugins', 'Content editing', 'Publishing'],
    note: 'A supplementary foundation in website structure and content management.',
  },
]

const foundations = [
  {
    title: 'Programming',
    description: 'Build stronger fundamentals and become more independent when working through a coding problem.',
  },
  {
    title: 'Modern Web',
    description: 'Connect responsive layout, reusable components, and Next.js through practical learning.',
  },
  {
    title: 'AI & ML',
    description: 'Understand the core ideas behind intelligent systems before moving into more advanced applications.',
  },
  {
    title: 'Data Science',
    description: 'Develop the ability to organize data, ask useful questions, and reason through computational tasks.',
  },
  {
    title: 'Software Engineering',
    description: 'Bring requirements, planning, documentation, and implementation into a thoughtful development process.',
  },
]

export default function SkillsProjectsPage() {
  return (
    <div className="skills-projects-page">
      <div className="page-intro">
        <span className="eyebrow">Skills &amp; projects / Learning in practice</span>
        <h1 className="display-title">Skills &amp; Projects.</h1>
        <p className="page-lede">
          The foundations I am building, the ideas I am exploring, and the projects
          that help connect theory with practice. This is a view of my current
          learning, with room to grow.
        </p>
      </div>

      <section className="editorial-section" aria-labelledby="skills-title">
        <div className="section-heading">
          <span className="section-label">01 / Skills</span>
          <h2 className="section-title" id="skills-title">A foundation in progress.</h2>
        </div>
        <div className="skills-list">
          {skillCategories.map((category) => (
            <article className="skill-category" key={category.number}>
              <span className="skill-number" aria-hidden="true">{category.number}</span>
              <div>
                <h3>{category.title}</h3>
                <p className="skill-description">{category.description}</p>
              </div>
              <div>
                <ul className="skill-tags" aria-label={`${category.title} learning topics`}>
                  {category.topics.map((topic) => <li key={topic}>{topic}</li>)}
                </ul>
                <p className="skill-note">{category.note}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="editorial-section" id="projects" aria-labelledby="projects-title">
        <div className="section-heading">
          <span className="section-label">02 / Projects</span>
          <h2 className="section-title" id="projects-title">Ideas, explored through making.</h2>
        </div>
        <p className="section-copy">
          An educational frontend exploration and a restaurant website concept.
          Details are presented according to their current confirmed scope.
        </p>
        <ProjectList detailed />
      </section>

      <section className="editorial-section" aria-labelledby="foundation-title">
        <div className="section-heading">
          <span className="section-label">03 / Next steps</span>
          <h2 className="section-title" id="foundation-title">Building My Foundation.</h2>
        </div>
        <div className="foundation-grid">
          {foundations.map((foundation, index) => (
            <article className="foundation-item" key={foundation.title}>
              <span className="eyebrow">0{index + 1}</span>
              <h3>{foundation.title}</h3>
              <p className="section-copy">{foundation.description}</p>
            </article>
          ))}
        </div>
      </section>
    </div>
  )
}
