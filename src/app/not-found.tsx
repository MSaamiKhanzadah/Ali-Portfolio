import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export default function NotFound() {
  return <div className="inner-page"><div className="page-intro"><span className="eyebrow">404 / A SMALL DETOUR</span><h1 className="display-title">Nothing<br /><em>here just yet.</em></h1><p className="page-lede">This page couldn’t be found. Let’s head back to the portfolio.</p><Link className="button button-primary" href="/">Back to Home <ArrowRight size={17} /></Link></div></div>
}
