// STYLES
import "../styles/globals.css";
import "../styles/styles.css";

// Fonts
import { Inter } from "next/font/google";

// Components
import Nav from "@/lib/components/blocks/footerNav/nav";
import Footer from "@/lib/components/blocks/footerNav/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
