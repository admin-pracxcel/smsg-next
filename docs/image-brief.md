# SMSG Service Page · Image Brief

Reference doc for sourcing hero and body images for every service spoke. Each entry gives you two things: an **AI prompt** you can drop into Midjourney, Imagen, or DALL-E, and a **Canva / stock search-term** fallback if generation doesn't land.

## How this maps to the code

Every service page has two image slots (three for IUD). File naming follows the IUD convention:

- `<service-slug>-about-bg.webp` — hero background, full-bleed, sits under a dark tinted overlay. Composition matters more than face detail.
- `<service-slug>-detail.webp` — mid-page contextual figure, ~220-320px tall, shown with lighter treatment. Face detail and warmth matter more.
- `<service-slug>-faq.webp` — third slot on IUD-style pages, contextual figure alongside FAQ.

Drop the file into `/public/website-images/` with the correct name, tell me it's there, and I'll swap the current placeholder `treatment-room.webp` / `care-quiet.webp` / `corridor-warm.webp` references in one commit.

## Aesthetic guardrails (from CLAUDE.md § 8)

Every image must feel:

- **Editorial, not corporate.** Natural light, unposed, real people.
- **Warm and muted.** Forest greens, soft creams, terracotta, gentle blushes. No hospital blue, no stark white walls.
- **Understated.** Sim explicitly resists corporate healthcare stock. Prefer "clinician in a warm consulting room with morning light" over "smiling doctor with clipboard".
- **Diverse real people.** No exclusively white, exclusively young, or exclusively female subject sets.

Hard bans:

- **No S4 medicine brand names visible** (packaging, vials, syringes with legible labels).
- **No before-and-after cosmetic imagery.**
- **No patient testimonials, no identifiable-patient faces without release.** Where a patient appears, use models or waist-down / hands-only framing.
- **No under-18 cosmetic imagery.**

## Shared AI prompt suffix

Every prompt below assumes you append the same style suffix — swap once here if you change tools:

```
editorial photography, natural window light, warm muted colour palette
(cream, terracotta, soft blush, sage green), unposed candid moment,
shot on 35mm film, Kodak Portra 400 tones, shallow depth of field,
no logos, no text overlays, no obvious stock-photo composition
--ar 16:9 --style raw --v 6
```

For the smaller mid-page detail images, use `--ar 4:3` instead of `--ar 16:9`.

---

## Aurora Women & Babies Health

### `iud-hormonal-implant/` · **REFERENCE, ALREADY APPROVED**
Existing files: `iud-about-bg.webp`, `iud-what-to-expect.webp`, `iud-faq.webp`. Use these three as the visual bar for every other Aurora spoke.

### `antenatal-shared-care/`

**`antenatal-shared-care-about-bg.webp`** — Hero
- *Scene:* pregnant woman in her second/third trimester sitting in a warm consulting room, hand resting on belly, mid-conversation with a female GP off-frame. Cream walls, wooden desk edge, plant in the corner.
- *AI prompt:* `pregnant woman late second trimester, warm cream consulting room, morning light, hand resting on abdomen, in conversation with off-frame clinician, editorial documentary healthcare photography` + shared suffix.
- *Canva:* `antenatal appointment editorial`, `pregnant woman GP consultation warm light`, `Australian obstetrics consulting room`.
- *Alt:* `A patient in her second trimester in consultation with an SMSG GP at Earlwood.`

**`antenatal-shared-care-detail.webp`** — Body
- *Scene:* clinician's hands measuring fundal height with a soft tape, mother's belly visible in soft blush jumper, warm daylight, no faces required.
- *AI prompt:* `close-up hands measuring pregnant belly with soft tape measure, mother in blush jumper, warm daylight, no faces visible, tender documentary healthcare` + shared suffix, `--ar 4:3`.
- *Canva:* `antenatal fundal height`, `midwife measuring pregnant belly`, `pregnancy check-up hands`.
- *Alt:* `Antenatal review at an SMSG centre.`

### `obstetrics-and-pregnancy-care/`

**`obstetrics-and-pregnancy-care-about-bg.webp`** — Hero
- *Scene:* mother sitting with newborn in a hospital-adjacent consulting room, obstetrician in soft cardigan (not scrubs) reviewing notes on a tablet. Muted sage / cream palette.
- *AI prompt:* `mother holding newborn baby in warm consulting room, female obstetrician in soft cardigan reviewing tablet, sage and cream palette, morning light, tender documentary editorial healthcare` + shared suffix.
- *Canva:* `obstetrician newborn consult`, `postnatal check warm consulting room`, `mother newborn appointment editorial`.
- *Alt:* `A postnatal review at an Aurora consultation.`

**`obstetrics-and-pregnancy-care-detail.webp`** — Body
- *Scene:* ultrasound gel bottle, wand and monitor on a wooden trolley — warm-lit still life, no patient visible.
- *AI prompt:* `ultrasound gel bottle wand and monitor on wooden trolley, still life, warm window light, medical equipment editorial photography` + shared suffix, `--ar 4:3`.
- *Canva:* `obstetric ultrasound equipment still life`, `pregnancy scan setup warm light`, `sonography trolley`.
- *Alt:* `Ultrasound equipment ready in a consulting room at an SMSG centre.`

### `cervical-screening/`

**`cervical-screening-about-bg.webp`** — Hero
- *Scene:* woman aged 30s-40s in soft knit, seated in warm waiting area, calm expression, reading. Natural window light behind her. Not overtly "medical".
- *AI prompt:* `woman aged 35 in soft knit sweater seated in warm cream waiting room, natural light, calm reading, editorial documentary healthcare photography, unposed` + shared suffix.
- *Canva:* `women's health waiting room editorial`, `cervical screening awareness`, `warm medical waiting area natural light`.
- *Alt:* `A patient waiting for a cervical screening appointment at an SMSG centre.`

**`cervical-screening-detail.webp`** — Body
- *Scene:* clinician's hands preparing a self-collection kit on a wooden desk, soft focus, tape measure and paper folder in background.
- *AI prompt:* `close-up female clinician's hands preparing cervical screening kit on wooden desk, soft focus, warm daylight, editorial healthcare` + shared suffix, `--ar 4:3`. Do **not** show a patient or drapes.
- *Canva:* `cervical screening kit hands`, `self-collection kit preparation`, `women's health procedure prep`.
- *Alt:* `Preparing a cervical screening kit before an appointment.`

### `menopause-support/`

**`menopause-support-about-bg.webp`** — Hero
- *Scene:* woman aged mid-40s to 50s, warm tones, in a considered conversation with a female GP in a naturally-lit consulting room. Bookshelf, indoor plant.
- *AI prompt:* `woman in her late 40s in warm cardigan in considered conversation with female GP, natural light through window, indoor plant, bookshelf, editorial documentary healthcare` + shared suffix.
- *Canva:* `menopause consultation warm light`, `midlife women's health appointment`, `perimenopause GP consult editorial`.
- *Alt:* `A menopause consultation at an SMSG centre.`

**`menopause-support-detail.webp`** — Body
- *Scene:* pair of hands holding a mug of herbal tea, notebook and pen open, morning light. Suggests planning / self-management.
- *AI prompt:* `hands holding warm mug of herbal tea, open notebook and pen on wooden table, morning light, editorial lifestyle photography, warm palette` + shared suffix, `--ar 4:3`.
- *Canva:* `women's health self-care warm`, `wellness planning notebook morning light`, `midlife lifestyle editorial`.
- *Alt:* `Planning a self-management routine after a menopause consultation.`

### `breastfeeding-and-lactation-support/`

**`breastfeeding-and-lactation-support-about-bg.webp`** — Hero
- *Scene:* mother in her own home holding baby close, sunlight streaming through curtains, backlit. Not clinical.
- *AI prompt:* `mother in soft light holding newborn baby close to chest at home, backlit through sheer curtains, tender documentary editorial photography, warm skin tones, unposed` + shared suffix.
- *Canva:* `breastfeeding editorial natural light`, `new mother baby home warm`, `postnatal mother baby documentary`.
- *Alt:* `A mother with her newborn at home.`

**`breastfeeding-and-lactation-support-detail.webp`** — Body
- *Scene:* lactation consultant's hands demonstrating a hold using a soft toy or knit model, at a low table, coffee mug at side. Warm and pedagogical.
- *AI prompt:* `hands demonstrating breastfeeding hold using knit doll on soft table, coffee mug at side, warm daylight, editorial healthcare instruction` + shared suffix, `--ar 4:3`.
- *Canva:* `lactation consultant demonstration`, `breastfeeding education soft light`, `postnatal support session`.
- *Alt:* `A lactation consultant session at an SMSG centre.`

---

## Kids' Dr

### `adhd-diagnosis-and-management/`

**`adhd-diagnosis-and-management-about-bg.webp`** — Hero
- *Scene:* child aged 8-10 at a warm wooden table with coloured pencils, mid-drawing, parent partly visible behind. Focused expression, not distressed.
- *AI prompt:* `child aged nine at warm wooden table drawing with coloured pencils, parent partially visible behind, warm daylight through window, editorial documentary healthcare photography, focused calm expression` + shared suffix.
- *Canva:* `child paediatric consult warm`, `kid drawing appointment warm light`, `paediatric assessment editorial`.
- *Alt:* `A child in a paediatric consultation at an SMSG centre.`

**`adhd-diagnosis-and-management-detail.webp`** — Body
- *Scene:* still life of an assessment worksheet, coloured stickers and pencil, on a warm wooden desk. No child visible.
- *AI prompt:* `still life of paediatric assessment worksheet coloured stickers pencils on warm wooden desk, morning light, editorial healthcare` + shared suffix, `--ar 4:3`.
- *Canva:* `paediatric assessment worksheet`, `child development tools still life`, `ADHD assessment materials`.
- *Alt:* `Assessment materials prepared for a paediatric appointment.`

### `autism-assessment/`

**`autism-assessment-about-bg.webp`** — Hero
- *Scene:* two clinicians (paediatrician + allied health) in a warm room with age-appropriate toys, mid-observation, child playing in soft focus foreground.
- *AI prompt:* `two female clinicians observing a child playing in warm assessment room, wooden toys in soft focus foreground, natural light, editorial documentary paediatric healthcare` + shared suffix.
- *Canva:* `autism assessment editorial warm`, `paediatric observation session`, `developmental assessment natural light`.
- *Alt:* `An autism assessment session at Kids' Dr.`

**`autism-assessment-detail.webp`** — Body
- *Scene:* wooden sorting puzzle and soft cushion on a low rug, natural daylight, minimalist warm palette.
- *AI prompt:* `wooden sorting puzzle and soft cushion on rug in warm assessment room, natural daylight, editorial still life, minimalist warm palette` + shared suffix, `--ar 4:3`.
- *Canva:* `wooden educational toys still life warm`, `paediatric assessment room toys`, `child therapy space editorial`.
- *Alt:* `The assessment room set up for a Kids' Dr session.`

### `developmental-assessment/`

**`developmental-assessment-about-bg.webp`** — Hero
- *Scene:* toddler with parent, being weighed on soft scales at a paediatric visit, warm palette, natural light.
- *AI prompt:* `toddler being weighed at paediatric visit with parent supporting, warm cream consulting room, natural window light, editorial documentary paediatric healthcare` + shared suffix.
- *Canva:* `toddler growth check warm`, `paediatric development visit natural light`, `child weigh-in editorial`.
- *Alt:* `A developmental check at Kids' Dr.`

**`developmental-assessment-detail.webp`** — Body
- *Scene:* paediatric growth chart being filled in by hand, coloured pen and folder, warm timber desk.
- *AI prompt:* `hand filling in paediatric growth chart with coloured pen, folder on warm timber desk, morning light, editorial documentary healthcare` + shared suffix, `--ar 4:3`.
- *Canva:* `paediatric growth chart`, `child development records`, `paediatric consultation notes`.
- *Alt:* `Recording growth chart data during a paediatric assessment.`

### `behavioural-concerns/`

**`behavioural-concerns-about-bg.webp`** — Hero
- *Scene:* parent and child sitting side-by-side on a soft sofa, warmly lit, mid-conversation. Editorial family portrait, not clinical.
- *AI prompt:* `parent and child aged seven side by side on warm soft sofa, mid conversation, warm daylight through window, editorial family portrait photography, unposed` + shared suffix.
- *Canva:* `parent child conversation warm`, `family counselling editorial`, `paediatric behavioural consult warm light`.
- *Alt:* `A family conversation at a Kids' Dr behavioural appointment.`

**`behavioural-concerns-detail.webp`** — Body
- *Scene:* box of tissues, small cactus, notebook on a low table between two chairs, warm palette.
- *AI prompt:* `tissue box notebook small cactus on low warm timber table between chairs, morning light, editorial still life therapy space` + shared suffix, `--ar 4:3`.
- *Canva:* `therapy consulting space still life`, `counselling room warm minimalist`, `paediatric therapy environment`.
- *Alt:* `A quiet consulting space at Kids' Dr.`

### `learning-difficulties-and-psychometric-assessment/`

**`learning-difficulties-and-psychometric-assessment-about-bg.webp`** — Hero
- *Scene:* child at desk with headphones and worksheet, mid-task, psychologist observing off-frame. Focused, calm.
- *AI prompt:* `child aged ten at desk with headphones and worksheet, focused calm expression, warm assessment room, natural window light, editorial documentary photography` + shared suffix.
- *Canva:* `psychometric assessment child editorial`, `paediatric neuropsych assessment`, `child cognitive testing warm`.
- *Alt:* `A psychometric assessment session at Kids' Dr.`

**`learning-difficulties-and-psychometric-assessment-detail.webp`** — Body
- *Scene:* assessment blocks (pattern blocks / puzzle pieces) on a wooden tray, no faces.
- *AI prompt:* `wooden pattern blocks and puzzle pieces on tray on warm timber desk, morning light, editorial still life child assessment materials` + shared suffix, `--ar 4:3`.
- *Canva:* `WISC assessment materials`, `psychometric testing blocks`, `child assessment tools still life`.
- *Alt:* `Assessment materials laid out for a paediatric session.`

---

## Clarion Skin Cancer Clinic

Palette lean: sage / moss / warm cream. Skin cancer imagery is a compliance-sensitive area — **no visible lesions**, **no diagnostic close-ups of skin**, **no before/after**.

### `full-body-skin-checks/`

**`full-body-skin-checks-about-bg.webp`** — Hero
- *Scene:* consulting room with dermatoscope on a wooden bench, plant, natural morning light. Warm and unhurried — no patient visible.
- *AI prompt:* `warm cream consulting room with wooden bench, dermatoscope resting on tray, indoor plant, morning light through window, editorial healthcare still life, no people` + shared suffix.
- *Canva:* `dermatology consulting room warm`, `skin check clinic natural light`, `dermatoscope on desk editorial`.
- *Alt:* `A consulting room set up for a skin check at Clarion.`

**`full-body-skin-checks-detail.webp`** — Body
- *Scene:* clinician's gloved hand examining a patient's shoulder-blade area with a dermatoscope, framed from behind (no faces, no diagnostic detail).
- *AI prompt:* `clinician gloved hand holding dermatoscope over patient's shoulder blade, framed from behind, no faces visible, warm daylight, editorial documentary healthcare` + shared suffix, `--ar 4:3`.
- *Canva:* `dermatologist skin check hands`, `full body skin examination`, `dermatoscopy from behind`.
- *Alt:* `A dermatoscope examination during a full-body skin check.`

### `dermoscopy/`

**`dermoscopy-about-bg.webp`** — Hero
- *Scene:* macro-view of a dermatoscope resting on the palm of a hand, moody warm lighting, out-of-focus consulting room background.
- *AI prompt:* `macro view of dermatoscope resting on palm of hand, warm moody lighting, out-of-focus consulting room background, editorial documentary healthcare photography` + shared suffix.
- *Canva:* `dermatoscope macro warm`, `dermoscopy tool close up`, `skin cancer diagnostic tool editorial`.
- *Alt:* `A dermatoscope, the tool used in dermoscopy at Clarion.`

**`dermoscopy-detail.webp`** — Body
- *Scene:* clinician reviewing dermoscopic images on a tablet at a wooden desk, natural light. Screen partly visible but no legible lesion imagery.
- *AI prompt:* `clinician reviewing dermoscopy images on tablet at warm wooden desk, natural window light, editorial documentary healthcare, screen slightly blurred` + shared suffix, `--ar 4:3`.
- *Canva:* `dermatologist reviewing digital images`, `teledermoscopy tablet`, `skin imaging review warm`.
- *Alt:* `Reviewing dermoscopic images after a skin check.`

### `excision-procedures/`

**`excision-procedures-about-bg.webp`** — Hero
- *Scene:* treatment room ready for a minor procedure — surgical light on, sterile blue drape on trolley, warm cream walls. No patient, no visible sharps.
- *AI prompt:* `warm cream treatment room ready for minor procedure, surgical light on, folded sterile drape on trolley, no people, no visible sharps, editorial healthcare still life` + shared suffix.
- *Canva:* `minor procedure room warm`, `GP treatment room natural light`, `outpatient excision setup`.
- *Alt:* `A treatment room prepared for a minor procedure at an SMSG centre.`

**`excision-procedures-detail.webp`** — Body
- *Scene:* gloved hands folding surgical drape, close-up, natural light. No sharps in frame.
- *AI prompt:* `close-up gloved hands folding sterile drape in warm treatment room, natural light, editorial documentary healthcare, no sharps visible` + shared suffix, `--ar 4:3`.
- *Canva:* `sterile field preparation`, `GP treatment room drape hands`, `outpatient procedure setup close up`.
- *Alt:* `Preparing the sterile field before a minor procedure.`

### `skin-cancer-awareness/`

**`skin-cancer-awareness-about-bg.webp`** — Hero
- *Scene:* Australian coastal scene with a family in wide-brim hats and long-sleeve shirts, backs to camera, warm afternoon light. Sun-safe framing, not lifestyle stock.
- *AI prompt:* `Australian family in wide brim hats and long-sleeve rashies walking on coastal path, backs to camera, warm late afternoon light, editorial documentary lifestyle photography, sun-safe messaging without being posed` + shared suffix.
- *Canva:* `Australian sun protection family editorial`, `slip slop slap coastal`, `sun-smart family beach walk`.
- *Alt:* `A family in sun-safe clothing on the Sydney coastline.`

**`skin-cancer-awareness-detail.webp`** — Body
- *Scene:* woman's hand applying sunscreen to a child's forearm, warm morning light, close crop.
- *AI prompt:* `close-up woman's hand applying sunscreen to child's forearm, warm morning light on skin, editorial documentary lifestyle photography` + shared suffix, `--ar 4:3`.
- *Canva:* `sunscreen application child warm light`, `sun protection hands close up`, `SPF application editorial`.
- *Alt:* `Applying sunscreen before heading out.`

---

## Excelsia Specialist Centre

Palette lean: slate blue / warm neutral. Specialist consulting rooms tend to be quieter and more clinical than GP rooms — lean into that in the composition, but keep warmth.

### `cardiology/`

**`cardiology-about-bg.webp`** — Hero
- *Scene:* ECG machine and cardiology chair in a warmly-lit consulting room, morning light, no patient.
- *AI prompt:* `warm cream cardiology consulting room, ECG machine and reclining chair, morning window light, editorial healthcare still life, no people, muted slate blue and warm neutral palette` + shared suffix.
- *Canva:* `cardiology consulting room warm`, `ECG machine natural light`, `cardiac clinic editorial`.
- *Alt:* `A cardiology consulting room at Excelsia.`

**`cardiology-detail.webp`** — Body
- *Scene:* clinician's hands attaching ECG leads to a patient's chest, framed shoulder-up from behind — patient in soft grey singlet, no face.
- *AI prompt:* `clinician's hands attaching ECG leads to patient's chest, patient in soft grey singlet framed from behind, warm daylight, editorial documentary healthcare` + shared suffix, `--ar 4:3`.
- *Canva:* `ECG lead placement warm`, `cardiac examination hands`, `cardiology consultation editorial`.
- *Alt:* `An ECG examination at an Excelsia consultation.`

### `endocrinology/`

**`endocrinology-about-bg.webp`** — Hero
- *Scene:* endocrinologist reviewing lab results on a monitor at a wooden desk, back to camera, warm light through a window.
- *AI prompt:* `endocrinologist at wooden desk reviewing lab results on monitor, back to camera, warm daylight through window, editorial documentary healthcare` + shared suffix.
- *Canva:* `endocrinology consultation lab review`, `specialist reviewing bloods warm light`, `endocrine clinic editorial`.
- *Alt:* `An endocrinologist reviewing lab results at Excelsia.`

**`endocrinology-detail.webp`** — Body
- *Scene:* continuous glucose monitor sensor on inner upper arm, minimal skin visible, warm natural light.
- *AI prompt:* `close-up continuous glucose monitor sensor on inner upper arm, warm natural light, editorial documentary healthcare, minimal skin visible` + shared suffix, `--ar 4:3`.
- *Canva:* `continuous glucose monitor arm`, `diabetes CGM close up`, `endocrine technology editorial`.
- *Alt:* `A continuous glucose monitor in place during endocrine review.`

### `gastroenterology/`

**`gastroenterology-about-bg.webp`** — Hero
- *Scene:* consultant seated across a wooden desk from a patient (framed from patient's shoulder, no faces), taking a history. Warm consulting room.
- *AI prompt:* `gastroenterologist across wooden desk from patient taking history, framed from patient's shoulder, no faces visible, warm cream consulting room, morning light, editorial documentary healthcare` + shared suffix.
- *Canva:* `specialist consultation warm editorial`, `gastroenterology consult natural light`, `medical history taking editorial`.
- *Alt:* `A gastroenterology consultation at Excelsia.`

**`gastroenterology-detail.webp`** — Body
- *Scene:* anatomical torso model on a bookshelf next to a stack of clinical texts, warm daylight, quiet still life.
- *AI prompt:* `anatomical torso model on bookshelf next to stack of clinical textbooks, warm daylight, editorial still life, quiet consulting room` + shared suffix, `--ar 4:3`.
- *Canva:* `anatomy model bookshelf warm`, `medical office still life editorial`, `specialist consulting room details`.
- *Alt:* `A specialist consulting room at Excelsia.`

### `geriatrics/`

**`geriatrics-about-bg.webp`** — Hero
- *Scene:* older adult (70s-80s) sitting comfortably in a warm consulting room, in conversation with a geriatrician, both leaning in. Dignified, not fragile.
- *AI prompt:* `dignified older adult in seventies in warm consulting room leaning forward in conversation with geriatrician, warm daylight, editorial documentary healthcare photography, no clinical coldness` + shared suffix.
- *Canva:* `geriatrician older patient consult warm`, `senior healthcare consultation editorial`, `dignified older adult medical`.
- *Alt:* `A geriatric medicine consultation at Excelsia.`

**`geriatrics-detail.webp`** — Body
- *Scene:* older person's hands holding a walking stick or cup of tea, worn wedding ring, warm daylight — evokes lived experience.
- *AI prompt:* `close-up older person's hands holding wooden walking stick, weathered wedding ring, warm daylight, editorial documentary photography, dignified` + shared suffix, `--ar 4:3`.
- *Canva:* `older hands walking stick warm`, `senior lived experience hands`, `aged care editorial detail`.
- *Alt:* `A geriatric medicine review at Excelsia.`

### `haematology/`

**`haematology-about-bg.webp`** — Hero
- *Scene:* infusion chair in a warmly-lit day room with soft armchair, plant, book on side table. No patient, no visible infusion bag.
- *AI prompt:* `warm cream infusion day room with reclining armchair, plant, book on side table, morning light through window, editorial healthcare still life, no people` + shared suffix.
- *Canva:* `infusion chair day room warm`, `haematology treatment space editorial`, `oncology day unit natural light`.
- *Alt:* `An infusion day room at Excelsia.`

**`haematology-detail.webp`** — Body
- *Scene:* still life of blood-tube tray on a wooden bench, gloved hand reaching into frame, warm daylight — but tubes empty (no visible blood).
- *AI prompt:* `still life blood collection tube tray on warm wooden bench, gloved hand reaching in, morning light, editorial documentary healthcare, tubes empty` + shared suffix, `--ar 4:3`.
- *Canva:* `phlebotomy tray warm light`, `blood collection setup editorial`, `pathology tubes still life`.
- *Alt:* `Blood collection setup at Excelsia.`

### `nephrology/`

**`nephrology-about-bg.webp`** — Hero
- *Scene:* nephrologist in warm cardigan reviewing renal-function results at a wooden desk, patient across, framed from behind patient's shoulder.
- *AI prompt:* `nephrologist in warm cardigan reviewing renal function results at wooden desk, patient across, framed from behind patient's shoulder, warm daylight, editorial documentary healthcare` + shared suffix.
- *Canva:* `nephrology consultation editorial warm`, `renal specialist review`, `kidney health consult natural light`.
- *Alt:* `A nephrology consultation at Excelsia.`

**`nephrology-detail.webp`** — Body
- *Scene:* glass carafe of water and simple ceramic cup on wooden desk, morning light. Evokes hydration and calm.
- *AI prompt:* `glass carafe of water and simple ceramic cup on warm wooden desk, morning light, editorial still life, minimalist calm` + shared suffix, `--ar 4:3`.
- *Canva:* `water carafe warm morning`, `hydration still life editorial`, `wellness minimalist warm`.
- *Alt:* `A quiet still life in a consulting room at Excelsia.`

### `respiratory-and-sleep-medicine/`

**`respiratory-and-sleep-medicine-about-bg.webp`** — Hero
- *Scene:* spirometer on a wooden desk, warm natural light, out-of-focus sleep-study clip and mask in soft background.
- *AI prompt:* `spirometer on warm wooden desk, out-of-focus sleep study clip and CPAP mask in soft background, morning light, editorial documentary healthcare, no people` + shared suffix.
- *Canva:* `spirometry equipment warm`, `pulmonary function testing editorial`, `sleep study equipment natural light`.
- *Alt:* `Respiratory and sleep equipment at Excelsia.`

**`respiratory-and-sleep-medicine-detail.webp`** — Body
- *Scene:* patient's hands holding a spirometer mouthpiece up to their face, framed at chest level (no full face), warm daylight.
- *AI prompt:* `patient's hands holding spirometer mouthpiece framed at chest level, no full face visible, warm daylight, editorial documentary healthcare` + shared suffix, `--ar 4:3`.
- *Canva:* `spirometry test hands warm`, `pulmonary function test editorial`, `respiratory clinic close up`.
- *Alt:* `A spirometry test during a respiratory review.`

### `paediatric-medicine/`

**`paediatric-medicine-about-bg.webp`** — Hero
- *Scene:* paediatrician kneeling to child's eye level in a warm consulting room, child holding parent's hand. Warm, unposed.
- *AI prompt:* `paediatrician kneeling to child's eye level in warm consulting room, child holding parent's hand, warm daylight, editorial documentary paediatric healthcare, unposed` + shared suffix.
- *Canva:* `paediatrician child eye level warm`, `paediatric consultation family editorial`, `child specialist consult natural light`.
- *Alt:* `A paediatric medicine consultation at Excelsia.`

**`paediatric-medicine-detail.webp`** — Body
- *Scene:* stethoscope resting on a colourful children's-hospital-style blanket folded on a wooden bench, warm light.
- *AI prompt:* `stethoscope resting on soft folded colourful blanket on warm wooden bench, morning light, editorial still life paediatric healthcare` + shared suffix, `--ar 4:3`.
- *Canva:* `paediatric stethoscope warm still life`, `children's clinic detail editorial`, `paediatric consulting room warm`.
- *Alt:* `Paediatric consulting room at Excelsia.`

### `general-medicine/`

**`general-medicine-about-bg.webp`** — Hero
- *Scene:* consultant physician mid-conversation with adult patient in warm consulting room, framed from behind patient's shoulder. No faces required.
- *AI prompt:* `general medicine specialist mid-conversation with adult patient in warm consulting room, framed from behind patient's shoulder, warm daylight, editorial documentary healthcare` + shared suffix.
- *Canva:* `general medicine specialist consult`, `internal medicine consultation warm`, `physician consult editorial`.
- *Alt:* `A general medicine consultation at Excelsia.`

**`general-medicine-detail.webp`** — Body
- *Scene:* stack of clinical letters and referral folders on a warm wooden desk, fountain pen, morning light.
- *AI prompt:* `stack of clinical letters and referral folders on warm wooden desk, fountain pen, morning light, editorial still life healthcare` + shared suffix, `--ar 4:3`.
- *Canva:* `specialist referral letters warm`, `medical office paperwork editorial`, `consulting desk still life`.
- *Alt:* `Correspondence at a consulting rooms at Excelsia.`

---

## General Practice (grouped pages)

### `general-practice-and-preventive-care/`

**`general-practice-and-preventive-care-about-bg.webp`** — Hero
- *Scene:* GP mid-consultation with a patient across a wooden desk in a warm consulting room. Editorial, unposed.
- *AI prompt:* `GP in cardigan mid-consultation with patient across warm wooden desk, both leaning in, morning window light, editorial documentary healthcare photography, unposed` + shared suffix.
- *Canva:* `Australian GP consultation warm editorial`, `family doctor consult natural light`, `preventive health check editorial`.
- *Alt:* `A GP consultation at an SMSG centre.`

**`general-practice-and-preventive-care-detail.webp`** — Body
- *Scene:* stethoscope draped over the back of a wooden chair, blood pressure cuff and notepad on the desk, morning light.
- *AI prompt:* `stethoscope draped over warm wooden chair back, blood pressure cuff and open notepad on desk, morning light, editorial healthcare still life` + shared suffix, `--ar 4:3`.
- *Canva:* `GP consulting room still life`, `family medicine equipment warm`, `preventive care setup editorial`.
- *Alt:* `A GP consulting room at an SMSG centre.`

### `chronic-disease-and-lifestyle/`

**`chronic-disease-and-lifestyle-about-bg.webp`** — Hero
- *Scene:* patient and GP reviewing a chronic disease management plan on paper at a warm desk, hands and papers in frame.
- *AI prompt:* `patient and GP hands reviewing chronic disease management plan on paper at warm wooden desk, warm daylight, editorial documentary healthcare` + shared suffix.
- *Canva:* `chronic disease management plan hands`, `GP care planning warm`, `diabetes review editorial`.
- *Alt:* `Reviewing a care plan during a GP appointment.`

**`chronic-disease-and-lifestyle-detail.webp`** — Body
- *Scene:* fresh fruit and a home BP cuff on a warm timber kitchen counter — evokes home self-management. No brand labels.
- *AI prompt:* `fresh fruit and home blood pressure cuff on warm timber kitchen counter, morning light, editorial lifestyle photography, no brand labels visible` + shared suffix, `--ar 4:3`.
- *Canva:* `home blood pressure monitoring warm`, `chronic disease self care editorial`, `healthy lifestyle warm still life`.
- *Alt:* `Home monitoring supports a chronic disease management plan.`

### `treatment-room-and-procedures/`

**`treatment-room-and-procedures-about-bg.webp`** — Hero
- *Scene:* nurse-led treatment room with adjustable bed, dressing trolley, warm cream walls, plant. No patient.
- *AI prompt:* `warm cream nurse-led treatment room with adjustable bed, dressing trolley, indoor plant, morning window light, editorial healthcare still life, no people` + shared suffix.
- *Canva:* `GP treatment room warm editorial`, `nursing procedure room natural light`, `wound care setup`.
- *Alt:* `A treatment room at an SMSG centre.`

**`treatment-room-and-procedures-detail.webp`** — Body
- *Scene:* nurse's gloved hands cutting gauze on a stainless tray, warm daylight, framed close.
- *AI prompt:* `nurse's gloved hands cutting gauze on stainless tray, warm daylight, editorial documentary healthcare, close framing` + shared suffix, `--ar 4:3`.
- *Canva:* `wound dressing preparation hands`, `nurse treatment room warm`, `sterile field editorial`.
- *Alt:* `A nurse preparing a dressing at an SMSG centre.`

### `mental-health-care/`

**`mental-health-care-about-bg.webp`** — Hero
- *Scene:* two soft armchairs in a warm consulting room, low coffee table with a box of tissues and a plant. No people. Feels like sitting down for a conversation.
- *AI prompt:* `two soft armchairs facing each other in warm cream consulting room, low timber coffee table with tissue box and plant, morning light, editorial healthcare still life, no people` + shared suffix.
- *Canva:* `counselling room warm editorial`, `mental health consulting space natural light`, `therapy room minimalist warm`.
- *Alt:* `A mental health consulting space at an SMSG centre.`

**`mental-health-care-detail.webp`** — Body
- *Scene:* hands holding a mug of tea on a soft knee blanket, sunlight from a window. Evokes calm.
- *AI prompt:* `hands holding warm mug of tea on soft knee blanket, sunlight from window, editorial lifestyle photography, calm and warm` + shared suffix, `--ar 4:3`.
- *Canva:* `mental wellness warm editorial`, `calm morning tea hands`, `self care warm light`.
- *Alt:* `Mental wellbeing support at an SMSG centre.`

### `travel-medicine-and-vaccinations/`

**`travel-medicine-and-vaccinations-about-bg.webp`** — Hero
- *Scene:* vaccination fridge (closed, warm-lit exterior), nurse's clipboard and vaccine schedule on desk, morning light. No visible vials.
- *AI prompt:* `warm cream nursing room with vaccine schedule and clipboard on desk, closed vaccine fridge in background, morning light, editorial healthcare still life, no visible vials` + shared suffix.
- *Canva:* `travel vaccination clinic warm editorial`, `immunisation schedule still life`, `travel health consult natural light`.
- *Alt:* `A travel medicine and vaccination consult at an SMSG centre.`

**`travel-medicine-and-vaccinations-detail.webp`** — Body
- *Scene:* passport, printed itinerary, and a yellow vaccination record on a warm timber desk. Warm daylight. No brand names on record.
- *AI prompt:* `Australian passport, printed travel itinerary, and yellow vaccination record on warm timber desk, morning light, editorial still life, no legible text on record` + shared suffix, `--ar 4:3`.
- *Canva:* `travel documents warm still life`, `passport vaccination record editorial`, `travel medicine preparation`.
- *Alt:* `Preparing for a travel medicine appointment.`

### `medicals-and-assessments/`

**`medicals-and-assessments-about-bg.webp`** — Hero
- *Scene:* pre-employment medical setup — height chart, vision chart, warm consulting room, no patient.
- *AI prompt:* `pre-employment medical consulting room with height chart on wall and vision chart, warm cream palette, morning light, editorial healthcare still life, no people` + shared suffix.
- *Canva:* `pre-employment medical warm editorial`, `driver medical consulting room`, `commercial medical assessment natural light`.
- *Alt:* `A pre-employment medical setup at an SMSG centre.`

**`medicals-and-assessments-detail.webp`** — Body
- *Scene:* stethoscope, hand-held tonometer, and clipboard on a wooden desk, morning light.
- *AI prompt:* `stethoscope hand-held tonometer and clipboard on warm wooden desk, morning light, editorial still life healthcare` + shared suffix, `--ar 4:3`.
- *Canva:* `medical examination equipment warm`, `commercial medical still life`, `driver medical tools editorial`.
- *Alt:* `Equipment for a pre-employment or commercial medical.`

### `telehealth/`

**`telehealth-about-bg.webp`** — Hero
- *Scene:* GP at a laptop in a warm consulting room, mid-call, back to camera, warm daylight. Screen slightly blurred.
- *AI prompt:* `GP at laptop in warm consulting room mid video call, back to camera, warm daylight, editorial documentary healthcare, screen slightly blurred, no legible content` + shared suffix.
- *Canva:* `telehealth consultation Australian GP`, `video consult warm editorial`, `remote medicine natural light`.
- *Alt:* `A GP conducting a telehealth consultation at an SMSG centre.`

**`telehealth-detail.webp`** — Body
- *Scene:* patient at home on a laptop, warm living room, blanket, mug on side table. Framed from behind — no full face.
- *AI prompt:* `patient at home on laptop in warm living room, blanket, mug on side table, framed from behind no full face, warm daylight, editorial documentary lifestyle photography` + shared suffix, `--ar 4:3`.
- *Canva:* `telehealth patient at home warm`, `remote consultation lifestyle editorial`, `home video call warm light`.
- *Alt:* `A patient joining a telehealth appointment from home.`

---

## Allied Health

### `physiotherapy/`

**`physiotherapy-about-bg.webp`** — Hero
- *Scene:* physio room with treatment bed, resistance bands, foam roller. Warm cream walls, morning light, no patient.
- *AI prompt:* `warm cream physiotherapy consulting room with treatment bed, resistance bands and foam roller on rack, indoor plant, morning window light, editorial healthcare still life, no people` + shared suffix.
- *Canva:* `physiotherapy room warm editorial`, `physio clinic natural light`, `rehab space warm minimalist`.
- *Alt:* `A physiotherapy consulting room at an SMSG centre.`

**`physiotherapy-detail.webp`** — Body
- *Scene:* physiotherapist's hands supporting a patient's shoulder through a range-of-motion assessment. Warm neutral, no faces.
- *AI prompt:* `physiotherapist's hands supporting patient's shoulder through range of motion assessment, warm neutral palette, no faces visible, morning light, editorial documentary healthcare` + shared suffix, `--ar 4:3`.
- *Canva:* `physiotherapy hands assessment warm`, `physio shoulder range of motion`, `manual therapy editorial`.
- *Alt:* `A physiotherapy assessment at an SMSG centre.`

### `psychology-and-counselling/`

**`psychology-and-counselling-about-bg.webp`** — Hero
- *Scene:* pair of soft armchairs at right angles in a warm room, low table, box of tissues, warm daylight through a sheer curtain. No people.
- *AI prompt:* `two soft armchairs at right angles in warm cream consulting room, low timber table with tissue box, sheer curtain diffusing warm daylight, editorial healthcare still life, no people` + shared suffix.
- *Canva:* `psychology consulting room warm`, `counselling space editorial`, `therapy room warm minimalist`.
- *Alt:* `A psychology consulting room at an SMSG centre.`

**`psychology-and-counselling-detail.webp`** — Body
- *Scene:* open notebook with journal-style writing, pen resting on top, mug of tea, warm daylight. No legible text.
- *AI prompt:* `open notebook with soft handwriting, pen resting on top, mug of tea on warm timber desk, morning light, editorial still life, no legible text` + shared suffix, `--ar 4:3`.
- *Canva:* `journal warm editorial`, `mental health reflection still life`, `therapy writing warm light`.
- *Alt:* `Reflection between counselling sessions.`

### `victim-services-counselling/`

**`victim-services-counselling-about-bg.webp`** — Hero
- *Scene:* similar to psychology room, but even softer — sheer curtain, soft blanket over the arm of a chair, plant. Deliberately unclinical.
- *AI prompt:* `soft warm counselling room with sheer curtain diffusing daylight, soft blanket over arm of armchair, indoor plant, editorial healthcare still life, no people, gentle and unclinical` + shared suffix.
- *Canva:* `trauma-informed counselling space warm`, `soft therapy room editorial`, `safe therapeutic space natural light`.
- *Alt:* `A counselling space at an SMSG centre.`

**`victim-services-counselling-detail.webp`** — Body
- *Scene:* hand resting on soft knit blanket in warm daylight, quiet contemplative framing.
- *AI prompt:* `close-up hand resting on soft knit blanket in warm daylight, quiet contemplative framing, editorial documentary photography` + shared suffix, `--ar 4:3`.
- *Canva:* `contemplative hands warm editorial`, `quiet reflection still life`, `soft mental wellness warm`.
- *Alt:* `A supportive space for counselling.`

### `speech-pathology/`

**`speech-pathology-about-bg.webp`** — Hero
- *Scene:* speech pathologist working with a young child at a low table with picture cards, warm natural light. Framed from side, no full faces.
- *AI prompt:* `speech pathologist at low warm timber table with young child using picture cards, framed from side, no full faces visible, warm daylight, editorial documentary paediatric healthcare` + shared suffix.
- *Canva:* `speech pathology child session warm`, `paediatric speech therapy editorial`, `speech therapist warm light`.
- *Alt:* `A speech pathology session at Kids' Dr.`

**`speech-pathology-detail.webp`** — Body
- *Scene:* wooden picture cards and story book on a warm table, natural light. No people.
- *AI prompt:* `wooden picture cards and open children's story book on warm timber table, morning light, editorial still life paediatric therapy` + shared suffix, `--ar 4:3`.
- *Canva:* `speech therapy materials warm`, `paediatric language cards still life`, `speech pathology tools editorial`.
- *Alt:* `Speech pathology materials laid out for a session.`

### `dietetics/`

**`dietetics-about-bg.webp`** — Hero
- *Scene:* dietitian and patient at a warm timber table with a plate of fresh, simple food (fruit, wholegrain toast), mid-conversation. Not before/after weight-loss framing.
- *AI prompt:* `dietitian and adult patient at warm timber table with plate of fresh simple food, mid-conversation, warm daylight, editorial documentary healthcare, no weight-loss framing` + shared suffix.
- *Canva:* `dietitian consultation warm editorial`, `nutrition appointment natural light`, `healthy eating consult warm`.
- *Alt:* `A dietetics consultation at an SMSG centre.`

**`dietetics-detail.webp`** — Body
- *Scene:* meal-planning notepad, fresh produce (tomatoes, herbs, wholegrain bread) on a warm timber counter. Warm daylight.
- *AI prompt:* `meal planning notepad with fresh tomatoes herbs wholegrain bread on warm timber counter, morning light, editorial lifestyle still life, no brand labels` + shared suffix, `--ar 4:3`.
- *Canva:* `meal planning warm editorial`, `fresh produce dietitian still life`, `nutrition consult food warm light`.
- *Alt:* `Meal planning notes after a dietetics consultation.`

### `podiatry/`

**`podiatry-about-bg.webp`** — Hero
- *Scene:* podiatry treatment chair (reclined), instrument tray on side, warm cream room, natural light. No patient.
- *AI prompt:* `warm cream podiatry treatment room with reclined chair and clean instrument tray on side, morning light, editorial healthcare still life, no people` + shared suffix.
- *Canva:* `podiatry consulting room warm`, `foot care clinic editorial`, `podiatry treatment space natural light`.
- *Alt:* `A podiatry treatment room at an SMSG centre.`

**`podiatry-detail.webp`** — Body
- *Scene:* podiatrist's gloved hands examining a bare foot, framed from ankle down, warm daylight, respectful and clinical.
- *AI prompt:* `podiatrist's gloved hands examining bare foot from ankle down, warm daylight, editorial documentary healthcare, respectful framing` + shared suffix, `--ar 4:3`.
- *Canva:* `podiatry examination hands warm`, `foot assessment editorial`, `podiatrist consultation close up`.
- *Alt:* `A podiatry examination at an SMSG centre.`

---

## Diagnostics & On-Site

### `pathology-services/`

**`pathology-services-about-bg.webp`** — Hero
- *Scene:* pathology collection room with phlebotomy chair, warm cream walls, small plant, morning light. No patient.
- *AI prompt:* `warm cream pathology collection room with phlebotomy chair, small indoor plant, morning window light, editorial healthcare still life, no people` + shared suffix.
- *Canva:* `pathology collection room warm editorial`, `phlebotomy room natural light`, `blood collection clinic warm`.
- *Alt:* `The pathology collection room at Earlwood Medical Centre.`

**`pathology-services-detail.webp`** — Body
- *Scene:* still life of pathology request form, empty collection tubes, gloved hand reaching in. Warm daylight, no visible blood.
- *AI prompt:* `pathology request form empty collection tubes gloved hand reaching in on warm wooden bench, morning light, editorial still life, no visible blood` + shared suffix, `--ar 4:3`.
- *Canva:* `pathology tube tray warm`, `blood collection preparation editorial`, `phlebotomy setup close up`.
- *Alt:* `Pathology collection setup at an SMSG centre.`

### `echocardiograms-and-stress-testing/`

**`echocardiograms-and-stress-testing-about-bg.webp`** — Hero
- *Scene:* echocardiogram machine with warm-lit screen (out of focus), warm cream cardiac room, morning light. No patient.
- *AI prompt:* `warm cream cardiac room with echocardiogram machine and out-of-focus screen, morning window light, editorial healthcare still life, no people, no legible screen content` + shared suffix.
- *Canva:* `echocardiogram machine warm`, `cardiac imaging room editorial`, `stress test space natural light`.
- *Alt:* `An echocardiogram and stress-testing room at Excelsia.`

**`echocardiograms-and-stress-testing-detail.webp`** — Body
- *Scene:* sonographer's gloved hand holding ultrasound probe over a patient's chest (patient in soft grey singlet, framed from side, no full face). Warm daylight.
- *AI prompt:* `sonographer's gloved hand holding ultrasound probe over patient's chest, patient in soft grey singlet framed from side, no full face, warm daylight, editorial documentary healthcare` + shared suffix, `--ar 4:3`.
- *Canva:* `echocardiogram examination hands warm`, `cardiac ultrasound clinical editorial`, `sonographer probe close up`.
- *Alt:* `An echocardiogram examination at Excelsia.`

---

## Wiring order (once images arrive)

Drop files into `/public/website-images/` with the exact filenames used above and tell me the batch — I'll swap references in one commit. Priority order if we get partial deliveries:

1. Aurora spokes (5 pages, matches the approved IUD pattern most closely)
2. Kids' Dr spokes (5)
3. Clarion spokes (4)
4. GP grouped pages (7 — highest traffic)
5. Excelsia specialties (9)
6. Allied Health (6)
7. Diagnostics (2)

## If AI generation is inconsistent

Fall back to Canva stock using the second search-term line under each entry. Prefer collections tagged **editorial**, **documentary**, or **lifestyle** over anything tagged **medical stock** or **healthcare corporate**.
