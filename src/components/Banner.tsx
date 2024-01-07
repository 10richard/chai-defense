import bannerImg from "../../public/images/banner.jpg";

interface BannerProps {
  heading: string;
}

const Banner = ({ heading }: BannerProps) => {
  return (
    <section className="text-center w-full h-[40vh] relative">
      <div
        className="w-full h-full absolute top-0 left-0"
        style={{
          backgroundImage: `url(${bannerImg.src})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          filter: "brightness(45%)",
        }}
      />
      <h2 className="text-white absolute z-10 w-full bottom-10 font-bold text-4xl">
        {heading}
      </h2>
    </section>
  );
};

export default Banner;
