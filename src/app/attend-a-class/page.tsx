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
      <Banner heading="Attend a Class" />
      <PaddedSection className="bg-gray">
        <MaxWidthContainer>
          <p>
            Is this page needed? - (Have locations page where user will be able
            to schedule a class)
          </p>
        </MaxWidthContainer>
      </PaddedSection>
      <DonateCta />
      <Footer />
    </>
  );
}
