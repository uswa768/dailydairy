import CapCard from '../Components/CapCard'

import cap1  from '../assets/Cap01.png'
import cap2  from '../assets/Cap02.png'
import cap3  from '../assets/Cap03.png'
import cap4  from '../assets/Cap04.png'
import cap5  from '../assets/Cap05.png'
import cap6  from '../assets/Cap06.png'
import cap7  from '../assets/Cap07.png'
import cap8  from '../assets/Cap08.png'
import cap9  from '../assets/Cap09.png'
import cap10 from '../assets/Cap10.png'

const caps = [
  { id: 1,  name: 'J.F. MURRAY RAW MILK, CIRCA 1940S',               condition: 'GOOD, SOME FADING AND MINOR EDGE WEAR',              imageSrc: cap1  },
  { id: 2,  name: "BUSH'S PASTEURIZED MILK, CIRCA 1950S",             condition: 'VERY GOOD, SLIGHT DISCOLORATION, CLEAN SURFACE',     imageSrc: cap2  },
  { id: 3,  name: 'BELFRY FARM RAW JERSEY MILK, CIRCA 1930S',         condition: 'FAIR, NOTICEABLE WEAR, SOME STAINING',               imageSrc: cap3  },
  { id: 4,  name: 'HOMOGENIZED MILK — PASTEURIZED, CIRCA 1960S',      condition: 'EXCELLENT, VIBRANT COLORS, MINIMAL WEAR',            imageSrc: cap4  },
  { id: 5,  name: "BUSH'S PASTEURIZED MILK, CIRCA 1950",              condition: 'GOOD, SOME FADING AND MINOR EDGE WEAR',              imageSrc: cap5  },
  { id: 6,  name: 'DRINK MORE MILK — FOR HEALTH & PROSPERITY, 1950S', condition: 'GOOD, MINOR SCUFFS, COLORS STILL BRIGHT',           imageSrc: cap6  },
  { id: 7,  name: 'CLOVERLEAF DAIRY VITAMIN D MILK, CIRCA 1940S',     condition: 'VERY GOOD, CLEAN SURFACE, SLIGHT EDGE WEAR',         imageSrc: cap7  },
  { id: 8,  name: 'CARSON DAIRY RAW MILK, CIRCA 1950S',               condition: 'FAIR, SIGNIFICANT SURFACE WEAR, SOME DISCOLORATION', imageSrc: cap8  },
  { id: 9,  name: 'R.L. PERKINS HEAVY CREAM, CIRCA 1940S',            condition: 'GOOD, SOME FADING AND MINOR EDGE WEAR',              imageSrc: cap9  },
  { id: 10, name: 'MAPLE VIEW WHIPPING CREAM, CIRCA 1945S',           condition: 'VERY GOOD, CLEAN SURFACE, SLIGHT EDGE WEAR',         imageSrc: cap10 },
]

const socialLinks = [
  { label: 'INSTA',    href: 'https://instagram.com' },
  { label: 'EBAY',     href: 'https://ebay.com' },
  { label: 'FACEBOOK', href: 'https://facebook.com' },
  { label: 'EMAIL',    href: 'mailto:steve@dailydairy.com' },
]

export default function Home() {
  return (
    <div className="w-full bg-[#0f2a6e]">

      {/* ── 1. HERO ── */}
      <section className="w-full px-8 pt-16 pb-10">
        <h1 className="font-['Anton'] text-white uppercase leading-[0.88] text-[clamp(4rem,12vw,11rem)]">
          DAILY DAIRY
        </h1>
        <div className="w-full border-t border-white/25 my-8" />
        <p className="font-['Anton'] text-white uppercase tracking-[0.28em] text-[clamp(0.8rem,1.5vw,1.2rem)]">
          DIVE INTO MY COLLECTION — A MILK CAP A DAY, EVERY DAY.
        </p>
      </section>

      {/* ── 2. CARDS GRID ── */}
      <div className="w-full grid grid-cols-2 border-t border-l border-white/20">
        {caps.map(cap => (
          <CapCard key={cap.id} {...cap} />
        ))}
      </div>

      {/* ── 3. CONTACT SECTION ── */}
      <section className="w-full flex flex-col items-center justify-center px-8 pt-24 pb-20 border-t border-white/20">
        <p className="font-['Anton'] text-white text-sm tracking-[0.22em] uppercase mb-12">
          MADE BY STEVE
        </p>
        <div className="flex flex-col items-center">
          {socialLinks.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              target={label !== 'EMAIL' ? '_blank' : undefined}
              rel="noopener noreferrer"
              className="font-['Anton'] text-white uppercase leading-[0.95] tracking-[-0.02em] hover:opacity-50 transition-opacity block"
              style={{ fontSize: 'clamp(3.5rem, 11vw, 9.5rem)' }}
            >
              {label}
            </a>
          ))}
        </div>
      </section>

    </div>
  )
}