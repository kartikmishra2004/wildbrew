import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Wild Brew",
  description: "WildBrew offers premium handcrafted teas inspired by nature. Shop organic loose-leaf blends, herbal infusions, and wellness brews delivered to your door.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode; }>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
