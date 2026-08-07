/**
 * Administration roster · hardcoded from source `/team/administration/index.html`.
 * Admin staff (Supervisors and Patient Support Officers) are not part of the
 * practitioner JSON schema. Copy is ported verbatim from source; do not
 * invent additions or edits.
 */

export type AdminCard = {
  slug: string;
  name: string;
  role: string;
  photo: string; // filename under /website-images/staff-images/
  qualifications?: string[];
  bio: string[];
  languageNote?: string;
};

export const ADMIN_STAFF: AdminCard[] = [
  {
    slug: "ann",
    name: "Ann",
    role: "Supervisor, Patient Support Officer",
    photo: "Ann.webp",
    qualifications: ["Bachelor of Psychology (Hons) (UOW)"],
    bio: [
      "Ann is a university graduate with a research background, and has a strong interest in helping others. In her free time she enjoys reading, running and gardening.",
    ],
  },
  {
    slug: "gemma",
    name: "Gemma",
    role: "Supervisor, Patient Support Officer",
    photo: "Gemma.webp",
    qualifications: [
      "Certificate II in Hospitality (Food and Beverage) (TAFE)",
    ],
    bio: [
      "Gemma is a caring, helpful and approachable person who enjoys helping others. Before joining SMSG, Gemma worked in a variety of caring and customer service roles. She is keen to bring this experience to contribute to the healthcare field. While not at work, Gemma enjoys playing netball and dancing.",
    ],
  },
  {
    slug: "kate",
    name: "Kate",
    role: "Supervisor, Patient Support Officer",
    photo: "Kate.webp",
    qualifications: [
      "Cert II Business (Administration) (TAFE)",
      "Cert III Business (Administration) (TAFE)",
    ],
    bio: [
      "Kate has a positive nature and is a kind, caring and friendly person who loves helping others. She has an extensive background as a receptionist in general practice and recently moved from Regional NSW to Sydney. While not at work, Kate enjoys playing golf and being with family.",
    ],
  },
  {
    slug: "zoe",
    name: "Zoe",
    role: "Supervisor, Patient Support Officer",
    photo: "Zoe.webp",
    bio: [
      "Zoe is a friendly and outgoing person who enjoys a challenge. She is currently studying a Bachelor of Engineering (Bioinformatics) at the University of New South Wales, where she gets to use her love for science and programming to build all sorts of interesting things. She aims to use her enthusiastic and positive attitude to create a good customer experience.",
    ],
    languageNote: "Speaks fluent Greek in addition to English.",
  },
  {
    slug: "aarya",
    name: "Aarya",
    role: "Patient Support Officer",
    photo: "Aarya.webp",
    bio: [
      "Aarya is passionate about helping people, with a background in teaching and tutoring. She is currently studying a Bachelor of Science & Arts at Macquarie University.",
      "In her spare time, Aarya loves to read classical fiction novels and is a movie enthusiast. Her enthusiasm is infectious and can help make patients feel more comfortable and at ease.",
    ],
    languageNote: "Speaks Hindi and Marathi in addition to English.",
  },
  {
    slug: "alisar",
    name: "Alisar",
    role: "Patient Support Officer",
    photo: "Alisar.webp",
    qualifications: ["Bachelor of Medical Science (Human Pathology) (UNSW)"],
    bio: [
      "Alisar holds a Bachelor of Medical Science with a major in Human Pathology. She has a strong interest in laboratory work and is passionate about contributing positively to community health outcomes.",
      "Outside of her professional interests, Alisar enjoys adventurous activities including paragliding and rollercoaster experiences, reflecting her enthusiastic and dynamic personality.",
    ],
    languageNote: "Speaks Arabic in addition to English.",
  },
  {
    slug: "beyza",
    name: "Beyza",
    role: "Patient Support Officer",
    photo: "Beyza.webp",
    bio: [
      "Beyza is currently studying a double degree in Psychology and Cognitive and Brain Science. She is a friendly and caring person who enjoys reading, sports and going to the beach.",
    ],
    languageNote: "Speaks Turkish in addition to English.",
  },
  {
    slug: "brigid",
    name: "Brigid",
    role: "Patient Support Officer",
    photo: "Brigid.webp",
    bio: [
      "Brigid is currently studying a Bachelor of Industrial Design at the University of New South Wales. She strives for high quality patient care and wants to create a warm and friendly environment. She enjoys reading and rock climbing in her spare time.",
    ],
  },
  {
    slug: "emi",
    name: "Emi",
    role: "Patient Support Officer",
    photo: "Emi.webp",
    qualifications: ["Bachelor of International Studies (UNSW)"],
    bio: [
      "Emi has recently completed her Bachelor of International Studies at UNSW where she majored in Spanish and Global Development. She plans to continue to postgraduate studies in International Health Development. She has experience in a wide range of customer service roles and strives to connect with customers and make them feel welcome and well looked after. In her free time she enjoys listening to music, hiking and camping, reading, photography and spending time with friends.",
    ],
    languageNote: "Speaks Japanese and intermediate German in addition to English.",
  },
  {
    slug: "horatia",
    name: "Horatia",
    role: "Patient Support Officer",
    photo: "Horatia.webp",
    qualifications: ["Bachelor of Science (Medical Science) (USyd)"],
    bio: [
      "Horatia recently completed a Bachelor of Science (Medical Science) at the University of Sydney. She is interested in pursuing public health and is passionate about seeing communities access quality healthcare. In her spare time, Horatia loves to listen to music and read.",
    ],
    languageNote: "Speaks fluent Mandarin in addition to English.",
  },
  {
    slug: "jacqueline",
    name: "Jacqueline",
    role: "Patient Support Officer",
    photo: "Jacqueline.webp",
    qualifications: ["Bachelor of Advanced Science (Pre-Medicine) (UTS)"],
    bio: [
      "Jacqueline is a warm, approachable individual with a strong passion for healthcare and helping others. She has completed her Bachelor of Advanced Science (Pre-Medicine) from the University of Technology Sydney and has ambitions for postgraduate studies in Medicine. With a deep love for science and a genuine commitment to patient care, Jacqueline looks forward to making a positive impact in people's lives by combining knowledge with compassion.",
    ],
    languageNote: "Speaks fluent Korean in addition to English.",
  },
  {
    slug: "maureen",
    name: "Maureen",
    role: "Patient Support Officer",
    photo: "Maureen.webp",
    bio: [
      "Maureen is currently studying a Bachelor of Policing at Western Sydney University. She has experience working in paralegal roles, medical centres, and retail environments. She is organised and approachable, and enjoys working with people while ensuring tasks and operations run smoothly. Outside of work and study, she is passionate about hiking, camping, and discovering new trails.",
    ],
    languageNote: "Speaks Bengali in addition to English.",
  },
  {
    slug: "mika",
    name: "Mika",
    role: "Patient Support Officer",
    photo: "Mika.webp",
    bio: [
      "Mika is a compassionate and approachable professional with experience in NDIS support work. She is dedicated to helping others and fostering a positive, collaborative work environment.",
    ],
    languageNote: "Speaks Cantonese in addition to English.",
  },
  {
    slug: "myra",
    name: "Myra",
    role: "Patient Support Officer",
    photo: "Myra.webp",
    bio: [
      "Myra has a background in customer service and administration and brings a genuine passion for helping people and creating positive experiences. She loves building meaningful relationships with patients and takes pride in offering caring, attentive support to both patients and colleagues.",
      "She contributes warmly to a friendly and professional workplace and is always happy to help wherever needed. Outside of work, Myra enjoys spending quality time with family and friends.",
    ],
    languageNote: "Speaks Greek in addition to English.",
  },
  {
    slug: "nadine",
    name: "Nadine",
    role: "Patient Support Officer",
    photo: "Nadine.webp",
    qualifications: ["Bachelor of Psychology (MQ)"],
    bio: [
      "Nadine has just completed her Bachelor of Psychology and plans to continue to postgraduate study in clinical psychology with a passion for mental health and helping others. In her free time, she enjoys designing and sewing clothes to sell online across Australia.",
    ],
    languageNote: "Speaks fluent Arabic in addition to English.",
  },
  {
    slug: "natasha",
    name: "Natasha",
    role: "Patient Support Officer",
    photo: "Natasha.webp",
    bio: [
      "Natasha is an outgoing and empathetic person who loves going above and beyond to help others. She is studying a Bachelor of Science (Medical Science) majoring in Immunology and Pathology at the University of Sydney, and is interested in pursuing postgraduate Medicine or Dentistry. She is passionate about fashion and boating, and enjoys making handmade jewellery for local primary school market stalls.",
    ],
  },
  {
    slug: "nishtha",
    name: "Nishtha",
    role: "Patient Support Officer",
    photo: "Nishtha.webp",
    bio: [
      "Nishtha is currently studying a Bachelor of Business at the University of Technology Sydney. She is an approachable and kind individual with experience in customer-facing environments, and she enjoys building genuine connections. Nishtha is bilingual, allowing her to communicate effectively with a diverse range of people. In her spare time, she loves to bake, attend markets, and meet new people, bringing warmth and enthusiasm to everything she does.",
    ],
    languageNote: "Speaks Hindi and Urdu in addition to English.",
  },
  {
    slug: "sumaiya",
    name: "Sumaiya",
    role: "Patient Support Officer",
    photo: "Sumaiya.webp",
    bio: [
      "Sumaiya is friendly, dedicated and passionate about creating a welcoming and supportive environment for patients. She strives to ensure each patient feels comfortable and well cared for throughout their experience.",
      "Outside of work, she enjoys going out and exploring new places, and when at home, loves watching movies and series.",
    ],
    languageNote: "Speaks Bengali in addition to English.",
  },
  {
    slug: "zafira",
    name: "Zafira",
    role: "Patient Support Officer",
    // Source uses `⁨Zafira.webp` with a leading invisible marker character.
    // Kept verbatim so the src matches the file on disk.
    photo: "⁨Zafira.webp",
    bio: [
      "Zafira is a friendly, approachable and empathetic person who has a strong passion for healthcare and going above and beyond to help others. Zafira is currently studying a Bachelor of Science (Neuroscience) and Master of Nursing at the University of Sydney.",
      "In combination with her studies and personal goals, Zafira is committed to expanding her knowledge and skills within the medical field to support high-quality, patient-centred care. Outside of work and study, she enjoys travelling, wellness, fitness and beach days.",
    ],
    languageNote: "Speaks Greek in addition to English.",
  },
];
