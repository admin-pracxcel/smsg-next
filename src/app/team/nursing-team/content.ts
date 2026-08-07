/**
 * Nursing team roster · hardcoded from source `/team/nursing-team/index.html`.
 * Nurses are not part of the practitioner JSON schema (they don't have AHPRA
 * profile pages of their own on this site). Names, roles, qualifications and
 * bio copy are ported verbatim from source. Photo filenames are the staff
 * image names as saved in `/public/website-images/staff-images/`.
 *
 * Do not invent copy. Any addition or change should come from Sim.
 */

export type NurseCard = {
  slug: string;
  name: string;
  role: string;
  photo: string; // filename under /website-images/staff-images/
  qualifications: string[];
  bio: string[];
  award?: string;
  languageNote?: string;
};

export const NURSES: NurseCard[] = [
  {
    slug: "autoshi",
    name: "Autoshi",
    role: "Endorsed Enrolled Nurse",
    photo: "Autoshi.webp",
    qualifications: [
      "Registered Nurse (Division 1), Nurse & Midwifery Board of Australia",
      "Diploma of Nursing (TAFE)",
      "Bachelor of Nursing (UTS)",
    ],
    bio: [
      "Autoshi is a Registered Nurse with a passion for providing compassionate care to patients. She is dedicated to ensuring the wellbeing of her patients. In the future she would like to learn more about Mental Health.",
    ],
    languageNote: "Speaks Bengali and Hindi in addition to English.",
  },
  {
    slug: "gabriela",
    name: "Gabriela",
    role: "Registered Nurse",
    photo: "Gabriela.webp",
    qualifications: [
      "Registered Nurse (Division 1), Nurse & Midwifery Board of Australia",
      "Bachelor of Nursing (WSU)",
      "Certificate III in Aged Care (Mercury College)",
    ],
    bio: [
      "Gabriela is dedicated to helping others and making a meaningful impact on people's lives. She strives to provide compassionate, high quality care to her patients while continuously expanding her clinical knowledge and skills. Gabriela has always been passionate about nursing and has aspired to become a nurse since a young age.",
      "Prior to completing her Bachelor of Nursing at Western Sydney University, Gabriela completed a High School Diploma in Nursing in Macedonia and her Certificate III in Aged Care from Mercury College in Sydney.",
    ],
    languageNote: "Speaks Macedonian in addition to English.",
  },
  {
    slug: "jane",
    name: "Jane",
    role: "Endorsed Enrolled Nurse",
    photo: "Jane.webp",
    qualifications: [
      "Endorsed Enrolled Nurse (Division 2), Nurse & Midwifery Board of Australia",
      "Diploma of Nursing (TAFE)",
    ],
    bio: [
      "Jane loves bringing smiles to people's faces with humour and positivity. She is open-minded and believes in spreading joy while making meaningful connections. Always approachable and friendly, Jane encourages everyone to stop by and say hello whenever they're around the practice. Currently, she is studying a Bachelor of Nursing at UTS, and is also completing her Cert III in Pathology.",
    ],
  },
  {
    slug: "kana",
    name: "Kana",
    role: "Registered Nurse",
    photo: "Kana.webp",
    qualifications: [
      "Registered Nurse (Division 1), Nurse & Midwifery Board of Australia",
      "Bachelor of Nursing (OPU)",
      "Graduate Certificate in Australian Nursing (SCU)",
    ],
    award: "SMSG Employee of the Year Awardee 2022",
    bio: [
      "Kana completed her Bachelor of Nursing in Japan and completed a Graduate Certificate in Australian Nursing in Queensland. She enjoys working in a multicultural environment and hopes to support people unconditionally with her skills and compassion.",
    ],
    languageNote: "Speaks Japanese in addition to English.",
  },
  {
    slug: "nancy",
    name: "Nancy",
    role: "Registered Nurse",
    photo: "Nanssy.webp",
    qualifications: [
      "Registered Nurse (Division 1), Nurse & Midwifery Board of Australia",
      "Bachelor of Nursing (UOW)",
    ],
    bio: [
      "Nancy is a Registered Nurse who brings a balance of clinical expertise and genuine compassion to her practice. She has completed her Bachelor of Nursing at the University of Wollongong and developed her clinical experience at Liverpool Hospital, gaining exposure to various patient needs and a high pressure healthcare environment.",
      "She is passionate about providing safe, holistic and patient centred care. Nancy also enjoys building meaningful relationships with patients and colleagues, striving to make every interaction meaningful. Driven by curiosity and a love for learning, she continually seeks opportunities to expand her skills and knowledge to make a positive impact in every aspect of her nursing practice.",
    ],
    languageNote: "Speaks Arabic and Assyrian in addition to English.",
  },
  {
    slug: "shanice",
    name: "Shanice",
    role: "Registered Nurse",
    photo: "Shanice.webp",
    qualifications: [
      "Registered Nurse (Division 1), Nurse & Midwifery Board of Australia",
      "Bachelor of Nursing (UTS)",
    ],
    bio: [
      "Shanice is a compassionate and dedicated Registered Nurse with a strong commitment to delivering holistic, patient-centred care. She is passionate about building meaningful therapeutic relationships and supporting patients to actively engage in and adhere to their healthcare plans to optimise their overall wellbeing. Shanice completed her Bachelor of Nursing at the University of Technology Sydney and is committed to contributing positively to the health and wellbeing of her community.",
    ],
    languageNote: "Speaks basic Arabic in addition to English.",
  },
  {
    slug: "thabatta",
    name: "Thabatta",
    role: "Endorsed Enrolled Nurse",
    photo: "Thabatta.webp",
    qualifications: [
      "Endorsed Enrolled Nurse (Division 2), Nurse & Midwifery Board of Australia",
      "Diploma of Nursing (TAFE)",
    ],
    bio: [
      "Thabatta is an Enrolled Nurse with experience in both surgical and general practice. She takes great pleasure in helping others and brightening their day. Treating everyone with kindness and respect is central to her approach.",
    ],
    languageNote: "Speaks Portuguese in addition to English.",
  },
];
