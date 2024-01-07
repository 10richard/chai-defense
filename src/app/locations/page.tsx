import Banner from "@/components/Banner";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <Banner heading="Our Locations" />
      <p>Need more info</p>
      <p>Display different schedules based on selected location</p>
      <Footer />
    </>
  );
}
