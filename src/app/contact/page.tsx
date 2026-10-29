import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowUpRight, Github, Linkedin, Mail } from 'lucide-react'

export const metadata: Metadata = { title: 'Contact', description: 'Connect with Ali Mapari about software development, artificial intelligence, data science, practical projects, and learning.' }

export default function ContactPage() {
  return <div className="inner-page contact-page">
    <div className="page-intro"><span className="eyebrow"><i />OPEN TO IDEAS & CONVERSATIONS</span><h1 className="display-title">Let’s<br /><em>Connect.</em><span className="contact-star" aria-hidden="true">✳</span></h1><p className="page-lede">I’m interested in connecting with people who share a curiosity about software development, artificial intelligence, data science, and technology.</p></div>
    <section className="editorial-section contact-section" aria-labelledby="contact-heading"><div className="section-heading"><div><span className="section-label">01 / START A CONVERSATION</span><h2 className="section-title" id="contact-heading">Have an idea<br /><em>or want to connect?</em></h2></div><p className="section-aside">A project discussion, an exchange of technical ideas, or an opportunity to learn from others — I value conversations that encourage practical thinking and continuous improvement.</p></div>
      <div className="contact-availability"><span className="gold-dot" /><div><strong>Contact details are being added.</strong><p>Direct links will be available once my email address and profiles are provided.</p></div></div>
      <dl className="contact-channels"><div><dt><Mail size={19} strokeWidth={1.4} />Email</dt><dd>[ADD MY EMAIL ADDRESS]</dd><span>TO BE ADDED</span></div><div><dt><Github size={19} strokeWidth={1.4} />GitHub</dt><dd>[ADD MY GITHUB PROFILE URL]</dd><span>TO BE ADDED</span></div><div><dt><Linkedin size={19} strokeWidth={1.4} />LinkedIn</dt><dd>[ADD MY LINKEDIN PROFILE URL]</dd><span>TO BE ADDED</span></div></dl>
    </section>
    <section className="contact-closing"><span className="section-label">GOOD CONVERSATIONS START WITH CURIOSITY.</span><p>Until then, explore<br /><em>what I’m building.</em></p><Link href="/skills-projects/" className="text-link">View Skills & Projects <ArrowUpRight size={18} /></Link></section>
  </div>
}
