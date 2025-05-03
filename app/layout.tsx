import type { Metadata } from "next";
import { Bricolage_Grotesque } from "next/font/google";
import "./globals.css";



const bricolage = Bricolage_Grotesque({
  variable: "--font-bricolage",
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Apex Chat",
  description:
    "Connect instantly with friends and colleagues using our fast, secure, and user-friendly chat app. Enjoy real-time messaging, group chats, media sharing, and more",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={` ${bricolage.variable} antialiased w-full relative overflow-x-hidden max-w-[2500px] mx-auto`}
      >
        {children}
      </body>
    </html>
  );
}
