import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | LOTRINO",
  description: "Privacy policy information for LOTRINO.",
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <section className="max-w-3xl mx-auto px-6 lg:px-8 py-24 space-y-6">
        <h1 className="text-3xl md:text-4xl font-semibold tracking-tight">
          Privacy Policy
        </h1>

        <div className="space-y-8">
          {/* 1. Controller */}
          <div>
            <h2 className="text-base font-medium mb-3">1. Controller</h2>
            <p className="text-sm text-muted leading-relaxed mb-2">
              The controller responsible for data processing on this website is:
            </p>
            <p className="text-sm text-muted leading-relaxed">
              Jan Bocchino
              <br />
              Kenyongasse 21
              <br />
              <a
                href="mailto:jan@lotrino.com"
                className="text-muted underline hover:no-underline"
              >
                jan@lotrino.com
              </a>
            </p>
          </div>

          {/* 2. Hosting (Vercel) */}
          <div>
            <h2 className="text-base font-medium mb-3">2. Hosting (Vercel)</h2>
            <p className="text-sm text-muted leading-relaxed mb-2">
              This website is hosted by Vercel Inc., 440 N Barranca Ave #4133,
              Covina, CA 91723, USA.
            </p>
            <p className="text-sm text-muted leading-relaxed mb-2">
              When you access this website, the following data may automatically
              be processed in server log files:
            </p>
            <ul className="list-disc list-inside space-y-1 text-sm text-muted mb-2">
              <li>IP address</li>
              <li>Date and time of request</li>
              <li>Browser type and version</li>
              <li>Operating system</li>
              <li>Referrer URL</li>
            </ul>
            <p className="text-sm text-muted leading-relaxed mb-2">
              This processing is carried out to ensure the security, stability,
              and proper functioning of the website and is based on Art. 6(1)(f)
              GDPR (legitimate interest).
            </p>
            <p className="text-sm text-muted leading-relaxed">
              Data may be transferred to the United States. Vercel relies on
              appropriate safeguards under Art. 46 GDPR (e.g., Standard
              Contractual Clauses).
            </p>
          </div>

          {/* 3. Domain Registration (Squarespace) */}
          <div>
            <h2 className="text-base font-medium mb-3">
              3. Domain Registration (Squarespace)
            </h2>
            <p className="text-sm text-muted leading-relaxed mb-2">
              The domain of this website is managed by Squarespace, Inc., New
              York, USA.
            </p>
            <p className="text-sm text-muted leading-relaxed">
              In the context of technical administration, personal data may be
              processed. A transfer of data to the United States cannot be
              excluded. Appropriate safeguards pursuant to Art. 46 GDPR are
              applied where required.
            </p>
          </div>

          {/* 4. Contact Form (Web3Forms) */}
          <div>
            <h2 className="text-base font-medium mb-3">
              4. Contact Form (Web3Forms)
            </h2>
            <p className="text-sm text-muted leading-relaxed mb-2">
              This website uses Web3Forms to process contact form submissions.
            </p>
            <p className="text-sm text-muted leading-relaxed mb-2">
              When you submit a message via the contact form, the following
              data is processed:
            </p>
            <ul className="list-disc list-inside space-y-1 text-sm text-muted mb-2">
              <li>Name</li>
              <li>Email address</li>
              <li>Message content</li>
            </ul>
            <p className="text-sm text-muted leading-relaxed mb-2">
              The data is transmitted via Web3Forms' servers before being
              forwarded to the website operator.
            </p>
            <p className="text-sm text-muted leading-relaxed mb-2">
              The processing is carried out for the purpose of handling your
              inquiry and is based on:
            </p>
            <ul className="list-disc list-inside space-y-1 text-sm text-muted mb-2">
              <li>Art. 6(1)(b) GDPR (pre-contractual measures), or</li>
              <li>Art. 6(1)(f) GDPR (legitimate interest in responding to inquiries).</li>
            </ul>
            <p className="text-sm text-muted leading-relaxed mb-2">
              Web3Forms operates outside the European Union (India). Therefore,
              personal data may be transferred to a third country. Such
              transfers are carried out on the basis of appropriate safeguards
              in accordance with Art. 46 GDPR.
            </p>
            <p className="text-sm text-muted leading-relaxed">
              Your data will be stored only for as long as necessary to process
              your request.
            </p>
          </div>

          {/* 5. External Links (LinkedIn) */}
          <div>
            <h2 className="text-base font-medium mb-3">
              5. External Links (LinkedIn)
            </h2>
            <p className="text-sm text-muted leading-relaxed mb-2">
              This website contains a simple hyperlink to a LinkedIn profile.
            </p>
            <p className="text-sm text-muted leading-relaxed mb-2">
              Only when you click the link will data be transmitted to:
            </p>
            <p className="text-sm text-muted leading-relaxed mb-2">
              LinkedIn Ireland Unlimited Company, Wilton Place, Dublin 2,
              Ireland
            </p>
            <p className="text-sm text-muted leading-relaxed">
              No personal data is transferred to LinkedIn when you merely visit
              this website.
            </p>
          </div>

          {/* 6. Cookies and Tracking */}
          <div>
            <h2 className="text-base font-medium mb-3">
              6. Cookies and Tracking
            </h2>
            <p className="text-sm text-muted leading-relaxed mb-2">
              This website does not use tracking tools, analytics services, or
              marketing cookies.
            </p>
            <p className="text-sm text-muted leading-relaxed">
              Only technically necessary data is processed to ensure the
              operation and security of the website.
            </p>
          </div>

          {/* 7. Your Rights */}
          <div>
            <h2 className="text-base font-medium mb-3">7. Your Rights</h2>
            <p className="text-sm text-muted leading-relaxed mb-2">
              Under the GDPR, you have the following rights:
            </p>
            <ul className="list-disc list-inside space-y-1 text-sm text-muted mb-2">
              <li>Right of access (Art. 15 GDPR)</li>
              <li>Right to rectification (Art. 16 GDPR)</li>
              <li>Right to erasure (Art. 17 GDPR)</li>
              <li>Right to restriction of processing (Art. 18 GDPR)</li>
              <li>Right to data portability (Art. 20 GDPR)</li>
              <li>Right to object (Art. 21 GDPR)</li>
            </ul>
            <p className="text-sm text-muted leading-relaxed">
              You also have the right to lodge a complaint with the Austrian
              Data Protection Authority.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
