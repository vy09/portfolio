export default function ContactMe() {
  return (
    <div className="w-full max-w-7xl mx-auto mt-12 sm:mt-16 md:mt-20 lg:mt-24 mb-6 sm:mb-8 px-4 sm:px-6 lg:px-8">
      <div className="relative rounded-2xl sm:rounded-3xl bg-gradient-to-br from-[#1a1a1a] via-[#151515] to-[#0a0a0a] border border-zinc-800/50 p-6 sm:p-8 md:p-12 lg:p-16 overflow-hidden shadow-2xl">
        {/* Background decoration */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-zinc-700/10 via-transparent to-transparent"></div>

        {/* Subtle grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px]"></div>

        <div className="relative z-10 text-center max-w-2xl mx-auto">
          {/* Status badge */}
          <div className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-green-500/10 border border-green-500/30 mb-4 sm:mb-6 md:mb-8 backdrop-blur-sm">
            <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-green-500 animate-pulse shadow-lg shadow-green-500/50"></div>
            <span className="text-xs sm:text-sm text-green-400 font-medium tracking-wide">
              Available for work
            </span>
          </div>

          {/* Heading */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 md:mb-8 leading-tight tracking-tight">
            Let's create your
            <br />
            next big idea.
          </h2>

          {/* CTA Button */}
          <a
            href="/contact"
            className="inline-flex items-center gap-2 px-5 sm:px-6 md:px-8 lg:px-10 py-2.5 sm:py-3 md:py-3.5 lg:py-4 border-2 border-white text-white hover:bg-white hover:text-black rounded-full transition-all duration-300 font-medium text-xs sm:text-sm md:text-base active:scale-95 shadow-lg hover:shadow-xl"
          >
            Contact Me
          </a>
        </div>
      </div>
    </div>
  );
}
