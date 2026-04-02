import type { AppLocale } from "@/i18n/routing";

export type IndustryFaq = { q: string; a: string };

export type UseCaseIndustry = {
  slug: string;
  title: string;
  tagline: string;
  metaTitle: string;
  metaDescription: string;
  intro: string;
  accentColor: string;
  manualTasks: string[];
  whyUnpleasant: string;
  automationPoints: string[];
  lotrinoBridge: string;
  faqs: IndustryFaq[];
};

export type FazitSection = {
  title: string;
  subtitle: string;
  points: string[];
};

const fazitEn: FazitSection = {
  title: "The common thread",
  subtitle: "Common traits of repetitive tasks:",
  points: [
    "Data capture & maintenance",
    "Deadline / appointment coordination",
    "Standardized communication",
    "Documentation & compliance tasks",
    "Status updates & reporting",
  ],
};

const fazitDe: FazitSection = {
  title: "Branchenübergreifend",
  subtitle: "Gemeinsame Merkmale der repetitiven Aufgaben:",
  points: [
    "Datenerfassung & -pflege",
    "Termin-/Fristen-Koordination",
    "Standardisierte Kommunikation",
    "Dokumentation & Compliance-Tasks",
    "Status-Updates & Reporting",
  ],
};

export function getFazitSection(locale: AppLocale): FazitSection {
  return locale === "de" ? fazitDe : fazitEn;
}

const industriesEn: UseCaseIndustry[] = [
  {
    slug: "recruiting",
    title: "Recruiting",
    tagline:
      "From job posts to ATS upkeep — recurring steps for every open role.",
    metaTitle: "Recruiting & ATS workflow automation | LOTRINO",
    metaDescription:
      "Cut manual ATS work, screening, and interview scheduling. AI consulting for high-volume recruiting, candidate pipelines, and audit-ready documentation.",
    intro:
      "Talent teams and hiring managers juggle the same operational loop for every requisition: publish roles, triage inbound volume, align calendars, and keep the ATS truthful for reporting. When those steps stay manual, time-to-hire stretches and small data errors compound into compliance risk. The goal is not to remove human judgment on fit — it is to remove copy-paste and inbox chasing so recruiters spend time on conversations and hiring manager alignment. Automation and AI fit where tasks are structured, repeatable, and measurable.",
    accentColor: "#5eb8c4",
    manualTasks: [
      "Requisition opens → job descriptions are reformatted and posted across multiple boards; each channel has different limits, so teams duplicate work or miss fields.",
      "Application spikes → resumes land in email, the ATS, and referral inboxes; someone manually merges threads and updates candidate status so reporting stays accurate.",
      "Phone screens and panel rounds → coordinators poll six calendars, reschedule on conflicts, and re-send prep links; one missed update creates a poor candidate experience.",
      "Offer and decline communications → acknowledgement templates exist, but exceptions and follow-ups are still typed one-by-one under time pressure.",
      "ATS hygiene → hiring managers leave feedback in chat while the system of record expects structured disposition codes; recruiters reconcile notes during weekly clean-up.",
      "Compliance packets → EEO or regional reporting exports are assembled from spreadsheets because historical fields were never normalized in the ATS.",
    ],
    whyUnpleasant:
      "The work scales linearly with openings, not with strategic value. Fatigue shows up as slower responses to candidates, inconsistent audit trails, and burnout among coordinators who rarely touch the parts of recruiting that actually influence quality of hire.",
    automationPoints: [
      "Structured intake: role templates, approval workflows, and canonical job data pushed to boards and the ATS via integration instead of manual re-entry.",
      "Triage and routing: rules or ML-assisted ranking to bucket applicants by role, location, or must-have skills, with human-in-the-loop review before next steps.",
      "Scheduling automation: self-serve booking, calendar-aware routing, and automated reminders that sync CRM/ATS status when a meeting is booked or missed.",
      "Communications at scale: event-triggered email or chat sequences for acknowledgements, nudges, and interview prep — with guardrails and opt-outs where regulations require.",
      "Reporting: scheduled exports and dashboards that pull disposition codes and source data without end-of-quarter spreadsheet rescue missions.",
    ],
    lotrinoBridge:
      "We treat recruiting like an operations workflow: map your ATS and touchpoints, prioritize the steps that burn the most hours or carry compliance risk, then deliver integrations, automations, or AI-assisted assistants with clear ownership and measurement. Strategy clarifies what not to automate; implementation keeps humans in control of hiring decisions while machines handle repetition.",
    faqs: [
      {
        q: "What is ATS workflow automation?",
        a: "It is the practice of connecting your applicant tracking system, calendars, and communication tools so candidate status, interviews, and feedback update automatically instead of through manual copy-paste between systems.",
      },
      {
        q: "Where does AI help without replacing recruiters?",
        a: "On structured tasks: drafting first-pass screen summaries, suggesting schedule slots, tagging skills from resumes, and surfacing anomalies in pipeline data. Final decisions on fit stay with your team.",
      },
      {
        q: "How do you reduce compliance risk in recruiting automation?",
        a: "By keeping disposition reasons consistent, logging access to personal data, and designing communications so regional rules on consent and retention are reflected in workflows — not in one-off emails.",
      },
    ],
  },
  {
    slug: "logistics",
    title: "Logistics (supply chain & warehouse/transport)",
    tagline:
      "Capture, inventory, and transport — many manual steps between warehouse and ERP.",
    metaTitle: "Warehouse & supply chain operations automation | LOTRINO",
    metaDescription:
      "Improve WMS data accuracy, picking workflows, and freight documentation. AI and integration consulting for logistics, inventory, and order fulfillment teams.",
    intro:
      "Warehouse supervisors and logistics coordinators live between physical goods and digital records: every pallet move should match the ERP, every exception should be visible before it becomes a stockout or a missed delivery window. Manual capture — paper, spreadsheets, or ad hoc chats — creates latency and rework when carriers, customs, or customers ask for proof. Strong operations automation tightens the loop from goods receipt to shipment confirmation without asking teams to become data-entry clerks.",
    accentColor: "#c4a35e",
    manualTasks: [
      "Goods receipt → dock staff key quantities into Excel or a shared inbox while the WMS update waits; discrepancies surface days later during cycle counts.",
      "Picking waves → pick lists are printed or rebuilt by hand when priorities change; pickers walk paths that are not optimized for the current order mix.",
      "Transport booking → order data is re-typed into carrier portals; tracking IDs are emailed instead of flowing back into the TMS or ERP automatically.",
      "Customs and freight paperwork → PDFs are renamed and filed in folders; critical dates for bonded storage or duties rely on someone’s calendar memory.",
      "Returns and quarantine → RMA reasons sit in email while inventory status in the WMS still shows sellable stock.",
      "Cross-dock handoffs → night-shift updates do not reach day-shift planners because shift logs are paper-only.",
    ],
    whyUnpleasant:
      "Volume and seasonality amplify small errors: mis-picks, chargebacks from retailers, and emergency expedites that erode margin. Teams spend energy reconciling systems instead of improving slotting, routing, or supplier reliability.",
    automationPoints: [
      "Digital capture: barcode, RFID, or mobile scanning with validation rules so receipts and moves post to the WMS or ERP in near real time.",
      "Inventory orchestration: demand-driven replenishment signals, min/max tuning, and exception alerts when on-hand diverges from expected positions.",
      "Fulfillment workflow: integrated pick/pack/ship steps, label generation, and carrier API booking so status updates propagate without re-keying.",
      "Document automation: OCR and workflow routing for bills of lading, customs entries, and proof-of-delivery — with human review on edge cases.",
      "Analytics: throughput, dwell time, and OTIF dashboards fed from clean event data instead of weekly spreadsheet roll-ups.",
    ],
    lotrinoBridge:
      "We start from your physical layout and systems map: which events must be authoritative, where integrations break today, and what latency costs you in fees or service levels. From there we design integrations, automation, and targeted AI (for example document extraction or demand signal enrichment) with pilots on one site or lane before scaling.",
    faqs: [
      {
        q: "What does WMS automation include?",
        a: "Anything that reduces manual entry into the warehouse management system: scanning workflows, automated replenishment triggers, integration with ERP and transport systems, and alerts when data does not match physical reality.",
      },
      {
        q: "Can AI help with freight documents?",
        a: "Yes for structured extraction and routing — for example turning scanned paperwork into validated fields and tasks. Final responsibility for customs filings stays with qualified staff.",
      },
      {
        q: "How do you prioritize logistics projects?",
        a: "By impact and feasibility: we look for high-volume transactions with clear validation rules, limited exception rates, and measurable KPIs like pick accuracy or dock-to-stock time.",
      },
    ],
  },
  {
    slug: "healthcare",
    title: "Medical practices & healthcare facilities",
    tagline:
      "Data, appointments, and billing — often across several systems in parallel.",
    metaTitle: "Medical practice administration & EHR workflow efficiency | LOTRINO",
    metaDescription:
      "Ease documentation load, scheduling, and billing coordination for practices. AI consulting that respects privacy — practical automation for front-office and admin workflows.",
    intro:
      "Practice managers and clinical support staff balance patient-facing time with administrative load: duplicate demographics across the EHR and practice-management system, chasing referrals, and preparing billing documentation. These workflows are not clinical decision-making — they are coordination and capture — yet they consume hours that could return to care or patient communication. Improvement means fewer redundant keystrokes, clearer handoffs between systems, and automation that respects consent and retention rules by design.",
    accentColor: "#7eb89a",
    manualTasks: [
      "Intake → patients complete paper forms that staff re-type into the EHR and billing system; insurance changes at check-in do not propagate everywhere.",
      "Scheduling → staff call patients for reminders while the portal shows stale slots; no-show follow-up is a separate task list.",
      "Documentation support → clinicians dictate or free-text notes; coding staff later hunt for billable elements across unstructured text under deadline pressure.",
      "Referrals and prior authorization → faxed or portal requests sit in queues; status calls repeat until approval numbers are manually pasted into charts.",
      "Claims follow-up → denials arrive as PDFs or portal messages that someone triages into worklists without a single queue view.",
      "Records release → ROI requests are tracked in email instead of a controlled workflow with audit logs.",
    ],
    whyUnpleasant:
      "Administrative load correlates with burnout and after-hours work, while revenue leakage from missed charges or slow follow-up hits the business side. Patients feel it as long hold times and conflicting instructions.",
    automationPoints: [
      "Patient access: online scheduling with real inventory of slots, automated reminders, and waitlist backfill rules aligned to your policies.",
      "Data integration: identity resolution and field mapping so demographics and coverage updates sync across PM, EHR, and patient engagement tools.",
      "Documentation assistance: template expansion, structured note sections, or AI-assisted coding suggestions with clinician review — scoped to your governance model.",
      "Revenue cycle handoffs: rules-based routing of denials, eligibility checks before service, and dashboards for aging AR by reason code.",
      "Compliance hygiene: retention schedules, access logging, and consent capture embedded in workflows rather than tracked in spreadsheets.",
    ],
    lotrinoBridge:
      "We align with your privacy and clinical governance: identify administrative workflows with clear inputs and outputs, prove value in a bounded pilot, then integrate and optimize. We do not replace clinicians; we reduce friction around the systems that surround patient care.",
    faqs: [
      {
        q: "Do you work with patient diagnosis or treatment decisions?",
        a: "No. Our focus is operational and administrative workflow — scheduling, documentation support, billing coordination, and system integration — with clinical judgment remaining with licensed professionals.",
      },
      {
        q: "How do you approach HIPAA or GDPR in projects?",
        a: "We design with data minimization, access controls, and vendor due diligence in mind, and we scope documentation to what your DPA and policies require. Legal and DPO sign-off stays with your organization.",
      },
      {
        q: "What is a realistic first automation in a practice?",
        a: "Often appointment reminders and intake digitization, or a denial routing queue — high volume, clear metrics, and limited clinical risk when done with proper review.",
      },
    ],
  },
  {
    slug: "legal",
    title: "Law firms (legal services)",
    tagline:
      "Intake, documents, and billing — lots of admin beside core legal work.",
    metaTitle: "Law firm matter intake, time & billing automation | LOTRINO",
    metaDescription:
      "Streamline client intake, document assembly, docketing, and time capture for law firms. Practical AI and workflow automation for legal operations.",
    intro:
      "Managing partners and legal operations leaders care about utilization, write-downs, and risk on every matter. Yet a measurable slice of fee-earner time still disappears into re-keying client data, rebuilding standard documents from old files, and reconstructing time entries at month-end. The opportunity is to tighten the operational spine — intake, conflicts, matter setup, time capture, and renewals — so lawyers spend more time on advocacy and client counsel, and less on administrative reconstruction.",
    accentColor: "#8b9dc9",
    manualTasks: [
      "Intake → conflict searches span email attachments and spreadsheets; engagement letters are customized by hand from last month’s version.",
      "Matter opening → client numbers, billing arrangements, and team lists are entered separately in finance and document systems.",
      "Drafting → associates pull clauses from prior deals; version control lives in filenames rather than a managed template library.",
      "Time entry → narratives are written from memory on Friday; passive capture signals from calendar or documents are unused.",
      "Docketing → court rules and deadlines are tracked in standalone spreadsheets beside the calendaring tool.",
      "Invoicing → pre-bills circulate as PDF mark-up; narrative edits bounce between partners and accounting.",
    ],
    whyUnpleasant:
      "Leaked time is lost revenue; inconsistent intake creates malpractice exposure; and skilled lawyers perform clerical work because systems are not connected. Morale suffers when talent is trapped in administrative rework.",
    automationPoints: [
      "Intake and conflicts: structured questionnaires, automated conflict database queries, and e-signature flows that create clean matter records.",
      "Document assembly: clause libraries, guided interviews, and versioned templates for repeat document types — with review checkpoints for partner approval.",
      "Time capture: calendar and document activity surfaced as draft entries for attorney review, reducing end-of-period reconstruction.",
      "Docketing integration: rules-based deadline calculation feeding tasks to responsible roles, with audit trails.",
      "Billing operations: LEDES or firm-standard export automation, narrative assistance where appropriate, and exception dashboards for discounts or write-offs.",
    ],
    lotrinoBridge:
      "We map your matter lifecycle and systems footprint, then prioritize automation that improves recoverability and reduces risk — often starting with intake and time capture because they touch every practice group. AI may assist with drafting or narrative suggestions; ethical and supervisory rules remain with your firm.",
    faqs: [
      {
        q: "Can AI draft legal documents safely?",
        a: "It can accelerate first drafts from approved templates and help lawyers find language — always with human review for accuracy, jurisdiction, and client facts. We scope tools to your risk tolerance and supervision model.",
      },
      {
        q: "What is passive time capture?",
        a: "Systems that infer billable activity from calendars, documents, or communications and propose draft time entries, which attorneys approve or edit — reducing Friday reconstruction.",
      },
      {
        q: "Do you integrate with specific practice management tools?",
        a: "We work API-first with your stack: matter management, DMS, and finance systems. The integration pattern matters more than a single vendor name.",
      },
    ],
  },
  {
    slug: "facility-management",
    title: "Facility management (buildings & services)",
    tagline:
      "Tickets, materials, and maintenance — coordination and evidence across many channels.",
    metaTitle: "CAFM, work orders & preventive maintenance digitization | LOTRINO",
    metaDescription:
      "Digitize FM ticketing, vendor coordination, and maintenance planning. AI and integration consulting for building operations and facility teams.",
    intro:
      "Facility and property operations teams coordinate tenants, technicians, and vendors across email, phone, and legacy CMMS tools. Work requests that start as messages become hard to prioritize; preventive schedules slip when asset registers are incomplete; and audit evidence for safety or insurance lives in ring binders. Digitization means one queue for work, reliable asset history, and automated nudges before failures — not more apps without adoption.",
    accentColor: "#b89a7e",
    manualTasks: [
      "Ticket intake → occupants email photos to a shared inbox; FM staff re-type into the CAFM while the requester has no ticket ID for status.",
      "Vendor dispatch → SLAs are tracked in spreadsheets; follow-up calls repeat when technicians do not close work orders with photos or signatures.",
      "Parts and consumables → storeroom counts are annual events; critical spares are missing when a pump fails on a weekend.",
      "Preventive maintenance → OEM schedules live in PDFs; rounds-based inspections use paper checklists that are filed but not analyzed.",
      "Compliance evidence → fire inspections, elevator logs, and water testing certificates sit in folders disconnected from work order history.",
      "Energy and sustainability reporting → utility bills are typed into trackers for certification programs; anomalies are noticed late.",
    ],
    whyUnpleasant:
      "Reactive firefighting crowds out preventive work; tenants experience slow response; and insurance or regulator questions force painful document hunts. FM leaders lack a trustworthy single view of backlog, cost, and risk.",
    automationPoints: [
      "Unified ticketing: portals, QR codes on assets, and mobile capture feeding a CAFM with categorization rules and SLA timers.",
      "Maintenance strategy: risk-based PM schedules, meter-driven triggers where IoT exists, and mobile execution with mandatory close-out data.",
      "Vendor integration: API or EDI booking, digital work orders, and automated invoice matching against completed tasks.",
      "Inventory: min/max alerts tied to work order templates and storeroom locations.",
      "Reporting: uptime, MTTR, spend by site, and compliance task completion on dashboards fed from the same system of record.",
    ],
    lotrinoBridge:
      "We connect building data, workflows, and vendor touchpoints so FM teams run from facts — pilot on one campus or asset class, measure response and backlog, then scale integrations and optional AI (for example anomaly detection on energy or ticket text classification) where ROI is clear.",
    faqs: [
      {
        q: "What is CAFM in facility management?",
        a: "Computer-aided facility management software — the system of record for assets, work orders, space data, and often vendor contracts. Automation is about feeding it clean, timely data from the field and integrations.",
      },
      {
        q: "Where does AI add value in FM?",
        a: "Often in triage and prioritization: classifying inbound requests, suggesting likely causes, or surfacing repeat failures on an asset. Predictive maintenance depends on data quality first.",
      },
      {
        q: "How do you start without replacing our CMMS?",
        a: "By integrating what you have: better intake channels, mobile workflows, and reporting layers — then evaluating replacement only if limits block your roadmap.",
      },
    ],
  },
];

const industriesDe: UseCaseIndustry[] = [
  {
    slug: "recruiting",
    title: "Recruiting (Personalgewinnung)",
    tagline:
      "Von Stellenausschreibungen bis ATS-Pflege — wiederkehrende Schritte bei jeder offenen Stelle.",
    metaTitle: "Recruiting & ATS-Workflow-Automatisierung | LOTRINO",
    metaDescription:
      "Weniger manuelle ATS-Pflege, Screening und Interviewplanung. KI-Beratung für Bewerbermanagement, Pipeline und auditfähige Recruiting-Prozesse.",
    intro:
      "Talent-Teams und Hiring Manager wiederholen bei jeder Vakanz denselben operativen Zyklus: Stellen schalten, Eingänge bewerten, Kalender synchron halten und das ATS für Reporting aktuell halten. Bleiben diese Schritte manuell, steigt die Time-to-Hire und kleine Datenfehler werden zu Compliance-Risiko. Ziel ist nicht, menschliche Eignungsbeurteilung zu ersetzen, sondern Copy-Paste und E-Mail-Jagd zu reduzieren, damit Zeit für Gespräche und Abstimmung mit Fachbereichen bleibt. Automatisierung und KI sind dort sinnvoll, wo Aufgaben strukturiert, wiederholbar und messbar sind.",
    accentColor: "#5eb8c4",
    manualTasks: [
      "Vakanz startet → Stellentexte werden für jedes Board neu formatiert und ausgespielt; unterschiedliche Felder bedeuten Doppelarbeit oder Lücken.",
      "Bewerbungsspitzen → Unterlagen liegen in E-Mail, ATS und Empfehlungskanälen; jemand pflegt Status manuell nach, damit Auswertungen stimmen.",
      "Telefon- und Panelrunden → Koordinator:innen synchronisieren viele Kalender, verschieben bei Konflikten und verteilen Links neu; ein verpasstes Update schadet der Candidate Experience.",
      "Angebote und Absagen → Vorlagen existieren, aber Ausnahmen und Nachfassen werden unter Zeitdruck weiterhin einzeln getippt.",
      "ATS-Hygiene → Feedback aus Chats trifft nicht auf saubere Dispositions-Codes im System; Recruiter:innen harmonisieren Notizen in Sammelaktionen.",
      "Compliance-Reports → Exporte für Nachweise werden aus Tabellen zusammengeklickt, weil historische Felder im ATS nie vereinheitlicht wurden.",
    ],
    whyUnpleasant:
      "Der Aufwand wächst linear mit offenen Stellen, nicht mit strategischem Mehrwert. Ermüdung äußert sich in langsameren Antworten an Bewerber:innen, lückenhaften Audit-Trails und Burnout bei Koordinator:innen, die selten die Teile von Recruiting berühren, die Quality of Hire wirklich beeinflussen.",
    automationPoints: [
      "Strukturierter Einstieg: Rollenvorlagen, Freigaben und kanonische Stellendaten per Integration zu Jobboards und ATS statt manueller Mehrfacherfassung.",
      "Triage und Routing: Regeln oder ML-gestütztes Ranking nach Skills, Standort oder Must-haves — mit menschlicher Freigabe vor dem nächsten Schritt.",
      "Terminautomatisierung: Self-Booking, kalenderbewusste Weiterleitung und Erinnerungen, die CRM/ATS-Status setzen, wenn Termine gebucht oder verpasst werden.",
      "Kommunikation in großen Mengen: ereignisbasierte E-Mail- oder Chat-Folgen für Eingangsbestätigung, Reminder und Interview-Infos — mit Opt-out und Vorgaben zur Zulässigkeit.",
      "Reporting: geplante Exporte und Dashboards mit Dispositions- und Quellendaten ohne Quartals-Ende-Excel-Retter.",
    ],
    lotrinoBridge:
      "Wir behandeln Recruiting wie einen Operations-Workflow: ATS und Touchpoints kartieren, Schritte priorisieren, die die meisten Stunden oder Compliance-Risiken kosten, dann Integrationen, Automatisierung oder KI-gestützte Assistenten mit klaren Verantwortlichkeiten und Kennzahlen liefern. Strategie grenzt ab, was sich nicht automatisieren sollte; Umsetzung hält Menschen in der Entscheidung über Einstellungen, während Maschinen Wiederholung übernehmen.",
    faqs: [
      {
        q: "Was ist ATS-Workflow-Automatisierung?",
        a: "Das Verbinden von Bewerbermanagement, Kalendern und Kommunikation so, dass Status, Interviews und Feedback ohne manuelles Kopieren zwischen Systemen aktuell bleiben.",
      },
      {
        q: "Wo hilft KI, ohne Recruiter:innen zu ersetzen?",
        a: "Bei strukturierten Aufgaben: erste Screenings-Zusammenfassungen, Slot-Vorschläge, Skill-Tagging aus Lebensläufen und Auffälligkeiten in Pipeline-Daten. Die Bewertung von Passung bleibt beim Team.",
      },
      {
        q: "Wie reduziert man Compliance-Risiken bei Automatisierung?",
        a: "Durch konsistente Dispositions-Gründe, nachvollziehbare Zugriffe auf Personendaten und Kommunikationsflows, in denen Einwilligung und Aufbewahrung pro Region abgebildet sind — nicht in Einzelmails.",
      },
    ],
  },
  {
    slug: "logistics",
    title: "Logistik (Supply Chain & Lager/Transport)",
    tagline:
      "Erfassung, Bestand und Transport — viele Handschritte zwischen Lager und ERP.",
    metaTitle: "Lagerlogistik & Supply-Chain-Prozessautomatisierung | LOTRINO",
    metaDescription:
      "Höhere Datenqualität in WMS, Picking und Frachtdokumentation. KI- und Integrationsberatung für Logistik, Bestand und Fulfillment.",
    intro:
      "Lagerleitung und Disposition stehen zwischen physischer Ware und digitalem Systembestand: jede Bewegung sollte im ERP und WMS stimmen, bevor Kunden oder Behörden Nachweise verlangen. Manuelle Erfassung — Papier, Excel, Chat — erzeugt Latenz und Nacharbeit, wenn Spedition, Zoll oder Vertrieb Status brauchen. Sinnvolle Automatisierung verkürzt die Schleife von Wareneingang bis Sendungsbestätigung, ohne Teams zur reinen Datenerfassung zu machen.",
    accentColor: "#c4a35e",
    manualTasks: [
      "Wareneingang → Mengen landen in Excel oder E-Mail, bis das WMS nachgezogen wird; Differenzen fallen erst bei Inventur auf.",
      "Kommissionierung → Picklisten werden bei Prioritätswechsel neu gedruckt oder zusammengeklickt; Wege sind nicht an die aktuelle Auftragslage angepasst.",
      "Transportbuchung → Aufträge werden in Portale der Spedition nachgetippt; Sendungsnummern per Mail statt Rückfluss ins TMS oder ERP.",
      "Zoll und Frachtpapiere → PDFs werden umbenannt und abgelegt; kritische Fristen für Zolllager hängen am Kalender einzelner Personen.",
      "Retouren und Sperre → RMA-Gründe stehen in Mails, während der Bestand im WMS noch verkaufsfähig zeigt.",
      "Übergaben Schicht → Nacht-Updates erreichen die Tagschicht nicht, weil Logs nur auf Papier laufen.",
    ],
    whyUnpleasant:
      "Volumen und Saison verstärken kleine Fehler: Fehlkommissionen, Chargebacks und Express-Sends mit Margenverlust. Teams rekonziliieren Systeme statt Slotting, Touren oder Lieferantenqualität zu verbessern.",
    automationPoints: [
      "Digitale Erfassung: Barcode, RFID oder mobile Erfassung mit Validierung, damit Buchungen nahezu live im WMS oder ERP landen.",
      "Bestandssteuerung: nachfragegesteuerte Nachschub-Signale, Min/Max-Tuning und Alarme bei Abweichung zwischen Soll- und Ist-Beständen.",
      "Fulfillment: integrierte Pick-/Pack-/Ship-Schritte, Label-Erstellung und Carrier-APIs ohne Doppelbuchung.",
      "Dokumentenautomatisierung: OCR und Workflow für Frachtbriefe, Zollunterlagen und POD — mit Prüfung bei Ausnahmen.",
      "Analytics: Durchsatz, Verweildauer und OTIF-Kennzahlen aus sauberen Ereignissen statt wöchentlicher Excel-Konsolidierung.",
    ],
    lotrinoBridge:
      "Wir starten mit Layout und Systemlandschaft: welche Events führend sind, wo Integrationen heute brechen und welche Latenz Gebühren oder Servicegrade kostet. Danach entwerfen wir Integrationen, Automatisierung und gezielte KI (z. B. Dokumentextraktion oder Nachfrage-Anreicherung) — pilotiert auf einer Site oder Relation, dann skalierbar.",
    faqs: [
      {
        q: "Was umfasst WMS-Automatisierung?",
        a: "Alles, was manuelle Eingaben ins Lagerverwaltungssystem reduziert: Scan-Workflows, automatische Nachschub-Trigger, Anbindung an ERP und Transport — und Alarme, wenn Daten nicht zur Realität passen.",
      },
      {
        q: "Kann KI bei Frachtdokumenten helfen?",
        a: "Ja bei strukturierter Extraktion und Weiterleitung — etwa aus Scans werden validierte Felder und Tasks. Verantwortung für Zoll und Compliance bleibt bei qualifizierten Rollen.",
      },
      {
        q: "Wie priorisieren wir Logistikprojekte?",
        a: "Nach Wirkung und Machbarkeit: hohe Transaktionsvolumina mit klaren Regeln, überschaubare Ausnahmequoten und messbare KPIs wie Pick-Genauigkeit oder Dock-to-Stock-Zeit.",
      },
    ],
  },
  {
    slug: "healthcare",
    title: "Arztpraxen & medizinische Einrichtungen",
    tagline:
      "Daten, Termine und Abrechnung — oft parallel in mehreren Systemen.",
    metaTitle: "Praxisorganisation & EHR-Workflow-Effizienz | LOTRINO",
    metaDescription:
      "Weniger Dokumentations- und Abrechnungslast in der Praxisverwaltung. KI-Beratung mit Fokus auf Datenschutz — pragmatische Automatisierung für Admin und Frontoffice.",
    intro:
      "Praxismanager:innen und medizinisches Fachpersonal jonglieren Patientenkontakt mit Verwaltungslast: doppelte Stammdaten in EHR und Praxissoftware, Überweisungsnachverfolgung und Abrechnungsvorbereitung. Das sind selten klinische Entscheidungen, sondern Koordination und Erfassung — dennoch fressen sie Zeit, die für Versorgung oder Kommunikation fehlt. Verbesserung heißt weniger redundante Eingaben, klarere Systemübergänge und Automatisierung, die Einwilligung und Aufbewahrung von vornherein einplant.",
    accentColor: "#7eb89a",
    manualTasks: [
      "Anmeldung → Papierformulare werden nachgetippt; Änderungen bei Versicherung am Empfang erreichen nicht alle Systeme.",
      "Terminierung → Telefon-Erinnerungen parallel zu veralteten Portal-Slots; No-Show-Nachfass ist eine eigene Liste.",
      "Dokumentation → Freitext und Diktate; Kodierungs-Teams suchen später unter Zeitdruck nach abrechenbaren Elementen.",
      "Überweisungen & Vorabgenehmigungen → Faxe oder Portal-Anträge in Warteschlangen; Status wird per Rückruf in die Akte kopiert.",
      "Claims-Follow-up → Ablehnungen als PDF oder Portal-Nachricht ohne zentrale Prioritätenliste.",
      "Aktenauskunft → ROI-Anfragen laufen per E-Mail statt mit Audit-Log und SLA.",
    ],
    whyUnpleasant:
      "Administrative Last trägt zu Burnout und Nacharbeit außerhalb der Sprechstunde bei; gleichzeitig entgehen Erlöse durch verpasste Leistungen oder langsame Nachverfolgung. Patient:innen merken lange Wartezeiten und widersprüchliche Abläufe.",
    automationPoints: [
      "Patientenzugang: Online-Termine mit echtem Slot-Bestand, automatische Erinnerungen und Wartelisten-Regeln nach Ihren Policies.",
      "Datenintegration: Stammdaten und Versicherungsupdates synchron zwischen PM, EHR und Patientenportal.",
      "Dokumentationsunterstützung: Vorlagen, strukturierte Abschnitte oder KI-gestützte Kodierungsvorschläge mit ärztlicher Freigabe — nach Ihrer Governance.",
      "Revenue-Cycle: regelbasiertes Routing von Ablehnungen, Eligibility vor Leistung und AR-Dashboards nach Ablehnungsgrund.",
      "Compliance: Aufbewahrung, Zugriffsprotokolle und Einwilligungen in Workflows statt in Parallel-Tabellen.",
    ],
    lotrinoBridge:
      "Wir richten uns an Ihrer klinischen und datenschutzrechtlichen Governance aus: administrative Workflows mit klaren Inputs und Outputs identifizieren, Nutzen in einem begrenzten Piloten belegen, dann integrieren und optimieren. Wir ersetzen keine Behandlung; wir reduzieren Reibung rund um die Systeme der Versorgung.",
    faqs: [
      {
        q: "Arbeitet ihr an Diagnose oder Therapie?",
        a: "Nein. Fokus sind operative und administrative Abläufe — Termine, Dokumentationsunterstützung, Abrechnungskoordination und Integration — klinische Entscheidungen verbleiben bei approbierten Personen.",
      },
      {
        q: "Wie geht ihr mit HIPAA bzw. DSGVO um?",
        a: "Wir planen mit Datenminimierung, Zugriffskontrollen und Vendor-Prüfung; Dokumentation im Rahmen Ihrer AV-Verträge und Policies. Rechtliche Freigaben liegen bei Ihrer Organisation.",
      },
      {
        q: "Was ist ein realistischer erster Automatisierungsschritt?",
        a: "Oft Terminerinnerungen und digitale Anmeldung oder ein Routing-Queue für Ablehnungen — hohes Volumen, klare Kennzahlen und begrenztes klinisches Risiko bei sauberer Prüfung.",
      },
    ],
  },
  {
    slug: "legal",
    title: "Kanzleien (Rechtsberatung / Juristische Dienste)",
    tagline:
      "Intake, Dokumente und Billing — viel Admin neben der eigentlichen Rechtsarbeit.",
    metaTitle: "Kanzlei Mandantenaufnahme, Zeiterfassung & Billing | LOTRINO",
    metaDescription:
      "Effizientere Mandantenaufnahme, Dokumenterstellung, Fristenmanagement und Zeiterfassung. Pragmatische KI- und Prozessautomatisierung für Legal Operations.",
    intro:
      "Kanzleispitzen und Legal Operations messen Auslastung, Abschläge und Risiken pro Mandat. Trotzdem geht erhebliche Anwaltzeit für Doppelpflege von Mandantendaten, das Zusammenklicken wiederkehrender Dokumente aus alten Versionen und die Rekonstruktion von Stunden am Monatsende verloren. Die Hebel liegen in der operativen Kette — Intake, Konflikt, Mandatsanlage, Zeiterfassung und Verlängerungen — damit mehr Zeit für Vertretung und Mandantenberatung bleibt und weniger für administrativen Nachbau.",
    accentColor: "#8b9dc9",
    manualTasks: [
      "Intake → Konfliktprüfung über Anhänge und Tabellen; Mandatsverträge werden aus letzter Woche manuell angepasst.",
      "Mandatsöffnung → Nummern, Honorarvereinbarungen und Teams werden getrennt in Finanz- und Dokumentensysteme gepflegt.",
      "Entwürfe → Associates übernehmen Klauseln aus Vorprojekten; Versionierung läuft über Dateinamen statt Template-Bibliothek.",
      "Zeiterfassung → Narrative entstehen freitags aus Erinnerung; Signale aus Kalender oder Dokumenten bleiben ungenutzt.",
      "Fristen → Gerichtsregeln und Deadlines liegen zusätzlich zur Kalenderlösung in Tabellen.",
      "Rechnungsstellung → Vorabrechnungen als PDF-Korrekturrunden zwischen Partnern und Buchhaltung.",
    ],
    whyUnpleasant:
      "Verlorene Zeit ist verlorener Umsatz; lückenhafte Aufnahme erhöht Haftungsrisiko; qualifizierte Jurist:innen erledigen Schreibarbeit, weil Systeme nicht verbunden sind.",
    automationPoints: [
      "Intake und Konflikte: strukturierte Fragebögen, automatisierte Datenbankabfragen und E-Sign-Flows mit sauberen Mandatsstammdaten.",
      "Dokumenterstellung: Klauselbibliotheken, geführte Interviews und versionierte Vorlagen für wiederkehrende Dokumenttypen — mit Freigabe-Meilensteinen.",
      "Zeiterfassung: Kalender- und Dokumentaktivität als Entwurfseinträge zur Freigabe durch Anwält:innen.",
      "Fristen: regelbasierte Berechnung mit Aufgaben an Verantwortliche und nachvollziehbaren Historien.",
      "Billing: Exporte nach LEDES oder Hausstandard, Unterstützung bei Narrativen wo sinnvoll, Ausnahme-Dashboards für Rabatte oder Abschläge.",
    ],
    lotrinoBridge:
      "Wir kartieren Mandatslebenszyklus und Systemlandschaft und priorisieren Automatisierung mit Hebel auf Verrechenbarkeit und Risiko — oft Intake und Zeiterfassung, weil sie jede Practice Group berühren. KI kann Entwürfe oder Textvorschläge unterstützen; ethische und fachliche Verantwortung bleibt bei der Kanzlei.",
    faqs: [
      {
        q: "Kann KI juristische Dokumente sicher erstellen?",
        a: "Sie kann Erstdrafts aus freigegebenen Vorlagen beschleunigen und Formulierungen vorschlagen — immer mit menschlicher Prüfung auf Richtigkeit, Zuständigkeit und Sachverhalt. Wir richten Tools an Ihrem Risiko- und Aufsichtsmodell aus.",
      },
      {
        q: "Was ist passive Zeiterfassung?",
        a: "Systeme, die aus Kalender, Dokumenten oder Kommunikation billable Aktivität ableiten und Entwurfseinträge vorschlagen, die Anwält:innen bestätigen oder ändern — statt Freitag-Nachbau.",
      },
      {
        q: "Bindet ihr spezielle Kanzleisoftware an?",
        a: "Wir arbeiten API-first mit Ihrem Stack: Mandantenverwaltung, DMS und Finanzsystem. Entscheidend ist Integrationsmuster und Datenfluss, nicht ein einzelner Herstellername.",
      },
    ],
  },
  {
    slug: "facility-management",
    title: "Facility Management (Gebäude & Services)",
    tagline:
      "Tickets, Material und Wartung — Koordination und Nachweise über viele Kanäle.",
    metaTitle: "CAFM, Störungsmanagement & Instandhaltungsplanung | LOTRINO",
    metaDescription:
      "Digitale FM-Tickets, Dienstleister-Koordination und Wartungsplanung. KI- und Integrationsberatung für Gebäude- und Facility-Teams.",
    intro:
      "Facility- und Property-Teams koordinieren Mieter:innen, Technik und Dienstleister über E-Mail, Telefon und ältere CMMS-Tools. Anfragen, die als Nachricht starten, sind schwer zu priorisieren; vorbeugende Intervalle verrutschen bei unvollständigen Anlagenregistern; Nachweise für Sicherheit oder Versicherung liegen in Ordnern statt am Ticket. Digitalisierung bedeutet eine Warteschlange für Arbeit, belastbare Anlagenhistorie und automatische Erinnerung vor Ausfällen — nicht noch eine App ohne Adoption.",
    accentColor: "#b89a7e",
    manualTasks: [
      "Ticketannahme → Nutzer:innen mailen Fotos an Gruppenpostfächer; FM tippt ins CAFM nach, während die Meldende keine Ticket-ID für Status hat.",
      "DL-Zuweisung → SLAs in Tabellen; Nachfassen per Anruf, wenn Techniker keine Fotos oder Unterschriften im Auftrag hinterlassen.",
      "Material → Lagerzählung selten; kritische Ersatzteile fehlen beim Pumpenausfall am Wochenende.",
      "Instandhaltung → OEM-Intervalle in PDFs; Rundgänge auf Papier werden abgelegt, aber nicht ausgewertet.",
      "Compliance → Brandschutz, Aufzugs- oder Trinkwassernachweise in Ordnern ohne Verknüpfung zur Auftragshistorie.",
      "Energie und Reporting → Verbrauchswerte manuell aus Rechnungen für Zertifizierungsnachweise; Auffälligkeiten spät erkannt.",
    ],
    whyUnpleasant:
      "Reaktives Löschen verdrängt vorbeugende Arbeit; Mieter:innen erleben lange Reaktionszeiten; bei Versicherung oder Behörde folgt mühsame Dokumentenjagd. FM-Führungskräfte haben kein verlässliches Bild von Backlog, Kosten und Risiko.",
    automationPoints: [
      "Einheitliches Ticketing: Portale, QR an Anlagen und mobile Erfassung ins CAFM mit Kategorien und SLA-Timern.",
      "Wartungsstrategie: risikobasierte PM-Pläne, zählerbasierte Trigger wo IoT vorhanden ist, mobile Ausführung mit Pflicht-Closing-Daten.",
      "Dienstleister-Anbindung: digitale Aufträge per API oder EDI, automatischer Abgleich mit Rechnungen.",
      "Inventar: Min/Max-Alarme gekoppelt an Auftragsvorlagen und Lagerorte.",
      "Reporting: Verfügbarkeit, MTTR, Kosten pro Standort und Compliance-Tasks auf Dashboards aus einem System.",
    ],
    lotrinoBridge:
      "Wir verbinden Gebäudedaten, Workflows und Dienstleister-Touchpoints, damit FM faktenbasiert steuert — Pilot auf einem Campus oder einer Anlagenklasse, Messung von Reaktionszeit und Rückstand, dann Skalierung von Integration und optional KI (z. B. Anomalien oder Ticket-Klassifikation) bei klarem ROI.",
    faqs: [
      {
        q: "Was ist CAFM im Facility Management?",
        a: "Computerunterstütztes Facility Management — System von Anlagen, Aufträgen, Flächen und oft Verträgen. Automatisierung bedeutet saubere, zeitnahe Daten aus dem Feld und aus Schnittstellen.",
      },
      {
        q: "Wo bringt KI Nutzen im FM?",
        a: "Oft bei Triage: Eingänge klassifizieren, wahrscheinliche Ursachen vorschlagen oder wiederkehrende Ausfälle an Anlagen sichtbar machen. Predictive Maintenance braucht zuerst Datenqualität.",
      },
      {
        q: "Wie starten wir ohne CMMS-Tausch?",
        a: "Durch Anbindung des Bestehenden: bessere Erfassungskanäle, mobile Workflows und Reporting — Ersatz erst prüfen, wenn Grenzen Ihre Roadmap blockieren.",
      },
    ],
  },
];

export function getIndustries(locale: AppLocale): UseCaseIndustry[] {
  return locale === "de" ? industriesDe : industriesEn;
}

export function getIndustry(slug: string, locale: AppLocale): UseCaseIndustry | undefined {
  return getIndustries(locale).find((i) => i.slug === slug);
}
