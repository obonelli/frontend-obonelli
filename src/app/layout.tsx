import "./globals.css";
import { Inter_Tight } from "next/font/google";

const inter = Inter_Tight({ subsets: ["latin"], variable: "--font-display" });

export const metadata = {
  title: "Oscar Bonelli | Full-Stack Engineer",
  description: "Full-Stack & AI Engineer | Building high-performance apps with React, Next.js & Node.js 🚀",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="bg-zinc-950 text-zinc-100 antialiased">
        <div className="mx-auto max-w-5xl px-6 pb-24">{children}</div>
      </body>
    </html>
  );
}
