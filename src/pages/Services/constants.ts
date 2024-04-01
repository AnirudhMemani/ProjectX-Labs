import { ServicesNavRoutes } from "@/components/constants";
import ServiceImage_1 from "../../assets/images/xlabs_service-1.jpeg";
import ServiceImage_2 from "../../assets/images/xlabs_service-2.jpg";
import ServiceImage_3 from "../../assets/images/xlabs_service-3.jpg";
import ServiceImage_4 from "../../assets/images/xlabs_aircraftDesign-4.png";
import ServiceImage_5 from "../../assets/images/xlabs_aircraftDesign-5.jpeg";
import ServiceImage_6 from "../../assets/images/xlabs_service-6.jpg";
import { ServiceDescriptionProps } from "@/components/ServiceDescriptionPage";
import CustomDronesImage1 from "../../assets/images/xlabs_services-customDrones-1.jpeg";
import CustomDronesImage2 from "../../assets/images/xlabs_services-customDrones-2.jpeg";
import CustomDronesImage3 from "../../assets/images/xlabs_services-customDrones-3.jpeg";
import CustomDronesImage4 from "../../assets/images/xlabs_services-customDrones-4.jpeg";
import CustomDronesImage5 from "../../assets/images/xlabs_services-customDrones-5.jpeg";
import CustomDronesImage6 from "../../assets/images/xlabs_services-customDrones-6.jpeg";
import CustomDronesImage7 from "../../assets/images/xlabs_services-customDrones-7.jpeg";
import CustomDronesImage8 from "../../assets/images/xlabs_services-customDrones-8.jpeg";
import Printing3dImage1 from "../../assets/images/xlabs_services-printing3d-1.jpeg";
import Printing3dImage2 from "../../assets/images/xlabs_services-printing3d-2.jpeg";
import Printing3dImage3 from "../../assets/images/xlabs_services-printing3d-3.jpeg";
import Printing3dImage4 from "../../assets/images/xlabs_services-printing3d-4.jpeg";
import Printing3dImage5 from "../../assets/images/xlabs_services-printing3d-5.jpeg";
import Printing3dImage6 from "../../assets/images/xlabs_services-printing3d-6.jpeg";
import Printing3dImage7 from "../../assets/images/xlabs_services-printing3d-7.jpeg";
import Printing3dImage8 from "../../assets/images/xlabs_services-printing3d-8.jpeg";
import Printing3dImage9 from "../../assets/images/xlabs_services-printing3d-9.jpeg";
import Printing3dImage10 from "../../assets/images/xlabs_services-printing3d-10.jpeg";
import Printing3dImage11 from "../../assets/images/xlabs_services-printing3d-11.jpeg";
import Printing3dImage12 from "../../assets/images/xlabs_services-printing3d-12.jpeg";
import DesignImage1 from "../../assets/images/xlabs_services-design-1.jpg";
import DesignImage2 from "../../assets/images/xlabs_services-design-2.jpg";
import DesignImage3 from "../../assets/images/xlabs_services-design-3.jpeg";
import DesignImage4 from "../../assets/images/xlabs_services-design-4.jpeg";
import DesignImage5 from "../../assets/images/xlabs_services-design-5.jpeg";
import StructuralAnalysisImage1 from "../../assets/images/xlabs_services-structural-1.jpg";
import StructuralAnalysisImage2 from "../../assets/images/xlabs_services-structural-2.png";
import StructuralAnalysisImage3 from "../../assets/images/xlabs_services-structural-3.jpg";
import StructuralAnalysisImage4 from "../../assets/images/xlabs_services-structural-4.png";
import CFDImage1 from "../../assets/images/xlabs_services-cfd-1.jpeg";
import CFDImage2 from "../../assets/images/xlabs_services-cfd-2.jpg";
import CFDImage3 from "../../assets/images/xlabs_services-cfd-3.jpg";
import CFDImage4 from "../../assets/images/xlabs_services-cfd-4.jpg";
import ConsultationImage1 from "../../assets/images/xlabs_services-consultation-1.jpeg";
import ConsultationImage2 from "../../assets/images/xlabs_services-consultation-2.jpeg";
import ConsultationImage3 from "../../assets/images/xlabs_services-consultation-3.jpeg";
import ConsultationImage4 from "../../assets/images/xlabs_services-consultation-4.jpeg";
import ConsultationImage5 from "../../assets/images/xlabs_services-consultation-5.jpeg";
import ConsultationImage6 from "../../assets/images/xlabs_services-consultation-6.jpg";
import ConsultationImage7 from "../../assets/images/xlabs_services-consultation-7.jpg";
import { TOptionsType } from "./SelectMenu/SelectMenu";

export const ServiceTitles = {
  COMMON_TITLE: "WE ARE HERE TO MAKE",
  CUSTOM_DRONES: "Custom Drones",
  PRINTING_3D: "3D Printing Parts",
  DESIGN_AND_FABRICATION: "Design\u00A0And Fabricate",
  STRUCTURAL_ANALYSIS: "Structural Analysis",
  CFD_ANALYSIS: "CFD Analysis",
  PROJECT_CONSTULTATION: "Projects"
} as const;

export const ServiceDescriptionsArray: ServiceDescriptionProps[] = [
  {
    title: ServiceTitles.CUSTOM_DRONES,
    content:
      "Welcome to Custom Drones, where imagination flies! We specialize in bespoke drones tailored to your needs. Whether for filmmaking, surveying, or personal use, we turn your vision into reality. Our team crafts drones with cutting-edge tech, ensuring top performance. Contact us to discuss your project and soar into the skies of possibility!",
    images: [
      CustomDronesImage1,
      CustomDronesImage2,
      CustomDronesImage3,
      CustomDronesImage4,
      CustomDronesImage5,
      CustomDronesImage6,
      CustomDronesImage7,
      CustomDronesImage8
    ]
  },
  {
    title: ServiceTitles.PRINTING_3D,
    content:
      "Welcome to our 3D Printing Service! Our facility offers a wide range of materials including PLA, TPU, PETG, CF-infused filament, ASA, and Nylon. With our SLA printer, we ensure precision and detail for all projects. Whether you're a hobbyist or professional, we provide rapid prototyping with high-quality results. Contact us today to discuss your project and turn your ideas into reality!",
    images: [
      Printing3dImage1,
      Printing3dImage2,
      Printing3dImage3,
      Printing3dImage4,
      Printing3dImage5,
      Printing3dImage6,
      Printing3dImage7,
      Printing3dImage8,
      Printing3dImage9,
      Printing3dImage10,
      Printing3dImage11,
      Printing3dImage12
    ]
  },
  {
    title: ServiceTitles.DESIGN_AND_FABRICATION,
    content:
      "Welcome to our Design & Fabrication service! We specialize in bringing ideas to life with expert design and precision fabrication. Whether prototyping a product or crafting a sculpture, our talented team guides you from concept to reality. With advanced software and techniques, we ensure attention to detail and quality. Contact us to discuss your project and turn your vision into a masterpiece!",
    images: [
      DesignImage1,
      DesignImage2,
      DesignImage3,
      DesignImage4,
      DesignImage5
    ]
  },
  {
    title: ServiceTitles.STRUCTURAL_ANALYSIS,
    content:
      "Welcome to our Structural Design service! Our experienced engineers deliver innovative solutions tailored to your needs, prioritizing safety, sustainability, and functionality. We optimize performance while minimizing costs, ensuring compliance with regulations and project objectives. Let's build success together! Contact us to discuss your structural design needs, whether it's for structural projects.",
    images: [
      StructuralAnalysisImage1,
      StructuralAnalysisImage2,
      StructuralAnalysisImage3,
      StructuralAnalysisImage4
    ]
  },
  {
    title: ServiceTitles.CFD_ANALYSIS,
    content:
      "Welcome to our CFD Analysis service, where fluid dynamics meets advanced simulation! We specialize in providing insights into fluid and gas behavior for aerospace, electronics, and industrial applications. Our skilled engineers use state-of-the-art software for accurate simulations, enabling informed decision-making and design optimization. Contact us to discuss your CFD analysis needs and propel your projects forward!",
    images: [CFDImage1, CFDImage2, CFDImage3, CFDImage4]
  },
  {
    title: ServiceTitles.PROJECT_CONSTULTATION,
    content:
      "Welcome to our Project Consultation service! We offer expert guidance to help you navigate your project. Whether you're starting a new venture, facing challenges, or optimizing outcomes, our seasoned professionals provide tailored solutions. From concept to implementation, we offer insights and recommendations for success. Contact us to schedule a consultation and turn your ideas into reality!",
    images: [
      ConsultationImage1,
      ConsultationImage2,
      ConsultationImage3,
      ConsultationImage4,
      ConsultationImage5,
      ConsultationImage6,
      ConsultationImage7
    ]
  }
];

type TservicesInfoArrayType = {
  id: number;
  title: string;
  content: string;
  image: string;
  leftButtonNavigateTo: string;
};

export const servicesInfoArray: TservicesInfoArrayType[] = [
  {
    id: 1,
    title: "Custom Drones",
    content:
      "Custom and ready-to-fly drones designed for beginners and experts.",
    image: ServiceImage_1,
    leftButtonNavigateTo: ServicesNavRoutes.CUSTOM_DRONE
  },
  {
    id: 2,
    title: "3D Printing",
    content:
      "Your creativity with precision engineer 3D printing: The future of design starts here",
    image: ServiceImage_2,
    leftButtonNavigateTo: ServicesNavRoutes.PRINTING_3D
  },
  {
    id: 3,
    title: "Desgin And Fabrication",
    content:
      "Elevate your project with seamless design integration and expert fabrication solutions",
    image: ServiceImage_3,
    leftButtonNavigateTo: ServicesNavRoutes.DESIGN_FABRICATION
  },
  {
    id: 4,
    title: "Structural Analysis",
    content:
      "Ensure the strength and integrity of your designs with advance structural analysis expertise",
    image: ServiceImage_4,
    leftButtonNavigateTo: ServicesNavRoutes.STRUCTURAL_ANALYSIS
  },
  {
    id: 5,
    title: "CFD Analysis",
    content:
      "Optimise performance and efficiency through comprehensive computational fluid dynamics (CFD)",
    image: ServiceImage_5,
    leftButtonNavigateTo: ServicesNavRoutes.CFD_ANALYSIS
  },
  {
    id: 6,
    title: "Project Consultation",
    content:
      "Unlock insights and solutions with tailored technical consultation from industrial experts",
    image: ServiceImage_6,
    leftButtonNavigateTo: ServicesNavRoutes.PROJECT_CONSULTATION
  }
];

export const FDMPrintSelectMenuOptions: TOptionsType[] = [
  { value: "ABS ", label: "ABS" },
  { value: "PLA", label: "PLA" },
  { value: "PETG", label: "PETG" },
  { value: "PA6CF", label: "PA6CF" },
  { value: "TPU", label: "TPU" },
  { value: "Nylon", label: "Nylon" },
  { value: "ASA", label: "ASA" }
];

export const SLAPrintSelectMenuOptions: TOptionsType[] = [
  { value: "Standard resin grey", label: "Standard resin grey" },
  { value: "Clear resin. MOQ-200cc", label: "Clear resin. MOQ-200cc" },
  { value: "Dental resin. MOQ-200cc", label: "Dental resin. MOQ-200cc" },
  { value: "Tough resin. MOQ-200cc", label: "Tough resin. MOQ-200cc" }
];
