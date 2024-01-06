import MainButton from "./MainButton";
import { MaxWidthContainer } from "./styled/MaxWidthContainer";
import Image from "next/image";

const DiscoverKravMaga = () => {
  return (
    <section className="py-[140px] bg-[#f5f5f5]">
      <MaxWidthContainer>
        <div className="flex justify-around items-center mb-24">
          <div className="flex flex-col max-w-[600px]">
            <h2 className="text-5xl font-bold">
              What is <span className="text-sky-500">Krav Maga?</span>
            </h2>
            <span className="bg-sky-500 h-[2px] w-1/2 mt-2 mb-8"></span>
            <p className="leading-normal">
              Krav Maga, translated from Hebrew as "contact combat," is a highly
              practical and efficient self-defense system developed in Israel.
              Originally designed for the Israeli military, Krav Maga has gained
              global popularity for its focus on real-world situations and its
              adaptability for individuals of all ages and fitness levels.
            </p>
          </div>
          <Image
            src={"/images/discover-kravmaga/image1.jpeg"}
            alt="Discover Krav Maga"
            width={500}
            height={0}
            className="rounded-xl border-2 border-sky-500 shadow-md"
          ></Image>
        </div>
        <div className="flex justify-around items-center mb-24">
          <Image
            src={"/images/discover-kravmaga/image2.jpeg"}
            alt="Discover Krav Maga"
            width={500}
            height={500}
            className="rounded-xl border-2 border-sky-500 shadow-md"
          ></Image>
          <div className="flex flex-col max-w-[600px]">
            <h2 className="text-5xl font-bold">
              Prioritize <span className="text-sky-500">Safety</span>
            </h2>
            <span className="bg-sky-500 h-[2px] w-1/2 mt-2 mb-8"></span>
            <p className="leading-normal">
              Krav Maga prioritizes safety by focusing on efficient techniques
              tailored for real-world situations. Emphasizing quick responses
              and adaptive strategies, Krav Maga empowers individuals to
              prioritize their safety through practical and effective
              self-defense skills.
            </p>
          </div>
        </div>
        <div className="flex justify-around items-center mb-24">
          <div className="flex flex-col max-w-[600px]">
            <h2 className="text-5xl font-bold">
              Build <span className="text-primary">Confidence</span>
            </h2>
            <span className="bg-primary h-[2px] w-1/2 mt-2 mb-8"></span>
            <p className="leading-normal">
              Krav Maga goes beyond self-defense; it's a confidence-building
              powerhouse. Through practical techniques and empowering training,
              Krav Maga instills a strong sense of self-assurance, ensuring that
              practitioners not only master the art of protection but also stand
              tall with increased confidence in their abilities.
            </p>
          </div>
          <Image
            src={"/images/discover-kravmaga/image3.jpeg"}
            alt="Discover Krav Maga"
            width={500}
            height={0}
            className="rounded-xl border-2 border-sky-500 shadow-md"
          ></Image>
        </div>
        <div className="flex justify-center">
          <MainButton text="Learn Self-Defense" />
        </div>
      </MaxWidthContainer>
    </section>
  );
};

export default DiscoverKravMaga;
