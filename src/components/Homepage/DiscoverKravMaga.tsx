import { MaxWidthContainer } from "../styled/MaxWidthContainer";
import Image from "next/image";
import { PaddedSection } from "../styled/PaddedSection";

const DiscoverKravMaga = () => {
  return (
    <PaddedSection className="bg-gray">
      <MaxWidthContainer>
        <div className="flex justify-around items-center">
          <div className="flex flex-col max-w-[600px]">
            <h2 className="text-5xl font-bold">
              What is <span className="text-primary">Krav Maga?</span>
            </h2>
            <span className="bg-primary h-[2px] w-1/2 mt-2 mb-8"></span>
            <p className="leading-normal">
              Krav Maga, translated from Hebrew as "contact combat," is a highly
              practical and efficient self-defense system developed in Israel.
              Originally designed for the Israeli military, Krav Maga has gained
              global popularity for its focus on real-world situations and its
              adaptability for individuals of all ages and fitness levels.
            </p>
          </div>
          <Image
            src={"/images/discover-kravmaga.jpeg"}
            alt="Discover Krav Maga"
            width={500}
            height={0}
            className="rounded-xl border-2 border-primary shadow-md"
          ></Image>
        </div>
      </MaxWidthContainer>
    </PaddedSection>
  );
};

export default DiscoverKravMaga;
