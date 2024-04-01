import useWindowDimensions from "@/hooks/hooks";
import RoboticsLanding from "../../../assets/images/xlabs_roboticsLanding.png";
import RoboticsLandingFull from "../../../assets/images/xlabs_roboticsLandingFull.png";
import { useState, useEffect } from "react";
import { Carousel } from "@/components/Carousel/Carousel";
import { roboticsInfoArray } from "./SchoolCarouselData";
import CarouselBackground from "../../../assets/images/xlabs_background-3.png";

const Robotics: React.FC = (): React.JSX.Element => {
  const { width } = useWindowDimensions();
  const [landingImage, setLandingImage] = useState<string | undefined>();

  useEffect(() => {
    const result = width < 1024 ? RoboticsLandingFull : RoboticsLanding;
    setLandingImage(result);
  }, [width]);

  return (
    <section className="w-full overflow-x-hidden">
      <div className="relative flex w-full flex-col items-center py-10 sm:min-h-dvh sm:justify-center lg:items-start lg:py-0">
        <div className="w-[90%] lg:ml-16 lg:w-[50%]">
          <img
            src={landingImage}
            alt="3D Printer"
            className="mt-8 h-[300px] w-full rounded-md object-cover lg:absolute lg:right-10 lg:top-[5%] lg:h-[90%] lg:max-h-fit lg:w-[65%] lg:rounded-none"
            data-aos="zoom-in"
          />
          <h1
            className="relative mb-6 mt-4 text-center text-4xl font-semibold lg:mt-0 lg:text-start lg:text-7xl lg:font-bold"
            data-aos="fade-down-right"
          >
            ROBOTICS
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
            Welcome to our Arduino Workshop, where creativity meets technology!
            If you've ever wanted to dive into the exciting world of electronics
            and build your own projects, then you're in the right place. Our
            Arduino Workshop is designed for beginners and enthusiasts alike,
            providing a hands-on experience to explore the limitless
            possibilities of DIY electronics.
          </p>
        </div>
      </div>
      <div className="relative flex w-full flex-col items-center justify-center bg-[#0E0E0E] py-12 sm:py-20 lg:bg-transparent">
        <img
          src={CarouselBackground}
          className="absolute top-0 -z-50 hidden h-full w-full object-cover object-center lg:block"
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
          Duration: <span className="text-sky-500">4 Hours</span>
        </h3>
        <Carousel infoArray={roboticsInfoArray} />
      </div>
    </section>
  );
};

export default Robotics;
