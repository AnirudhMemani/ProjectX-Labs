import useWindowDimensions from "@/hooks/hooks";
import WaterRocketryLanding from "../../../assets/images/xlabs_waterRocketryLanding.png";
import WaterRocketryLandingFull from "../../../assets/images/xlabs_waterRocketryLandingFull.png";
import { useState, useEffect } from "react";
import { Carousel } from "@/components/Carousel/Carousel";
import { waterRocketryInfoArray } from "./SchoolCarouselData";
import CarouselBackground from "../../../assets/images/xlabs_background-4.png";

const WaterRocketry: React.FC = (): React.JSX.Element => {
  const { width } = useWindowDimensions();
  const [landingImage, setLandingImage] = useState<string | undefined>();

  useEffect(() => {
    const result =
      width < 1024 ? WaterRocketryLandingFull : WaterRocketryLanding;
    setLandingImage(result);
  }, [width]);

  return (
    <section className="w-full overflow-x-hidden">
      <div className="relative flex w-full flex-col items-center py-10 sm:min-h-dvh sm:justify-center lg:items-end lg:py-0">
        <div className="w-[90%] lg:mr-8 lg:w-[50%]">
          <img
            src={landingImage}
            alt="3D Printer"
            className="mt-8 h-[300px] w-full rounded-md object-fill lg:absolute lg:left-10 lg:top-[5%] lg:h-[90%] lg:max-h-fit lg:w-[65%] lg:rounded-none"
            data-aos="zoom-in"
          />
          <h1
            className="relative mb-6 mt-4 text-center text-4xl font-semibold lg:mt-0 lg:text-start lg:text-7xl lg:font-bold"
            data-aos="fade-down-left"
          >
            WATER ROCKETRY
          </h1>
          <p
            className="textstart relative text-xl lg:text-start lg:text-2xl xl:text-3xl"
            data-aos="fade-right"
          >
            <span
              className={
                "absolute inset-x-0 -top-1 left-0 hidden h-0.5 scale-x-100 bg-[#373737] font-sans text-lg font-normal transition-all duration-300 lg:inline-block"
              }
            />
            The Water Rocketry Workshop offers a thrilling and educational
            experience that allows participants of all ages to dive into the
            exciting world of space exploration. By combining design,
            engineering, and hands-on rocket launching, this workshop promises a
            unique and engaging way to learn about aerodynamics and rocketry.
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
          Duration: <span className="text-sky-500">3 Hours</span>
        </h3>
        <Carousel infoArray={waterRocketryInfoArray} />
      </div>
    </section>
  );
};

export default WaterRocketry;
