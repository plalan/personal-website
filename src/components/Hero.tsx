"use client";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden">
      {/* Background gradient orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#00d4aa]/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#7c3aed]/5 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <div className="animate-fade-in-up opacity-0">
          <p className="text-sm font-mono tracking-widest text-[#00d4aa] uppercase mb-6">
            Cybersecurity Leader &bull; Sales Engineer &bull; AI Enthusiast
          </p>
        </div>

        <h1 className="animate-fade-in-up opacity-0 animate-delay-100 text-5xl md:text-7xl font-bold mb-6 leading-tight">
          Hi, I&apos;m{" "}
          <span className="gradient-text">Lalan Prasad</span>
        </h1>

        <p className="animate-fade-in-up opacity-0 animate-delay-200 text-lg md:text-xl text-[#888] max-w-2xl mx-auto mb-10 leading-relaxed">
          Principal Sales Engineer at Cohesity with 20+ years of experience
          helping enterprises secure their data with AI-driven solutions across
          hybrid and multi-cloud environments.
        </p>

        <div className="animate-fade-in-up opacity-0 animate-delay-300 flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#contact"
            className="inline-flex items-center justify-center px-8 py-3 rounded-full bg-[#00d4aa] text-black font-semibold hover:bg-[#00b894] transition-colors"
          >
            Get in Touch
          </a>
          <a
            href="#about"
            className="inline-flex items-center justify-center px-8 py-3 rounded-full border border-[#333] text-white hover:border-[#00d4aa] hover:text-[#00d4aa] transition-colors"
          >
            Learn More
          </a>
        </div>

        {/* Scroll indicator */}
        <div className="animate-fade-in-up opacity-0 animate-delay-500 mt-16">
          <a href="#about" className="inline-block animate-bounce">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#888"
              strokeWidth="2"
            >
              <path d="M12 5v14M5 12l7 7 7-7" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
