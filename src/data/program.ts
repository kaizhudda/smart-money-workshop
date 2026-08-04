/**
 * ============================================================================
 *  SMART MONEY WORKSHOP — SINGLE SOURCE OF TRUTH
 * ============================================================================
 *  Every number, date, price and quote on the website comes from this file.
 *  Edit here and the whole site updates. You never need to touch the markup.
 *
 *  Anything marked  ⚠️ TODO  is a placeholder that MUST be replaced before
 *  the site goes public. Search this file for "TODO" to find them all.
 * ============================================================================
 */

export const site = {
  name: 'Smart Money Workshop',
  tagline: 'Real money skills for kids, taught live.',
  // Footer only. Not used as a call-to-action anywhere on the site.
  email: 'kaiz.hudda@gmail.com',
  founder: 'Kaiz Hudda',
  // Set once you buy a domain. Used for social share previews.
  url: 'https://kaizhudda.github.io/smart-money-workshop',

  /**
   * Keeps the whole site out of Google while it still has placeholder content.
   * The site is fully usable and shareable by link either way — this only
   * stops search engines indexing a half-finished page.
   *
   * ⚠️ Flip to `true` once the price, testimonials and form are real.
   */
  allowSearchEngines: false,
};

/* ---------------------------------------------------------------------------
 *  THE OFFER
 * ------------------------------------------------------------------------ */

export const offer = {
  ageRange: '9–14',
  sessionCount: 4,
  sessionMinutes: 60,
  platform: 'Google Hangouts',
  // Short form for tight spaces (stat tiles). Keep the full name everywhere
  // else — this exists purely so a long platform name doesn't wrap and
  // break the rhythm of a 4-up tile grid.
  platformShort: 'Hangouts',

  // Price for the next cohort, in AUD. See README for the reasoning behind
  // this number — change it here and it updates everywhere.
  price: '$99',
  priceIsPlaceholder: false,

  /**
   * Line under the price. Only keep this if you genuinely intend to raise the
   * price for later cohorts — it's true today, and it stops early families
   * feeling stung when it goes up. Set to null to hide it.
   */
  priceNote: 'Introductory price while the program is new',

  // ⚠️ TODO — real cohort dates.
  startDate: 'TODO_START_DATE', // e.g. 'Tuesday 2 September'
  sessionTime: 'TODO_TIME', // e.g. '5:00pm AEST, every Tuesday'

  // Real cohort cap. Drives the scarcity messaging — keep it honest.
  spotsTotal: 5,

  formUrl:
    'https://docs.google.com/forms/d/e/1FAIpQLSd5o3oU_5Y2P99OSdcwYciMfUBp30acxqWlqBB00pKsVWiVlQ/viewform',
  formEmbedUrl:
    'https://docs.google.com/forms/d/e/1FAIpQLSd5o3oU_5Y2P99OSdcwYciMfUBp30acxqWlqBB00pKsVWiVlQ/viewform?embedded=true',
  // Height Google suggests for this form. Too short crops the last question;
  // too tall leaves dead space. Re-check if you add or remove questions.
  formEmbedHeight: 2609,
};

/* ---------------------------------------------------------------------------
 *  PROOF — real numbers only. Do not inflate these.
 * ------------------------------------------------------------------------ */

export const proof = {
  // Kept for the record even though the site now says "a cohort" rather
  // than the number — small counts read as small when stated outright.
  // Still true, just not spelled out.
  pilotStudents: 5,
  podcastEpisodes: 52,
  podcastUrl:
    'https://open.spotify.com/episode/7iilwUFS6WHiTBrfKx1cTd?si=BDob92omQkKAZiRoE49I0A',
  podcastTitle: 'If I Had a Kid, I’d Teach Them This First',
};

/* ---------------------------------------------------------------------------
 *  CURRICULUM — from the actual welcome pack. Outcomes are accurate; don't
 *  add outcomes the program doesn't actually deliver.
 * ------------------------------------------------------------------------ */

export const weeks = [
  {
    number: 1,
    title: 'Money Fundamentals',
    hook: 'What money is, and where it comes from.',
    covers: [
      'What money is and why we need it',
      'How people earn it: jobs, chores, businesses, investing, selling things',
      'How people pay: cash, credit, debit, Apple Pay, crypto',
      'Needs vs. wants',
    ],
    outcome:
      'Your child tracks their spending for a week and starts noticing their own daily money habits.',
    // Short, scannable version for the outcome cards. Same fact as
    // `outcome` above, just headline-length instead of a full sentence.
    skill: 'Tracks every dollar',
    skillDetail: 'A week of writing down where it actually goes.',
    takeaway: 'Weekly spending diary + needs vs. wants sort sheet',
  },
  {
    number: 2,
    title: 'Budgeting & Saving',
    hook: 'Where the money goes, and how to take control of it.',
    covers: [
      'What budgeting is and why it matters',
      'The needs / wants / savings framework',
      'Building a simple personal budget',
      'Setting a savings goal worth chasing',
    ],
    outcome:
      'Your child creates their own basic budget and sets a personal savings goal.',
    skill: 'Builds a real budget',
    skillDetail: 'Needs, wants and savings, planned their own way.',
    takeaway: 'Budget planner + savings goal tracker',
  },
  {
    number: 3,
    title: 'Spending Smart',
    hook: 'The four questions that stop an impulse buy.',
    covers: [
      'The Smart Shopping Method: Pause, Compare, Wait, Choose',
      'The 48-hour rule',
      'Live price comparisons on things kids actually want',
      'A real shopping challenge',
    ],
    outcome:
      'Your child learns to make smart buying decisions by comparing before they buy.',
    skill: 'Shops smarter',
    skillDetail: 'Pause, compare, wait, choose, before every buy.',
    takeaway: 'Smart Spending Challenge pack',
  },
  {
    number: 4,
    title: 'Building Smart Habits & Earning Money',
    hook: 'How a money habit sticks, and how to earn a first $5+.',
    covers: [
      'What a habit is, and good vs. bad money habits',
      'How to earn a first $5+: bonus chores, selling or swapping unused things, making things to sell',
      'A referral challenge',
      'The final money challenge',
    ],
    outcome:
      'Your child understands what a money habit is, completes a final challenge, and has earned their first bit of money.',
    skill: 'Earns real money',
    skillDetail: 'A real challenge, and their first real earnings.',
    takeaway: 'Mini Hustle Challenge pack + reflection journal',
  },
];

/* ---------------------------------------------------------------------------
 *  VALUE STACK
 *
 *  ⚠️ REVIEW BEFORE PUBLISHING — these are perceived-value figures, not
 *  prices anything has actually sold for. Some come from your existing
 *  marketing copy ($45 challenge pack, $29 worksheets, "$500 value").
 *  Confirm you're comfortable standing behind each one.
 * ------------------------------------------------------------------------ */

export const valueStack = [
  {
    item: '4 live sessions with Kaiz',
    detail: '60 minutes each, small group, cameras on, discussion not lecture',
    value: 360,
    freeOnRegistration: false,
    icon: 'calendar' as const,
  },
  {
    item: 'Smart Money Starter Pack',
    detail: 'The core worksheets your child works through each week',
    value: 29,
    freeOnRegistration: true,
    icon: 'document' as const,
  },
  {
    item: 'Money Mindset Snapshot + Mission Cards',
    detail:
      'Finds whether your child is a Spender, Saver, Earner, or Balanced, with matching missions',
    value: 29,
    freeOnRegistration: true,
    icon: 'compass' as const,
  },
  {
    item: 'Mini Hustle Challenge Pack',
    detail:
      'The real-world mission where they earn their first $5+, with planner and tracker',
    value: 45,
    freeOnRegistration: true,
    icon: 'spark' as const,
  },
  {
    item: 'Session recordings',
    detail: 'Miss a week, or rewatch any session, sent after every class',
    value: 49,
    freeOnRegistration: false,
    icon: 'play' as const,
  },
  {
    item: 'Parent conversation starters',
    detail: 'The questions to ask at dinner each week so it actually sticks',
    value: 19,
    freeOnRegistration: false,
    icon: 'chat' as const,
  },
];

export const valueStackTotal = valueStack.reduce((sum, i) => sum + i.value, 0);

/**
 * The three packs every family gets for registering, whether or not their
 * child ends up in a cohort. Keep this honest: only flag something here if
 * you genuinely send it to everyone who registers.
 */
export const freePacks = valueStack.filter((i) => i.freeOnRegistration);
export const freePacksValue = freePacks.reduce((sum, i) => sum + i.value, 0);

/* ---------------------------------------------------------------------------
 *  GUARANTEE
 * ------------------------------------------------------------------------ */

export const guarantee = {
  headline: '7-day, no-questions-asked money-back guarantee.',
  body:
    'Do the whole course with your child. If you don’t think it was worth it, tell me within 7 days of the final session and I’ll refund you in full, no questions asked. You keep every worksheet and pack either way.',
  // Short version for the price block, where space is tight.
  short: 'Full refund up to 7 days after the course, no questions asked.',
};

/* ---------------------------------------------------------------------------
 *  TESTIMONIALS
 *
 *  Real, unedited feedback from pilot families. Only ever add genuine quotes
 *  here — inventing testimonials for a paid program is a breach of Australian
 *  Consumer Law (ACL s29), not just a style problem.
 *
 *  Anything with `isPlaceholder: true` renders a visible warning instead of
 *  publishing, so a draft can never go out by accident.
 * ------------------------------------------------------------------------ */

export const testimonials = [
  {
    quote:
      'The workshop truly made a significant impact, and the main thing Kabir learned was the crucial distinction between “wants” and “needs.” This concept was presented in such an engaging and clear way, and he has already started applying it in his daily life. We are very grateful for the practical insights and guidance you provided.',
    author: 'Farid',
    context: 'Parent of Kabir',
    isPlaceholder: false,
  },
  {
    quote:
      'Ashlyn really enjoyed the Smart Money Workshop and came away with some valuable insights that she’s already thinking about how to apply in her own life. It’s fantastic to see her engaging with financial concepts in such a practical and empowering way. I highly recommend your workshops to all kids, it’s such an important foundation to build early on.',
    author: 'Saniya',
    context: 'Parent of Ashlyn',
    isPlaceholder: false,
  },
];

/* ---------------------------------------------------------------------------
 *  FAQ
 * ------------------------------------------------------------------------ */

export const faqs = [
  {
    q: 'What age is this for?',
    a: `Ages ${offer.ageRange}. That's the range where kids are old enough to understand where money comes from, but young enough that the habits actually stick. If your child is just outside it, register anyway and I'll tell you honestly whether it's a fit.`,
  },
  {
    q: 'What if we miss a session?',
    a: 'Every session is recorded and sent to you afterwards, so your child can catch up in their own time. The worksheets for that week come through regardless.',
  },
  {
    q: 'Does my child need anything to take part?',
    a: 'A device with Google Hangouts, somewhere quiet to sit, and something to write with. Every worksheet is emailed to you as a printable PDF before the session that uses it. Nothing needs to be bought.',
  },
  {
    q: 'Does registering guarantee a spot?',
    a: 'No, and that’s deliberate. Cohorts are kept small so every child actually gets to speak. Registering puts your child’s name down. I read every one myself and get in touch to let you know whether there’s a place in the next cohort, and you get the three free packs either way.',
  },
  {
    q: 'If I register, am I committing to anything?',
    a: 'Not at all. Registering is an expression of interest, not a booking. You’re not agreeing to pay and you’re not agreeing to attend. When I get in touch, you can ask whatever you like and say no with no awkwardness. Plenty of people will, and that’s completely fine.',
  },
  {
    q: 'How do I pay?',
    a: 'You don’t pay anything to register. If your child is offered a spot and you decide to go ahead, I’ll send you the details and an invoice by email. Payment is by bank transfer, and only at that point.',
  },
  {
    q: 'What if it’s not right for my child?',
    a: guarantee.body,
  },
  {
    q: 'Is this a lecture, or do the kids actually talk?',
    a: 'They talk. Cameras on, small group, lots of discussion, live challenges and real examples like the price of a game they want or the cost of the headphones they’re saving for. A kid who sits silently for four weeks hasn’t learned anything.',
  },
  {
    q: 'Who is teaching it?',
    a: 'Me, Kaiz Hudda. I hosted a 52-episode podcast on money, ran webinars teaching cryptocurrency to everyday people, bought and built my own home, and built businesses in tech and retail. I built this workshop because nobody taught me any of it.',
  },
];
