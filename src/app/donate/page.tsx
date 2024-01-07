import Banner from "@/components/Banner";
import Donate from "@/components/Donate/Donate";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

const page = () => {
  return (
    <>
      <Navbar />
      <Banner heading="Donate" />
      <Donate />
      <Footer />
    </>
  );
};

export default page;
