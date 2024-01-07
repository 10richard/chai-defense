import Banner from "@/components/Banner";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <Banner heading="About Us" />
      <p>Who We Are, Our Mission, Our Classes</p>
      <Footer />
    </>
  );
}
