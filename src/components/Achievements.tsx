const achievements = [
  {
    icon: "🎖️",
    title: "Cisco Security Ninja Green Belt",
    org: "Cisco",
    description: "Recognized for advanced security expertise and contributions.",
  },
  {
    icon: "🏅",
    title: "Titan Award",
    org: "Wipro Testing BU",
    description: "Awarded for exceptional teamwork in the regression testing team.",
  },
  {
    icon: "🤝",
    title: "Successful Startup Exit",
    org: "Attivo Networks → SentinelOne",
    description:
      "Contributed to the successful acquisition of Attivo Networks by SentinelOne.",
  },
  {
    icon: "🎓",
    title: "Mentor Together",
    org: "Volunteer",
    description:
      "Mentored students as part of the Mentor Together non-profit organization.",
  },
];

const companies = [
  "Cohesity",
  "Zscaler",
  "SentinelOne",
  "Attivo Networks",
  "ColorTokens",
  "Cisco",
  "Juniper Networks",
  "Wipro",
];

export default function Achievements() {
  return (
    <section id="achievements" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Awards & <span className="gradient-text">Achievements</span>
        </h2>
        <div className="section-divider mb-12" />

        <div className="grid md:grid-cols-2 gap-6 mb-16">
          {achievements.map((item, i) => (
            <div
              key={i}
              className="bg-[#111] border border-[#1a1a1a] rounded-2xl p-6 hover:border-[#3b82f6]/30 transition-all duration-300 glow"
            >
              <div className="flex items-start gap-4">
                <span className="text-3xl">{item.icon}</span>
                <div>
                  <h3 className="font-semibold text-white mb-1">
                    {item.title}
                  </h3>
                  <p className="text-xs text-[#3b82f6]/70 mb-2">{item.org}</p>
                  <p className="text-sm text-[#888]">{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Companies strip */}
        <div className="text-center">
          <p className="text-sm text-[#666] uppercase tracking-widest mb-6">
            Companies I&apos;ve worked with
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {companies.map((company) => (
              <span
                key={company}
                className="px-5 py-2 rounded-full border border-[#1a1a1a] text-sm text-[#888] hover:border-[#3b82f6]/30 hover:text-white transition-colors"
              >
                {company}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
