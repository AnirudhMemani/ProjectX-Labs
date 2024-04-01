import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { Navbar } from "./components/Navbars/Navbar";
import "./styles/index.css";
import Home from "./pages/Home/Home";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import CustomDrones from "./pages/Services/CustomDrones";
import Design from "./pages/Services/Design";
import Consultation from "./pages/Services/Consultation";
import { NavRoutes } from "./components/constants";
import CfdAnalysis from "./pages/Services/CfdAnalysis";
import WorkshopSchoolRoutes from "./routes/WorkshopSchoolRoutes";
import InternshipRoutes from "./routes/InternshipRoutes";
import BlogsRoute from "./routes/BlogsRoute";
import WorkshopUniversityRoutes from "./routes/WorkshopUniversityRoutes";
import NotFound from "./pages/PageNotFound/NotFound";
import Footer from "./components/Footer";
import ServiceRoutes from "./routes/ServiceRoutes";
import { ScrollToTopButton } from "./components/ScrollToTopButton";
import AOS from "aos";
import "aos/dist/aos.css";
import useWindowDimensions from "./hooks/hooks";

const App: React.FC = (): React.JSX.Element => {
  const { width } = useWindowDimensions();
  useEffect(() => {
    AOS.init({
      duration: 1000,
      delay: 200,
      disable() {
        return width <= 1024 ? true : false;
      }
    });
    AOS.refresh();
  }, [width]);

  return (
    <div>
      <Navbar />
      <Routes>
        <Route path={NavRoutes.HOME} element={<Home />} />
        <Route path="/" element={<Home />} />
        <Route path={NavRoutes.BLOGS + "/*"} element={<BlogsRoute />} />
        <Route path={NavRoutes.ABOUT_US} element={<AboutUs />} />
        <Route path={NavRoutes.CONTACT_US} element={<ContactUs />} />
        <Route
          path={NavRoutes.HIGH_SCHOOL + "/*"}
          element={<WorkshopSchoolRoutes />}
        />
        <Route
          path={NavRoutes.UNIVERSITY + "/*"}
          element={<WorkshopUniversityRoutes />}
        />
        <Route path={NavRoutes.SERVICES + "/*"} element={<ServiceRoutes />} />
        <Route
          path={NavRoutes.INTERNSHIP + "/*"}
          element={<InternshipRoutes />}
        />
        <Route path={NavRoutes.CUSTOM_DRONES} element={<CustomDrones />} />
        <Route path={NavRoutes.DESIGN} element={<Design />} />
        <Route path={NavRoutes.PROJ_CONSULT} element={<Consultation />} />
        <Route path={NavRoutes.CFD_ANALYSIS} element={<CfdAnalysis />} />
        <Route path={"*"} element={<NotFound />} />
      </Routes>
      <Footer />
      <ScrollToTopButton />
    </div>
  );
};

export default App;
