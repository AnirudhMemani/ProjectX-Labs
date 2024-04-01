import useWindowDimensions from "@/hooks/hooks";
import AmateurRocket from "../../../assets/images/xlabs_amateurRocketry.png";
import AmateurRocketryFull from "../../../assets/images/xlabs_amateurRocketryFull.png";
import { useState, useEffect } from "react";
import { Carousel } from "@/components/Carousel/Carousel";
import { amateurRocketryInfoArray } from "./UniversityCarouselData";
import CarouselBackground from "../../../assets/images/xlabs_background-2.png";

const AmateurRocketry: React.FC = (): React.JSX.Element => {
  const { width } = useWindowDimensions();
  const [landingImage, setLandingImage] = useState<string | undefined>();

  useEffect(() => {
    const result = width < 1024 ? AmateurRocketryFull : AmateurRocket;
    setLandingImage(result);
  }, [width]);

  return (
    <section className="w-full overflow-x-hidden">
      <div className="relative flex w-full flex-col items-center py-10 sm:min-h-dvh sm:justify-center lg:items-start lg:py-0">
        <div className="w-[90%] lg:ml-16 lg:w-[50%]">
          <img
            src={landingImage}
            alt="Amateur Rocketry"
            className="mt-8 h-[300px] w-full rounded-sm object-cover lg:absolute lg:right-10 lg:top-[5%] lg:h-[90%] lg:w-[65%] lg:rounded-none"
            data-aos="zoom-in"
          />
          <h1
            className="relative mb-6 mt-4 text-center text-4xl font-semibold lg:mt-0 lg:text-start lg:text-7xl lg:font-bold"
            data-aos="fade-down-right"
          >
            AMATEUR ROCKETRY
          </h1>
          <p
            className="relative text-start text-xl lg:text-start lg:text-2xl xl:text-3xl"
            data-aos="fade-left"
          >
            <span
              className={
                "absolute inset-x-0 -top-1 left-0 hidden h-0.5 scale-x-100 bg-[#373737] font-sans text-lg font-normal transition-all duration-300 lg:inline-block"
              }
            />
            Amateur rocketry has long been a captivating hobby for enthusiasts
            of all ages, offering a hands-on approach to understanding the
            principles of space exploration and propulsion. This workshop aims
            to provide participants with a comprehensive introduction to
            rockets, space exploration, and the fundamentals of building and
            testing rocket motors. Through a blend of theoretical knowledge and
            practical experimentation, attendees will gain valuable insights
            into the exciting world of amateur rocketry.
          </p>
        </div>
      </div>
      <div className="relative flex w-full flex-col items-center justify-center bg-[#0E0E0E] py-12 sm:py-20 lg:bg-transparent">
        <img
          src={CarouselBackground}
          className="absolute top-0 -z-50 hidden h-full w-full object-fill object-center lg:block"
        />
        <h1
          className="text-center font-sans text-3xl sm:text-4xl"
          data-aos="fade-down-right"
          data-aos-once={true}
        >
          Workshop Overview
        </h1>
        <h3
          className="my-4 mb-10 text-center font-sans text-xl sm:text-3xl lg:my-10 lg:mb-10"
          data-aos="fade-left"
          data-aos-once={true}
        >
          Duration: <span className="text-sky-500">2 Days</span>
        </h3>
        <Carousel infoArray={amateurRocketryInfoArray} />
      </div>
    </section>
  );
};

export default AmateurRocketry;
