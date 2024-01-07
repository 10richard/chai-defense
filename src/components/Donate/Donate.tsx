import { MaxWidthContainer } from "../styled/MaxWidthContainer";
import { PaddedSection } from "../styled/PaddedSection";

const Donate = () => {
  return (
    <PaddedSection className="bg-gray">
      <MaxWidthContainer>
        <p>Include different payment methods (zelle, venmo, etc.)</p>
      </MaxWidthContainer>
    </PaddedSection>
  );
};

export default Donate;
