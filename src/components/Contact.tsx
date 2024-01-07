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
        <div className="flex flex-col items-center">
          <h3 className="text-2xl font-bold mb-4">{heading}</h3>
          <h2 className="text-5xl font-bold">{subheading}</h2>
          <span className="bg-primary h-[2px] w-3/4 mt-2 mb-12"></span>
        </div>
        <form className="flex flex-col items-center gap-6 max-w-[650px] w-full border-slate-300 border-2 border-dashed p-10">
          <div className="flex gap-5 w-full">
            <input
              type="text"
              id="first_name"
              name="first_name"
              placeholder="First Name *"
              className="px-3 py-2 w-full"
              required
            />
            <input
              type="text"
              id="last_name"
              name="last_name"
              placeholder="Last Name *"
              className="px-3 py-2 w-full"
              required
            />
          </div>
          <div className="flex gap-5 w-full">
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Email *"
              className="px-3 py-2 w-full"
              required
            />
            <input
              type="tel"
              id="phone_number"
              name="phone_number"
              placeholder="Phone *"
              pattern="[0-9]{10}"
              title="Should only contain ten numbers (no spaces or area code)"
              className="px-3 py-2 w-full"
              required
            />
          </div>
          <div className="w-full">
            <textarea
              name="comment"
              id="comment"
              placeholder="Comment *"
              rows={10}
              className="px-3 py-2 w-full resize-none"
              required
            ></textarea>
          </div>
          <button className="text-white font-semibold bg-primary/80 px-8 py-3 w-1/2 relative hover:bg-primary hover:-translate-y-1 duration-300">
            Submit
          </button>
        </form>
      </MaxWidthContainer>
    </PaddedSection>
  );
};

export default Contact;
