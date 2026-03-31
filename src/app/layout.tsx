import type { ReactNode } from "react";

/** Root layout: `[locale]/layout.tsx` provides `<html>` and `<body>`. */
export default function RootLayout({ children }: { children: ReactNode }) {
  return children;
}
