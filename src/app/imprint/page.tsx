import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Imprint | LOTRINO",
  description: "Legal imprint information for LOTRINO.",
};

export default function ImprintPage() {
  return (
    <>
      <section className="max-w-3xl mx-auto px-6 lg:px-8 py-24 space-y-6">
        <h1 className="text-3xl md:text-4xl font-semibold tracking-tight">
          Imprint
        </h1>
        <div className="space-y-6">
          <div>
            <h2 className="text-sm font-medium mb-1">Contact</h2>
            <p className="text-sm text-muted">
              Jan Bocchino
              <br />
              <a
                href="mailto:office@lotrino.com"
                className="text-muted underline hover:no-underline"
              >
                office@lotrino.com
              </a>
            </p>
          </div>
          <div>
            <h2 className="text-sm font-medium mb-1">Address</h2>
            <p className="text-sm text-muted">
              Kenyongasse 21
              <br />
              1070, Vienna
            </p>
          </div>
          <div>
            <h2 className="text-sm font-medium mb-1">Business License</h2>
            <p className="text-sm text-muted">
              Wirtschaftskammer Wien
              <br />
              Issuing authority: MBA 6/7
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

