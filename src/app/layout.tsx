import type { Metadata } from 'next'
import SiteHeader from '@/components/SiteHeader'
import SiteFooter from '@/components/SiteFooter'
import '@fontsource-variable/inter'
import '@fontsource-variable/playfair-display'
import '@fontsource-variable/playfair-display/wght-italic.css'
import './globals.css'

export const metadata: Metadata = {
  title: { default: 'Ali Mapari | AI & Data Science Student & Developer', template: '%s | Ali Mapari' },
  description: 'Explore the portfolio of Ali Mapari, an AI and Data Science student developing web projects and exploring programming, software engineering, and intelligent systems.',
  icons: { icon: '/favicon.svg' },
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body><a className="skip-link" href="#main-content">Skip to content</a><div className="page-guides" aria-hidden="true"><span /><span /><span /></div><SiteHeader /><main id="main-content">{children}</main><SiteFooter /></body></html>
}
