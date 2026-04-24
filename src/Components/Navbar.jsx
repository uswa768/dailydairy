import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <nav className="w-full sticky top-0 z-50 flex items-center justify-between px-8 py-5 bg-[#0f2a6e]">

      <Link to="/" className="font-['Anton'] text-white text-[1.5rem] tracking-[0.25em] uppercase hover:opacity-60 transition-opacity">
        ↑ HOME
      </Link>

      <div className="flex gap-12">
        <Link to="/about"   className="font-['Anton'] text-white text-[1.5rem] tracking-[0.25em] uppercase hover:opacity-60 transition-opacity">ABOUT</Link>
        <Link to="/contact" className="font-['Anton'] text-white text-[1.5rem] tracking-[0.25em] uppercase hover:opacity-60 transition-opacity">CONTACT</Link>
      </div>

    </nav>
  )
}