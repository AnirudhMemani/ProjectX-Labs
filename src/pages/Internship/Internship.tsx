import { useState, useRef, ChangeEvent, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import InternshipCard from "./InternshipCard";
import { IoMdClose } from "react-icons/io";
import { IoIosSearch } from "react-icons/io";
import { twMerge } from "tailwind-merge";
import { getAllInternships } from "@/api/internship-api";
import { Toast } from "@/components/Toast";
import InternshipSkeleton from "./InternshipSkeleton";

export type TInternshipInfo = {
  title: string;
  duration: string;
  stipend: string;
  location: string;
  workPolicy: string;
  summary: string;
  formLink?: string;
  internshipId?: string;
};

const Internship: React.FC = (): React.JSX.Element => {
  const navigate = useNavigate();

  // const internshipInfoArray: TInternshipInfo[] = [
  //   {
  //     title: "Product Manager",
  //     duration: "6 months",
  //     location: "Bangalore",
  //     stipend: "10k/Month",
  //     summary:
  //       " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis mollitia enim tenetur error esse officiis porro totam dicta, dolor aliquam possimus laborum quam iure et tempore natus modi consectetur pariatur. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis mollitia enim tenetur error esse officiis porro totam dicta, dolor aliquam possimus laborum quam iure et tempore natus modi consectetur pariatur. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis mollitia enim tenetur error esse officiis porro totam dicta, dolor aliquam possimus laborum quam iure et tempore natus modi consectetur pariatur. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis mollitia enim tenetur error esse officiis porro totam dicta, dolor aliquam possimus laborum quam iure et tempore natus modi consectetur pariatur. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis mollitia enim tenetur error esse officiis porro totam dicta, dolor aliquam possimus laborum quam iure et tempore natus modi consectetur pariatur. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis mollitia enim tenetur error esse officiis porro totam dicta, dolor aliquam possimus laborum quam iure et tempore natus modi consectetur pariatur. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis mollitia enim tenetur error esse officiis porro totam dicta, dolor aliquam possimus laborum quam iure et tempore natus modi consectetur pariatur. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis mollitia enim tenetur error esse officiis porro totam dicta, dolor aliquam possimus laborum quam iure et tempore natus modi consectetur pariatur. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis mollitia enim tenetur error esse officiis porro totam dicta, dolor aliquam possimus laborum quam iure et tempore natus modi consectetur pariatur. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis mollitia enim tenetur error esse officiis porro totam dicta, dolor aliquam possimus laborum quam iure et tempore natus modi consectetur pariatur. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis mollitia enim tenetur error esse officiis porro totam dicta, dolor aliquam possimus laborum quam iure et tempore natus modi consectetur pariatur.",
  //     workPolicy: "WFH",
  //     formLink:
  //       "https://docs.google.com/forms/d/e/1FAIpQLScQaJARH6MmGJycLWtnDD1yAFYntEEcJ0HTl94BeW3lbXj9hg/viewform"
  //   },
  //   {
  //     title: "Software Development Manager",
  //     duration: "6 months",
  //     location: "Bangalore",
  //     stipend: "10k/Month",
  //     summary:
  //       "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis mollitia enim tenetur error esse officiis porro totam dicta, dolor aliquam possimus laborum quam iure et tempore natus modi consectetur pariatur.",
  //     workPolicy: "WFO",
  //     formLink:
  //       "https://docs.google.com/forms/d/e/1FAIpQLScQaJARH6MmGJycLWtnDD1yAFYntEEcJ0HTl94BeW3lbXj9hg/viewform"
  //   },
  //   {
  //     title: "Sales Development Manager",
  //     duration: "6 months",
  //     location: "Bangalore",
  //     stipend: "10k/Month",
  //     summary:
  //       "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis mollitia enim tenetur error esse officiis porro totam dicta, dolor aliquam possimus laborum quam iure et tempore natus modi consectetur pariatur.",
  //     workPolicy: "Hybrid",
  //     formLink:
  //       "https://docs.google.com/forms/d/e/1FAIpQLScQaJARH6MmGJycLWtnDD1yAFYntEEcJ0HTl94BeW3lbXj9hg/viewform"
  //   },
  //   {
  //     title: "Human Resource Development Manager",
  //     duration: "6 months",
  //     location: "Bangalore",
  //     stipend: "10k/Month",
  //     summary:
  //       "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis mollitia enim tenetur error esse officiis porro totam dicta, dolor aliquam possimus laborum quam iure et tempore natus modi consectetur pariatur.",
  //     workPolicy: "Hybrid",
  //     formLink:
  //       "https://docs.google.com/forms/d/e/1FAIpQLScQaJARH6MmGJycLWtnDD1yAFYntEEcJ0HTl94BeW3lbXj9hg/viewform"
  //   },
  //   {
  //     title: "Product Development Manager",
  //     duration: "6 months",
  //     location: "Bangalore",
  //     stipend: "10k/Month",
  //     summary:
  //       "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis mollitia enim tenetur error esse officiis porro totam dicta, dolor aliquam possimus laborum quam iure et tempore natus modi consectetur pariatur.",
  //     workPolicy: "Hybrid",
  //     formLink:
  //       "https://docs.google.com/forms/d/e/1FAIpQLScQaJARH6MmGJycLWtnDD1yAFYntEEcJ0HTl94BeW3lbXj9hg/viewform"
  //   },
  //   {
  //     title: "Product Development Manager",
  //     duration: "6 months",
  //     location: "Bangalore",
  //     stipend: "10k/Month",
  //     summary:
  //       "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis mollitia enim tenetur error esse officiis porro totam dicta, dolor aliquam possimus laborum quam iure et tempore natus modi consectetur pariatur.",
  //     workPolicy: "Hybrid",
  //     formLink:
  //       "https://docs.google.com/forms/d/e/1FAIpQLScQaJARH6MmGJycLWtnDD1yAFYntEEcJ0HTl94BeW3lbXj9hg/viewform"
  //   }
  // ];

  const [showSearchBox, setShowSearchBox] = useState<boolean>(false);
  const searchBox = useRef<HTMLInputElement>(null);
  const searchBarContainer = useRef<HTMLDivElement>(null);
  const [searchBarValue, setSearchBarValue] = useState<string>("");
  const [filteredInternshipInfo, setFilteredInternshipInfo] = useState<
    TInternshipInfo[]
  >([]);
  const [internshipInfo, setInternshipInfo] = useState<TInternshipInfo[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [toastMessage, setToastMessage] = useState<string | undefined>(
    undefined
  );

  const populateInternshipInfo = async () => {
    try {
      setIsLoading(true);
      const response = await getAllInternships();

      if (response) {
        setInternshipInfo(response);
      }
    } catch (error) {
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    populateInternshipInfo();
  }, []);

  const filterInternship = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchBarValue(e.target.value);
    if (e.target.value.trim().length > 0) {
      const filteredInternshipPosts = internshipInfo.filter((internship) =>
        internship.title.toLowerCase().includes(e.target.value.toLowerCase())
      );
      setFilteredInternshipInfo(filteredInternshipPosts);
    } else {
      setFilteredInternshipInfo([]);
    }
  };

  useEffect(() => {
    const toggleSearchBarVisibility = (event: MouseEvent) => {
      if (
        searchBarContainer.current &&
        !searchBarContainer.current?.contains(event.target as Node) &&
        searchBarValue.length < 1
      ) {
        setShowSearchBox(false);
      }
    };

    document.addEventListener("mousedown", toggleSearchBarVisibility);

    return () =>
      document.removeEventListener("mousedown", toggleSearchBarVisibility);
  }, []);

  return (
    <section className="flex w-full flex-col items-center bg-[#090D1F] lg:min-h-dvh">
      <div className="w-[95%] py-16 sm:w-[90%] lg:py-28 2xl:w-[70%]">
        <div className="mb-8 flex items-center justify-between text-white">
          <h3 className="font-sans text-lg font-medium lg:text-xl">
            All Internships
          </h3>
          <div
            className="relative flex items-center gap-1"
            ref={searchBarContainer}
          >
            <input
              type="text"
              className={twMerge(
                "w-0 rounded-sm px-1 text-black outline-none transition-all duration-300 ease-in-out",
                showSearchBox
                  ? "w-[100px] bg-white focus:ring-2 focus:ring-sky-500 sm:w-[200px]"
                  : "!pointer-events-none border-0 bg-transparent opacity-0"
              )}
              placeholder="Search..."
              ref={searchBox}
              onChange={filterInternship}
              value={searchBarValue}
            />
            {showSearchBox ? (
              <IoMdClose
                className="left-2 top-1 cursor-pointer text-2xl text-white"
                onClick={() => {
                  setShowSearchBox(false);
                  searchBox.current?.blur();
                  setSearchBarValue("");
                }}
              />
            ) : (
              <IoIosSearch
                className={twMerge(
                  "left-2 top-1 cursor-pointer text-2xl text-white"
                )}
                onClick={() => {
                  setShowSearchBox(true);
                  searchBox.current?.focus();
                }}
              />
            )}
          </div>
        </div>
        <div
          className={twMerge(
            "grid w-full grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3",
            (searchBarValue.length > 0 && filteredInternshipInfo.length < 1) ||
              internshipInfo.length < 1
              ? "flex items-center justify-center"
              : ""
          )}
        >
          {isLoading ? (
            <div className="grid h-full w-full grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {Array.from({ length: 10 }, (_, index) => (
                <InternshipSkeleton key={index} />
              ))}
            </div>
          ) : searchBarValue.length > 0 ? (
            filteredInternshipInfo.length > 0 ? (
              filteredInternshipInfo.map((filteredInfo, index) => (
                <div
                  className="h-fit rounded-lg border border-input p-6"
                  key={index}
                >
                  <InternshipCard
                    key={index}
                    title={filteredInfo.title}
                    duration={filteredInfo.duration}
                    location={filteredInfo.location}
                    stipend={filteredInfo.stipend}
                    summary={filteredInfo.summary}
                    workPolicy={filteredInfo.workPolicy}
                    onApply={() => window.open(filteredInfo.formLink, "_blank")}
                    onReadMore={() =>
                      navigate(filteredInfo.internshipId ?? "", {
                        state: filteredInfo
                      })
                    }
                  />
                </div>
              ))
            ) : (
              <div className="mt-32 flex w-full items-center justify-center text-white">
                <h1 className="text-lg">
                  No internship available for this role!
                </h1>
              </div>
            )
          ) : internshipInfo.length > 0 ? (
            internshipInfo.map((info, index) => (
              <div
                className="h-fit rounded-lg border border-input p-6"
                key={index}
              >
                <InternshipCard
                  key={index}
                  title={info.title}
                  duration={info.duration}
                  location={info.location}
                  stipend={info.stipend}
                  summary={info.summary}
                  workPolicy={info.workPolicy}
                  onApply={() => window.open(info.formLink, "_blank")}
                  onReadMore={() =>
                    navigate(info.internshipId ?? "", {
                      state: info
                    })
                  }
                />
              </div>
            ))
          ) : (
            <div className="mt-32 flex w-full items-center justify-center text-white">
              <h1 className="text-lg">
                We are not offering any internships right now. Check back later!
              </h1>
            </div>
          )}
        </div>
      </div>
      <Toast toastMessage={toastMessage} setToastMessage={setToastMessage} />
    </section>
  );
};

export default Internship;
