const experiences = [
  {
    title: "Principal Sales Engineer",
    company: "Cohesity",
    period: "Jan 2026 - Present",
    description:
      "Driving data security solutions for enterprise and public sector clients. Leveraging AI-powered threat detection and zero-trust data protection capabilities.",
    tags: ["AI Data Security", "Zero Trust", "Hybrid Cloud"],
  },
  {
    title: "Senior Sales Engineer - Public Sector",
    company: "Zscaler",
    period: "May 2024 - Jan 2026",
    description:
      "Led digital transformation of government vertical through ZTNA, Deception, Identity Threat Detection and Response, Data Protection (DLP) and SD-WAN.",
    tags: ["ZTNA", "DLP", "Government"],
  },
  {
    title: "Director Sales Engineering",
    company: "Whiteswan Identity Security",
    period: "Aug 2023 - May 2024",
    description:
      "Led pre-sales strategy and technical presentations for identity security solutions.",
    tags: ["Identity Security", "Pre-Sales Leadership"],
  },
  {
    title: "Senior Solutions Architect",
    company: "Attivo Networks / SentinelOne",
    period: "Jul 2019 - Aug 2023",
    description:
      "Progressed from Senior Technical Sales Engineer to Manager Pre-Sales to Senior Solutions Architect. Secured SMB and enterprise customers with EDR/XDR. Contributed to successful exit to SentinelOne.",
    tags: ["EDR/XDR", "Deception Security", "Identity Security"],
  },
  {
    title: "Senior Security Consultant",
    company: "ColorTokens",
    period: "Apr 2018 - Jul 2019",
    description:
      "Pre-sales, customer deployment, and large-scale implementation of micro-segmentation solutions across enterprise clients.",
    tags: ["Micro Segmentation", "Zero Trust"],
  },
  {
    title: "Earlier Roles",
    company: "Cisco, Juniper Networks, Wipro & more",
    period: "2005 - 2018",
    description:
      "Built foundational cybersecurity expertise across network security, firewall management, and enterprise infrastructure at industry-leading organizations.",
    tags: ["Network Security", "Firewall", "Infrastructure"],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Professional <span className="gradient-text">Journey</span>
        </h2>
        <div className="section-divider mb-12" />

        <div className="timeline-line space-y-8 pl-12">
          {experiences.map((exp, i) => (
            <div key={i} className="relative">
              {/* Timeline dot */}
              <div className="absolute -left-12 top-2 w-10 h-10 rounded-full bg-[#111] border-2 border-[#00d4aa] flex items-center justify-center">
                <div className="w-3 h-3 rounded-full bg-[#00d4aa]" />
              </div>

              <div className="bg-[#111] border border-[#1a1a1a] rounded-2xl p-6 hover:border-[#00d4aa]/30 transition-all duration-300 glow">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-2">
                  <h3 className="text-lg font-semibold text-white">
                    {exp.title}
                  </h3>
                  <span className="text-xs font-mono text-[#00d4aa]">
                    {exp.period}
                  </span>
                </div>
                <p className="text-sm text-[#00d4aa]/70 mb-3">{exp.company}</p>
                <p className="text-sm text-[#888] leading-relaxed mb-4">
                  {exp.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {exp.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-3 py-1 rounded-full bg-[#00d4aa]/10 text-[#00d4aa] border border-[#00d4aa]/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
