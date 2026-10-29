import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'

export default function SiteFooter() {
  return <footer className="site-footer">
    <div className="footer-main"><div><Link href="/" className="footer-name">Ali Mapari<span>.</span></Link><p>AI & Data Science Student · Developer</p></div><p className="footer-thought">Building, learning, and<br />exploring what comes next.</p><Link href="/contact/" className="footer-connect">Let’s connect <ArrowUpRight size={23} /></Link></div>
    <div className="footer-bottom"><span>A portfolio in progress. A foundation in the making.</span><nav aria-label="Footer navigation"><Link href="/">Home</Link><Link href="/skills-projects/">Skills & Projects</Link><Link href="/about/">About</Link><Link href="/contact/">Contact</Link></nav><span>2026</span></div>
  </footer>
}
