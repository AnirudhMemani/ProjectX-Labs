import TypingAnimation from "@/components/TypingAnimation";
import React from "react";
import { twMerge } from "tailwind-merge";
import VisionIcon from "../assets/images/xlabs_visionIcon.png";
import MissionIcon from "../assets/images/xlabs_missionIcon.png";
import topPlane from "../assets/images/xlabs_mv_bgTop.png";
import bottomPlane from "../assets/images/xlabs_mv_bgBottom.png";
import teamPhoto from "../assets/images/xlabs_fullTeam.png";
import ksheeraj from "../assets/images/xlabs_ksheeraj.jpeg";
import naijith from "../assets/images/xlabs_naijith.jpeg";
import pranav from "../assets/images/xlabs_pranav.jpeg";
import shreesha from "../assets/images/xlabs_shreesha.jpeg";
import ruturaj from "../assets/images/xlabs_ruturaj.jpeg";
import { EmployeeInfoCard } from "@/components/employeeInfoCard.tsx";

type infoCardsProps = {
  id: number;
  title: string;
  icon: string | undefined;
  description: string;
  animation: string;
};

type employeeInfoProps = {
  name: string;
  photo: string | undefined;
  position: string;
  description: string;
  linkedinUrl: string;
};

const AboutUs: React.FC = (): React.JSX.Element => {
  // <-- title double underline styles -->
  const beforeStyles = "";
  // "before:absolute before:left-0 before:top-full before:h-[4px] before:w-[50px] before:bg-blue-600 before:content-['']";
  const afterStyles = "";
  // "after:absolute after:left-0 after:top-full after:mt-[8px] after:h-[4px] after:w-[25px] after:bg-blue-600 after:content-['']";

  // <-- Data Arrays -->
  const typingAnimationItems: string[] = [
    "Custom Drone Building",
    "Design and Fabrication",
    "Offering Tailored Solutions",
    "Structure and CFD Analysis"
  ];

  const infoCards: infoCardsProps[] = [
    {
      id: 1,
      title: "Our Vision",
      icon: VisionIcon,
      description:
        " We envision a future where every student in India is not only proficient in engineering theory but is also adept at applying their skills to solve practical challenges. we aspire to be the catalyst for this transformation. Our vision is to introduce students to the thrilling and fun aspects of engineering through activities such as rockets, UAVs, and additive manufacturing. ",
      animation: "zoom-in-right"
    },
    {
      id: 2,
      title: "Our Mission",
      icon: MissionIcon,
      description:
        "Our mission is to ignite the spark of creativity and innovation within the hearts of students across India. We are dedicated to fostering a dynamic learning environment that empowers the next generation of engineers. Our focus lies in providing students with the tools, knowledge, and hands-on experiences necessary to tackle real-world problems through the lens of hardware engineering.",
      animation: "zoom-in-left"
    }
  ];

  const employeeInfo: employeeInfoProps[] = [
    {
      name: "Naijith Rai",
      photo: naijith,
      position: "Founder",
      description:
        "Naijith Rai drives the technical and strategy of the ProjectX Labs platform and brand",
      linkedinUrl:
        "https://www.linkedin.com/in/naijith-rai-71202a1b2?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
    },
    {
      name: "Ksheeraj Krishna K V",
      photo: ksheeraj,
      position: "Co-Founder",
      description:
        "Ksheeraj Krishna K V drives the technical and strategy of the ProjectX Labs platform and brand",
      linkedinUrl:
        "https://www.linkedin.com/in/ksheeraj-krishna-k-v-185b091b7?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
    },
    {
      name: "Pranav P V",
      photo: pranav,
      position: "Co-Founder",
      description:
        "Pranav P V drives the technical and strategy of the ProjectX Labs platform and brand",
      linkedinUrl:
        "https://www.linkedin.com/in/pranav-pv-281a97214?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
    },
    {
      name: "Ruturaj Yellurkar",
      photo: ruturaj,
      position: "Co-Founder",
      description:
        "Ruturaj Yellurkar drives the technical and strategy of the ProjectX Labs platform and brand",
      linkedinUrl:
        "https://www.linkedin.com/in/ruturaj10?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
    },
    {
      name: "Shreesha Sridhar",
      photo: shreesha,
      position: "Chairman",
      description:
        "Shreesha Sridhar drives the technical and strategy of the ProjectX Labs platform and brand",
      linkedinUrl:
        "https://www.linkedin.com/in/shreesha-sridhar-3ab7b728b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
    }
  ];

  return (
    <main className="flex flex-col items-center justify-center">
      <section className="relative flex w-full justify-center bg-black pb-16 sm:items-center md:bg-[url('../assets/images/xlabs_fullTeam.png')] md:bg-cover md:bg-center md:bg-no-repeat lg:h-dvh lg:pb-0 xl:bg-center">
        <div
          className="relative flex w-[95%] flex-col md:w-[90%] xl:w-[65%]"
          data-aos="fade-down"
          data-aos-once={true}
        >
          <div className="relative mb-6 md:hidden">
            <img src={teamPhoto} className="object-contain object-top" />
            <h1
              className={twMerge(
                "absolute -bottom-4 py-6 text-4xl font-normal text-white sm:py-8 md:block md:text-6xl lg:font-semibold",
                beforeStyles,
                afterStyles
              )}
            >
              ABOUT <span className="text-sky-400">US</span>
            </h1>
          </div>
          <h1
            className={twMerge(
              "relative hidden py-6 text-4xl font-normal text-white sm:py-8 md:block md:text-6xl lg:font-semibold",
              beforeStyles,
              afterStyles
            )}
            data-aos="fade-left"
            data-aos-once={true}
          >
            ABOUT <span className="text-sky-400">US</span>
          </h1>
          <h2
            className="mb-2 text-base font-medium text-white sm:text-2xl sm:font-medium md:text-3xl md:font-semibold"
            data-aos="fade-right"
            data-aos-once={true}
          >
            We specialize in{" "}
            <TypingAnimation
              textColor={"text-sky-400"}
              items={typingAnimationItems}
            />
          </h2>
          <p
            className="text-xl text-white sm:text-2xl"
            style={{ textShadow: "2px 0px black" }}
            data-aos="fade-left"
            data-aos-once={true}
          >
            ProjectX Labs, a dynamic engineering services company founded by
            Aerospace graduates. Our mission is to inspire the next generation
            of aerospace enthusiasts and engineers through immersive educational
            workshops. Having successfully conducted engaging sessions in
            various institutions.
          </p>
        </div>
      </section>
      {/* Mission and Vision */}
      <section
        className="relative flex h-fit w-full items-center justify-center overflow-x-clip py-24 lg:h-dvh lg:py-10"
        style={{
          background: "linear-gradient(180deg, #011330 100%, #091d3ed9)"
        }}
      >
        <img
          src={topPlane}
          className="-left-32 top-10 hidden h-52 md:w-64 lg:absolute lg:inline lg:w-72 xl:w-80"
          data-aos="fade-right"
          data-aos-once={true}
        />
        <img
          src={bottomPlane}
          className="absolute -right-16 bottom-10 hidden h-52 md:w-64 lg:inline xl:w-80"
          data-aos="fade-left"
          data-aos-once={true}
        />
        <div className="flex h-full w-[90%] flex-col items-center justify-center gap-6 md:flex-row">
          {infoCards.map((info) => (
            <div
              className="card group relative z-10 cursor-pointer overflow-y-hidden rounded-[10px] border border-[#ffffff26] bg-none px-6 py-10 text-center text-[#0d7586] transition-all duration-100 ease-in md:hover:text-black lg:p-8 2xl:p-16"
              style={{ width: "calc(34% - 20px)" }}
              key={info.id}
              //   data-aos={info.animation}
              data-aos-once={true}
            >
              <div className="flex w-full  flex-col items-center justify-center transition-all duration-300 ease-in md:group-hover:scale-105">
                <img
                  src={info.icon}
                  className="h-24 w-32 transition-all duration-300 ease-in md:group-hover:brightness-0"
                />
                <div className="mb-8 mt-[10px] text-2xl font-medium text-[#ffffff] transition-all duration-200 ease-in md:group-hover:text-black">
                  {info.title}
                </div>
                <p className="lg:text-base xl:text-lg ">{info.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
      {/* Team */}
      <section className="flex w-full flex-col items-center bg-black py-16 md:py-32">
        <div
          className="team__header mb-4 w-[80%] text-center text-5xl text-white sm:text-6xl md:text-left"
          data-aos="fade-down-right"
          data-aos-once={true}
        >
          Team Leaders
        </div>
        <div className="team__section grid h-full w-full place-items-center gap-4 md:grid-cols-2 md:pt-20 lg:pt-20 xl:grid-cols-3 2xl:w-[80%]">
          {employeeInfo.map((employee, index) => (
            <EmployeeInfoCard
              key={index}
              name={employee.name}
              photo={employee.photo}
              position={employee.position}
              linkedinUrl={employee.linkedinUrl}
            />
          ))}
        </div>
      </section>
    </main>
  );
};

export default AboutUs;
