const travelPosts = [
  {
    title: "Sun, Sand & Serenity",
    location: "Goa, India",
    image: "/travel/goa.jpg",
    date: "Dec 2025",
    description:
      "Beach hopping from Palolem to Anjuna, fresh seafood, and sunsets that paint the sky in shades of gold. Goa never disappoints.",
    tags: ["Beach", "Food", "Sunsets"],
  },
  {
    title: "Beyond Bengaluru",
    location: "Karnataka, India",
    image: "/travel/karnataka.jpg",
    date: "Oct 2025",
    description:
      "From the ruins of Hampi to the misty hills of Coorg — Karnataka is a treasure trove of history, coffee plantations, and stunning waterfalls.",
    tags: ["Heritage", "Nature", "Coffee"],
  },
  {
    title: "Ghats at Dawn",
    location: "Varanasi, India",
    image: "/travel/varanasi.jpg",
    date: "Jan 2024",
    description:
      "Witnessing the Ganga Aarti at Dashashwamedh Ghat — an experience that stays with you. The spiritual heart of India.",
    tags: ["Spiritual", "Culture", "Heritage"],
  },
  {
    title: "The Last Frontier",
    location: "Ladakh, India",
    image: "/travel/ladakh.jpg",
    date: "Aug 2023",
    description:
      "Riding through Khardung La at 18,380 ft, camping by Pangong Lake, and finding peace in the vast emptiness of the Himalayas.",
    tags: ["Adventure", "Biking", "Mountains"],
  },
];

export default function TravelBlog() {
  return (
    <section id="travel" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Travel <span className="gradient-text">Diaries</span>
        </h2>
        <div className="section-divider mb-4" />
        <p className="text-[#888] mb-12 max-w-2xl">
          When I&apos;m not securing enterprise data, you&apos;ll find me
          exploring India&apos;s incredible landscapes and cultures.
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          {travelPosts.map((post, i) => (
            <article
              key={i}
              className="bg-[#111] border border-[#1a1a1a] rounded-2xl overflow-hidden flex flex-col hover:border-[#3b82f6]/30 transition-all duration-300 glow"
            >
              {/* Cover image */}
              <div className="relative h-48 overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
                {/* Location badge */}
                <div className="absolute bottom-3 left-3 flex items-center gap-1.5 bg-black/60 backdrop-blur-sm rounded-full px-3 py-1">
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 24 24"
                    fill="#3b82f6"
                  >
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                  </svg>
                  <span className="text-xs text-white/90">{post.location}</span>
                </div>
              </div>

              {/* Content */}
              <div className="p-5 flex flex-col flex-1">
                <div className="text-xs font-mono text-[#3b82f6] mb-2">
                  {post.date}
                </div>
                <h3 className="text-lg font-semibold mb-2 leading-snug">
                  {post.title}
                </h3>
                <p className="text-sm text-[#888] leading-relaxed mb-4 flex-1">
                  {post.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-2 py-1 rounded-full bg-[#3b82f6]/10 text-[#3b82f6] border border-[#3b82f6]/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
