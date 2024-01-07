import { MaxWidthContainer } from "./styled/MaxWidthContainer";
import { PaddedSection } from "./styled/PaddedSection";

interface ContactProps {
  heading: string;
  subheading?: string;
}

const Contact = ({ heading, subheading }: ContactProps) => {
  return (
    <PaddedSection className="bg-gray">
      <MaxWidthContainer className="text-center flex flex-col items-center py-20">
        <div className="flex flex-col">
          <h3>{heading}</h3>
          <h2>{subheading}</h2>
        </div>
        <form>
          <div>
            <input
              type="text"
              id="first_name"
              name="first_name"
              placeholder="First Name *"
              required
            />
          </div>
          <div>
            <input
              type="text"
              id="last_name"
              name="last_name"
              placeholder="Last Name *"
              required
            />
          </div>
          <div>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Email *"
              required
            />
          </div>
          <div>
            <input
              type="tel"
              id="phone_number"
              name="phone_number"
              placeholder="Phone *"
              pattern="[0-9]{10}"
              title="Should only contain ten numbers (no spaces or area code)"
              required
            />
          </div>
          <div>
            <textarea
              className="resize-none"
              name="comment"
              id="comment"
              cols={30}
              rows={10}
              placeholder="Comment *"
              required
            ></textarea>
          </div>
        </form>
      </MaxWidthContainer>
    </PaddedSection>
  );
};

export default Contact;
