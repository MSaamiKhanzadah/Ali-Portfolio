import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "About",
  description:
    "Meet Ali Mapari, an AI and Data Science student and developer building a foundation in programming, software engineering, and intelligent systems.",
}

const principles = [
  {
    title: "Understand Before Implementing",
    description:
      "I aim to understand the concept behind a solution, going beyond copied code to learn how and why it works.",
  },
  {
    title: "Structure Before Complexity",
    description:
      "I organize information, requirements, and components before adding complexity. A clear foundation makes the next step easier to reason about.",
  },
  {
    title: "Learn Through Application",
    description:
      "I connect theory with practice. Applying an idea in a small project helps me test my understanding and see where I need to learn more.",
  },
  {
    title: "Improve Through Iteration",
    description:
      "I review what I have made, identify weaknesses, and refine the result. Each revision is another opportunity to learn.",
  },
  {
    title: "Value Clarity",
    description:
      "I want interfaces, project descriptions, and code to communicate their purpose clearly. Clarity helps both the person using a project and the person building it.",
  },
]

export default function AboutPage() {
  return (
    <div className="about-page">
      <div className="page-intro">
        <span className="eyebrow">About / Student · Developer</span>
        <h1 className="display-title">Hello, I’m Ali Mapari.</h1>
        <p className="page-lede">
          An AI &amp; Data Science student building a foundation in programming,
          software engineering, and intelligent systems. I enjoy understanding
          how technology works—and turning software ideas into practical
          solutions.
        </p>
      </div>

      <section className="editorial-section" aria-labelledby="my-story-title">
        <div className="section-heading">
          <span className="section-label">01 / My story</span>
          <h2 className="section-title" id="my-story-title">
            A foundation built with intention.
          </h2>
        </div>
        <div className="story-grid">
          <article className="story-block">
            <span className="eyebrow">Who I am</span>
            <h3>A student with a developer’s curiosity.</h3>
            <p className="section-copy">
              I’m Ali Mapari, a first-year B.Voc student in Artificial Intelligence and
              Data Science at Nexcore Institute of Technology. I’m interested in
              how digital experiences are built, how software solves problems,
              and the thinking behind a useful application.
            </p>
          </article>
          <article className="story-block">
            <span className="eyebrow">What I study</span>
            <h3>Understanding the fundamentals.</h3>
            <p className="section-copy">
              My studies introduce me to AI, machine learning, data, and
              computational thinking. Alongside these subjects, I’m strengthening
              my programming fundamentals before moving into more advanced
              work.
            </p>
          </article>
          <article className="story-block">
            <span className="eyebrow">What I build</span>
            <h3>Putting learning into practice.</h3>
            <p className="section-copy">
              Web projects give me a place to practise layout, information
              hierarchy, and the details of a clear interface. Through software
              engineering studies, I’m also learning to think about requirements,
              planning, and documentation before implementation.
            </p>
          </article>
          <article className="story-block">
            <span className="eyebrow">Where I’m headed</span>
            <h3>Connecting the parts.</h3>
            <p className="section-copy">
              I want to become a capable developer who understands programming,
              software engineering, and AI and data. My focus is learning how
              these technologies fit together in real applications and developing
              the ability to solve problems independently.
            </p>
          </article>
        </div>
      </section>

      <section className="editorial-section" aria-labelledby="education-title">
        <div className="section-heading">
          <span className="section-label">02 / Education</span>
          <h2 className="section-title" id="education-title">
            The learning so far.
          </h2>
        </div>
        <div className="education-list">
          <article className="education-entry">
            <span className="eyebrow">2026–2029 / Current</span>
            <div>
              <h3>Nexcore Institute of Technology</h3>
              <p className="section-copy">
                Bachelor of Vocation (B.Voc) in Artificial Intelligence &amp; Data Science
              </p>
            </div>
            <p className="section-copy">First-year student, as of 2026.</p>
          </article>
          <article className="education-entry">
            <span className="eyebrow">2024–2026</span>
            <div>
              <h3>Navneet Junior College</h3>
              <p className="section-copy">Science — Physics, Chemistry &amp; Mathematics</p>
            </div>
            <p className="section-copy">
              Higher secondary education in the PCM stream.
            </p>
          </article>
          <article className="education-entry">
            <span className="eyebrow">Completed 2024</span>
            <div>
              <h3>Safa High School</h3>
              <p className="section-copy">Secondary education</p>
            </div>
            <p className="section-copy">Completed with 72%.</p>
          </article>
        </div>
      </section>

      <section className="editorial-section" aria-labelledby="principles-title">
        <div className="section-heading">
          <span className="section-label">03 / Learning principles</span>
          <h2 className="section-title" id="principles-title">
            How I approach the work.
          </h2>
        </div>
        <div className="principles-grid">
          {principles.map((principle, index) => (
            <article className="principle" key={principle.title}>
              <span className="eyebrow">0{index + 1}</span>
              <h3>{principle.title}</h3>
              <p className="section-copy">{principle.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="editorial-section" aria-labelledby="about-next-title">
        <div className="section-heading">
          <span className="section-label">04 / Keep exploring</span>
          <h2 className="section-title" id="about-next-title">
            See what I’m learning and building.
          </h2>
        </div>
        <div className="story-grid">
          <div className="story-block">
            <p className="section-copy">
              Explore the skills I’m developing and the projects where I’m
              applying them.
            </p>
            <Link className="text-link" href="/skills-projects">
              Skills &amp; projects <span aria-hidden="true">↗</span>
            </Link>
          </div>
          <div className="story-block">
            <p className="section-copy">
              Have an idea, a question, or a chance to learn together? Let’s start
              a conversation.
            </p>
            <Link className="text-link" href="/contact">
              Get in touch <span aria-hidden="true">↗</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
