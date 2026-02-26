"use client";

import { useState, FormEvent } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: process.env.NEXT_PUBLIC_WEB3FORMS_KEY,
          name: formData.name,
          email: formData.email,
          message: formData.message,
          from_name: "LOTRINO Website",
        }),
      });

      const result = await response.json();

      if (result.success) {
        setStatus("success");
        setFormData({ name: "", email: "", message: "" });
      } else {
        throw new Error(result.message || "Something went wrong");
      }
    } catch (error) {
      setStatus("error");
      setErrorMessage(error instanceof Error ? error.message : "Failed to send message");
    }
  };

  return (
    <section id="contact" className="relative py-32 lg:py-40 overflow-hidden section-fade-top">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background to-surface" />
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-accent-secondary/10 rounded-full blur-[150px]" />
      <div className="absolute -top-[80px] left-0 w-[400px] h-[400px] bg-accent/10 rounded-full blur-[120px]" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left Content */}
          <div className="space-y-8">
            <div>
              <span className="text-accent text-xs tracking-widest uppercase">Contact</span>
              <h2 className="mt-4 text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1]">
                Ready to{" "}
                <span className="gradient-text">transform</span> your business?
              </h2>
            </div>

            <p className="text-muted text-lg leading-relaxed">
              Let&apos;s discuss how AI can accelerate your growth. Send us a message and we&apos;ll get back to you shortly.
            </p>

            {/* Contact info */}
            <div className="pt-4">
              <a
                href="mailto:office@lotrino.com"
                className="inline-flex items-center gap-3 text-foreground hover:text-accent transition-colors duration-300 group"
              >
                <div className="w-12 h-12 rounded-full glass flex items-center justify-center group-hover:bg-accent/10 transition-colors duration-300">
                  <svg className="w-5 h-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <span className="font-medium">office@lotrino.com</span>
              </a>
            </div>
          </div>

          {/* Form */}
          <div className="gradient-border p-8 lg:p-10">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2 text-muted">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3.5 bg-background/50 border border-border rounded-xl focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent/50 transition-all duration-300 text-foreground placeholder:text-muted/50"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2 text-muted">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3.5 bg-background/50 border border-border rounded-xl focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent/50 transition-all duration-300 text-foreground placeholder:text-muted/50"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2 text-muted">
                  Message
                </label>
                <textarea
                  id="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3.5 bg-background/50 border border-border rounded-xl focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent/50 transition-all duration-300 text-foreground placeholder:text-muted/50 resize-none"
                  placeholder="Tell us about your project..."
                />
              </div>

              {status === "success" && (
                <div className="p-4 rounded-xl bg-accent/10 border border-accent/20 text-accent text-sm flex items-center gap-3">
                  <svg className="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Thank you! We&apos;ll get back to you soon.
                </div>
              )}

              {status === "error" && (
                <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 text-sm">
                  {errorMessage || "Something went wrong. Please try again."}
                </div>
              )}

              <button
                type="submit"
                disabled={status === "loading"}
                className="btn-glow relative w-full px-8 py-4 bg-accent text-background font-semibold rounded-xl text-sm tracking-wide disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 z-10"
              >
                {status === "loading" ? (
                  <>
                    <svg className="relative z-10 animate-spin h-5 w-5" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                    </svg>
                    <span className="relative z-10">Sending...</span>
                  </>
                ) : (
                  <span className="relative z-10">Send Message</span>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
