export default function Contact() {
  return (
    <div className="w-full min-h-screen bg-[#0f2a6e] flex flex-col items-center justify-center px-8 py-16">

      <p className="font-['Anton'] text-white text-sm tracking-[0.22em] uppercase mb-12">
        MADE BY STEVE
      </p>

      <div className="flex flex-col items-center">
        {[
          { label: 'INSTA',    href: 'https://instagram.com' },
          { label: 'EBAY',     href: 'https://ebay.com' },
          { label: 'FACEBOOK', href: 'https://facebook.com' },
          { label: 'EMAIL',    href: 'mailto:steve@dailydairy.com' },
        ].map(({ label, href }) => (
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

    </div>
  )
}