import { useNavigate } from "react-router-dom";
import EncryptButton from "@/components/EncryptButton";
import { WorkshopNavbar } from "@/components/Navbars/WorkshopNavbar";
import { Outlet } from "react-router-dom";
import { NavRoutes } from "@/components/constants";
import { WorkshopForSchoolRoute } from "../WorkshopRoutesData";

const School: React.FC = (): React.JSX.Element => {
  const navigate = useNavigate();
  return (
    <section className="flex min-h-dvh w-full flex-col text-white">
      <div className="pb-20">
        <div
          className="flex w-full items-center justify-center pt-16 lg:pt-32"
          data-aos="fade-down"
          data-aos-once={true}
        >
          <div className="flex w-full flex-col items-center lg:flex-row lg:justify-between">
            <div className="mb-6 flex flex-1 items-center justify-center lg:mb-0 lg:flex-col">
              <h1 className="text-center text-3xl leading-none sm:text-5xl lg:mr-0 lg:text-[5rem] xl:text-8xl 2xl:text-9xl">
                WORKSHOPS FOR <span className="text-sky-500">SCHOOL</span>
              </h1>
            </div>
            <div className="flex w-[90%] flex-1 items-center justify-center lg:w-full">
              <p className="text-xl font-light uppercase sm:text-center sm:text-3xl lg:text-start lg:text-base lg:font-normal xl:text-xl 2xl:text-2xl">
                Embark on an exciting learning adventure with our specialized
                workshops designed for school students. Explore the realms of
                connection, self-expression, and problem-solving in an
                environment that nurtures both personal and academic
                development.
              </p>
            </div>
          </div>
        </div>
        <div
          className="relative mt-10 flex w-full items-center justify-center"
          data-aos="fade-left"
          data-aos-once={true}
        >
          <EncryptButton
            className="rounded-none tracking-widest hover:border-sky-500 hover:text-sky-500 lg:absolute lg:left-[50%]"
            onClick={() => navigate("/" + NavRoutes.CONTACT_US)}
            title="Contact Us"
          />
        </div>
      </div>
      <div className="w-full pt-16">
        <WorkshopNavbar
          initialRoute={WorkshopForSchoolRoute[0]}
          NavRoutes={WorkshopForSchoolRoute}
        />
        <Outlet />
      </div>
    </section>
  );
};

export default School;
