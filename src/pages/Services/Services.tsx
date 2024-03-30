import AnimatedServiceCard from "@/components/Cards/AnimatedServiceCard";
import { servicesInfoArray } from "./constants";
import { useNavigate } from "react-router-dom";
import { NavRoutes } from "../../components/constants";
import ServiceTopBackground from "../../assets/images/xlabs_servicesTopBackground.png";
// import ServicesBottomBackground from "../../assets/images/xlabs_servicesBackground.png";
import { BackgroundBeams } from "@/components/BackgroundBeams";

const Services: React.FC = (): React.JSX.Element => {
  const navigate = useNavigate();

  const navigateToServicePage = (navigateTo: string) => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    navigate(navigateTo);
  };

  return (
    <section className="relative flex min-h-dvh w-full flex-col items-center justify-center overflow-x-hidden text-white">
      <img
        src={ServiceTopBackground}
        className="absolute top-0 -z-50 hidden h-dvh w-full md:block"
        alt="Background image"
      />
      <div className="w-[90%]">
        <div className="flex w-full flex-col py-20 md:h-dvh md:flex-row md:justify-between md:pt-0">
          <div className="mb-10 flex flex-col justify-center md:mb-0 md:flex-1">
            <div className="flex flex-col items-center justify-center md:block">
              <h1
                className="text-center font-sans text-7xl font-semibold !leading-[85%] text-white sm:font-bold md:text-start lg:text-8xl"
                data-aos={"fade-down-right"}
              >
                Our <br className="hidden md:block" />
                Services
              </h1>
              <h3
                className="mt-4 text-center font-sans text-4xl text-white sm:font-medium md:text-start"
                data-aos={"fade-left"}
              >
                We Provide <span className="text-sky-500">The Best</span>
              </h3>
            </div>
          </div>
          <div className="flex items-center justify-center md:flex-1">
            <p className="text-center text-[#C6C6C6]" data-aos={"zoom-in"}>
              Our focus is on providing exceptional core services with a
              dedicated commitment to excellence. This commitment is rooted in
              our core values of integrity, innovation, and a client-centric
              approach that puts your needs at the forefront of everything we
              do.
            </p>
          </div>
        </div>
      </div>
      <div className="relative flex w-full justify-center bg-neutral-950 py-16 antialiased lg:py-32">
        {/* <img
          src={ServicesBottomBackground}
          className="absolute top-0 h-full w-full object-fill object-center"
        /> */}
        <BackgroundBeams />
        <div className="grid w-[90%] lg:grid-cols-2 lg:py-0 2xl:grid-cols-3">
          {servicesInfoArray.map((cardInfo) => (
            <AnimatedServiceCard
              content={cardInfo.content}
              title={cardInfo.title}
              image={cardInfo.image}
              leftButtonOnClick={() =>
                navigateToServicePage(cardInfo.leftButtonNavigateTo)
              }
              rightButtonOnClick={() => navigate("/" + NavRoutes.CONTACT_US)}
              key={cardInfo.title}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
