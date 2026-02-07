const skillCategories = [
  {
    title: "Security Domains",
    icon: "🛡️",
    skills: [
      "Zero Trust Architecture (ZTNA)",
      "Extended Detection & Response (XDR)",
      "Identity Threat Detection (ITDR)",
      "Data Loss Prevention (DLP)",
      "Deception-based Security",
      "Micro Segmentation",
    ],
  },
  {
    title: "AI & Data",
    icon: "🤖",
    skills: [
      "AI-Driven Data Security",
      "Retrieval Augmented Generation (RAG)",
      "Data Governance",
      "Backup & Recovery",
      "Hybrid & Multi-Cloud",
      "Ransomware Protection",
    ],
  },
  {
    title: "Pre-Sales & Strategy",
    icon: "📊",
    skills: [
      "Technical Demos & PoC",
      "RFP Management",
      "Enterprise Architecture",
      "Public Sector Engagement",
      "BFSI Vertical Expertise",
      "Partner Ecosystem",
    ],
  },
  {
    title: "Certifications",
    icon: "🏆",
    skills: [
      "Certified Scrum Master (CSM)",
      "Zscaler Digital Transformation Admin",
      "Cisco Security Ninja Green Belt",
      "Hacking RestAPIs (Udemy)",
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Skills & <span className="gradient-text">Expertise</span>
        </h2>
        <div className="section-divider mb-12" />

        <div className="grid md:grid-cols-2 gap-6">
          {skillCategories.map((cat) => (
            <div
              key={cat.title}
              className="bg-[#111] border border-[#1a1a1a] rounded-2xl p-6 hover:border-[#3b82f6]/30 transition-all duration-300 glow"
            >
              <div className="flex items-center gap-3 mb-5">
                <span className="text-2xl">{cat.icon}</span>
                <h3 className="text-lg font-semibold">{cat.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <span
                    key={skill}
                    className="text-sm px-3 py-1.5 rounded-lg bg-[#1a1a1a] text-[#ccc] border border-[#222] hover:border-[#3b82f6]/40 hover:text-white transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
