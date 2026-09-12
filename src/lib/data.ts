import { Project } from "./types";

export const INITIAL_PROJECTS: Project[] = [
  {
    id: "bheeshmar",
    title: "BHEESHMAR",
    tagline: "Epic Narrative & Commercial Canvas",
    description: "High-octane drama and cinematic storytelling positioned for global regional and international digital distribution.",
    synopsis: "An intense, high-stakes feature drama capturing timeless conflicts of loyalty, legacy, and power across an expansive cinematic landscape.",
    category: "FILMS",
    projectType: "Feature Film",
    language: "Tamil / Multi-language Dub",
    genre: "Action / Drama / Commercial Cinema",
    year: "2024",
    indiarkRole: "Exclusive OTT Representation, Strategic Positioning & Digital Rights Pitching",
    posterUrl: "/images/projects/bheeshmar.svg",
    status: "Featured",
    published: true,
    createdAt: new Date().toISOString(),
  },
  {
    id: "secret-of-kalinga",
    title: "SECRET OF KALINGA",
    tagline: "Historical Mystery & Enthralling Adventure",
    description: "A deeply researched historical mystery that explores forgotten heritage, ancient secrets, and legendary lore.",
    synopsis: "Set against the mystique of ancient Indian heritage, an investigative journey unfolds ancient secrets, historical artifacts, and untold regional legends.",
    category: "FILMS",
    projectType: "Feature Film / Historical Mystery",
    language: "Multi-lingual (South & Pan-India)",
    genre: "Historical Thriller / Mystery / Drama",
    year: "2024",
    indiarkRole: "Media Rights Advisory, Domestic & Pan-India OTT Representation",
    posterUrl: "/images/projects/secret_of_kalinga.svg",
    status: "Featured",
    published: true,
    createdAt: new Date().toISOString(),
  }
];

export const CORE_SERVICES = [
  {
    id: "01",
    code: "OTT_PITCHING",
    title: "OTT & Content Pitching",
    subtitle: "Precision Pitching to Top Tier Platforms",
    description: "We evaluate content viability, craft institutional-grade pitch decks, and present directly to acquisition executives and programming heads across leading OTT platforms.",
    details: [
      "Direct engagement with acquisition heads & commissioning editors",
      "Tailored commercial pitch decks & synopsis positioning",
      "Catalogue syndication & digital premiere strategy"
    ],
    icon: "Tv2"
  },
  {
    id: "02",
    code: "CONTENT_REPRESENTATION",
    title: "Content Representation",
    subtitle: "End-to-End Strategic Producer Advocacy",
    description: "Serving as the dedicated business representative for producers, filmmakers, and production studios to monetize finished titles and projects in production.",
    details: [
      "Sole representation agreements for domestic & global territories",
      "Targeted buyer mapping across film, series, and non-fiction",
      "Transparent deal governance and rights custody"
    ],
    icon: "ShieldCheck"
  },
  {
    id: "03",
    code: "MEDIA_RIGHTS_LICENSING",
    title: "Media Rights & Licensing",
    subtitle: "Maximizing Value Across the Rights Matrix",
    description: "Structuring satellite broadcast, in-flight entertainment, dubbing, remake, pay-per-view, and secondary window rights across domestic and international territories.",
    details: [
      "Satellite TV & Linear broadcast monetization",
      "Airline in-flight entertainment (IFE) packages",
      "Regional & international language dubbing/remake rights"
    ],
    icon: "Layers"
  },
  {
    id: "04",
    code: "MUSIC_BUSINESS",
    title: "Music Business",
    subtitle: "Soundtrack Licensing & Streaming Distribution",
    description: "Connecting music composers, film sound libraries, and independent labels with digital streaming platforms, publishing monetization, and synchronization licensing.",
    details: [
      "Digital music distribution & streaming platform pitching",
      "Film score & audio rights commercialization",
      "Publishing rights & sync licensing opportunities"
    ],
    icon: "Music"
  },
  {
    id: "05",
    code: "DIGITAL_ENTERTAINMENT",
    title: "Digital Entertainment",
    subtitle: "Web Series, Micro-Content & Fast Channels",
    description: "Structuring monetization strategies for digital-first creators, web series producers, FAST channels, and YouTube multi-channel networks seeking syndicated reach.",
    details: [
      "Web series syndication to digital streamers",
      "FAST (Free Ad-supported Streaming TV) channel packaging",
      "Micro-drama and episodic digital licensing"
    ],
    icon: "Smartphone"
  },
  {
    id: "06",
    code: "VIDEO_PRODUCTION",
    title: "Video Production",
    subtitle: "Commercial & Custom Content Development",
    description: "Providing strategic production consultation, project packaging, and collaborative executive production support for high-impact commercial entertainment.",
    details: [
      "Commercial video & high-production-value film packaging",
      "Production feasibility, budgeting & market fit analysis",
      "Post-production alignment with OTT delivery standards"
    ],
    icon: "Clapperboard"
  }
];

export const HOW_WE_WORK_STEPS = [
  {
    number: "01",
    stage: "UNDERSTAND",
    title: "Understand Content & Rights Position",
    description: "We conduct a thorough audit of the content, existing rights encumbrances, target demographics, and commercial expectations to establish clear market viability."
  },
  {
    number: "02",
    stage: "IDENTIFY",
    title: "Identify Opportunities & Buyers",
    description: "Leveraging our industry network, we map the content against active platform acquisition mandates, broadcaster requirements, and territory needs."
  },
  {
    number: "03",
    stage: "POSITION",
    title: "Position & Package for Market",
    description: "We determine the precise commercial packaging—crafting executive decks, screener protocols, and market positioning that resonate with commissioning editors."
  },
  {
    number: "04",
    stage: "PITCH",
    title: "Professionally Pitch to Decision Makers",
    description: "We conduct direct, institutional pitches to qualified platform buyers, acquisition executives, and global distributors with structured follow-through."
  },
  {
    number: "05",
    stage: "NEGOTIATE",
    title: "Negotiate Commercial Terms",
    description: "We champion the content owner's interests—negotiating license fees, windowing periods, territory splits, and delivery schedules to safeguard long-term value."
  },
  {
    number: "06",
    stage: "CLOSE",
    title: "Deal Coordination to Closure",
    description: "We coordinate contracting, legal alignment, and technical delivery protocols towards smooth, transparent, and successful business deal execution."
  }
];

export const PROOF_POINTS = [
  {
    number: "20+",
    suffix: "Years",
    title: "20+ Years in Media",
    description: "Backed by seasoned industry professionals with over two decades of combined operational experience in television, cinema, OTT, and digital entertainment."
  },
  {
    number: "OTT",
    suffix: "Focus",
    title: "OTT Expertise",
    description: "Deep, hands-on understanding of streaming platforms' curation criteria, technical delivery guidelines, acquisition cycles, and programming mandates."
  },
  {
    number: "B2B",
    suffix: "Platform",
    title: "Platform-Focused",
    description: "We act with institutional rigor—delivering clean, legally verified, and commercially viable content that acquisition heads actively look for."
  },
  {
    number: "ROI",
    suffix: "Commercial",
    title: "Business-Driven",
    description: "Our objective is measurable business closure: optimizing upfront license fees, territory exploitation, and structured windowing strategies."
  },
  {
    number: "100%",
    suffix: "Advocacy",
    title: "Producer-Focused",
    description: "Independent filmmakers and production houses retain full transparency and commercial protection through dedicated representation."
  },
  {
    number: "360°",
    suffix: "Network",
    title: "Industry Network",
    description: "Direct access across regional, national, and international entertainment ecosystems, satellite broadcasters, IFE buyers, and distribution syndicates."
  }
];

export const LEADERSHIP_TEAM = [
  { name: "Charles George", role: "Leadership & Strategy" },
  { name: "Marina John", role: "Content & Operations" },
  { name: "Arun Dev", role: "Business & Acquisitions" },
  { name: "Manu KC", role: "Media & Production" },
  { name: "Mubeen Rouf", role: "Syndication & Rights" },
  { name: "Jomon", role: "Technical & Distribution" }
];

export const CHANNEL_PARTNERS = [
  { name: "Frame 2 Frame", type: "Channel Partner", description: "Creative production and media collaboration partner." },
  { name: "Flick Dot", type: "Digital Partner", description: "Digital distribution and content technology partner." },
  { name: "Media Edge Productions", type: "Production Partner", description: "Allied film and commercial production enterprise." }
];
