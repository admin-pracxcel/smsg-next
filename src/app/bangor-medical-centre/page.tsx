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
import { buildBangorSchema } from "./schema";

export const metadata: Metadata = {
  title:
    "Bangor Medical Centre | Family GPs, Specialists and Weekday Care in the Sutherland Shire | SMSG",
  description:
    "Family GPs, visiting specialists and coordinated allied support at Shop 6, Bangor Shopping Centre. Endocrinology, geriatrics, nephrology, respiratory and sleep medicine on weekday visiting centres.",
};

const BANGOR = "bangor" as const;
const PHONE_DISPLAY = "02 8582 1318";
const PHONE_TEL = "0285821318";
const FAX_DISPLAY = "02 8582 1313";
const GOOGLE_MAP_URL = "https://maps.app.goo.gl/GcLJE8QzrMKfXy7UA";
const FACEBOOK_URL = "https://www.facebook.com/bangormedicalcentre/";

export default function BangorPage() {
  const dirQuery = directionsQueryFor(BANGOR);
  const schema = buildBangorSchema();

  return (
    <>
      {/* Breadcrumb */}
      <div className="border-b border-black/10 bg-cream-2/60">
        <div className="max-w-[1360px] mx-auto px-5 md:px-10 py-4">
          <Breadcrumb
            items={[
              { label: "SMSG", href: routes.home() },
              { label: "Bangor Medical Centre" },
            ]}
          />
        </div>
      </div>

      <LocationHero
        clinic={BANGOR}
        eyebrowLocation="Location · Bangor 2234"
        titleLead="Bangor"
        titleItalic="Medical Centre."
        lede="Family medicine and visiting specialist care in the heart of the Sutherland Shire, inside Bangor Shopping Centre on Yala Road."
        hoursLines={["Mon-Fri 9am-6pm", "Sat and Sun closed"]}
        phoneDisplay={PHONE_DISPLAY}
        phoneTel={PHONE_TEL}
        faxDisplay={FAX_DISPLAY}
        photoSrc="/website-images/bangor.webp"
        photoAlt="Bangor Medical Centre, 121 Yala Road"
        google={{
          rating: "4.8",
          reviewCount: "342",
          mapUrl: GOOGLE_MAP_URL,
        }}
      />

      <FactStrip
        facts={[
          {
            label: "GPs on site",
            value: "10",
            note: "Family GPs across weekday centres",
          },
          {
            label: "Visiting specialists",
            value: "5",
            note: "Across five specialties, no city trip needed",
          },
          {
            label: "Consulting days",
            value: "5",
            note: "Monday to Friday, 9am to 6pm",
          },
          {
            label: "Languages spoken",
            value: "6",
            valueAccent: "+",
            note: "Match with a doctor who speaks yours",
          },
        ]}
      />

      <LocationWelcome
        headingLead="Specialist depth in the Shire,"
        headingItalic="without the city trip."
        paragraphs={[
          "Bangor Medical Centre opened in 2018 to bring the SMSG model to the Sutherland Shire. Family general practice sits at the centre of what happens here, wrapped in a visiting specialist rhythm that gives our patients access to consultant physicians without waiting behind a hospital outpatient list.",
          "Ten family GPs work here alongside five consultant specialists across endocrinology, geriatrics, general medicine, nephrology, and respiratory and sleep medicine. All are independent practitioners. Bangor provides the premises, the reception team and the coordination between disciplines. The clinical decisions belong to the clinicians.",
        ]}
        bgImageSrc="/website-images/corridor-warm.webp"
      />

      <LocationVisit
        clinic={BANGOR}
        hoursHeadingLead="Open"
        hoursHeadingItalic="five days a week."
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
          eyebrow: "Weekday specialist centres",
          body: "Bangor is where several Excelsia consultant specialists hold visiting centres on weekdays. Slots book out quickly, so plan a week or two ahead where you can.",
          ctaLabel: "Book weekday appointment",
          ctaHref:
            "https://automedsystems.com.au/ams/clinics/3941/bangor-medical-centre-bangor-2234/doctors",
        }}
        gettingHereHeadingLead="Easy to find,"
        gettingHereHeadingItalic="right in the shopping centre."
        gettingHereRows={[
          {
            label: "By car",
            body: "Bangor Shopping Centre carpark, at the address itself.",
          },
          {
            label: "By bus",
            body: "Routes 961 and 962 stop at or near the shopping centre on Yala Road and Menai Road.",
          },
          {
            label: "By train",
            body: "Sutherland Station on the T4 Illawarra line or Padstow Station on the T8 Airport & South line, both connecting to local buses.",
          },
          {
            label: "Accessibility",
            body: "Wheelchair accessible with an accessible bathroom on site.",
          },
        ]}
        mapEmbedQuery="Bangor+Medical+Centre,+Shop+6+121+Yala+Road+Bangor+NSW+2234"
        mapEmbedTitle="Map of Bangor Medical Centre, Shop 6, 121 Yala Road, Bangor NSW 2234"
      />

      <LocationTeam
        clinic={BANGOR}
        sectionEyebrow="Our team at Bangor"
        sectionHeadingLead="Family GPs, visiting specialists,"
        sectionHeadingItalic="and coordinated allied support."
        sectionSupporting="Ten family GPs, five visiting consultant specialists and coordinated allied support across counselling and dietetics, all working from the same file so your care stays joined up."
        sectionImageSrc="/website-images/treatment-room.webp"
        sectionImageAlt="A treatment room at Bangor Medical Centre"
        gps={{
          eyebrow: "Family GPs",
          headingLead: "Ten doctors,",
          headingItalic: "six languages.",
          body: "Our GPs at Bangor are independent practitioners delivering their own care from the Bangor premises. Several cross-book with Earlwood, so if your regular clinician isn't in on the day, someone else on the team may have your file open and ready. Between them the team speaks Mandarin, Shanghainese and Arabic alongside English. If you'd prefer a GP who speaks your first language, our reception team can help you match.",
        }}
        specialists={{
          eyebrow: "Visiting specialists",
          headingLead: "Five consultants,",
          headingItalic: "no city trip.",
          body: "Bangor hosts five consultant physicians in visiting centres across five disciplines, which means you can see them here without a hospital referral queue or a trip into the city. A GP referral is required for the Medicare rebate on specialist consultations.",
          ctaLabel: "Explore Excelsia Specialist Centre",
          ctaHref: routes.subBrand("excelsia"),
        }}
        alliedIntro={{
          eyebrow: "Allied health",
          headingLead: "Counselling",
          headingItalic: "and dietetics.",
          body: "Our Bangor allied health includes counselling with English and Portuguese language support, and Accredited Practising Dietetics with English, Cantonese and Mandarin. You can see them independently or on a GP referral for chronic disease management or Better Access to Mental Health.",
          ctaLabel: "Meet the allied health team",
          ctaHref: routes.teamAlliedHealth(),
        }}
        alliedNote="Also on-site: nursing team and administration."
      />

      <LocationServices
        eyebrow="Services at Bangor"
        headingLead="Family medicine"
        headingItalic="plus specialist depth."
        supporting="Because Bangor combines general practice with a five-specialty visiting roster, the service list here is wider than a typical Shire GP practice."
        tiles={[
          {
            num: "01",
            title: "General practice",
            body: "Preventive health, chronic disease management, mental health care plans, health assessments, immunisations and travel medicine.",
          },
          {
            num: "02",
            title: "Women's health",
            body: "Aurora Women & Babies Health at Bangor covers antenatal shared care, obstetrics and pregnancy care, contraception including hormonal IUD and Implanon insertion and removal, cervical screening, menopause support and general women's health with Dr Colwell and Dr Geng.",
            href: routes.subBrand("aurora"),
            linkLabel: "Explore Aurora",
          },
          {
            num: "03",
            title: "Skin cancer medicine",
            body: "Clarion Skin Cancer Clinic at Bangor delivers full-body skin checks, dermoscopy and excision procedures. Dr Colwell, Dr Geng and Dr Daniel Ibrahim hold the Clarion service here.",
            href: routes.subBrand("clarion"),
            linkLabel: "Explore Clarion",
          },
          {
            num: "04",
            title: "Procedures and minor surgery",
            body: "Iron infusions, hormonal IUD and Implanon insertion and removal, cryotherapy, skin excisions and treatment room procedures, all performed in-centre.",
          },
          {
            num: "05",
            title: "Excelsia specialist consultations",
            body: "Endocrinology, geriatrics, general medicine, nephrology and respiratory and sleep medicine on visiting centres. Cardiology, gastroenterology, haematology and paediatric medicine referrals are directed to Earlwood or Sans Souci.",
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
            sub: "Choose your GP or specialist",
            href: "https://automedsystems.com.au/ams/clinics/3941/bangor-medical-centre-bangor-2234/doctors",
          },
          {
            title: "Request a repeat prescription",
            sub: "One business day turnaround",
            href: "https://automedsystems.com.au/ams/clinics/3941/bangor-medical-centre-bangor-2234/scripts/loc/1",
          },
          {
            title: "Renew a specialist referral",
            sub: "Existing patients only",
            href: "https://automedsystems.com.au/ams/clinics/3941/bangor-medical-centre-bangor-2234/referrals/loc/1",
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
            href: external.automedRegistration(BANGOR),
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
              body: "Billing at Bangor follows a mixed-billing model. Our registrar GPs and some of our specialist GPs bulk-bill routine standard consultations, and ongoing patients seen within the last twelve months are typically bulk-billed for routine visits. Health assessments and GP Chronic Condition Management Plans are usually bulk-billed. Other appointment types are generally privately billed, with Medicare rebate applying to eligible services and leaving a gap payment. Fees vary by practitioner, since each clinician sets their own billing arrangement as an independent practitioner. Individual billing details are on each clinician's profile page, and reception confirms your specific fee and out-of-pocket when you book.",
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
              body: "Sutherland Hospital is the closest public ED to Bangor.",
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
        clinic={BANGOR}
        interiorImageSrc="/website-images/bangor.webp"
        interiorImageAlt="Bangor Medical Centre exterior"
        interiorCaption="Inside Bangor Medical Centre"
        contactEyebrow="Contact Bangor"
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
          handleLabel: "Bangor Medical Centre",
        }}
        google={{
          href: GOOGLE_MAP_URL,
          summary: "4.8 stars · 342 reviews",
        }}
      />

      <LocationDarkBookCTA
        clinic={BANGOR}
        eyebrow="Book at Bangor"
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
