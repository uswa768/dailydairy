import { useEffect, useRef } from 'react'

import aboutImg1 from '../assets/Cap01.png'
import aboutImg2 from '../assets/Cap02.png'
import aboutImg3 from '../assets/Cap03.png'

function SpinningCap({ src, size = 200, speed = 0.25, delay = 0 }) {
  const ref = useRef(null)

  useEffect(() => {
    let angle = 0, frame
    const animate = () => {
      angle += speed
      if (ref.current) ref.current.style.transform = `rotate(${angle}deg)`
      frame = requestAnimationFrame(animate)
    }
    const t = setTimeout(() => { frame = requestAnimationFrame(animate) }, delay)
    return () => { clearTimeout(t); cancelAnimationFrame(frame) }
  }, [speed, delay])

  return (
    <div
      ref={ref}
      className="shrink-0"
      style={{ width: size, height: size, filter: 'drop-shadow(0 8px 32px rgba(0,0,0,0.5))' }}
    >
      {src
        ? <img src={src} alt="cap" className="w-full h-full rounded-full object-cover" />
        : (
          <div className="w-full h-full rounded-full bg-white/[0.07] border-2 border-dashed border-white/25 flex items-center justify-center">
            <span className="font-['Anton'] text-white/30 text-[0.6rem] tracking-[0.08em] text-center px-4">CAP IMAGE</span>
          </div>
        )
      }
    </div>
  )
}

const H = "font-['Anton'] text-white uppercase text-[clamp(2.8rem,7vw,6.5rem)] leading-[1.02] text-center max-w-[1100px] mx-auto"

export default function About() {
  return (
    <div className="w-full min-h-screen bg-[#0f2a6e]">

      {/* SECTION 1 — cap top-left */}
      <section className="relative w-full flex flex-col items-center justify-center px-12 pt-[110px] pb-20 border-b border-white/[0.08]">
        <div className="absolute top-10 left-12">
          <SpinningCap src={aboutImg1} size={200} speed={0.22} delay={0} />
        </div>
        <h2 className={H}>
          I'VE BEEN BUYING, SELLING, AND TRADING MILK CAP MEMORABILIA FOR OVER 35 YEARS, WITH 20+ YEARS OF EXPERIENCE BUYING &amp; SELLING.
        </h2>
      </section>

      {/* SECTION 2 — cap bottom-right */}
      <section className="relative w-full flex flex-col items-center justify-center px-12 py-20 pb-[110px] border-b border-white/[0.08]">
        <h2 className={H}>
          ALL ITEMS ARE 100% AUTHENTIC, FAIRLY PRICED, AND HONESTLY DESCRIBED USING A CLEAR CONDITION SCALE.
        </h2>
        <div className="absolute bottom-10 right-12">
          <SpinningCap src={aboutImg2} size={200} speed={0.3} delay={400} />
        </div>
      </section>

      {/* SECTION 3 */}
      <section className="w-full flex flex-col items-center justify-center px-12 py-20 border-b border-white/[0.08]">
        <h2 className={H}>
          I PERSONALLY HANDLE ALL LISTINGS, ACQUISITIONS, AND SHIPPING.
        </h2>
      </section>

      {/* SECTION 4 */}
      <section className="w-full flex flex-col items-center justify-center px-12 py-20 border-b border-white/[0.08]">
        <h2 className={H}>
          I'LL BE ADDING THOUSANDS OF ITEMS FROM MY PERSONAL COLLECTION, INCLUDING SODA CAPS, LABELS, BOTTLES, MATCHBOOK COVERS, AND MORE.
        </h2>
      </section>

      {/* SECTION 5 */}
      <section className="w-full flex flex-col items-center justify-center px-12 py-20 border-b border-white/[0.08]">
        <h2 className={H}>
          IF MY GOODS AND SERVICE PLEASE YOU, TELL YOUR FRIENDS. IF NOT, TELL ME.
        </h2>
      </section>

      {/* SECTION 6 — cap + thank you */}
      <section className="w-full flex flex-row flex-wrap items-center justify-center gap-12 px-12 py-20">
        <SpinningCap src={aboutImg3} size={200} speed={0.28} delay={200} />
        <h2 className={H}>
          THANK YOU FOR YOUR SUPPORT!
        </h2>
      </section>

    </div>
  )
}