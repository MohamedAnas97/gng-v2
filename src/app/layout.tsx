import "@/style/globals.css";
import "@/style/index.css";
import Header from "@/shared/layout/header";
import Footer from "@/shared/layout/footer";

import "react-multi-carousel/lib/styles.css";
import type { Metadata } from "next";
// meta links
export const metadata: Metadata = {
  title: "GNG innovation",
  description: "Connecting Dots From DESIGN To DEVELOPMENT",
};
// layout handler
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        
        <Footer />
      </body>
    </html>
  );
}
