const socials = [
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/lalanprasad/",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
];

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Let&apos;s <span className="gradient-text">Connect</span>
        </h2>
        <div className="section-divider mb-8" />

        <p className="text-[#888] max-w-xl mx-auto mb-10 leading-relaxed">
          Open to industry conversations, thought leadership collaborations, and
          cybersecurity networking. Feel free to reach out.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <a
            href="https://www.linkedin.com/in/lalanprasad/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-full bg-[#00d4aa] text-black font-semibold hover:bg-[#00b894] transition-colors"
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
            Connect on LinkedIn
          </a>
          <a
            href="mailto:lalanprasad@example.com"
            className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-full border border-[#333] text-white hover:border-[#00d4aa] hover:text-[#00d4aa] transition-colors"
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
              <polyline points="22,6 12,13 2,6" />
            </svg>
            Send Email
          </a>
        </div>

        {/* Social links */}
        <div className="flex justify-center gap-4">
          {socials.map((social) => (
            <a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-[#111] border border-[#1a1a1a] flex items-center justify-center text-[#888] hover:text-[#00d4aa] hover:border-[#00d4aa]/30 transition-colors"
              aria-label={social.name}
            >
              {social.icon}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
