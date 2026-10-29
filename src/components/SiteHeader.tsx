'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import { ArrowUpRight, Menu, X } from 'lucide-react'
import { LiquidNavbar } from './ui/liquid-glass-navbar'

const items = [
  { label: 'Home', href: '/', fx: 'glow' as const },
  { label: 'Skills & Projects', href: '/skills-projects/', fx: 'drop' as const },
  { label: 'About', href: '/about/', fx: 'wave' as const },
  { label: 'Contact', href: '/contact/', fx: 'glow' as const },
]

export default function SiteHeader() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)
  const current = Math.max(0, items.findIndex(item => item.href.replace(/\/$/, '') === pathname.replace(/\/$/, '')))
  useEffect(() => { setOpen(false) }, [pathname])
  useEffect(() => {
    const onKey = (event: KeyboardEvent) => { if (event.key === 'Escape') setOpen(false) }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [])

  return <header className="site-header">
    <Link className="brand" href="/" aria-label="Ali Mapari — Home">
      <span className="brand-name">ALI MAPARI<span className="brand-dot">.</span></span>
      <span className="brand-descriptor">AI & DATA SCIENCE</span>
    </Link>
    <div className="desktop-nav"><LiquidNavbar items={items} active={current} sound={false} className="main-navigation" /></div>
    <Link href="/contact/" className="header-contact">Let’s connect <ArrowUpRight size={15} /></Link>
    <button className="mobile-menu-toggle" type="button" aria-expanded={open} aria-controls="mobile-navigation" aria-label={open ? 'Close navigation' : 'Open navigation'} onClick={() => setOpen(!open)}>{open ? <X size={23} /> : <Menu size={23} />}</button>
    {open && <nav id="mobile-navigation" className="mobile-navigation" aria-label="Mobile navigation">{items.map((item, index) => <Link key={item.href} href={item.href} aria-current={current === index ? 'page' : undefined} onClick={() => setOpen(false)}><span>0{index + 1}</span>{item.label}<ArrowUpRight size={18} /></Link>)}</nav>}
  </header>
}
