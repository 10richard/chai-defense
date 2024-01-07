import Banner from "@/components/Banner";
import DonateCta from "@/components/DonateCta";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { MaxWidthContainer } from "@/components/styled/MaxWidthContainer";
import { PaddedSection } from "@/components/styled/PaddedSection";

export default function Home() {
  return (
    <>
      <Navbar />
      <Banner heading="Our Locations" />
      <PaddedSection className="bg-gray">
        <MaxWidthContainer>
          <p>Need more info</p>
          <p>Display different schedules based on selected location</p>
        </MaxWidthContainer>
      </PaddedSection>
      <DonateCta />
      <Footer />
    </>
  );
}
