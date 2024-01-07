import Banner from "@/components/Banner";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <Banner heading="Contact Us" />
      <Contact heading="Want to Know More?" subheading="Drop Us a Line" />
      <Footer />
    </>
  );
}
