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
import { buildEarlwoodSchema } from "./schema";

export const metadata: Metadata = {
  title:
    "Earlwood Medical Centre | Family GPs, Specialists and Saturday Appointments | SMSG",
  description:
    "Family GPs, visiting specialists, allied health and Saturday centres at 352-354 Homer Street Earlwood. Sixteen GPs and thirteen specialists across ten disciplines.",
};

const EARLWOOD = "earlwood" as const;
const PHONE_DISPLAY = "02 9554 7788";
const PHONE_TEL = "0295547788";
const FAX_DISPLAY = "02 9554 7733";
const GOOGLE_MAP_URL = "https://maps.app.goo.gl/orET9Ex7YTUNnis1A";
const FACEBOOK_URL = "https://www.facebook.com/earlwoodmedicalcentre/";

export default function EarlwoodPage() {
  const dirQuery = directionsQueryFor(EARLWOOD);
  const schema = buildEarlwoodSchema();

  return (
    <>
      {/* Breadcrumb */}
      <div className="border-b border-black/10 bg-cream-2/60">
        <div className="max-w-[1360px] mx-auto px-5 md:px-10 py-4">
          <Breadcrumb
            items={[
              { label: "SMSG", href: routes.home() },
              { label: "Earlwood Medical Centre" },
            ]}
          />
        </div>
      </div>

      <LocationHero
        clinic={EARLWOOD}
        eyebrowLocation="Location · Earlwood 2206"
        titleLead="Earlwood"
        titleItalic="Medical Centre."
        lede="Family medicine, visiting specialists and allied health, at the corner of Homer Street where our practice was founded in 2014."
        hoursLines={["Mon-Fri 9am-6pm", "Sat 9am-3pm · Sun closed"]}
        phoneDisplay={PHONE_DISPLAY}
        phoneTel={PHONE_TEL}
        faxDisplay={FAX_DISPLAY}
        photoSrc="/website-images/earlwood.webp"
        photoAlt="Earlwood Medical Centre, 352-354 Homer Street"
        google={{
          rating: "4.6",
          reviewCount: "713",
          mapUrl: GOOGLE_MAP_URL,
        }}
      />

      <FactStrip
        facts={[
          {
            label: "GPs on site",
            value: "15",
            note: "Consultant specialist GPs and specialist GPs",
          },
          {
            label: "Visiting specialists",
            value: "13",
            note: "Across ten specialties, no city trip needed",
          },
          {
            label: "Saturday hours",
            value: "9 - 3",
            note: "Only SMSG centre that opens Saturdays",
          },
          {
            label: "Languages spoken",
            value: "11",
            valueAccent: "+",
            note: "Match with a doctor who speaks yours",
          },
        ]}
      />

      <LocationWelcome
        headingLead="The whole of SMSG,"
        headingItalic="in one address."
        paragraphs={[
          "Earlwood Medical Centre was founded in 2014 as the founding centre of the SMSG group, and has been part of Sydney's health landscape ever since. It's our flagship location and where you'll find the widest cross-section of the SMSG team, with sixteen GPs, thirteen visiting specialists, and the full allied health group all consulting under one roof.",
          "Whether you're new to the area, looking for a doctor who speaks your language, or after specialist care you'd otherwise need a hospital referral for, Earlwood is the location that can most likely accommodate. It's also the only SMSG centre that opens on Saturdays, which makes it the go-to for anyone working weekdays, for parents catching up on children's appointments outside of school hours, and for patients coming in from further afield.",
        ]}
        bgImageSrc="/website-images/corridor-warm.webp"
      />

      <LocationVisit
        clinic={EARLWOOD}
        hoursHeadingLead="Open six days,"
        hoursHeadingItalic="including Saturday."
        hoursRows={[
          { day: "Monday", hours: "9:00am to 6:00pm" },
          { day: "Tuesday", hours: "9:00am to 6:00pm" },
          { day: "Wednesday", hours: "9:00am to 6:00pm" },
          { day: "Thursday", hours: "9:00am to 6:00pm" },
          { day: "Friday", hours: "9:00am to 6:00pm" },
          {
            day: "Saturday",
            hours: "9:00am to 3:00pm",
            emphasise: true,
          },
          { day: "Sunday", hours: "Closed", muted: true },
        ]}
        callout={{
          eyebrow: "Saturday hours",
          body: "Earlwood is the only SMSG location open on Saturdays. Weekend appointments book out quickly, so plan a week ahead where you can.",
          ctaLabel: "Book Saturday appointment",
          ctaHref:
            "https://automedsystems.com.au/ams/clinics/5308/earlwood-medical-centre-earlwood-2206/doctors",
        }}
        gettingHereHeadingLead="Easy to find,"
        gettingHereHeadingItalic="easy to reach."
        gettingHereRows={[
          {
            label: "By car",
            body: "Public carpark just off Joy Avenue.",
          },
          {
            label: "By bus",
            body: "Bus stop on Homer Street, under a minute's walk from the door.",
          },
          {
            label: "By train",
            body: "Bardwell Park is the nearest station.",
          },
          {
            label: "Accessibility",
            body: "Wheelchair accessible with an accessible bathroom on site.",
          },
        ]}
        mapEmbedQuery="352+Homer+Street,+Earlwood+NSW+2206"
        mapEmbedTitle="Map of Earlwood Medical Centre, 352-354 Homer Street, Earlwood NSW 2206"
      />

      <LocationTeam
        clinic={EARLWOOD}
        sectionEyebrow="Our team at Earlwood"
        sectionHeadingLead="Family GPs, specialists, allied health,"
        sectionHeadingItalic="coordinated."
        sectionSupporting="Sixteen family GPs, thirteen visiting specialists and a full allied health team, all working from the same file so your care stays joined up."
        sectionImageSrc="/website-images/treatment-room.webp"
        sectionImageAlt="A treatment room inside Earlwood Medical Centre"
        gps={{
          eyebrow: "Family GPs",
          headingLead: "Fifteen doctors,",
          headingItalic: "eleven languages.",
          body: "Our GPs at Earlwood are independent practitioners delivering their own care from the Earlwood premises, and several cross-book with Bangor or Sans Souci, so if your regular clinician isn't in on the day, someone else on the team will have your file open and ready. Between them the team speaks Mandarin, Cantonese, Shanghainese, Malay, Arabic, Dutch, Danish, Sinhalese, Taiwanese, Hokkien and Hakka. If you'd prefer a GP who speaks your first language, our reception team can help you match.",
        }}
        specialists={{
          eyebrow: "Visiting specialists",
          headingLead: "Excelsia physicians and surgeons,",
          headingItalic: "no city trip.",
          body: "Earlwood is our largest specialist hub. Excelsia consultants hold visiting centres with us across nine disciplines: cardiology, endocrinology, gastroenterology, geriatrics, haematology, nephrology, respiratory and sleep medicine, paediatric medicine, and general medicine. You can see many specialists here without needing a hospital referral queue or a trip into the city, and a GP referral is required for the Medicare rebate on specialist consultations.",
          ctaLabel: "See Excelsia Specialist Centre",
          ctaHref: routes.subBrand("excelsia"),
        }}
        alliedIntro={{
          eyebrow: "Allied health",
          headingLead: "Rehab, mental health,",
          headingItalic: "nutrition and more.",
          body: "Our Earlwood allied health team supports physical rehabilitation, mental health, nutrition and podiatry through Medicare-registered practitioners. You can see them independently or on a GP referral for chronic disease management.",
          ctaLabel: "Meet the allied health team",
          ctaHref: routes.teamAlliedHealth(),
        }}
        alliedNote="Also on-site: nursing team and administration."
      />

      <LocationServices
        eyebrow="Services at Earlwood"
        headingLead="The full SMSG service list,"
        headingItalic="under one roof."
        supporting="Because Earlwood houses the widest team, it also runs the widest set of services. Everything below is available in-centre without a hospital referral."
        tiles={[
          {
            num: "01",
            title: "General practice",
            body: "Preventive health, chronic disease management, mental health care plans, health assessments, immunisations, and travel medicine.",
          },
          {
            num: "02",
            title: "Women's health",
            body: "Aurora Women & Babies Health is largest at Earlwood. Antenatal shared care, contraception, menopause care, cervical screening and breastfeeding support.",
            href: routes.subBrand("aurora"),
            linkLabel: "Explore Aurora",
          },
          {
            num: "03",
            title: "Procedures and minor surgery",
            body: "Iron infusions, hormonal IUD insertion and removal, contraceptive implants, cryotherapy, skin excisions and cyst removal, performed in-centre.",
            href: "/iud-hormonal-implant/",
            linkLabel: "IUD service page",
          },
          {
            num: "04",
            title: "Cosmetic and aesthetic care",
            body: "Sydney Cosmedic operates out of Earlwood, with medically-qualified practitioners delivering non-surgical cosmetic care.",
            href: routes.subBrand("sydneycosmedic"),
            linkLabel: "Sydney Cosmedic",
          },
          {
            num: "05",
            title: "Kids' health",
            body: "Kids' Dr practitioners including psychology and psychometric assessment providers consult at Earlwood.",
            href: routes.subBrand("kidsdr"),
            linkLabel: "Kids' Dr",
          },
          {
            num: "06",
            title: "Diagnostics on-site",
            body: "ECG and spirometry, on-site pathology collection, audiology and hearing tests, and echocardiogram appointments.",
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
            href: "https://automedsystems.com.au/ams/clinics/5308/earlwood-medical-centre-earlwood-2206/doctors",
          },
          {
            title: "Request a repeat prescription",
            sub: "One business day turnaround",
            href: "https://automedsystems.com.au/ams/clinics/5308/earlwood-medical-centre-earlwood-2206/scripts/loc/4",
          },
          {
            title: "Renew a specialist referral",
            sub: "Existing patients only",
            href: "https://automedsystems.com.au/ams/clinics/5308/earlwood-medical-centre-earlwood-2206/referrals/loc/4",
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
            href: external.automedRegistration(EARLWOOD),
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
              body: "Billing at Earlwood follows a mixed-billing model. Our registrar GPs and some of our specialist GPs bulk-bill routine standard consultations, and ongoing patients seen within the last twelve months are typically bulk-billed for routine visits. Health assessments and GP Chronic Condition Management Plans are usually bulk-billed. Other appointment types are generally privately billed, with Medicare rebate applying to eligible services and leaving a gap payment. Fees vary by practitioner, since each clinician sets their own billing arrangement as an independent practitioner. Individual billing details are on each clinician's profile page, and reception confirms your specific fee and out-of-pocket when you book.",
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
              label: "Nearest emergency departments",
              body: "Canterbury Hospital and St George Hospital are the closest public EDs to Earlwood.",
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
        clinic={EARLWOOD}
        interiorImageSrc="/website-images/earlwood-interior.webp"
        interiorImageAlt="Earlwood Medical Centre reception area"
        interiorCaption="Inside Earlwood Medical Centre"
        contactEyebrow="Contact Earlwood"
        contactHeadingLead="Reach us"
        contactHeadingItalic="directly."
        phoneDisplay={PHONE_DISPLAY}
        phoneTel={PHONE_TEL}
        phoneHoursNote="Mon-Fri 9am-6pm · Sat 9am-3pm"
        faxDisplay={FAX_DISPLAY}
        faxNote="For clinical referrals and reports"
        emailNote="Please don't send clinical urgent matters by email."
        addressDirectionsHref={`https://www.google.com/maps/dir/?api=1&destination=${dirQuery}`}
        followEyebrow="Follow us"
        followHeadingLead="Practice updates"
        followHeadingItalic="on Facebook."
        facebook={{
          href: FACEBOOK_URL,
          handleLabel: "Earlwood Medical Centre",
        }}
        google={{
          href: GOOGLE_MAP_URL,
          summary: "4.6 stars · 713 reviews",
        }}
      />

      <LocationDarkBookCTA
        clinic={EARLWOOD}
        eyebrow="Book at Earlwood"
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
