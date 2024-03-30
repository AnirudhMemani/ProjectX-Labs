import { useLocation, useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { TInternshipInfo } from "./Internship";
import { FaIndianRupeeSign } from "react-icons/fa6";
import { GoLocation } from "react-icons/go";
import { FaRegClock } from "react-icons/fa6";
import { GoBriefcase } from "react-icons/go";
import EncryptButton from "@/components/EncryptButton";
import { IconType } from "react-icons/lib";
import { NavRoutes } from "@/components/constants";
import { FaChevronLeft } from "react-icons/fa6";
import { getInternshipsById } from "@/api/internship-api";
import { AnimatedLoader } from "@/components/Loader/AnimatedLoader";

type TGridInternshipContent = {
  subHeading: string;
  icon: IconType;
  value?: string;
};

const InternshipDescription: React.FC = (): React.JSX.Element => {
  const { state } = useLocation();
  const { id } = useParams();
  const [internshipInfo, setInternshipInfo] = useState<TInternshipInfo>();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const populateInternshipInfoById = async (id: string) => {
    try {
      setIsLoading(true);
      const response = await getInternshipsById(id);
      if (response) {
        setInternshipInfo(response);
      }
    } catch (error) {
      console.log();
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (state) {
      setInternshipInfo(state);
    } else {
      if (id) {
        populateInternshipInfoById(id);
      }
    }
  }, [state]);

  const gridInternshipContent: TGridInternshipContent[] = [
    {
      subHeading: "Location",
      icon: GoLocation,
      value: internshipInfo?.location
    },
    {
      subHeading: "Duration",
      icon: FaRegClock,
      value: internshipInfo?.duration
    },
    {
      subHeading: "Work Policy",
      icon: GoBriefcase,
      value: internshipInfo?.workPolicy
    }
  ];

  return (
    <section className="relative flex min-h-dvh w-full flex-col items-center bg-[#090D1F] text-white">
      {internshipInfo ? (
        <div className="w-[95%] py-16 sm:w-[80%] lg:py-32 2xl:w-[60%]">
          <div
            className="group mb-8 hidden w-fit cursor-pointer items-center gap-2 text-[#C0C5D0] active:scale-95 sm:flex"
            onClick={() => navigate("/" + NavRoutes.INTERNSHIP)}
          >
            <FaChevronLeft />{" "}
            <span className="transition-transform duration-200 ease-in-out group-hover:font-medium group-active:font-medium sm:text-lg">
              Internship
            </span>
          </div>
          <div className="flex w-full items-center justify-between">
            {/* Heading */}
            <div>
              <h1 className="text-3xl font-bold">{internshipInfo.title}</h1>
              <div className="mt-2 flex items-center justify-start gap-1">
                <FaIndianRupeeSign color="#C0C5D0" size={15} />
                <h3 className="text-lg text-[#C0C5D0]">
                  {internshipInfo.stipend}
                </h3>
              </div>
            </div>
            {/* Apply button */}
            <EncryptButton
              title="Apply Now"
              onClick={() => window.open(internshipInfo.formLink, "_blank")}
              className="hidden w-fit px-6 py-3 capitalize sm:block"
            />
          </div>
          <hr className="mt-4 border-[#C0C5D0]" />
          <div className="grid grid-cols-1 gap-6 border-b border-[#C0C5D0] py-6 md:grid-cols-2">
            {/* Grid Content */}
            {gridInternshipContent.map((gridContent) => (
              <div>
                <h3 className="mb-1 text-xl font-semibold">
                  {gridContent.subHeading}
                </h3>
                <div className="flex items-center gap-1">
                  <gridContent.icon size={12} />
                  <p className="text-sm font-normal text-[#C0C5D0]">
                    {gridContent.value}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div className="internship__content py-6">
            <div dangerouslySetInnerHTML={{ __html: internshipInfo.summary }} />
          </div>
          <div className="mt-6 flex w-full items-center justify-center">
            <EncryptButton
              title="Apply Now"
              onClick={() => window.open(internshipInfo.formLink, "_blank")}
              className="capitalize lg:px-6 lg:py-3"
            />
          </div>
        </div>
      ) : (
        <div className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 flex-col items-center gap-6 text-lg text-white">
          <h1>This internship is no longer available</h1>
          <button
            className="hidden items-center justify-center gap-2 rounded-md text-sm capitalize transition-all duration-200 ease-in-out hover:font-semibold active:scale-95 sm:flex"
            onClick={() =>
              navigate("/" + NavRoutes.INTERNSHIP, { replace: true })
            }
          >
            <FaChevronLeft size={12} />
            Go Back to Internship
          </button>
        </div>
      )}
      {isLoading && <AnimatedLoader />}
    </section>
  );
};

export default InternshipDescription;
