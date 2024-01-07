import { MaxWidthContainer } from "./styled/MaxWidthContainer";
import { PaddedSection } from "./styled/PaddedSection";

interface ContactProps {
  heading: string;
  subheading?: string;
}

const Contact = ({ heading, subheading }: ContactProps) => {
  return (
    <PaddedSection>
      <MaxWidthContainer className="text-center flex justify-center py-20">
        <div className="flex flex-col">
          <h3>{heading}</h3>
          <h2>{subheading}</h2>
        </div>
        <form></form>
      </MaxWidthContainer>
    </PaddedSection>
  );
};

export default Contact;
