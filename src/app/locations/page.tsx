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
          <p>Need more info - what locations are currently available?</p>
          <p>Display different schedules based on selected location</p>
          <p>
            If user selected LOCATIONS (not a specific one from dropdown) then
            display a table of available locations similar to what{" "}
            <a
              href="https://www.wegsd.org/"
              target="_blank"
              className="text-red-500 hover:underline"
            >
              https://www.wegsd.org/
            </a>{" "}
            has
          </p>
        </MaxWidthContainer>
      </PaddedSection>
      <DonateCta />
      <Footer />
    </>
  );
}
