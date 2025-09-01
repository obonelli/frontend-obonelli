import "./globals.css";
import { Inter_Tight } from "next/font/google";

const inter = Inter_Tight({ subsets: ["latin"], variable: "--font-display" });

export const metadata = {
  title: "Obonelli.dev",
  description: "Oscar Bonelli — Full-Stack / Front-End Engineer",
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
