import Banner from "@/components/Banner";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

const page = () => {
  return (
    <>
      <Navbar />
      <Banner heading="Donate" />
      <p>Include different payment methods (zelle, venmo, etc.)</p>
      <Footer />
    </>
  );
};

export default page;
