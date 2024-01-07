import MainButton from "../MainButton";
import { MaxWidthContainer } from "../styled/MaxWidthContainer";
import Image from "next/image";
import { PaddedSection } from "../styled/PaddedSection";

const WhySelfDefense = () => {
  const reasons = [
    {
      title: "Personal Safety",
      img: "shield.svg",
      desc: "Equip yourself with the skills to shield against potential threats, ensuring safety for both you and those around you.",
    },
    {
      title: "Build Confidence",
      img: "confidence.svg",
      desc: "Foster self-assurance and mastery, empower yourself with confidence in both protective skills and overall abilities.",
    },
    {
      title: "Physical Fitness",
      img: "fitness.svg",
      desc: "Experience a comprehensive full-body workout through Krav Maga training, promoting overall health and fitness.",
    },
  ];

  return (
    <PaddedSection className="text-center">
      <MaxWidthContainer>
        <div className="flex flex-col items-center mb-20">
          <h2 className="text-5xl font-bold">Why You Need Self-Defense</h2>
          <span className="bg-primary h-[2px] w-1/2 mt-2"></span>
        </div>
        <div className="flex flex-wrap justify-center gap-8 mb-24">
          {reasons.map((r, idx) => (
            <div className="flex flex-col items-center py-12 px-7 rounded-lg shadow-lg w-[calc(33%-32px)] min-w-[315px]">
              <Image
                src={`/images/self-defense-icons/${r.img}`}
                alt={r.title}
                width={100}
                height={0}
              ></Image>
              <h3 className="text-2xl font-medium mb-5">{r.title}</h3>
              <p className="text-[#878787] leading-normal">{r.desc}</p>
            </div>
          ))}
        </div>
        <div>
          <MainButton text="Learn Self-Defense" />
        </div>
      </MaxWidthContainer>
    </PaddedSection>
  );
};

export default WhySelfDefense;
