import MainButton from "../MainButton";
import { MaxWidthContainer } from "../styled/MaxWidthContainer";
import { PaddedSection } from "../styled/PaddedSection";
import Image from "next/image";

const About = () => {
  const About = [
    {
      heading: "Our Mission",
      desc: "At our core, we're committed to safeguarding Jews and their families. Amid global challenges like violent demonstrations and rising threats, we fortify community security through empowerment, education, and self-defense.",
      img: "/images/about/our-mission.jpeg",
      icon: "/images/about/target-icon.svg",
      icon_width: 150,
    },
    {
      heading: "Our Classes",
      desc: "We offer a range of classes for students of all skill levels, from beginner to advanced. Our classes are designed to be fun, challenging, and effective, and are taught in a safe and supportive environment.",
      img: "/images/about/our-classes.jpeg",
      icon: "/images/about/classes-icon.svg",
      icon_width: 125,
    },
  ];

  return (
    <PaddedSection className="bg-gray">
      <MaxWidthContainer className="flex flex-col gap-[120px]">
        <div className="flex justify-around items-center">
          <div className="flex flex-col max-w-[475px]">
            <h2 className="text-5xl font-bold">Who We Are</h2>
            <span className="bg-primary h-[2px] w-1/2 mt-2 mb-8 max-w-[150px]"></span>
            <p className="text-[#626262] mb-10">
              Chai Defense, established in 2023, is a 501(c)3 (pending)
              Non-Profit promoting Jewish community safety. Operating in Staten
              Island, NY, we aim to expand to major metro areas. Support our
              cause with donations.
            </p>
            <div>
              <MainButton text="Refuse Victimhood" />
            </div>
          </div>
          <Image
            src={"/images/about/who-we-are.jpeg"}
            alt="Who we are"
            width={600}
            height={0}
            className="rounded-xl border-2 border-primary shadow-md"
          ></Image>
        </div>
        <div className="flex justify-around items-center">
          <Image
            src={"/images/about/our-mission.jpeg"}
            alt="Our Mission"
            width={600}
            height={0}
            className="rounded-xl border-2 border-primary shadow-md"
          ></Image>
          <div className="flex flex-col items-center max-w-[475px]">
            <Image
              src={"/images/about/target-icon.svg"}
              alt="Chai Defense's Mission"
              width={150}
              height={0}
            ></Image>
            <div className="flex flex-col self-start">
              <h2 className="text-4xl font-bold">Our Mission</h2>
              <span className="bg-primary h-[2px] w-1/2 mt-2 mb-8 max-w-[150px]"></span>
              <p className="text-[#626262]">
                At our core, we're committed to safeguarding Jews and their
                families. Amid global challenges like violent demonstrations and
                rising threats, we fortify community security through
                empowerment, education, and self-defense.
              </p>
            </div>
          </div>
        </div>
        <div className="flex justify-around items-center">
          <div className="flex flex-col items-center max-w-[475px]">
            <Image
              src={"/images/about/classes-icon.svg"}
              alt="About Chai Defense Classes"
              width={125}
              height={0}
            ></Image>
            <div className="flex flex-col self-start">
              <h2 className="text-4xl font-bold">Our Classes</h2>
              <span className="bg-primary h-[2px] w-1/2 mt-2 mb-8 max-w-[150px]"></span>
              <p className="text-[#626262]">
                We offer a range of classes for students of all skill levels,
                from beginner to advanced. Our classes are designed to be fun,
                challenging, and effective, and are taught in a safe and
                supportive environment.
              </p>
            </div>
          </div>
          <Image
            src={"/images/about/our-classes.webp"}
            alt="Our Classes"
            width={600}
            height={0}
            className="rounded-xl border-2 border-primary shadow-md"
          ></Image>
        </div>
      </MaxWidthContainer>
    </PaddedSection>
  );
};

export default About;
