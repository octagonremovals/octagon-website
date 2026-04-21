/*
 * ABOUT PAGES - Our Story, Core Values, Mission, Our Team
 * Rendered dynamically based on /about/:section URL param.
 */
import { useParams, Link } from "wouter";
import { TEAM, COMPANY } from "@/data/siteData";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Phone, ChevronRight } from "lucide-react";

const HERO_IMG =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663390692301/ZpcSodCKLQfFZqhkQybBpR/packing-premium-MXhcty4EFXNRpPTY6MCqyW.webp";

const LONDON_EYE_VAN =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663390692301/ZpcSodCKLQfFZqhkQybBpR/our-story-london-eye-van_ca06507b.png";

function OurStory() {
  const GOLD = "#B8960C";
  const DARK = "#0F1923";

  return (
    <div className="space-y-0">

      {/* Opening reflection */}
      <div className="mb-12">
        <p className="text-base leading-relaxed text-gray-700">
          As we reflect on our humble beginnings and witness the distance we've covered, a profound sense of pride and gratitude envelops us. It has been an amazing, rich in rock solid experience, shaping character and professional skill-set journey of service. We traversed a path that demanded years of dedication, a path where we meticulously constructed our reputation and established a prominent market presence. Today, we march forward on this very path, gazing into the future with optimism.
        </p>
      </div>

      {/* Founder story */}
      <div className="p-10 mb-12" style={{ background: DARK }}>
        <span className="eyebrow mb-6">The Beginning</span>
        <div className="space-y-5 text-sm leading-relaxed" style={{ color: "rgba(245,243,239,0.82)" }}>
          <p>
            The genesis of our company lies in the tenacity of a "one man army" father, who, upon reaching the milestone of his 50th birthday, recognised the opportunity to utilise his many years of extensive logistics and transportation experience by establishing a moving company. With unwavering determination, he secured a loan and purchased the first Luton Box Van which paved the way for delivering impeccable "man and van" services within the confines of London and its surroundings. After the first year of trailblazing, single-handedly forging a path of success, his son joined him, becoming an integral part of this familial alliance where youth and experience converged in harmony.
          </p>
          <p>
            The fusion of the son's fresh, futuristic vision with the industry experience and standards of the father gave rise to a flourishing partnership that spanned three transformative years. In the year 2016, their joint efforts culminated in the establishment of a modern enterprise fully managed by the son, adorned with the pillars of solid industry foundations and unshakeable work ethics.
          </p>
          <div className="border-l-4 pl-5 py-1 mt-6" style={{ borderColor: GOLD }}>
            <p className="text-xl font-bold text-white" style={{ fontFamily: "Cormorant Garamond, serif" }}>
              OCTAGON REMOVALS Ltd — "Modern company with timeless values."
            </p>
          </div>
        </div>
      </div>

      {/* Why Octagon - M25 */}
      <div className="grid lg:grid-cols-2 gap-12 items-center mb-12">
        <div>
          <span className="eyebrow mb-4">Why Octagon?</span>
          <h3 className="text-3xl font-semibold mb-5" style={{ fontFamily: "Cormorant Garamond, serif", color: DARK }}>
            The M25 Inspired Our Name
          </h3>
          <div className="space-y-4 text-sm leading-relaxed text-gray-600">
            <p>
              The company's presence and early operations revolved around the vibrant heart of London and its surrounding areas, artfully situated within the embrace of the M25 motorway — a strategic positioning that served as a catalyst for creativity.
            </p>
            <p>
              From this geographical vantage point, inspiration bloomed, giving birth to our illustrious brand, OCTAGON REMOVALS, drawing from the octagonal contours etched upon the map by the magnificent M25.
            </p>
          </div>
        </div>
        <div className="relative overflow-hidden" style={{ minHeight: "320px" }}>
          <img
            src="https://d2xsxph8kpxj0f.cloudfront.net/310519663390692301/ZpcSodCKLQfFZqhkQybBpR/m25-octagon-map_f7a2c788.jpg"
            alt="The M25 motorway forms a natural octagon around London — the origin of the Octagon Removals name"
            className="w-full h-full object-cover"
            style={{ minHeight: "320px" }}
          />
          <div className="absolute bottom-0 left-0 right-0 px-6 py-4" style={{ background: "linear-gradient(to top, rgba(15,25,35,0.85) 0%, transparent 100%)" }}>
            <p className="text-xs text-center" style={{ color: "rgba(245,243,239,0.8)", fontFamily: "DM Sans, sans-serif", letterSpacing: "0.08em" }}>
              THE M25 MOTORWAY FORMS A NATURAL OCTAGON AROUND LONDON
            </p>
          </div>
        </div>
      </div>

      {/* Growth years */}
      <div className="mb-12">
        <span className="eyebrow mb-6">The Growth Years</span>
        <div className="space-y-5 text-sm leading-relaxed text-gray-700">
          <p>
            The initial three years of collaboration served as a crucible for the company's growth, a captivating blend of challenges and opportunities that shaped our development. It was a period of profound significance, marked by the accumulation of invaluable experience, team fortification, diverse industry expansion through a myriad of assignments, and a relentless pursuit of refining our professional practices, all of which fill us with an authentic sense of pride.
          </p>
          <p>
            But the truth is, those early years were also defined by mistakes. Significant ones. There were jobs where things went wrong in ways that cost us dearly, financially, reputationally, and emotionally. We misjudged scope, underestimated complexity, and on more than one occasion, let a client down when they trusted us most. There were moments we questioned whether we had what it takes to build something lasting.
          </p>
          <p>
            We don't share this to seek sympathy. We share it because we believe the companies most worth trusting are the ones that have been tested, and chose to stay accountable rather than walk away. Every difficult move, every hard conversation, every sleepless night spent figuring out how to make things right, those moments didn't break us. They built us.
          </p>
          <p>
            And one more thing we've learned to admit: we don't always have every answer at the first enquiry. Sometimes the honest response is "let us look into this properly and come back to you." That commitment to getting it right, rather than just getting it said, is something we'll never compromise on.
          </p>
          <p>
            In the second year of operations, the son successfully persuaded his father to reinvest the fruits of their labour into the company, propelling it forward with an augmented fleet and an expanded team, all aimed at achieving greater horizons. In hindsight, the decision to develop the company further, creating more employment opportunities and extending our services beyond London to a nationwide scale, proved remarkably fruitful, elevating our partnership to unprecedented heights.
          </p>
          <p>
            Alongside the company's expansion, there was a parallel growth in the quality and effectiveness of the company's services. Fuelled by passion, an acute understanding of our clients' needs and an unyielding dedication to continuous improvement, father and son embarked on a quest to outshine the esteemed cohort of industry leaders, relentlessly raising the bar of excellence.
          </p>
          <p>
            The third year of our business journey stands as a true testament to our progress, for it marked a momentous stage where our endeavours garnered increasing recognition and appreciation from our team, subcontractors, and most importantly, our esteemed clients — both loyal and newfound. For any growing business, the ultimate distinction in terms of market presence and service effectiveness lies in the form of recommendations, word of mouth referrals and glowing reviews from satisfied clients. Such motivational fuel only reinforced our genuine passion for relocation problem solving and our exceptional ability to do so effectively.
          </p>
          <p>
            Interestingly, we have embraced the notion that our profession, when executed at the pinnacle of performance, embodies a distinctive artistry, and by continuously honing our skills and expertise, we showcase our work as an art form, thereby positioning us as true artists of the moving industry — the unrivalled <strong style={{ color: GOLD }}>"Artists of Removals"</strong>.
          </p>
        </div>
      </div>

      {/* Milestone Timeline */}
      <div className="mb-12">
        <span className="eyebrow mb-8">Our Journey</span>
        <div className="relative">
          {/* Horizontal line */}
          <div className="hidden lg:block absolute top-8 left-0 right-0 h-0.5" style={{ background: `linear-gradient(90deg, transparent, ${GOLD}, ${GOLD}, ${GOLD}, transparent)`, top: '2rem' }} />
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-4">
            {[
              { year: "2017", label: "First Van", desc: "Father secures a loan, buys the first Luton Box Van and begins man & van services across London." },
              { year: "2016", label: "Ltd Formed", desc: "Son joins the business. Octagon Removals Ltd is formally established — 'Modern company with timeless values.'" },
              { year: "2017", label: "Fleet Grows", desc: "Profits reinvested. Fleet expanded, team fortified, services extended beyond London to a nationwide scale." },
              { year: "2019", label: "Artists of Removals", desc: "The brand identity crystallises. Octagon earns its reputation as the unrivalled Artists of Removals." },
              { year: "Today", label: "15,000+ Moves", desc: "A decade of trading, 15,000+ completed moves, 4.9★ Google rating, and a full specialist team." },
            ].map((milestone, i) => (
              <div key={milestone.year} className="flex flex-col items-center text-center lg:relative">
                {/* Node circle */}
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center mb-4 relative z-10 shrink-0"
                  style={{
                    background: i === 4 ? GOLD : DARK,
                    border: `3px solid ${GOLD}`,
                    boxShadow: i === 4 ? `0 0 20px rgba(184,150,12,0.4)` : 'none',
                  }}
                >
                  <span
                    className="text-lg font-bold"
                    style={{ fontFamily: "Cormorant Garamond, serif", color: i === 4 ? DARK : GOLD }}
                  >
                    {milestone.year}
                  </span>
                </div>
                <h4 className="text-sm font-bold tracking-wide uppercase mb-2" style={{ color: DARK }}>
                  {milestone.label}
                </h4>
                <p className="text-xs leading-relaxed" style={{ color: "#5a6a7a", maxWidth: '160px' }}>
                  {milestone.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Artists of Removals callout */}
      <div className="p-10 text-center mb-12" style={{ background: DARK, border: `2px solid ${GOLD}` }}>
        <div className="mb-6">
          <p className="text-5xl lg:text-6xl font-semibold mb-3" style={{
            fontFamily: "Cormorant Garamond, serif",
            fontStyle: "italic",
            color: GOLD,
            letterSpacing: "0.04em",
            lineHeight: 1.15,
          }}>
            Artists Of Removals
          </p>
          <div className="flex items-center justify-center gap-4">
            <div style={{ width: "48px", height: "1px", background: GOLD, opacity: 0.6 }} />
            <div style={{ width: "6px", height: "6px", background: GOLD, transform: "rotate(45deg)", opacity: 0.8 }} />
            <div style={{ width: "48px", height: "1px", background: GOLD, opacity: 0.6 }} />
          </div>
        </div>
        <p className="text-sm max-w-2xl mx-auto" style={{ color: "rgba(245,243,239,0.72)" }}>
          This title holds profound significance — not merely as a symbol of prestige, but as a constant reminder to the entire firm of the unmatched standard of excellence we strive for. It serves as a solemn commitment to surpassing the expectations of our clients, offering an unparalleled collaborative experience that borders on true artistry.
        </p>
      </div>

      {/* Today */}
      <div className="mb-12">
        <span className="eyebrow mb-6">Where We Are Today</span>
        <div className="space-y-5 text-sm leading-relaxed text-gray-700">
          <p>
            From the moment you entrust us with your relocation, no aspect is left to chance. We approach each endeavour with meticulous care and eagerness to orchestrate the perfect move tailored to your needs.
          </p>
          <p>
            Today, as a tightly-knit family business rooted in the vibrant tapestry of London, we boast an impressive track record of well over a decade of trading in the industry. Week after week, our experienced team in a number of strategic departments, fortified by well-appointed offices, ample storage space, and a fleet of impeccably equipped vehicles, serves many dozens of clients across the nation. OCTAGON REMOVALS specialising in domestic and commercial relocations, storage solutions, and the delicate handling of fragile goods, we take pride in tackling the challenges of these realms, leaving a trail of well over a thousand satisfied clients every year.
          </p>
        </div>
        {/* Team photo */}
        <div className="my-8 rounded-lg overflow-hidden" style={{ boxShadow: "0 4px 24px rgba(15,25,35,0.18)" }}>
          <img
            src="https://d2xsxph8kpxj0f.cloudfront.net/310519663390692301/ZpcSodCKLQfFZqhkQybBpR/team-octagon-2_fd6b7587.webp"
            alt="The Octagon Removals team with the fleet — Artists Of Removals"
            className="w-full object-cover"
            style={{ maxHeight: "420px", objectPosition: "center 30%" }}
          />
        </div>
        <div className="space-y-5 text-sm leading-relaxed text-gray-700">
          <p>
            It would be remiss not to acknowledge that our humble beginnings and subsequent triumphs owe much to the captivating allure of London. We extend our heartfelt gratitude to this diverse city, as well as to the unwavering dedication of our team and the ever-growing community that entrusts us with their needs. It is you whom we serve, and we express our sincerest thanks, assuring you that you can always rely on us for unrivalled support.
          </p>
        </div>
      </div>

      {/* London Eye van photo */}
      <div className="relative mb-12" style={{ minHeight: "320px" }}>
        <img
          src={LONDON_EYE_VAN}
          alt="Octagon Removals van at the London Eye — Thank You London"
          className="w-full object-cover"
          style={{ maxHeight: "400px", objectPosition: "center 30%" }}
        />
        <div className="absolute inset-0 flex items-center justify-center" style={{ background: "rgba(15,25,35,0.58)" }}>
          <h3 className="text-2xl md:text-4xl font-bold text-white text-center px-6"
            style={{ fontFamily: "Cormorant Garamond, serif", textTransform: "uppercase", letterSpacing: "0.04em" }}>
            Thank You London!{" "}
            <span style={{ color: GOLD }}>We're Having the "Thames" of Our Lives Serving You :-)</span>
          </h3>
        </div>
      </div>

      {/* Mission close */}
      <div className="text-center mb-12">
        <p className="text-base leading-relaxed text-gray-700 max-w-2xl mx-auto mb-2">
          For as long as we keep setting and reaching new milestones, our mission propels us forward, eager for the next chapter to unfold. So our story continues.
        </p>
        <p className="text-2xl lg:text-3xl font-semibold mb-4" style={{
          fontFamily: "Cormorant Garamond, serif",
          fontStyle: "italic",
          color: GOLD,
          letterSpacing: "0.03em",
        }}>
          Making Room For Our Clients' Expansion
        </p>

      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 py-12 border-t border-b" style={{ borderColor: "#e8e4dc" }}>
        {[
          { value: "Est. 2017", label: "Founded in London" },
          { value: "15,000+", label: "Moves Completed" },
          { value: "4.8★", label: "Trustpilot Rating" },
          { value: "4.9★", label: "Google Rating" },
        ].map((stat) => (
          <div key={stat.label} className="text-center">
            <div className="text-4xl font-semibold mb-1" style={{ fontFamily: "Cormorant Garamond, serif", color: GOLD }}>
              {stat.value}
            </div>
            <div className="text-xs tracking-wider uppercase" style={{ color: "#8A9BB0" }}>
              {stat.label}
            </div>
          </div>
        ))}
      </div>


    </div>
  );
}

function CoreValues() {
  const GOLD = "#B8960C";
  const DARK = "#0F1923";

  const VALUES_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663390692301/ZpcSodCKLQfFZqhkQybBpR/values-octagon_ea813594.jpg";
  const TOGETHER_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663390692301/ZpcSodCKLQfFZqhkQybBpR/together-walking_6e1f42cb.jpg";

  const values = [
    {
      num: "01",
      title: "Integrity",
      short: "Ethics & Transparency",
      desc: "Ethics and morals are of paramount importance to us, not only in our profession but also in our everyday lives. Strong moral principles are at the core of our identity. We are transparent and honest in all our dealings and follow through on our commitments regardless of the circumstances. Integrity is the cornerstone of our company's values as it guides our teams in every interaction and decision.",
    },
    {
      num: "02",
      title: "Accountability",
      short: "Ownership & Reliability",
      desc: "We accept responsibility for tasks and don't try to deflect or delegate. We pledge to be reliable and take ownership of tasks that are assigned to us. Our word is our bond. When we commit, we fulfil all our obligations to each other and to clients we serve. We hold ourselves accountable at all times.",
    },
    {
      num: "03",
      title: "Resourcefulness",
      short: "We will find a way",
      desc: "Resourcefulness defines our solution-orientation and problem-solving attitude of \"We will either find a way or we will make one\". It involves thinking outside the box and being proactive in seeking solutions, even when faced with limitations. We pride ourselves on our ability to adapt and find innovative ways to tackle challenges our clients and partners are facing.",
    },
    {
      num: "04",
      title: "Teamwork",
      short: "Together Everyone Achieves More",
      desc: "At OCTAGON REMOVALS, collaboration and teamwork are not just words, they are the bedrock of our culture. We are 100% committed to working together, without ever uttering the phrase \"that's not my job.\" We treat our clients as partners and our team members as family, recognising that the strength of our organisation lies in the unity of our people.",
      quote: "Without a high quality team and teamwork that bonds it, any long term mission is merely a wishful statement.",
      quoteAuthor: "Pawel Walerczuk, Managing Director",
    },
    {
      num: "05",
      title: "Passion",
      short: "Our dedication that moves you",
      desc: "Passion is the driving force behind our company and the essence of our team members' performance. We are passionate about our craft, therefore it is our dedication that moves you. Our commitment to work goes beyond the ordinary, as we approach each task with enthusiasm and a genuine desire to excel. Fueled by passion, we can continuously refine our skills and expertise to showcase our work as an art form, hence the name: \"Artists of Removals\".",
    },
    {
      num: "06",
      title: "Care",
      short: "People & Results",
      desc: "We perform our services with a deep sense of care, understanding that it's the cornerstone of building a strong community, nurturing partner relationships, and earning our clients' trust. We prioritise the health and safety of our teams, knowing that their well-being is at the heart of our success. When you truly care, no aspect of your work is left to chance.",
    },
    {
      num: "07",
      title: "Expansion",
      short: "Making room for your growth",
      desc: "Our mission is in making room for our clients' expansion by consistently and reliably providing excellent relocation and storage services. We measure our success by the size of our clients' and partners' success. Every single client's expansion means our own. That single-handedly shifted our gears to a completely new level as a business.",
    },
    {
      num: "08",
      title: "Professionalism",
      short: "Quality remembered long after price",
      desc: "Professionalism means conducting oneself with responsibility, integrity, accountability, and competence. We take the time to finalise a perfect move through diligent assessment, planning and execution and don't ever cut corners. Quality comes from experience and standards we cultivate. Quality matters as it is remembered long after price is forgotten.",
    },
  ];

  return (
    <div>
      {/* Hero — image left, text right, no cropping */}
      <div className="grid lg:grid-cols-2 gap-12 items-start mb-14">
        <div>
          <img
            src={VALUES_IMG}
            alt="We Are A Modern Company With Timeless Values"
            className="w-full"
            style={{ display: "block" }}
          />
        </div>
        <div className="flex flex-col justify-center">
          <span className="eyebrow mb-4">Our Core Values</span>
          <h2 className="text-4xl lg:text-5xl font-semibold mb-6"
            style={{ fontFamily: "Cormorant Garamond, serif", color: DARK }}>
            A Modern Company With Timeless Values
          </h2>
          <div className="space-y-4 text-base leading-relaxed" style={{ color: "#5a6a7a" }}>
            <p>We recognise the importance of core values in any business, providing a moral compass and a shared vision for the team. Clear values have a profound impact on team cohesion, ensuring that every member understands and aligns with the company's mission.</p>
            <p>Core values ultimately define the company's character, brand, mission, objectives, expectations, all leading to forming organisational culture. For businesses like ours, culture impacts everything from performance to how OCTAGON REMOVALS is perceived. Having a strong company culture motivates everyone to do their best work. Everything begins with the values we cultivate.</p>
          </div>
        </div>
      </div>

      {/* Octagon values diagram with shimmer */}
      <div className="flex justify-center mb-14">
        <div className="shimmer-wrap" style={{ maxWidth: 620, width: "100%" }}>
          <img
            src="https://d2xsxph8kpxj0f.cloudfront.net/310519663390692301/ZpcSodCKLQfFZqhkQybBpR/core-values-diagram_321295cc.png"
            alt="Octagon Removals Core Values Diagram"
            className="w-full"
            style={{ display: "block" }}
          />
        </div>
      </div>

      {/* Values grid — 8 real values */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-0 mb-14" style={{ border: `1px solid #e8e4dc` }}>
        {values.map((v, i) => (
          <div
            key={v.num}
            className="p-8"
            style={{
              backgroundColor: i % 4 === 1 || i % 4 === 2 ? DARK : "#fff",
              borderRight: i % 4 !== 3 ? `1px solid ${i % 4 === 1 || i % 4 === 2 ? "rgba(184,150,12,0.2)" : "#e8e4dc"}` : "none",
              borderBottom: i < 4 ? `1px solid ${i % 4 === 1 || i % 4 === 2 ? "rgba(184,150,12,0.2)" : "#e8e4dc"}` : "none",
            }}
          >
            <div
              className="text-3xl font-bold mb-3"
              style={{ fontFamily: "Cormorant Garamond, serif", color: GOLD }}
            >
              {v.num}
            </div>
            <h3
              className="text-xl font-semibold mb-1"
              style={{
                fontFamily: "Cormorant Garamond, serif",
                color: i % 4 === 1 || i % 4 === 2 ? "#F5F3EF" : DARK,
              }}
            >
              {v.title}
            </h3>
            <p className="text-xs font-bold tracking-widest uppercase mb-3" style={{ color: GOLD }}>
              {v.short}
            </p>
            <p
              className="text-xs leading-relaxed"
              style={{
                color: i % 4 === 1 || i % 4 === 2 ? "rgba(245,243,239,0.72)" : "#5a6a7a",
              }}
            >
              {v.desc}
            </p>
            {v.quote && (
              <blockquote className="mt-4 border-l-2 pl-3 italic text-xs" style={{ borderColor: GOLD, color: i % 4 === 1 || i % 4 === 2 ? "rgba(245,243,239,0.6)" : "#8A9BB0" }}>
                "{v.quote}" <span className="not-italic font-semibold" style={{ color: GOLD }}>— {v.quoteAuthor}</span>
              </blockquote>
            )}
          </div>
        ))}
      </div>

      {/* Together photo — full image, text beside */}
      <div className="grid lg:grid-cols-2 gap-12 items-start mb-14">
        <div className="flex flex-col justify-center order-2 lg:order-1">
          <span className="eyebrow mb-4">Our Team</span>
          <h3 className="text-3xl font-semibold mb-5" style={{ fontFamily: "Cormorant Garamond, serif", color: DARK }}>
            Together, We Move With Ease
          </h3>
          <div className="space-y-4 text-base leading-relaxed" style={{ color: "#5a6a7a" }}>
            <p>Behind every successful move is a team that genuinely cares. Our people are not just colleagues — they are a family united by a shared commitment to excellence, reliability, and the belief that every client deserves the very best.</p>
            <p>From the first enquiry to the final box being placed, every member of the Octagon Removals team brings their full dedication to the job. That is what makes us Artists of Removals.</p>
          </div>
        </div>
        <div className="order-1 lg:order-2">
          <img
            src={TOGETHER_IMG}
            alt="Together, We Move With Ease — Octagon Removals team"
            className="w-full"
            style={{ display: "block" }}
          />
        </div>
      </div>

      {/* Closing quote */}
      <div
        className="p-10 text-center"
        style={{ background: DARK, border: `2px solid ${GOLD}` }}
      >
        <p
          className="text-3xl font-bold italic mb-4 text-white"
          style={{ fontFamily: "Cormorant Garamond, serif" }}
        >
          "WHEREVER WE MOVE YOUR WORLD, YOU'RE AT THE CENTRE OF OURS."
        </p>
        <p className="text-sm font-semibold tracking-widest uppercase mt-4" style={{ color: GOLD }}>Artists Of Removals</p>
      </div>
    </div>
  );
}

function Mission() {
  const GOLD = "#B8960C";
  const DARK = "#0F1923";
  const OFFWHITE = "#F5F3EF";

  const careValues = [
    { letter: "C", word: "Competency", desc: "We are experienced at what we do, and we gladly share what we know." },
    { letter: "A", word: "Affinity", desc: "We are passionate about our craft, therefore it is our passion that moves you." },
    { letter: "R", word: "Reliability", desc: "We pride ourselves on consistency and reliability. You can count on us. We will always do what we said we will." },
    { letter: "E", word: "Execution", desc: "We are results oriented, measuring our success by your success." },
  ];

  return (
    <div>
      {/* Hero mission statement */}
      <div className="mb-12">
        <span className="eyebrow mb-4">Our Mission</span>
        <div
          className="p-10 mb-10"
          style={{ backgroundColor: DARK, border: `2px solid ${GOLD}` }}
        >
          <blockquote
            className="text-2xl lg:text-3xl font-semibold leading-relaxed text-center italic mb-6"
            style={{ fontFamily: "Cormorant Garamond, serif", color: OFFWHITE }}
          >
            "Our mission is in making room for our clients' expansion by consistently &amp; reliably providing excellent relocation and storage services."
          </blockquote>
          <div className="text-center">
            <div className="text-sm font-semibold" style={{ color: GOLD }}>~ Pawel Walerczuk, Managing Director</div>
          </div>
        </div>

        <p className="text-base leading-relaxed mb-4" style={{ color: "#5a6a7a" }}>
          Our mission is one of the reasons we have stood the test of time as a business in the past decade, and the ultimate example of how a purpose-driven, passionate, client-oriented business, built on timeless principles will thrive in any economy.
        </p>
      </div>

      {/* Body sections */}
      <div className="space-y-8 mb-14">
        {[
          {
            title: "Making Room for Expansion",
            body: "Life is such a dynamic experience. When we observe the circumstances in which our clients require our support, it never feels like they are static or fixed, but in a state of perpetual flux of change. Everything changing around us is either leading to withdrawals and contractions or expansion and growth — part of our mission is to assist with both to help you reach the desired outcome.",
          },
          {
            title: "We Believe in Human Potential",
            body: "Because we deeply trust in human ability to outgrow their environment in pursuit of fulfilling potential, we dedicate our absolute best to diverse support in our clients' journey of expansion to the next levels. Change leads to growth, growth means expansion. By making room for our clients we support their efforts to elevate their lives higher.",
          },
          {
            title: "First Class Experience — Always",
            body: "When we say we are dedicated to offering our clients a first class experience we wholeheartedly mean it. Whatever we are asked to do, we make sure to do it right, do it together and with full understanding that every single client's expansion means our own.",
          },
          {
            title: "Structured to Manage Every Move",
            body: "Every relocation — whether residential or commercial — is never exactly the same, involving a certain amount of complexity, stress and worry we want to take off your shoulders. Our business is structured to manage the entire move from the first point of contact to completion, equipping our team and clients with all the necessary tools to achieve this consistently. Octagon Removals constantly adapts and aligns itself with the market within which we operate. We never stop improving our processes to ensure your move is a pleasant and stress-free experience.",
          },
          {
            title: "Clarity, Confidence & Community",
            body: "One of our main goals is to provide not only effective options to choose from, but also a strong level of clarity and confidence around what we are doing and how we are going to do it. We firmly believe that the more awareness our interaction with clients brings, the better for the entire community and our profession. One of the reasons why we leave competition irrelevant — by not competing with them, but with ourselves.",
          },
          {
            title: "We Work With You, Not For You",
            body: "We do not work for you, we work with you — and you become part of the team for the duration of the project, as we are all on a mission to reach your personal or company's goals. We perfectly understand how important expansion is in the life of every human being, and we sincerely invite you to join our growing numbers of new, repeat and referral clients to see for yourself why Octagon Removals is one of the top-rated moving companies in London.",
          },
        ].map((item) => (
          <div
            key={item.title}
            className="flex gap-6 p-7"
            style={{ backgroundColor: "#fff", border: "1px solid #e8e4dc" }}
          >
            <div className="w-1 shrink-0 mt-1" style={{ backgroundColor: GOLD }} />
            <div>
              <h3
                className="text-xl font-semibold mb-2"
                style={{ fontFamily: "Cormorant Garamond, serif", color: DARK }}
              >
                {item.title}
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: "#5a6a7a" }}>
                {item.body}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* CARE acronym */}
      <div className="mb-14">
        <div
          className="p-8 mb-8"
          style={{ backgroundColor: DARK, border: `1px solid rgba(184,150,12,0.25)` }}
        >
          <p
            className="text-2xl font-bold text-center mb-2"
            style={{ fontFamily: "Cormorant Garamond, serif", color: OFFWHITE }}
          >
            But what makes us stand out the most is that we truly{" "}
            <span style={{ color: GOLD }}>CARE.</span>
          </p>
          <p className="text-center text-sm" style={{ color: "rgba(245,243,239,0.65)" }}>
            What "care" means and stands for to us:
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {careValues.map((c) => (
            <div
              key={c.letter}
              className="p-6"
              style={{ backgroundColor: "#F5F3EF", border: "1px solid #e8e4dc" }}
            >
              <div
                className="text-5xl font-bold mb-3"
                style={{ fontFamily: "Cormorant Garamond, serif", color: GOLD }}
              >
                {c.letter}
              </div>
              <h4
                className="text-lg font-semibold mb-2"
                style={{ fontFamily: "Cormorant Garamond, serif", color: DARK }}
              >
                {c.word}
              </h4>
              <p className="text-sm leading-relaxed" style={{ color: "#5a6a7a" }}>
                {c.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Closing quote */}
      <div
        className="p-10 text-center"
        style={{ background: DARK, border: `2px solid ${GOLD}` }}
      >
        <p
          className="text-3xl font-bold italic mb-4"
          style={{ fontFamily: "Cormorant Garamond, serif", color: OFFWHITE }}
        >
          "We believe that our clients simply deserve the best possible relocation experience akin to artistry."
        </p>
        <p className="text-sm font-semibold tracking-widest uppercase" style={{ color: GOLD }}>
          — The Art of Removals
        </p>
      </div>
    </div>
  );
}

function OurTeam() {
  return (
    <div>
      <div className="text-center mb-14">
        <span className="eyebrow mb-3">Our Team</span>
        <h2 className="text-4xl lg:text-5xl font-semibold"
          style={{ fontFamily: "Cormorant Garamond, serif", color: "#0F1923" }}>
          The People Behind Every Move
        </h2>
        <p className="mt-4 max-w-2xl mx-auto text-base"
          style={{ color: "#5a6a7a", fontFamily: "DM Sans, sans-serif" }}>
          Our team is our greatest asset. Every member is trained, vetted, and committed to delivering the premium Octagon standard on every move.
        </p>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {TEAM.map((member) => (
          <div key={member.name} className="p-6"
            style={{ backgroundColor: "#fff", border: "1px solid #e8e4dc" }}>
            {/* Avatar */}
            {member.photo ? (
              <img
                src={member.photo}
                alt={member.name}
                className="w-20 h-20 object-cover mb-4"
                style={{ border: "2px solid #B8960C" }}
              />
            ) : (
              <div className="w-16 h-16 flex items-center justify-center mb-4 text-2xl font-bold"
                style={{ backgroundColor: "#0F1923", color: "#B8960C", fontFamily: "Cormorant Garamond, serif" }}>
                {member.name.charAt(0)}
              </div>
            )}
            <h3 className="text-xl font-semibold mb-0.5"
              style={{ fontFamily: "Cormorant Garamond, serif", color: "#0F1923" }}>
              {member.name}
            </h3>
            <div className="text-xs font-bold tracking-widest uppercase mb-3"
              style={{ color: "#B8960C", fontFamily: "DM Sans, sans-serif" }}>
              {member.role}
            </div>
            <p className="text-sm leading-relaxed mb-5"
              style={{ color: "#5a6a7a", fontFamily: "DM Sans, sans-serif" }}>
              {member.bio}
            </p>
            {/* Skills */}
            <div className="space-y-2">
              {member.skills.map((skill) => (
                <div key={skill.label}>
                  <div className="flex justify-between text-xs mb-1"
                    style={{ color: "#8A9BB0", fontFamily: "DM Sans, sans-serif" }}>
                    <span>{skill.label}</span>
                    <span>{skill.value}%</span>
                  </div>
                  <div className="h-1 w-full" style={{ backgroundColor: "#e8e4dc" }}>
                    <div className="h-1" style={{ width: `${skill.value}%`, backgroundColor: "#B8960C" }} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

const SECTIONS: Record<string, { title: string; component: React.FC }> = {
  "our-story": { title: "Our Story", component: OurStory },
  "core-values": { title: "Our Core Values", component: CoreValues },
  mission: { title: "Our Mission", component: Mission },
  team: { title: "Our Team", component: OurTeam },
};

export default function AboutPage() {
  const params = useParams<{ section: string }>();
  const section = params.section || "our-story";
  const current = SECTIONS[section] || SECTIONS["our-story"];
  const Component = current.component;

  return (
    <>
      <Navbar />
      <div className="min-h-screen" style={{ backgroundColor: "#F5F3EF" }}>

        {/* Hero */}
        <section className="relative py-20 lg:py-28 overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${HERO_IMG})` }}
          />
          <div
            className="absolute inset-0"
            style={{ background: "linear-gradient(105deg, rgba(10,15,25,0.93) 0%, rgba(10,15,25,0.75) 100%)" }}
          />
          <div className="container relative z-10">
            {/* Breadcrumb */}
            <div className="flex items-center gap-2 mb-6 text-xs"
              style={{ color: "rgba(245,243,239,0.55)", fontFamily: "DM Sans, sans-serif" }}>
              <Link href="/"><span className="hover:text-[#B8960C] cursor-pointer transition-colors">Home</span></Link>
              <ChevronRight size={12} />
              <span style={{ color: "#B8960C" }}>About Us</span>
              <ChevronRight size={12} />
              <span style={{ color: "#B8960C" }}>{current.title}</span>
            </div>
            <h1 className="text-4xl lg:text-6xl font-semibold mb-4"
              style={{ fontFamily: "Cormorant Garamond, serif", color: "#F5F3EF" }}>
              {current.title}
            </h1>
            <p className="text-lg max-w-xl"
              style={{ color: "rgba(245,243,239,0.7)", fontFamily: "Cormorant Garamond, serif", fontStyle: "italic" }}>
              Octagon Removals Ltd - London's Premium Removals Company
            </p>
          </div>
        </section>

        {/* Sub-nav */}
        <div style={{ backgroundColor: "#0F1923", borderBottom: "1px solid rgba(184,150,12,0.2)" }}>
          <div className="container">
            <div className="flex gap-0 overflow-x-auto">
              {Object.entries(SECTIONS).map(([slug, sec]) => (
                <Link key={slug} href={`/about/${slug}`}>
                  <div
                    className="px-5 py-4 text-sm font-medium whitespace-nowrap cursor-pointer transition-colors border-b-2"
                    style={{
                      color: section === slug ? "#B8960C" : "rgba(245,243,239,0.6)",
                      borderColor: section === slug ? "#B8960C" : "transparent",
                      fontFamily: "DM Sans, sans-serif",
                    }}
                  >
                    {sec.title}
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Content */}
        <section className="py-16 lg:py-24">
          <div className="container">
            <Component />
          </div>
        </section>

        {/* CTA */}
        <section className="py-16" style={{ backgroundColor: "#0F1923" }}>
          <div className="container text-center">
            <h2 className="text-3xl font-semibold mb-4"
              style={{ fontFamily: "Cormorant Garamond, serif", color: "#F5F3EF" }}>
              Ready to Experience the Octagon Difference?
            </h2>
            <div className="flex flex-wrap items-center justify-center gap-4 mt-6">
              <Link href="/get-quote">
                <span className="btn-gold px-10 py-4 cursor-pointer">Get Free Quote</span>
              </Link>
              <a href={`tel:${COMPANY.phone}`} className="btn-ghost-gold px-10 py-4 flex items-center gap-2">
                <Phone size={14} />
                {COMPANY.phoneDisplay}
              </a>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}

