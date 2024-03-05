"use client"
import "./globals.css";
import Loc from '../app/context/Loc'
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body><Loc>{children}</Loc></body>
    </html>
  );
}
