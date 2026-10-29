'use client'

import dynamic from 'next/dynamic'
import Link from 'next/link'
import { ArrowDown, ArrowRight, ArrowUpRight } from 'lucide-react'
import { HalftoneName } from './ui/halftone-wordmark-footer'

const RobotScene = dynamic(() => import('./RobotScene'), { ssr: false })

export default function HomeHero() {
  return <section id="intro-track" className="intro-track" aria-labelledby="hero-heading">
    <div className="hero-frame">
      <div className="hero-topline"><span><i />AI & DATA SCIENCE STUDENT</span><span>CURIOUS BY NATURE. BUILDING BY CHOICE.</span></div>
      <div className="hero-composition">
        <div className="hero-content">
          <div className="hero-name-wrap"><HalftoneName wordmark="Ali Mapari" height="110px" dotGap={3.3} fontWeight={800} radius={56} palette={{ background: '#f4f0e7', ink: '#2447a8', warm: '#b88a3b' }} className="hero-name" /><span className="hero-name-caption">AI & Data Science Student · Developer</span></div>
          <h1 id="hero-heading">Building Digital<br />Experiences.<br /><em>Exploring Intelligent<br className="wide-break" /> Systems.</em></h1>
          <p className="hero-description">I’m Ali Mapari, a student exploring software development, artificial intelligence, machine learning, and data science. Through practical projects and continuous learning, I’m developing the skills to turn ideas into useful digital experiences.</p>
          <div className="hero-actions"><Link href="/skills-projects/#projects" className="button button-primary">Explore My Work <ArrowUpRight size={17} /></Link><Link href="/about/" className="quiet-link">More About Me <ArrowRight size={16} /></Link></div>
        </div>
        <div className="hero-visual" aria-hidden="true">
          <div className="scene-registration"><span>FIG. 01</span><span>A CURIOUS MIND, ALWAYS LEARNING</span></div>
          <div className="robot-orbit orbit-one" /><div className="robot-orbit orbit-two" />
          <span className="scene-cross cross-one">+</span><span className="scene-cross cross-two">+</span>
          <div className="robot-mount"><RobotScene /></div>
          <div className="robot-note"><span className="gold-dot" /><span>STILL LEARNING.<br />ALWAYS EXPLORING.</span><span className="note-rule" /></div>
          <div className="scene-coordinates">SOFTWARE / INTELLIGENCE / POSSIBILITY</div>
        </div>
      </div>
      <div className="hero-bottomline"><a href="#selected-work" className="scroll-cue"><span className="scroll-arrow"><ArrowDown size={14} /></span>SCROLL TO EXPLORE</a><span>Developer · Frontend · AI · Data · Creative Technology</span><span>01 — INTRODUCTION</span></div>
    </div>
  </section>
}
