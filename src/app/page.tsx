import Contact from "@/components/Contact";
import DiscoverKravMaga from "@/components/Homepage/DiscoverKravMaga";
import DonateCta from "@/components/DonateCta";
import Footer from "@/components/Footer";
import Hero from "@/components/Homepage/Hero";
import Navbar from "@/components/Navbar";
import WhySelfDefense from "@/components/Homepage/WhySelfDefense";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <DiscoverKravMaga />
      <WhySelfDefense />
      {/* <Contact />
      <DonateCta />
      <Footer /> */}
    </>
  );
}
