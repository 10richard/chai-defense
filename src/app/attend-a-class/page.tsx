import Banner from "@/components/Banner";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <Banner heading="Attend a Class" />
      <p>
        Is this page needed? - (Have locations page where user will be able to
        schedule from)
      </p>
      <Footer />
    </>
  );
}
