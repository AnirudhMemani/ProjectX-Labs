import useWindowDimensions from "@/hooks/hooks";
import AircraftDesignLanding from "../../../assets/images/xlabs_aircraftDesign.png";
import AircraftDesignLandingFull from "../../../assets/images/xlabs_aircraftDesignFull.png";
import { useState, useEffect } from "react";
import { Carousel } from "@/components/Carousel/Carousel";
import { aircraftDesignInfoArray } from "./UniversityCarouselData";
import CarouselBackground from "../../../assets/images/xlabs_background-5.png";

const AircraftDesign: React.FC = (): React.JSX.Element => {
  const { width } = useWindowDimensions();
  const [landingImage, setLandingImage] = useState<string | undefined>();

  useEffect(() => {
    const result =
      width < 1024 ? AircraftDesignLandingFull : AircraftDesignLanding;
    setLandingImage(result);
  }, [width]);

  return (
    <section className="w-full overflow-x-hidden">
      <div className="relative flex w-full flex-col items-center py-10 sm:min-h-dvh sm:justify-center lg:items-start lg:py-0">
        <div className="w-[90%] lg:ml-16 lg:w-[50%]">
          <img
            src={landingImage}
            alt="Aircraft Design"
            className="object-fit mt-8 h-[300px] w-full rounded-sm lg:absolute lg:right-10 lg:top-[5%] lg:h-[90%] lg:w-[65%] lg:rounded-none"
            data-aos="zoom-in"
          />
          <h1
            className="relative mb-6 mt-4 text-center text-4xl font-semibold lg:mt-0 lg:text-start lg:text-7xl lg:font-bold"
            data-aos="fade-down-right"
          >
            AIRCRAFT DESIGN
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
            The Aircraft Design Workshop provides participants with a
            comprehensive understanding of the principles, methodologies, and
            tools involved in designing aircraft. From conceptualization to CAD
            designs, structural analysis, and Computational Fluid Dynamics (CFD)
            simulations, this workshop equips attendees with the knowledge and
            skills necessary to develop innovative and efficient aircraft
            designs.
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
          Duration: <span className="text-sky-500">2 Weeks</span>
        </h3>
        <Carousel infoArray={aircraftDesignInfoArray} />
      </div>
    </section>
  );
};

export default AircraftDesign;
