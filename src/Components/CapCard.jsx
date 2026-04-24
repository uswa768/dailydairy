import { useState } from 'react'

export default function CapCard({ id, name, condition, imageSrc }) {
  const [hovered, setHovered] = useState(false)

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="flex flex-col cursor-pointer border-r border-b border-white/20 bg-[#0f2a6e]"
    >

      {/* IMAGE AREA — fixed height, centered, with padding so image doesn't touch border */}
      <div className="w-full flex items-center justify-center px-16 py-14 min-h-[460px]">
        {imageSrc ? (
          <img
            src={imageSrc}
            alt={name}
            className="w-full max-w-[380px] h-auto object-contain block"
            style={{
              transition: 'transform 0.35s ease',
              transform: hovered ? 'rotate(5deg) scale(1.05)' : 'rotate(0deg) scale(1)',
            }}
          />
        ) : (
          <div className="w-[340px] h-[340px] rounded-full border-2 border-dashed border-white/20 flex items-center justify-center bg-white/[0.03]">
            <span className="font-['Anton'] text-white/20 text-xs tracking-[0.15em] uppercase text-center px-6">
              CAP IMAGE<br />COMING SOON
            </span>
          </div>
        )}
      </div>

      {/* TEXT */}
      <div className="w-full px-10 pb-10 pt-5 text-center border-t border-white/10">
        <p className="font-['Anton'] text-white/50 text-xs tracking-[0.2em] uppercase mb-3">
          ITEM: {String(id).padStart(2, '0')}
        </p>
        <p className="font-['Anton'] text-white text-sm tracking-[0.14em] uppercase mb-2">
          {name}
        </p>
        <p className="font-['Anton'] text-white/40 text-xs tracking-[0.12em] uppercase">
          {condition}
        </p>
      </div>

    </div>
  )
}