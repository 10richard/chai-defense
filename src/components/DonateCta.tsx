import { MaxWidthContainer } from "./styled/MaxWidthContainer";
import Link from "next/link";

const DonateCta = () => {
  return (
    <section className="bg-black py-[80px]">
      <MaxWidthContainer className="flex justify-center">
        <div className="text-white text-center flex flex-col items-center max-w-[900px]">
          <h2 className="text-5xl font-bold leading-snug mb-5">
            Support us with any-sized donations to sustain our programs
          </h2>
          <p className="max-w-[650px] mb-12">
            As a pending 501c(3) non-profit, we are committed to ensuring that
            our self-defense classes remain accessible to everyone, regardless
            of their financial circumstances
          </p>
          <Link
            href={"/donate"}
            className="text-3xl text-white font-medium bg-black border border-white px-10 py-4 rounded-xl relative hover:-translate-y-2 hover:shadow-[7px_6px_0px_#A9A9A9] hover:bg-white hover:text-black duration-300"
          >
            DONATE NOW
          </Link>
        </div>
      </MaxWidthContainer>
    </section>
  );
};

export default DonateCta;
