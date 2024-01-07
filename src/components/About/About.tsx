import { MaxWidthContainer } from "../styled/MaxWidthContainer";
import { PaddedSection } from "../styled/PaddedSection";

const About = () => {
  return (
    <PaddedSection className="bg-gray">
      <MaxWidthContainer>
        <div>
          <h2>Who We Are</h2>
          <p></p>
        </div>
        <div>
          <h2>Our Mission</h2>
          <p></p>
        </div>
        <div>
          <h2>Our Classes</h2>
          <p></p>
        </div>
      </MaxWidthContainer>
    </PaddedSection>
  );
};

export default About;
