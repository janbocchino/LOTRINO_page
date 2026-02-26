import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms & Conditions | LOTRINO",
  description: "Terms and conditions for software development and IT services (B2B).",
};

export default function TermsPage() {
  return (
    <>
      <section className="max-w-3xl mx-auto px-6 lg:px-8 py-24 space-y-6">
        <h1 className="text-3xl md:text-4xl font-semibold tracking-tight">
          Terms &amp; Conditions
        </h1>
        <p className="text-sm text-muted">
          (Software Development &amp; IT Services – B2B)
        </p>

        <div className="space-y-8">
          {/* 1. Scope and Validity */}
          <div>
            <h2 className="text-base font-medium mb-3">1. Scope and Validity</h2>
            <p className="text-sm text-muted leading-relaxed mb-2">
              These Terms &amp; Conditions apply to all contracts for software
              development, programming services, IT consulting, and related
              services provided by:
            </p>
            <p className="text-sm text-muted leading-relaxed mb-2">
              Jan Bocchino - IT-Dienstleistungen
              <br />
              Kenyongasse 21, 1070 Vienna
              <br />
              Austria
            </p>
            <p className="text-sm text-muted leading-relaxed mb-2">
              These Terms apply exclusively to business customers (B2B).
              Conflicting terms of the client shall not apply unless expressly
              agreed in writing.
            </p>
            <p className="text-sm text-muted leading-relaxed">
              Offers are non-binding unless explicitly stated otherwise.
            </p>
          </div>

          {/* 2. Services */}
          <div>
            <h2 className="text-base font-medium mb-3">2. Services</h2>
            <p className="text-sm text-muted leading-relaxed mb-2">
              The subject of the contract may include:
            </p>
            <ul className="list-disc list-inside space-y-1 text-sm text-muted mb-2">
              <li>Custom software development</li>
              <li>Web application development</li>
              <li>Technical consulting</li>
              <li>Adaptation and modification of existing software</li>
              <li>Implementation and deployment support</li>
            </ul>
            <p className="text-sm text-muted leading-relaxed mb-2">
              The specific scope of services is defined in the written offer or
              project agreement.
            </p>
            <p className="text-sm text-muted leading-relaxed">
              The client shall provide all necessary information, access, and
              materials required for proper performance of the services.
            </p>
          </div>

          {/* 3. Performance and Acceptance */}
          <div>
            <h2 className="text-base font-medium mb-3">
              3. Performance and Acceptance
            </h2>
            <p className="text-sm text-muted leading-relaxed mb-2">
              Custom-developed software shall be accepted by the client within
              14 days of delivery.
            </p>
            <p className="text-sm text-muted leading-relaxed mb-2">
              If no written notice of material defects is provided within this
              period, the service shall be deemed accepted.
            </p>
            <p className="text-sm text-muted leading-relaxed">
              Minor defects do not entitle the client to refuse acceptance.
            </p>
          </div>

          {/* 4. Fees and Payment */}
          <div>
            <h2 className="text-base font-medium mb-3">4. Fees and Payment</h2>
            <p className="text-sm text-muted leading-relaxed mb-2">
              All fees are stated in EUR plus applicable VAT.
            </p>
            <p className="text-sm text-muted leading-relaxed mb-2">
              Unless agreed otherwise:
            </p>
            <ul className="list-disc list-inside space-y-1 text-sm text-muted mb-2">
              <li>Invoices are payable within 14 days without deduction.</li>
              <li>The service provider may invoice in milestones.</li>
            </ul>
            <p className="text-sm text-muted leading-relaxed mb-2">
              In case of late payment, statutory default interest for business
              transactions under Austrian law applies.
            </p>
            <p className="text-sm text-muted leading-relaxed">
              The provider may suspend services in case of significant payment
              delay.
            </p>
          </div>

          {/* 5. Intellectual Property */}
          <div>
            <h2 className="text-base font-medium mb-3">
              5. Intellectual Property
            </h2>
            <p className="text-sm text-muted leading-relaxed mb-2">
              Upon full payment, the client receives a non-exclusive,
              non-transferable right to use the delivered software for its
              internal business purposes.
            </p>
            <p className="text-sm text-muted leading-relaxed mb-2">
              Unless expressly agreed otherwise:
            </p>
            <ul className="list-disc list-inside space-y-1 text-sm text-muted mb-2">
              <li>Source code is not transferred.</li>
              <li>
                Ownership of underlying frameworks, libraries, tools, and
                reusable components remains with the provider.
              </li>
              <li>Third-party components are subject to their respective license terms.</li>
              <li>
                The provider retains the right to reuse general know-how and
                non-confidential technical concepts.
              </li>
            </ul>
          </div>

          {/* 6. Warranty */}
          <div>
            <h2 className="text-base font-medium mb-3">6. Warranty</h2>
            <p className="text-sm text-muted leading-relaxed mb-2">
              The warranty period is 6 months from delivery.
            </p>
            <p className="text-sm text-muted leading-relaxed mb-2">
              The provider warrants that the software substantially conforms to
              the agreed specifications.
            </p>
            <p className="text-sm text-muted leading-relaxed mb-2">
              The client must report defects in writing with sufficient detail.
            </p>
            <p className="text-sm text-muted leading-relaxed mb-2">
              In case of justified defects, the provider shall have the right to
              remedy (improvement) within a reasonable period. Price reduction
              or termination is only permitted if improvement fails.
            </p>
            <p className="text-sm text-muted leading-relaxed mb-2">
              Warranty does not apply to:
            </p>
            <ul className="list-disc list-inside space-y-1 text-sm text-muted">
              <li>Improper use</li>
              <li>Modifications by the client or third parties</li>
              <li>Incompatible system environments</li>
            </ul>
          </div>

          {/* 7. Liability */}
          <div>
            <h2 className="text-base font-medium mb-3">7. Liability</h2>
            <p className="text-sm text-muted leading-relaxed mb-2">
              The provider shall be liable only for damages caused by gross
              negligence or willful misconduct.
            </p>
            <p className="text-sm text-muted leading-relaxed mb-2">
              Liability for indirect damages, loss of profit, business
              interruption, or data loss is excluded.
            </p>
            <p className="text-sm text-muted leading-relaxed mb-2">
              In any case, total liability is limited to the contract value of
              the respective project.
            </p>
            <p className="text-sm text-muted leading-relaxed">
              Liability for personal injury remains unaffected.
            </p>
          </div>

          {/* 8. Confidentiality */}
          <div>
            <h2 className="text-base font-medium mb-3">8. Confidentiality</h2>
            <p className="text-sm text-muted leading-relaxed mb-2">
              Both parties agree to keep confidential all non-public business
              and technical information obtained in connection with the project.
            </p>
            <p className="text-sm text-muted leading-relaxed">
              This obligation survives termination of the contract.
            </p>
          </div>

          {/* 9. Data Protection */}
          <div>
            <h2 className="text-base font-medium mb-3">9. Data Protection</h2>
            <p className="text-sm text-muted leading-relaxed mb-2">
              Each party is responsible for compliance with applicable data
              protection laws.
            </p>
            <p className="text-sm text-muted leading-relaxed">
              If the provider processes personal data on behalf of the client, a
              separate data processing agreement (DPA) shall be concluded where
              required.
            </p>
          </div>

          {/* 10. Termination */}
          <div>
            <h2 className="text-base font-medium mb-3">10. Termination</h2>
            <p className="text-sm text-muted leading-relaxed mb-2">
              Cancellation of a confirmed project requires written agreement.
            </p>
            <p className="text-sm text-muted leading-relaxed">
              If the client terminates a project prematurely, the provider is
              entitled to payment for services rendered and reasonable costs
              incurred.
            </p>
          </div>

          {/* 11. Governing Law and Jurisdiction */}
          <div>
            <h2 className="text-base font-medium mb-3">
              11. Governing Law and Jurisdiction
            </h2>
            <p className="text-sm text-muted leading-relaxed mb-2">
              Austrian law shall apply, excluding conflict-of-law rules.
            </p>
            <p className="text-sm text-muted leading-relaxed">
              The competent court at the registered seat of the provider shall
              have exclusive jurisdiction for disputes between business
              parties.
            </p>
          </div>

          {/* 12. AI Services Disclaimer */}
          <div>
            <h2 className="text-base font-medium mb-3">
              12. AI Services Disclaimer
            </h2>
            <p className="text-sm text-muted leading-relaxed mb-2">
              The website may provide automated analysis, audit results, or
              recommendations generated by artificial intelligence systems.
            </p>
            <p className="text-sm text-muted leading-relaxed mb-2">
              AI-generated output:
            </p>
            <ul className="list-disc list-inside space-y-1 text-sm text-muted mb-2">
              <li>Is provided for informational purposes only</li>
              <li>
                Does not constitute legal, financial, or professional advice
              </li>
              <li>May be incomplete, inaccurate, or outdated</li>
            </ul>
            <p className="text-sm text-muted leading-relaxed mb-2">
              The provider does not guarantee the accuracy, reliability, or
              suitability of AI-generated results.
            </p>
            <p className="text-sm text-muted leading-relaxed mb-2">
              Users remain solely responsible for verifying results before
              making business or technical decisions.
            </p>
            <p className="text-sm text-muted leading-relaxed">
              The provider shall not be liable for decisions made based on
              AI-generated output.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
