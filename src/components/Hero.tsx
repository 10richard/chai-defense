import { MaxWidthContainer } from "./styled/MaxWidthContainer";
import Link from "next/link";
import heroBG from "../../public/images/hero-bg.png";

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
      <MaxWidthContainer>
        <div className="text-white text-center pt-[175px] max-w-[750px]">
          <h1 className="text-6xl font-bold mb-12">
            Command Your Safety with Chai Defense
          </h1>
          <p className="text-[#a8a8a8] mx-auto mb-12 max-w-[625px]">
            <strong>Self-defense</strong> is a <strong>must</strong> for
            everyone. It <strong>empowers</strong> and ensures{" "}
            <strong>personal safety</strong> in an unpredictable world. Learn
            the skills needed to <strong>stay safe</strong> and{" "}
            <strong>confident</strong>.
          </p>
          <Link
            className="text-lg text-sky-400 px-8 py-4 rounded-full inline-block hover:before:bg-redborder-red-500 relative overflow-hidden border border-sky-400 bg-white transition-all before:absolute before:bottom-0 before:left-0 before:top-0 before:z-0 before:h-full before:w-0 before:bg-sky-400 before:transition-all before:duration-500 hover:text-white hover:before:left-0 hover:before:w-full"
            href="/attend-a-class"
          >
            <span className="relative z-10">Master Self-Defense</span>
          </Link>
        </div>
      </MaxWidthContainer>
    </section>
  );
};

export default Hero;
