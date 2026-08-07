/**
 * Health Library articles.
 *
 * A section is either a heading (`kind: "h2"`), a body paragraph
 * (`kind: "p"`), a bulleted list (`kind: "ul"`), or a callout aside
 * (`kind: "callout"`). Renderer walks the array in order.
 */

export type ArticleSection =
  | { kind: "h2"; text: string }
  | { kind: "p"; text: string }
  | { kind: "ul"; items: string[] }
  | { kind: "callout"; title: string; body: string };

export type Article = {
  slug: string;
  category: string;
  title: string;
  dek: string;
  excerpt: string;
  date: string;
  minutes: string;
  heroImage: string;
  hero: {
    lede: string;
  };
  body: ArticleSection[];
};

export const ARTICLES: Article[] = [
  {
    slug: "what-to-expect-at-your-first-cervical-screening",
    category: "Women's health",
    title:
      "What to expect at your first cervical screening, from the doctors who do them.",
    dek: "A short, plain-language walkthrough of the appointment itself, the results, and what happens if something needs a closer look.",
    excerpt:
      "A short walkthrough of the cervical screening appointment, the results, and what happens if something needs a closer look.",
    date: "2026-07-14",
    minutes: "5 min read",
    heroImage: "/website-images/cervical-screening-article.webp",
    hero: {
      lede: "Cervical screening in Australia changed a few years ago, but a lot of the anxiety around the appointment has not. Here's what actually happens, in the order it happens, so you know what you're walking into.",
    },
    body: [
      {
        kind: "h2",
        text: "Before the appointment.",
      },
      {
        kind: "p",
        text: "Cervical screening is recommended every five years for women and people with a cervix aged 25 to 74. If it's your first appointment, or your first in a long while, book a standard consultation and tell reception it's for screening. That way we set aside the right amount of time and you don't feel rushed.",
      },
      {
        kind: "p",
        text: "There's nothing to prepare on the day. You don't need to fast, you don't need to shave, and you don't need to have a specific day in your cycle, although we'll usually avoid the heaviest bleeding days if you have a choice.",
      },
      {
        kind: "h2",
        text: "In the room.",
      },
      {
        kind: "p",
        text: "The appointment itself is usually shorter than the conversation around it. We'll talk through your history first, including any previous screening results, any symptoms, and whether you've had the HPV vaccine. If anything has changed since your last visit, this is a good moment to mention it.",
      },
      {
        kind: "p",
        text: "The screening itself takes a couple of minutes. You'll undress from the waist down behind a curtain, lie back on the examination table with a sheet, and we'll use a small speculum to take a sample from your cervix using a soft brush. There is often mild pressure and sometimes a moment of discomfort, but it should not be sharp or lasting pain. If it does, please tell us — we can adjust position or pause.",
      },
      {
        kind: "callout",
        title: "You can ask for anything you need.",
        body: "A support person in the room. A pause partway through. A smaller speculum. Doing the screening yourself with a self-collection kit, which is now clinically equivalent. None of these are unusual requests and none of them make the appointment take longer.",
      },
      {
        kind: "h2",
        text: "After the appointment.",
      },
      {
        kind: "p",
        text: "You can go about your day. Some people have very light spotting for a few hours, and cramping is uncommon but possible. Neither should last beyond the same day.",
      },
      {
        kind: "p",
        text: "Results come back to us within about two weeks. If your result is unremarkable and you're on the standard five-year interval, you won't need to come back in for screening until then, and we'll usually let you know that with a message or short call. If we need to see you, we'll ask you to book a follow-up.",
      },
      {
        kind: "h2",
        text: "If something needs a closer look.",
      },
      {
        kind: "p",
        text: "A small percentage of screening results warrant a closer look. That does not usually mean cancer. It usually means we've detected an HPV type or a change in cells that we want to watch. Follow-up ranges from repeating the screening in 12 months to a colposcopy referral, and we walk you through which pathway applies and why.",
      },
      {
        kind: "p",
        text: "If you have symptoms between screenings — irregular bleeding, bleeding after sex, or unusual discharge — don't wait for the next scheduled appointment. Book a review sooner.",
      },
    ],
  },
  {
    slug: "reading-a-school-report-that-doesnt-add-up",
    category: "Paediatrics",
    title:
      "Reading a school report that doesn't add up: a paediatrician's questions to ask first.",
    dek: "Before an assessment is on the table, a few conversations at home and at school often surface what's really going on.",
    excerpt:
      "Before an assessment is on the table, a few conversations at home and at school often surface what's really going on.",
    date: "2026-07-21",
    minutes: "6 min read",
    heroImage: "/website-images/school-report-article.webp",
    hero: {
      lede: "The school report that doesn't quite fit the child you know is one of the most common reasons families come to see us. It's rarely the whole story on its own, and there's usually a lot to work with before an assessment is even on the table.",
    },
    body: [
      {
        kind: "h2",
        text: "Start with a wider read of the report.",
      },
      {
        kind: "p",
        text: "A single low mark rarely tells you much. Patterns across subjects, across terms, and across the written comments matter more. A child struggling in maths but doing well in creative writing is a different picture from a child struggling across the board. A child whose comments talk about focus is different from a child whose comments talk about confidence.",
      },
      {
        kind: "p",
        text: "Read the whole report side by side with the previous one. Changes matter. A subject that dropped from a B to a D between last term and this term is worth understanding. A subject that has always been a C is a different conversation.",
      },
      {
        kind: "h2",
        text: "Ask the teacher, not just the report.",
      },
      {
        kind: "p",
        text: "Reports are often written under time pressure and land in the same envelope regardless of how well the teacher knows the child. Requesting a short parent-teacher conversation, even for ten minutes, gives you information the report cannot. Teachers often notice things they don't feel they can put in writing.",
      },
      {
        kind: "ul",
        items: [
          "How does my child settle at the start of the day?",
          "Who do they sit with, and how does that work?",
          "When do you notice them struggling — is it the task, the transition, or the group?",
          "How do they handle it when they get something wrong?",
          "What have you tried that helped?",
        ],
      },
      {
        kind: "callout",
        title: "One good conversation with a teacher often changes the picture.",
        body: "Not because the teacher has an answer, but because they've been watching your child for months in a setting you don't see. Their observations are worth as much as any assessment score.",
      },
      {
        kind: "h2",
        text: "Watch what home looks like around school.",
      },
      {
        kind: "p",
        text: "Homework at the kitchen table is a controlled environment. If your child is calm and capable there, but the report says something different, the gap is often about the classroom setting — noise, group dynamics, transitions between activities — rather than the academic content.",
      },
      {
        kind: "p",
        text: "Watch the moments before and after school. A child who is fine at 3pm on the way home but flat by 5pm may be using the last of their energy to hold it together at school. A child who is anxious every Sunday night is telling you something too.",
      },
      {
        kind: "h2",
        text: "When to book in with a paediatrician.",
      },
      {
        kind: "p",
        text: "There is no fixed threshold. What we look for is a pattern that isn't resolving with the usual adjustments: a conversation with the teacher, small changes to routine, a term of watching. If the school is raising the same concern more than once, if the child themselves is unhappy or frustrated at school in a way that isn't shifting, or if you're noticing things at home that don't line up with what the report says, that's a reasonable point to book in.",
      },
      {
        kind: "p",
        text: "The first paediatric appointment isn't an assessment. It's a conversation, with time set aside to look at the wider picture: history, development, family context, school observations. Assessment tools come later, and only if we decide together that they'll add something useful.",
      },
    ],
  },
  {
    slug: "iron-infusions-in-general-practice",
    category: "General practice",
    title:
      "Iron infusions in general practice: who they help, and what the day looks like.",
    dek: "Fatigue that never quite lifts is often iron-related. Here's how we work it up, and how the infusion itself is delivered.",
    excerpt:
      "Fatigue that never quite lifts is often iron-related. Here's how we work it up, and how the infusion itself is delivered.",
    date: "2026-07-28",
    minutes: "4 min read",
    heroImage: "/website-images/iron-infusions-article.webp",
    hero: {
      lede: "Iron deficiency is one of the most common reasons people feel more tired than they think they should. Oral iron works for most people, most of the time — but for the situations where it doesn't, an infusion in general practice is now a straightforward day.",
    },
    body: [
      {
        kind: "h2",
        text: "Who benefits from an infusion.",
      },
      {
        kind: "p",
        text: "Iron infusions are appropriate when oral iron is not enough, not tolerated, or not fast enough. That commonly includes people with ongoing losses (heavy periods, bowel-related losses), people who've tried tablets and had side effects, pregnant patients where levels need to come up quickly, and patients with malabsorption where the gut doesn't take up iron efficiently from tablets.",
      },
      {
        kind: "p",
        text: "The decision to move to an infusion is made together, based on the blood picture, the reason for the deficiency, and how you've responded so far. Reception can book you in with a GP who does infusions in-house; you don't need a referral from anyone else.",
      },
      {
        kind: "h2",
        text: "The workup before the infusion.",
      },
      {
        kind: "p",
        text: "Before an infusion is arranged, we run a full iron studies panel and, depending on your history, a broader blood workup. The point is not just to confirm the deficiency but to understand what's causing it. An infusion refills the tank; it doesn't stop the leak. Where a cause needs further investigation (for example, a colonoscopy for a middle-aged patient with unexplained iron loss), we'll organise that in parallel.",
      },
      {
        kind: "callout",
        title: "An infusion is not the shortcut.",
        body: "It is one part of a broader plan. The workup that surrounds it — understanding the cause, checking related nutrients, deciding on the follow-up interval — is where the value actually lands.",
      },
      {
        kind: "h2",
        text: "What the day looks like.",
      },
      {
        kind: "p",
        text: "The infusion itself is done in our treatment room, sitting in a recliner, and takes about 20 to 30 minutes from cannula in to cannula out. You'll be observed for a short period afterwards, so plan on being in the centre for roughly an hour in total. You can eat and drink normally before and after. Most people drive themselves home; if you'd feel more comfortable with a lift, that's fine too.",
      },
      {
        kind: "ul",
        items: [
          "Wear something with sleeves you can push up.",
          "Bring something to read; the infusion runs quietly.",
          "Tell us in advance if you've had a reaction to iron infusion previously.",
          "Let us know if you're pregnant or trying to conceive.",
        ],
      },
      {
        kind: "h2",
        text: "After the infusion.",
      },
      {
        kind: "p",
        text: "Some people feel slightly flat for a day or two, which is normal. Muscle aches or a mild headache can occur and settle quickly. A short-lived rash at the infusion site is uncommon but not unusual. Serious reactions are rare, and we screen for risk factors before booking.",
      },
      {
        kind: "p",
        text: "Iron levels improve over weeks, not days. We usually recheck bloods in 6 to 8 weeks to confirm the response and plan the next step. In many people, one infusion is enough for the year. In others, particularly where losses continue, we set a review cadence together.",
      },
    ],
  },
];

export function getArticleBySlug(slug: string): Article | undefined {
  return ARTICLES.find((a) => a.slug === slug);
}

export function getAllArticleSlugs(): string[] {
  return ARTICLES.map((a) => a.slug);
}
