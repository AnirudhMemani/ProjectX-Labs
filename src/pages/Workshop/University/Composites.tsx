import useWindowDimensions from "@/CustomHooks/hooks";
import CompositeLanding from "../../../assets/images/xlabs_composite.png";
import CompositeLandingFull from "../../../assets/images/xlabs_compositeFull.jpeg";
import { useState, useEffect } from "react";
import { Carousel } from "@/components/Carousel/Carousel";
import { CompositeInfoArray } from "./UniversityCarouselData";

const Composites: React.FC = (): React.JSX.Element => {
  const { width } = useWindowDimensions();
  const [landingImage, setLandingImage] = useState<string | undefined>();

  useEffect(() => {
    const result = width < 1024 ? CompositeLandingFull : CompositeLanding;
    setLandingImage(result);
  }, [width]);

  return (
    <section className="w-full overflow-x-hidden">
      <div className="relative flex w-full flex-col items-center py-10 sm:min-h-dvh sm:justify-center lg:items-start lg:py-0">
        <div className="w-[90%] lg:ml-16 lg:w-[50%]">
          <img
            src={landingImage}
            alt="RC Plane"
            className="mt-8 h-[300px] w-full rounded-sm lg:absolute lg:right-10 lg:top-[5%] lg:h-[90%] lg:w-[65%] lg:rounded-none"
            data-aos="zoom-in"
          />
          <h1
            className="relative mb-6 mt-4 text-center text-4xl font-semibold lg:mt-0 lg:text-start lg:text-7xl lg:font-bold"
            data-aos="fade-down-right"
          >
            Composites Workshop
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
            Explore the World of Composite Materials Unlock the potential of
            composite materials with our immersive workshop. From hands-on demos
            to practical sessions, discover the art and science behind
            composites. Whether you're a beginner or seasoned pro, join us for
            an exciting journey into the future of materials engineering.
            Welcome aboard!
          </p>
        </div>
      </div>
      <div className="relative flex w-full flex-col items-center justify-center bg-[#0E0E0E] py-12 sm:py-20">
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
        <Carousel infoArray={CompositeInfoArray} />
      </div>
    </section>
  );
};

export default Composites;
