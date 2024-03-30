import { Typography } from "@material-tailwind/react";
import Logo from "../assets/images/xlabs_logo_white.png";
import "../styles/index.css";
import { useNavigate, Link } from "react-router-dom";
import { NavRoutes, ServicesNavRoutes } from "./constants";
import { FaYoutube } from "react-icons/fa";

type ItemsProps = {
  label: string;
  route: string;
};

type LINKSProps = {
  title: string;
  items: ItemsProps[];
}[];

const LINKS: LINKSProps = [
  {
    title: "Services",
    items: [
      {
        label: "3D Printing",
        route: `/${NavRoutes.SERVICES}/${ServicesNavRoutes.PRINTING_3D}`
      },
      {
        label: "Custom Drones",
        route: NavRoutes.CUSTOM_DRONES
      },
      {
        label: "Design & Fabrication",
        route: NavRoutes.DESIGN
      },
      {
        label: "Project Consultation",
        route: NavRoutes.PROJ_CONSULT
      }
    ]
  },
  {
    title: "Company",
    items: [
      {
        label: "Home",
        route: NavRoutes.HOME
      },
      {
        label: "About Us",
        route: NavRoutes.ABOUT_US
      },
      {
        label: "Blogs",
        route: NavRoutes.BLOGS
      },
      {
        label: "Contact Us",
        route: NavRoutes.CONTACT_US
      }
    ]
  },
  {
    title: "Resource",
    items: [
      {
        label: "Workshop",
        route: NavRoutes.UNIVERSITY
      },
      {
        label: "Internship",
        route: NavRoutes.INTERNSHIP
      },
      {
        label: "Training",
        route: NavRoutes.TRAINING
      },
      {
        label: "High School",
        route: NavRoutes.HIGH_SCHOOL
      }
    ]
  }
];

const currentYear = new Date().getFullYear();

const Footer = () => {
  const navigate = useNavigate();
  const scrollToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };
  return (
    <footer className="relative w-full bg-[#020817]">
      <div className="mx-auto w-full max-w-7xl px-4 py-8 sm:px-8">
        <div className="grid grid-cols-1 justify-between gap-4 md:grid-cols-12">
          <Typography
            placeholder={""}
            variant="h5"
            className="mb-6 hidden text-input md:col-span-4 md:block"
          >
            <img
              src={Logo}
              className="size-60 cursor-pointer"
              onClick={() => {
                navigate(NavRoutes.HOME);
                scrollToTop();
              }}
            />
          </Typography>
          <div className="footer__items grid grid-cols-3 place-items-center justify-between gap-4 md:col-span-8">
            {LINKS.map(({ title, items }) => (
              <ul key={title}>
                <Typography
                  placeholder={""}
                  variant="small"
                  color="white"
                  className="mb-3 font-medium opacity-40"
                >
                  {title}
                </Typography>
                {items.map((link) => (
                  <li key={link.label}>
                    <Typography
                      placeholder={""}
                      as="a"
                      href="#"
                      color="white"
                      className="footer__links py-1.5 font-normal transition-all"
                    >
                      <Link
                        to={link.route}
                        onClick={() =>
                          window.scrollTo({
                            top: 0,
                            left: 0,
                            behavior: "smooth"
                          })
                        }
                      >
                        <span className="inline-block transition-transform active:scale-95 sm:hover:scale-105">
                          {link.label}
                        </span>
                      </Link>
                    </Typography>
                  </li>
                ))}
              </ul>
            ))}
          </div>
        </div>
        <div className="border-blue-gray-50 mt-12 flex w-full flex-col items-center justify-center border-t py-4 md:mt-0 md:flex-row md:justify-between">
          <Typography
            placeholder={""}
            variant="small"
            className="mb-4 text-center font-normal text-input md:mb-0"
          >
            &copy; {currentYear}{" "}
            <span className="text-sky-500">ProjectX Labs</span> All Rights
            Reserved.
          </Typography>
          <div className="flex gap-4 text-input sm:justify-center">
            <Typography
              placeholder={""}
              as="a"
              href="https://www.linkedin.com/company/projectx-labs/"
              target="_blank"
              className="opacity-80 transition-opacity hover:scale-105 hover:opacity-100 active:scale-95"
              aria-details="LinkedIn"
            >
              <svg
                className="h-6 w-6"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
                  clipRule="evenodd"
                />
              </svg>
            </Typography>
            <Typography
              placeholder={""}
              as="a"
              href="https://www.instagram.com/projectx_labs?igsh=MTRqOTV5ZzJxdjFvOQ=="
              target="_blank"
              aria-details="instagram"
              className="opacity-80 transition-opacity hover:scale-105 hover:opacity-100 active:scale-95"
            >
              <svg
                className="h-6 w-6"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                  clipRule="evenodd"
                />
              </svg>
            </Typography>
            <Typography
              placeholder={""}
              as="a"
              href="https://x.com/ProjectX_Labs?t=VK7f8vvb6OT6FO4C-ZLjKw&s=08"
              target="_blank"
              aria-details="twitter"
              className="opacity-80 transition-opacity hover:scale-105 hover:opacity-100 active:scale-95"
            >
              <svg
                className="h-6 w-6"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
              </svg>
            </Typography>
            <Typography
              placeholder={""}
              as="a"
              href="https://www.youtube.com/@ProjectX_Labs"
              target="_blank"
              aria-details="twitter"
              className="opacity-80 transition-opacity hover:scale-105 hover:opacity-100 active:scale-95"
            >
              <FaYoutube size={25} />
            </Typography>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
