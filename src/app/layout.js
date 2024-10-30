import localFont from "next/font/local";
import LoginProvider from "@/contexts/LoginContext";
import DonateProvider from "@/contexts/DonateContext";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});
const leagueGothic = localFont({
  src: "./fonts/LeagueGothic.ttf",
  variable: "--font-league-gothic",
  weight: "400",
});

export const metadata = {
  title: "Fome Zero",
  description: "Fome Zero",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${leagueGothic.variable} antialiased`}
      >
      <LoginProvider>
        <DonateProvider>
          {children}
        </DonateProvider>
      </LoginProvider> 
      </body>
    </html>
  );
}
