import { Inter } from "next/font/google";

import Footer from "@/components/footer";
import Header from "@/components/header";
import TopicsMenu from "@/components/topics-menu";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export default function Layout({ children }) {
  return (
    <div className={`${inter.variable} font-sans`}>
      <Header />
      <TopicsMenu />
      <main className="min-h-[calc(100vh-310px)]">{children}</main>
      <Footer />
    </div>
  );
}
