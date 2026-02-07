const insights = [
  {
    title: "Your Backup Data Has Been Sleeping on a Goldmine",
    excerpt:
      "Organizations back up petabytes of data, yet only about 32% is actively used. AI-powered RAG is transforming passive backup archives into active knowledge engines.",
    tags: ["AI", "Data Security", "RAG"],
    date: "Feb 2026",
  },
  {
    title: "Why Zero Trust Is No Longer Optional for Government",
    excerpt:
      "Digital transformation in the public sector demands a security-first approach. ZTNA, identity-aware access, and continuous verification are the new baseline.",
    tags: ["Zero Trust", "Government", "ZTNA"],
    date: "Coming Soon",
  },
  {
    title: "From Startup to Enterprise: Lessons in Cybersecurity Sales Engineering",
    excerpt:
      "What I learned navigating the journey from high-growth startups like ColorTokens and Attivo to enterprise leaders like Zscaler and Cohesity.",
    tags: ["Career", "Sales Engineering", "Startups"],
    date: "Coming Soon",
  },
];

export default function Insights() {
  return (
    <section id="insights" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Insights & <span className="gradient-text">Thought Leadership</span>
        </h2>
        <div className="section-divider mb-12" />

        <div className="grid md:grid-cols-3 gap-6">
          {insights.map((post, i) => (
            <article
              key={i}
              className="bg-[#111] border border-[#1a1a1a] rounded-2xl p-6 flex flex-col hover:border-[#00d4aa]/30 transition-all duration-300 glow"
            >
              <div className="text-xs font-mono text-[#00d4aa] mb-3">
                {post.date}
              </div>
              <h3 className="text-lg font-semibold mb-3 leading-snug">
                {post.title}
              </h3>
              <p className="text-sm text-[#888] leading-relaxed mb-4 flex-1">
                {post.excerpt}
              </p>
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-2 py-1 rounded-full bg-[#1a1a1a] text-[#666]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
