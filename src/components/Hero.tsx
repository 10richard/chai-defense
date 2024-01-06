import { MaxWidthContainer } from "./styled/MaxWidthContainer";
import heroBG from "../../public/images/hero-bg.png";
import MainButton from "./MainButton";

const Hero = () => {
  return (
    <section
      className="min-h-[90vh]"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.9),rgba(0, 0, 30, 0.55)), url(${heroBG.src})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <MaxWidthContainer className="flex justify-center">
        <div className="text-white text-center pt-[175px] max-w-[750px]">
          <h1 className="text-6xl font-bold mb-8 leading-snug">
            Command Your Safety with Chai Defense
          </h1>
          <p className="text-[#a8a8a8] mx-auto mb-12 max-w-[625px] leading-normal">
            <strong>Self-defense</strong> is a <strong>must</strong> for
            everyone. It <strong>empowers</strong> and ensures{" "}
            <strong>personal safety</strong> in an unpredictable world. Learn
            the skills needed to <strong>stay safe</strong> and{" "}
            <strong>confident</strong>.
          </p>
          <MainButton text="Master Self-Defense" />
        </div>
      </MaxWidthContainer>
    </section>
  );
};

export default Hero;
