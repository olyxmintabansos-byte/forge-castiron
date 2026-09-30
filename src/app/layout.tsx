import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Hand-Poured Heritage Skillet",
  description: "American-poured cast iron seasoned with heritage patina. 12-inch skillet weighs 5.2lb with ergonomic handle design....",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;800&display=swap" rel="stylesheet" />
      </head>
      <body className="bg-light text-dark">{children}</body>
    </html>
  );
}
