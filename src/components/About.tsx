export default function About() {
  const highlights = [
    { number: "20+", label: "Years in Cybersecurity" },
    { number: "500+", label: "Enterprise Engagements" },
    { number: "2.2K+", label: "LinkedIn Followers" },
    { number: "6+", label: "Industry Leaders" },
  ];

  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          About <span className="gradient-text">Me</span>
        </h2>
        <div className="section-divider mb-12" />

        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <p className="text-[#ccc] leading-relaxed">
              With over 20 years of experience in cybersecurity, I bring a deep
              understanding of enterprise security from both technical and
              strategic perspectives.
            </p>
            <p className="text-[#ccc] leading-relaxed">
              Having worked at industry leaders like Cisco, Juniper, SentinelOne,
              and Zscaler, I&apos;ve led pre-sales engagements, built technical
              demos, and partnered with customers across public sector, BFSI, and
              enterprise verticals to architect security solutions covering ZTNA,
              XDR, ITDR, and DLP.
            </p>
            <p className="text-[#ccc] leading-relaxed">
              I&apos;ve also worked with high-growth cybersecurity startups
              &mdash; ColorTokens (Micro Segmentation) and Attivo Networks
              (Deception-based Security &amp; Identity Security) &mdash; gaining
              hands-on experience in shaping innovative security narratives and
              driving adoption of next-gen technologies.
            </p>
            <p className="text-[#ccc] leading-relaxed">
              Currently at Cohesity, I focus on helping enterprises leverage
              AI-driven data security to protect, recover, and govern their most
              critical assets across hybrid and multi-cloud environments.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-6">
            {highlights.map((item) => (
              <div
                key={item.label}
                className="bg-[#111] border border-[#1a1a1a] rounded-2xl p-6 text-center glow transition-all duration-300"
              >
                <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">
                  {item.number}
                </div>
                <div className="text-sm text-[#888]">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
