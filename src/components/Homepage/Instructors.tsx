import { MaxWidthContainer } from "../styled/MaxWidthContainer";
import { PaddedSection } from "../styled/PaddedSection";

const Instructors = () => {
  return (
    <PaddedSection>
      <MaxWidthContainer className="flex justify-center">
        <div className="text-5xl text-center font-bold grid gap-10">
          <h2>Add "Our Founders/Instructors" section?</h2>
          <h2>Add Image Gallery?</h2>
        </div>
      </MaxWidthContainer>
    </PaddedSection>
  );
};

export default Instructors;
