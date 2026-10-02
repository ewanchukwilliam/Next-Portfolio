import { JetBrains_Mono } from "next/font/google";
import "./globals.css";

//components
import Header from "@/components/Header";
import PageTransition from "@/components/PageTransition";
import StairTransition from "@/components/StairTransition";

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  variable: "--font-jetbrainsMono",
});

export const metadata = {
  title: "William Ewanchuk | Software Engineer",
  description:
    "William Ewanchuk, software engineer with a focus on backend systems and Computer Engineering Co-op student at the University of Alberta.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${jetbrainsMono.variable}`}>
        <Header />
        <main className="pt-24 xl:pt-28 min-h-screen overflow-y-auto">
          <StairTransition />
          <PageTransition> {children} </PageTransition>
        </main>
      </body>
    </html>
  );
}
