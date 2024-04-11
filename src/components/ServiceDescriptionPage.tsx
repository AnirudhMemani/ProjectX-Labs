import React from "react";
import { ImageTrail } from "./ImageTrail";
import { ServiceTitles } from "@/pages/Services/constants";
import EncryptButton from "./EncryptButton";
import { useNavigate } from "react-router-dom";
import { NavRoutes } from "./constants";
import { FaArrowLeft } from "react-icons/fa6";

export type ServiceDescriptionProps = {
  title: string;
  content: string;
  images: string[];
  hideCommonTitle?: boolean;
  buttonTitle?: string;
  showButtonIcon?: boolean;
  navigateTo?: string;
  className?: string;
  containerClassName?: string;
  SecondButtonTitle?: string;
  showSecondButtonIcon?: boolean;
  secondButtonNavigateTo?: string;
};

const ServiceDescriptionPage: React.FC<ServiceDescriptionProps> = ({
  content,
  title,
  images,
  hideCommonTitle = false,
  buttonTitle,
  showButtonIcon = true,
  navigateTo,
  className,
  containerClassName,
  SecondButtonTitle,
  showSecondButtonIcon,
  secondButtonNavigateTo
}) => {
  const navigate = useNavigate();
  const parts = title.split(" ");
  return (
    <ImageTrail
      images={images}
      className={className}
      containerClassName={containerClassName}
    >
      {!hideCommonTitle && (
        <>
          <div className="hidden w-fit cursor-pointer rounded-full bg-white bg-opacity-80 p-2 text-black backdrop-blur-2xl backdrop-saturate-200 transition-all duration-200 ease-in-out hover:scale-105 active:scale-95 lg:mb-6 lg:inline-block">
            <FaArrowLeft
              onClick={() => {
                window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
                navigate("/" + NavRoutes.SERVICES);
              }}
              size={20}
            />
          </div>
          <h1
            className="mb-1 font-sans text-3xl sm:text-5xl"
            data-aos="fade-down-right"
          >
            {ServiceTitles.COMMON_TITLE}
          </h1>
        </>
      )}
      <h3
        className="mb-3 font-sans text-3xl font-bold sm:text-7xl"
        data-aos="fade-left"
      >
        {parts.map((word, index) => (
          <>
            <span key={index} className="uppercase">
              {word}
            </span>
            <br />
          </>
        ))}
      </h3>
      <p className="mb-12 font-sans text-base sm:text-xl" data-aos="fade-right">
        {content}
      </p>
      <div className="flex flex-col gap-6 lg:flex-row">
        <EncryptButton
          onClick={() => {
            navigate(navigateTo ? navigateTo : "/" + NavRoutes.CONTACT_US);
            window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
          }}
          className="max-lg:w-full lg:text-lg"
          customAnimationColor="black"
          title={buttonTitle}
          showIcon={showButtonIcon}
        />
        {SecondButtonTitle && (
          <EncryptButton
            onClick={() => {
              navigate(
                secondButtonNavigateTo
                  ? secondButtonNavigateTo
                  : "/" + NavRoutes.CONTACT_US
              );
              window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
            }}
            className="max-lg:w-full lg:text-lg"
            customAnimationColor="black"
            title={SecondButtonTitle}
            showIcon={showSecondButtonIcon}
          />
        )}
      </div>
    </ImageTrail>
  );
};

export default ServiceDescriptionPage;
