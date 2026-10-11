// Every fact, number and sentence on this site.
// The portfolio-work and portfolio-hire repos carry their own copy of `person` and `facts`:
// when one of those values changes, change it there too.
// Strings may contain <b>…</b> for emphasis; nothing else.

export const person = {
  name: 'Shubhraj Bhartiya',
  first: 'Shubhraj',
  last: 'Bhartiya',
  email: 'shubhrajbhartiya@gmail.com',
  linkedin: 'https://www.linkedin.com/in/shubhraj-bhartiya-2745531b4/',
  github: 'https://github.com/shubhraj5575',
};

// Numbers used in the copy below.
export const facts = {
  supaPRs: 8,
  supaLines: '13,000',
  supaDates: '8–10 Oct 2026',
  factoryPRs: 82,
  greenplatePrize: '₹30,000',
  greenplateUrl: 'https://greenplate-website.vercel.app',
  searchRepo: 'https://github.com/shubhraj5575/hybrid-search-kpi-system',
  jee: 'Top 3%',
  classX: '89.4%',
  classXII: '86.6%',
  gpa: '7.52',
};

// Live addresses of the three versions, each its own repo and site.
// A link to another version is shown only while its address is filled in.
export const sites = {
  work: 'https://shubhraj5575.github.io/portfolio-work/',
  story: 'https://shubhraj5575.github.io/portfolio-story/',
  hire: 'https://shubhraj5575.github.io/portfolio-hire/',
};

/* ───────── personal brand ─────────
   Order: a hook, then the life in the order it happened.
   `lines`: one headline line per entry; a leading * draws it as an outline. */

export type Slide = { tone: 'ink' | 'bone' | 'hot'; tag: string; lines: string[]; meta: string[]; echo?: boolean; marquee?: string };

export const story: Slide[] = [
  {
    tone: 'ink', echo: true, tag: 'A life in nine swipes', lines: ['Shubhraj', '*Bhartiya'],
    meta: ['Co-founded a climate startup at 19. Now I build <b>AI offices on WhatsApp.</b>'],
  },
  {
    tone: 'bone', tag: '2019 — 2022 · St. John’s Academy', lines: ['Top', '3%', '*In India'],
    meta: ['JEE Mains <b>and</b> JEE Advanced, 2022.', `CBSE X — ${facts.classX} · XII — ${facts.classXII}`],
  },
  {
    tone: 'ink', tag: '2022 — 2026 · Delhi Technological University', lines: ['*B.Tech', 'DTU', '*ECE'],
    meta: ['Corporate Head, E-Cell — <b>15+ partners</b>, ₹50,000+ in sponsorships.', 'Director of Rotary Relations — 12 projects with 60+ Rotarians.'],
  },
  {
    tone: 'hot', tag: '2024 — 2025 · Internships', lines: ['10K+', 'Leads', '*Decoded'],
    meta: ['STBG Academy — 6 dashboards, reporting <b>40% faster.</b>', 'Apporio Infolabs — roadmaps for 4 products.'],
  },
  {
    tone: 'bone', tag: '2025 · Founder', lines: ['Green', 'Plate', '*Is Live'],
    meta: ['Carbon footprint measurement for India’s food sector.', `First place and <b>${facts.greenplatePrize}</b> at E-Cell DTU × Titan Capital.`],
  },
  {
    tone: 'ink', tag: '2025 · Pitch rooms', lines: ['*National', 'Rank', '#1'],
    meta: ['B-Plan, DTU.', 'Rank 4 at DSE Dealmaker’s Conclave. <b>First of 30+ teams</b> at DTU Innovation Showcase.'],
  },
  {
    tone: 'hot', tag: '2026 · ONE Group', lines: ['*An Office', 'On', 'WhatsApp'],
    meta: ['Supa: an AI office a business runs from a chat.', 'I put it inside <b>WhatsApp groups</b>: approved by the team, silent until tagged.', 'Built side by side with the founder.'],
  },
  {
    tone: 'ink', tag: 'August 2026 · After hours', lines: ['Eight', '*AI', 'Labs'],
    meta: ['A research loop that runs its own experiments.', 'A studio of <b>11 agents</b> that shipped a playable game.', 'A startup run by AI on ₹1,00,000 of pretend money.'],
  },
  {
    tone: 'bone', tag: 'Next', lines: ['Now', '*Say', 'Hello'],
    meta: [`<b>${person.email}</b>`],
    marquee: 'Product · Strategy · AI automation',
  },
];
