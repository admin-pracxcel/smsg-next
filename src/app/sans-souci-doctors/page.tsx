import type { Metadata } from "next";
import { Breadcrumb } from "@/components/Breadcrumb";
import { JsonLd } from "@/components/JsonLd";
import { routes, external } from "@/lib/routes";
import { LocationHero } from "@/components/location/LocationHero";
import { FactStrip } from "@/components/location/FactStrip";
import { LocationWelcome } from "@/components/location/LocationWelcome";
import {
  LocationVisit,
  directionsQueryFor,
} from "@/components/location/LocationVisit";
import { LocationTeam } from "@/components/location/LocationTeam";
import { LocationServices } from "@/components/location/LocationServices";
import { LocationQuickActions } from "@/components/location/LocationQuickActions";
import {
  LocationFeesAndAfterHours,
  EditorialLink,
} from "@/components/location/LocationFeesAndAfterHours";
import { LocationContact } from "@/components/location/LocationContact";
import { LocationDarkBookCTA } from "@/components/location/LocationDarkBookCTA";
import { buildSansSouciSchema } from "./schema";

export const metadata: Metadata = {
  title:
    "Sans Souci Doctors | Family GPs, Kids' Dr Paediatrics and Allied Health Bayside | SMSG",
  description:
    "Family GPs, developmental paediatrics, psychology, physiotherapy, dietetics and speech pathology at 39 Campbell Street. Kids' Dr primary base for developmental assessment and coordinated child health.",
};

const SANSSOUCI = "sanssouci" as const;
const PHONE_DISPLAY = "02 7923 9103";
const PHONE_TEL = "0279239103";
const FAX_DISPLAY = "02 7923 9108";
const GOOGLE_MAP_URL = "https://maps.app.goo.gl/eksWcSRLtboNrcyP7";
const FACEBOOK_URL = "https://www.facebook.com/sanssoucidrs";

export default function SansSouciPage() {
  const dirQuery = directionsQueryFor(SANSSOUCI);
  const schema = buildSansSouciSchema();

  return (
    <>
      {/* Breadcrumb */}
      <div className="border-b border-black/10 bg-cream-2/60">
        <div className="max-w-[1360px] mx-auto px-5 md:px-10 py-4">
          <Breadcrumb
            items={[
              { label: "SMSG", href: routes.home() },
              { label: "Sans Souci Doctors" },
            ]}
          />
        </div>
      </div>

      <LocationHero
        clinic={SANSSOUCI}
        eyebrowLocation="Location · Sans Souci 2219"
        titleLead="Sans Souci"
        titleItalic="Doctors."
        lede="Family medicine, developmental paediatrics and the deepest allied health team in the group, bayside on Campbell Street just off Rocky Point Road."
        hoursLines={["Mon-Fri 9am-6pm", "Sat and Sun closed"]}
        phoneDisplay={PHONE_DISPLAY}
        phoneTel={PHONE_TEL}
        faxDisplay={FAX_DISPLAY}
        photoSrc="/website-images/san-souci.webp"
        photoAlt="Sans Souci Doctors, 39 Campbell Street"
        google={{
          rating: "4.8",
          reviewCount: "311",
          mapUrl: GOOGLE_MAP_URL,
        }}
      />

      <FactStrip
        facts={[
          {
            label: "GPs on site",
            value: "9",
            note: "Family GPs, several cross-booking with Earlwood",
          },
          {
            label: "Kids' Dr paediatricians",
            value: "2",
            note: "The Kids' Dr team's primary base",
          },
          {
            label: "Allied health team",
            value: "7",
            note: "The deepest allied health group across SMSG",
          },
          {
            label: "Languages spoken",
            value: "9",
            valueAccent: "+",
            note: "Match with a clinician who speaks yours",
          },
        ]}
      />

      <LocationWelcome
        headingLead="The bayside home of Kids' Dr"
        headingItalic="and our largest allied health team."
        paragraphs={[
          "Sans Souci Doctors opened in 2019 as the group's third centre and grew into the primary base for Kids' Dr and the deepest concentration of allied health across SMSG. Nine family GPs anchor the day-to-day, alongside two Kids' Dr paediatricians, two visiting Excelsia consultants, and a seven-strong allied health team covering psychology, counselling, speech pathology, physiotherapy and dietetics.",
          "Every clinician here works as an independent practitioner. Sans Souci provides the rooms, the reception team and the coordination between disciplines. The clinical work and the therapeutic relationships are theirs.",
        ]}
        bgImageSrc="/website-images/corridor-warm.webp"
      />

      <LocationVisit
        clinic={SANSSOUCI}
        hoursHeadingLead="Open five days"
        hoursHeadingItalic="a week."
        hoursRows={[
          { day: "Monday", hours: "9:00am to 6:00pm" },
          { day: "Tuesday", hours: "9:00am to 6:00pm" },
          { day: "Wednesday", hours: "9:00am to 6:00pm" },
          { day: "Thursday", hours: "9:00am to 6:00pm" },
          { day: "Friday", hours: "9:00am to 6:00pm" },
          { day: "Saturday", hours: "Closed", muted: true },
          { day: "Sunday", hours: "Closed", muted: true },
        ]}
        callout={{
          eyebrow: "Paediatric assessment centres",
          body: "Kids' Dr paediatric appointments and psychometric assessments book out further ahead than routine GP visits. Plan a week or two ahead for developmental assessment or ADHD and autism appointments.",
          ctaLabel: "Book Kids' Dr appointment",
          ctaHref:
            "https://automedsystems.com.au/ams/clinics/4895/sans-souci-drs-2219/doctors",
        }}
        gettingHereHeadingLead="A short walk"
        gettingHereHeadingItalic="from Rocky Point Road."
        gettingHereRows={[
          {
            label: "By car",
            body: "Street parking on and around Campbell Street plus nearby council carparks are the most reliable options.",
          },
          {
            label: "By bus",
            body: "Routes 476 and 477 stop a short walk away on Rocky Point Road.",
          },
          {
            label: "By train",
            body: "Kogarah Station is the closest railway hub, with direct bus connections to Sans Souci.",
          },
          {
            label: "Accessibility",
            body: "The centre is wheelchair accessible with an accessible bathroom on site.",
          },
        ]}
        mapEmbedQuery="Sans+Souci+Doctors,+39+Campbell+Street+Sans+Souci+NSW+2219"
        mapEmbedTitle="Map of Sans Souci Doctors, 39 Campbell Street, Sans Souci NSW 2219"
      />

      <LocationTeam
        clinic={SANSSOUCI}
        sectionEyebrow="Our team at Sans Souci"
        sectionHeadingLead="Family GPs, paediatricians, visiting specialists and allied health,"
        sectionHeadingItalic="coordinated."
        sectionSupporting="Nine family GPs, two paediatricians for Kids' Dr, two visiting Excelsia consultants and a seven-strong allied health team, all working from the same file so your care stays joined up."
        sectionImageSrc="/website-images/treatment-room.webp"
        sectionImageAlt="A consulting room at Sans Souci Doctors"
        gps={{
          eyebrow: "Family GPs",
          headingLead: "Nine doctors,",
          headingItalic: "six languages.",
          body: "Our GPs at Sans Souci are independent practitioners delivering their own care from the Sans Souci premises, and several cross-book with Earlwood, so if your regular clinician isn't in on the day, someone else on the team will have your file open and ready. Between them the team speaks Cantonese, Mandarin, Hakka, Dutch, Danish and Malay alongside English. If you'd prefer a GP who speaks your first language, our reception team can help you match.",
        }}
        paediatricians={{
          eyebrow: "Kids' Dr paediatricians",
          headingLead: "The Kids' Dr team's",
          headingItalic: "home base.",
          body: "Sans Souci is where Kids' Dr is primarily based. Two developmental and general paediatricians consult here, working closely with the allied health team on assessment, diagnosis and coordinated follow-up for children.",
          ctaLabel: "Explore Kids' Dr",
          ctaHref: routes.subBrand("kidsdr"),
        }}
        specialists={{
          eyebrow: "Visiting specialists",
          headingLead: "Two consultants,",
          headingItalic: "no city trip.",
          body: "Sans Souci hosts two consultant physicians in visiting adult centres across nephrology and geriatrics with general medicine. A GP referral is required for the Medicare rebate on specialist consultations. Other Excelsia specialties are accessible by cross-referral to Earlwood or Bangor.",
          ctaLabel: "Explore Excelsia Specialist Centre",
          ctaHref: routes.subBrand("excelsia"),
        }}
        alliedIntro={{
          eyebrow: "Allied health",
          headingLead: "Psychology, counselling, physiotherapy,",
          headingItalic: "dietetics and speech pathology.",
          body: "Our Sans Souci allied health team is the deepest in the group, supporting the paediatric caseload and general adult referrals. All practitioners are Medicare-registered. You can see them independently or on a GP referral for chronic disease management or Better Access to Mental Health.",
          ctaLabel: "Meet the allied health team",
          ctaHref: routes.teamAlliedHealth(),
        }}
        alliedNote="Also on-site: nursing team and administration."
      />

      <LocationServices
        eyebrow="Services at Sans Souci"
        headingLead="Family medicine plus"
        headingItalic="paediatric and allied depth."
        supporting="Because Sans Souci is where Kids' Dr is primarily based and where our largest allied health team consults, the service mix here is distinctive across the group."
        tiles={[
          {
            num: "01",
            title: "General practice",
            body: "Preventive health, chronic disease management, mental health care plans, health assessments, immunisations and travel medicine.",
          },
          {
            num: "02",
            title: "Kids' health",
            body: "Kids' Dr is primarily based at Sans Souci. Developmental paediatrics, ADHD and autism assessment, developmental assessment, behavioural concerns, and learning difficulties, with coordinated psychology, speech pathology and physiotherapy input.",
            href: routes.subBrand("kidsdr"),
            linkLabel: "Explore Kids' Dr",
          },
          {
            num: "03",
            title: "Women's health",
            body: "Aurora Women & Babies Health at Sans Souci covers cervical screening, Implanon insertion and removal, menopause support, breastfeeding and lactation support, and general women's health. Hormonal IUD insertions are directed to our Earlwood or Bangor sites; IUD removal is available at Sans Souci.",
            href: routes.subBrand("aurora"),
            linkLabel: "Explore Aurora",
          },
          {
            num: "04",
            title: "Allied health",
            body: "Psychology and psychometric assessment, counselling in English and Portuguese, physiotherapy including paediatric physiotherapy, dietetics, and speech pathology.",
          },
          {
            num: "05",
            title: "Excelsia specialist consultations",
            body: "Nephrology and geriatrics with general medicine on visiting centres. Cardiology, gastroenterology, haematology, endocrinology, and respiratory and sleep medicine referrals are directed to Earlwood or Bangor.",
            href: routes.subBrand("excelsia"),
            linkLabel: "Explore Excelsia",
          },
          {
            num: "06",
            title: "Diagnostics on-site",
            body: "ECG and spirometry.",
          },
        ]}
      />

      <LocationQuickActions
        eyebrow="Booking, prescriptions and referrals"
        headingLead="Every practitioner here"
        headingItalic="is bookable online."
        supporting="Repeat prescriptions and referral renewals can be requested through Automed without needing to come in. Most are turned around within one business day."
        actions={[
          {
            title: "Book an appointment",
            sub: "Choose your GP, paediatrician or allied health practitioner",
            href: "https://automedsystems.com.au/ams/clinics/4895/sans-souci-drs-2219/doctors",
          },
          {
            title: "Request a repeat prescription",
            sub: "One business day turnaround",
            href: "https://automedsystems.com.au/ams/clinics/4895/sans-souci-drs-2219/scripts/loc/1",
          },
          {
            title: "Renew a specialist referral",
            sub: "Existing patients only",
            href: "https://automedsystems.com.au/ams/clinics/4895/sans-souci-drs-2219/referrals/loc/1",
          },
          {
            title: "Register as a new patient",
            sub: "So your file is ready on the day",
            href: routes.patientInfo("new-patient-registration"),
            external: false,
          },
          {
            title: "Register with MyMedicare",
            sub: "Voluntary Medicare enrolment",
            href: external.automedRegistration(SANSSOUCI),
          },
          {
            title: "Telehealth appointments",
            sub: "Where clinically appropriate",
            href: routes.service("telehealth"),
            external: false,
          },
        ]}
      />

      <LocationFeesAndAfterHours
        fees={{
          eyebrow: "Fees and billing",
          headingLead: "Clear on cost",
          headingItalic: "before you book.",
          rows: [
            {
              label: "Bulk billing",
              body: "Billing at Sans Souci follows a mixed-billing model. Our registrar GPs and some of our specialist GPs bulk-bill routine standard consultations, and ongoing patients seen within the last twelve months are typically bulk-billed for routine visits. Health assessments and GP Chronic Condition Management Plans are usually bulk-billed. Other appointment types are generally privately billed, with Medicare rebate applying to eligible services and leaving a gap payment. Fees vary by practitioner, since each clinician sets their own billing arrangement as an independent practitioner. Individual billing details are on each clinician's profile page, and reception confirms your specific fee and out-of-pocket when you book.",
            },
            {
              label: "Group fee schedule",
              body: (
                <>
                  For general information about consultation fees, procedure
                  costs and how billing works across all three SMSG centres,
                  see our full{" "}
                  <EditorialLink href={routes.patientInfo("fees-and-billing")}>
                    Fees &amp; Billing page
                  </EditorialLink>
                  .
                </>
              ),
            },
            {
              label: "Medicare and private health",
              body: "Bring your Medicare card and any private health details to your first appointment. Rebates are processed on the day where possible.",
            },
          ],
        }}
        afterHours={{
          eyebrow: "After hours",
          headingLead: "When we're closed,",
          headingItalic: "who to call.",
          rows: [
            {
              label: "Urgent care outside our hours",
              body: (
                <>
                  Call{" "}
                  <EditorialLink href="tel:137425">
                    13 SICK (13 74 25)
                  </EditorialLink>{" "}
                  to arrange an after-hours home visit through the National
                  Home Doctor Service.
                </>
              ),
            },
            {
              label: "Life-threatening emergencies",
              body: (
                <>
                  Dial <EditorialLink href="tel:000">000</EditorialLink> or
                  attend your nearest emergency department.
                </>
              ),
            },
            {
              label: "Nearest emergency department",
              body: "St George Hospital in Kogarah is the closest public ED to Sans Souci.",
            },
            {
              label: "Health advice line",
              body: (
                <>
                  For non-emergency health advice, call Healthdirect on{" "}
                  <EditorialLink href="tel:1800022222">
                    1800 022 222
                  </EditorialLink>
                  , available 24 hours.
                </>
              ),
            },
          ],
        }}
      />

      <LocationContact
        clinic={SANSSOUCI}
        interiorImageSrc="/website-images/san-souci.webp"
        interiorImageAlt="Sans Souci Doctors reception area"
        interiorCaption="Inside Sans Souci Doctors"
        contactEyebrow="Contact Sans Souci"
        contactHeadingLead="Reach us"
        contactHeadingItalic="directly."
        phoneDisplay={PHONE_DISPLAY}
        phoneTel={PHONE_TEL}
        phoneHoursNote="Mon-Fri 9am-6pm"
        faxDisplay={FAX_DISPLAY}
        faxNote="For clinical referrals and reports"
        emailNote="Please don't send clinically urgent matters by email."
        addressDirectionsHref={`https://www.google.com/maps/dir/?api=1&destination=${dirQuery}`}
        followEyebrow="Follow us"
        followHeadingLead="Practice updates"
        followHeadingItalic="on Facebook."
        facebook={{
          href: FACEBOOK_URL,
          handleLabel: "Sans Souci Doctors",
        }}
        google={{
          href: GOOGLE_MAP_URL,
          summary: "4.8 stars · 311 reviews",
        }}
      />

      <LocationDarkBookCTA
        clinic={SANSSOUCI}
        eyebrow="Book at Sans Souci"
        headingLead="Ready when"
        headingItalic="you are."
        supporting={`Online booking is the fastest way. If the appointment type you need isn't visible online, call the reception team on ${PHONE_DISPLAY} and they'll fit you in.`}
        phoneDisplay={PHONE_DISPLAY}
        phoneTel={PHONE_TEL}
      />

      <JsonLd data={schema as unknown as Parameters<typeof JsonLd>[0]["data"]} />
    </>
  );
}
