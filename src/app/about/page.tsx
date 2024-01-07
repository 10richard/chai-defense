import About from "@/components/About/About";
import Banner from "@/components/Banner";
import DonateCta from "@/components/DonateCta";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <Banner heading="About Us" />
      <About />
      <DonateCta />
      <Footer />
    </>
  );
}
