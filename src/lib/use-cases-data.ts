import type { AppLocale } from "@/i18n/routing";

export type UseCaseIndustry = {
  slug: string;
  title: string;
  tagline: string;
  accentColor: string;
  manualTasks: string[];
  whyUnpleasant: string;
  automationPoints: string[];
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
    accentColor: "#5eb8c4",
    manualTasks: [
      "Creating and distributing job postings across job boards and platforms — often heavy copy-paste work.",
      "Resume screening & shortlisting — many applications must be reviewed and compared manually.",
      "Interview scheduling & coordination with candidates and hiring teams.",
      "Communication & follow-ups (acknowledgements, reminders, rejections) via email or chat.",
      "Manual data entry in the ATS / HR system (status updates, feedback, notes).",
      "Reporting & compliance documentation (e.g. EEO reports, GDPR evidence).",
    ],
    whyUnpleasant:
      "These tasks repeat for every opening, consume time, are error-prone, and add little strategic value — often leading to recruiter fatigue.",
    automationPoints: [
      "AI-assisted screening, automated communication & scheduling tools, plus automated reporting.",
    ],
  },
  {
    slug: "logistics",
    title: "Logistics (supply chain & warehouse/transport)",
    tagline: "Capture, inventory, and transport — many manual steps between warehouse and ERP.",
    accentColor: "#c4a35e",
    manualTasks: [
      "Documenting goods in/out, capturing shipments (paper/scanner/Excel).",
      "Stock checks, inventory & replenishment monitoring via manual counts.",
      "Picking & packing lists — assembling pick lists by hand.",
      "Transport order management (manually transferring orders from ERP, entering status updates).",
      "Processing paper-based freight and customs documents.",
    ],
    whyUnpleasant:
      "High physical load, repetitive routines, and many manual capture/documentation steps that become monotonous and error-prone at volume.",
    automationPoints: [
      "Automated warehouse (AGVs, WMS, robots)",
      "Barcode/RFID & digital inventory",
      "Automated order ingestion & status tracking.",
    ],
  },
  {
    slug: "healthcare",
    title: "Medical practices & healthcare facilities",
    tagline: "Data, appointments, and billing — often across several systems in parallel.",
    accentColor: "#7eb89a",
    manualTasks: [
      "Capturing or updating patient data multiple times across systems.",
      "Manually coordinating appointments & reminders.",
      "Documentation & billing (insurance codes) — many clicks and keystrokes daily.",
      "Sorting/scanning records or digitizing paper documents.",
      "Recurring admin: prescriptions, referrals, forms.",
    ],
    whyUnpleasant:
      "Repetitive data entry pulls clinical staff away from patient care and increases burnout risk.",
    automationPoints: [
      "Electronic health records, automated scheduling/reminders, AI-assisted coding and billing workflows.",
    ],
  },
  {
    slug: "legal",
    title: "Law firms (legal services)",
    tagline: "Intake, documents, and billing — lots of admin beside core legal work.",
    accentColor: "#8b9dc9",
    manualTasks: [
      "Client and matter intake (data capture, conflict checks, e-sign capture).",
      "Document creation & management — many standard contracts, letters, filings.",
      "Time & fee capture (manual time tracking/billing).",
      "Scheduling, deadline tracking & calendar maintenance.",
      "Compliance and reporting tasks (e.g. periodic reports).",
    ],
    whyUnpleasant:
      "These administrative tasks consume time, are repetitive, and contribute little to the core legal service.",
    automationPoints: [
      "Template-based drafting, workflow automation for intake, automated deadline/calendar tools, passive time capture.",
    ],
  },
  {
    slug: "facility-management",
    title: "Facility management (buildings & services)",
    tagline: "Tickets, materials, and maintenance — coordination and evidence across many channels.",
    accentColor: "#b89a7e",
    manualTasks: [
      "Work order & service ticketing (faults, maintenance, cleaning) captured manually.",
      "Ordering & inventory for consumables (paper, cleaning supplies).",
      "Planning & coordinating maintenance intervals (manual assignment/reminders).",
      "Documenting inspections & audit reports on paper.",
      "Communication/follow-up with vendors (email, status questions).",
    ],
    whyUnpleasant:
      "Many administrative-planning tasks repeat regularly and block time for strategic FM work.",
    automationPoints: [
      "CAFM systems, automated maintenance planning, digital ticketing workflows, real-time monitoring of assets.",
    ],
  },
];

const industriesDe: UseCaseIndustry[] = [
  {
    slug: "recruiting",
    title: "Recruiting (Personalgewinnung)",
    tagline:
      "Von Stellenausschreibungen bis ATS-Pflege — wiederkehrende Schritte bei jeder offenen Stelle.",
    accentColor: "#5eb8c4",
    manualTasks: [
      "Stellenausschreibungen erstellen und verteilen auf verschiedenen Jobboards/Plattformen – oftmals Copy-Pasteaufwand.",
      "Lebenslauf-Screening & Vorauswahl – viele Bewerbungen müssen manuell geprüft und verglichen werden.",
      "Interview-Terminplanung & Koordination mit Bewerber:innen und Hiring-Teams.",
      "Kommunikation & Follow-ups (Eingangsbestätigung, Erinnerungen, Absagen) per E-Mail oder Chat.",
      "Manuelle Datenpflege im ATS / HR-System (Statusupdates, Feedback, Notizen).",
      "Reporting & Compliance-Dokumentation (z. B. EEO-Reports, DSGVO-Nachweise).",
    ],
    whyUnpleasant:
      "Diese Aufgaben wiederholen sich bei jeder offenen Stelle, sind zeitfressend, fehleranfällig und bieten wenig strategischen Wert, was häufig zu Ermüdung bei Recruiter:innen führt.",
    automationPoints: [
      "KI-gestütztes Screening, automatische Kommunikation & Planungs-Tools sowie automatisches Reporting.",
    ],
  },
  {
    slug: "logistics",
    title: "Logistik (Supply Chain & Lager/Transport)",
    tagline:
      "Erfassung, Bestand und Transport — viele Handschritte zwischen Lager und ERP.",
    accentColor: "#c4a35e",
    manualTasks: [
      "Wareneingang & -ausgang dokumentieren, Sendungen erfassen (Papier/Scanner/Excel).",
      "Bestandskontrolle, Inventur & Nachschub-Überwachung via manuelle Zählungen.",
      "Kommissionieren & Packlisten erstellen – wiederkehrende Pick-Listen manuell zusammenstellen.",
      "Transportauftragsverwaltung (Aufträge manuell aus ERP übertragen, Statusupdates einpflegen).",
      "Papierbasierte Fracht- und Zollpapiere bearbeiten.",
    ],
    whyUnpleasant:
      "Hohe physische Belastung, repetitive Routinen und viele manuelle Erfassungs-/Dokumentationsschritte, die bei hoher Stückzahl schnell monoton und fehleranfällig werden.",
    automationPoints: [
      "Automatisiertes Lager (AGVs, WMS, Roboter)",
      "Barcode/RFID & digitale Bestandsführung",
      "Automatisierte Auftragseinspielung & Status-Tracking.",
    ],
  },
  {
    slug: "healthcare",
    title: "Arztpraxen & medizinische Einrichtungen",
    tagline:
      "Daten, Termine und Abrechnung — oft parallel in mehreren Systemen.",
    accentColor: "#7eb89a",
    manualTasks: [
      "Patientendaten mehrfach erfassen oder aktualisieren in mehreren Systemen.",
      "Terminplanung & Reminder-Kommunikation manuell koordinieren.",
      "Dokumentation & Abrechnung (KV/Versicherungscodes) – viele Klicks/Tippen täglich.",
      "Patientenakten sortieren/scannen bzw. Papierdokumente digitalisieren.",
      "Wiederkehrende Verwaltungsaufgaben: Rezeptkopien, Überweisungen, Formulare.",
    ],
    whyUnpleasant:
      "Repetitive Dateneingabe lenkt medizinisches Personal von Patientenbetreuung ab und erhöht Burnout-Risiken.",
    automationPoints: [
      "Elektronische Patientenakte, automatische Termin-/Erinnerungssysteme, KI-gestützte Kodierungs- und Abrechnungsprozesse.",
    ],
  },
  {
    slug: "legal",
    title: "Kanzleien (Rechtsberatung / Juristische Dienste)",
    tagline:
      "Intake, Dokumente und Billing — viel Admin neben der eigentlichen Rechtsarbeit.",
    accentColor: "#8b9dc9",
    manualTasks: [
      "Mandanten- und Matter Intake (Datenaufnahme, Konfliktcheck, E-Signerfassung).",
      "Dokumentenerstellung/-management – viele Standardverträge, Schreiben, Klageschriften.",
      "Zeit- und Gebühren-Erfassung (manuelle Zeiterfassung/Billing).",
      "Terminkoordination, Fristüberwachung & Kalenderpflege.",
      "Compliance- und Reporting-Aufgaben (z. B. regelmäßige Berichte).",
    ],
    whyUnpleasant:
      "Diese administrativen Aufgaben fressen Zeit, sind repetitiv und tragen wenig zur juristischen Kernleistung bei.",
    automationPoints: [
      "Vorlagenbasierte Dokumenterstellung, Workflow-Automatisierung der Intake-Prozesse, automatische Frist-/Kalender-Tools, passive Zeitaufzeichnung.",
    ],
  },
  {
    slug: "facility-management",
    title: "Facility Management (Gebäude & Services)",
    tagline:
      "Tickets, Material und Wartung — Koordination und Nachweise über viele Kanäle.",
    accentColor: "#b89a7e",
    manualTasks: [
      "Auftragsannahme & Service-Ticketing (Fehler, Wartung, Reinigung) manuell erfassen.",
      "Bestell- & Inventurprozesse für Verbrauchsmaterial (Papier, Reinigungsmittel).",
      "Planung & Koordination von Wartungsintervallen (manuelle Zuweisung/Erinnerung).",
      "Dokumentation von Inspektionen & Prüfberichten auf Papier.",
      "Kommunikation/Follow-up mit Dienstleistern (E-Mails, Rückfragen, Status).",
    ],
    whyUnpleasant:
      "Viele administrativ-planerische Aufgaben wiederholen sich regelmäßig und blockieren Zeit für strategische Facility-Aufgaben.",
    automationPoints: [
      "CAFM-Systeme (Computer Aided FM), automatisierte Wartungsplanung, digitale Ticketing-Workflows, Echtzeit-Monitoring von Anlagen.",
    ],
  },
];

export function getIndustries(locale: AppLocale): UseCaseIndustry[] {
  return locale === "de" ? industriesDe : industriesEn;
}

export function getIndustry(slug: string, locale: AppLocale): UseCaseIndustry | undefined {
  return getIndustries(locale).find((i) => i.slug === slug);
}
