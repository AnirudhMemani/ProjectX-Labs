import { FormEvent, useRef, useState } from "react";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaXTwitter, FaInstagram, FaYoutube } from "react-icons/fa6";
import axios, { AxiosError } from "axios";
import { AXIOS_ERROR_CODE, STATUS_CODES } from "@/components/constants";
import { Toast } from "@/components/Toast";
import { AiOutlineExclamationCircle } from "react-icons/ai";
import { twMerge } from "tailwind-merge";
import { AnimatedLoader } from "@/components/Loader/AnimatedLoader";

const ContactUs: React.FC = (): React.JSX.Element => {
  const [formName, setFormName] = useState<string>("");
  const [formEmail, setFormEmail] = useState<string>("");
  const [formMessage, setFormMessage] = useState<string>("");
  const [formSubject, setFormSubject] = useState<string>("");
  const [isTermsAccepted, setIsTermsAccepted] = useState<boolean>(false);
  const [isDefaultEmailCheckCleared, setIsDefaultEmailCheckCleared] =
    useState<boolean>(false);
  const [toastMessage, setToastMessage] = useState<string | undefined>();
  const [errorMessageDisplayStyle, setErrorMessageDisplayStyle] =
    useState<string>("hidden");
  const [errorMessageTimeout, setErrorMessageTimeout] =
    useState<ReturnType<typeof setTimeout>>();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const MAX_CHAR_LENGTH = 3000;
  const emailRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w\w+)+$/;

  const emailRef = useRef<HTMLInputElement | null>(null);

  const processContactFormSubmission = async (
    event: FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();
    if (errorMessageTimeout) {
      clearTimeout(errorMessageTimeout);
      setErrorMessageDisplayStyle("hidden");
    }
    if (!isTermsAccepted) {
      setErrorMessageDisplayStyle("flex");
      setErrorMessageTimeout(
        setTimeout(() => {
          setErrorMessageDisplayStyle("hidden");
        }, 2500)
      );
      return;
    }
    const body = {
      name: formName,
      email: formEmail,
      message: formMessage,
      subject: formSubject
    };
    try {
      setIsLoading(true);
      const response = await axios.post(
        `${import.meta.env.VITE_URL}${
          import.meta.env.VITE_CONTACT_US_ENDPOINT
        }`,
        body
      );
      if (response.status == STATUS_CODES.OK) {
        setToastMessage("Your message was sent successfully");
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
        setFormName("");
        setFormEmail("");
        setFormMessage("");
        setFormSubject("");
        setIsTermsAccepted(false);
      }
    } catch (error) {
      const knownError = error as Error | AxiosError;
      if (axios.isAxiosError(knownError)) {
        if (knownError.code === AXIOS_ERROR_CODE.NETWORK_ERROR) {
          setToastMessage("Server down. Please try again later!");
        } else if (
          knownError.response?.status === STATUS_CODES.TOO_MANY_REQUESTS
        ) {
          setToastMessage(knownError.response.data.msg);
        } else {
          setToastMessage("Server Error. Please try again later!");
        }
      } else {
        setToastMessage("Failed to send request. Please try again later!");
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex min-h-dvh items-center justify-center bg-black text-white">
      <div className="flex w-[95%] flex-col items-center justify-center gap-16 py-20 lg:w-[90%] lg:flex-row lg:gap-0 2xl:w-[80%]">
        <div className="flex w-full flex-col items-center justify-center lg:w-fit lg:flex-row">
          {/* Left card */}
          <div
            className="flex h-[100px] w-full items-center justify-center rounded-t-lg border-t border-sky-500 bg-black px-6 shadow-lg shadow-sky-500 sm:w-[400px] lg:h-[330px] lg:w-fit lg:rounded-l-lg lg:rounded-tr-none lg:border-t-0 lg:shadow-sm lg:shadow-sky-500 2xl:h-[400px]"
            data-aos="fade-right"
          >
            <div className="flex h-full w-full flex-row items-center justify-between gap-6 bg-black p-2 lg:h-[80%] lg:flex-col">
              <a
                href="https://www.linkedin.com/company/projectx-labs/"
                target="_blank"
                className="rounded-full bg-black p-2 shadow-sm shadow-white transition-all duration-300 ease-in-out hover:scale-110 hover:text-sky-500 hover:shadow-sky-500 active:scale-95"
              >
                <FaLinkedinIn />
              </a>
              <a
                href="https://x.com/ProjectX_Labs?t=VK7f8vvb6OT6FO4C-ZLjKw&s=08"
                target="_blank"
                className="rounded-full bg-black p-2 shadow-sm shadow-white transition-all duration-300 ease-in-out hover:scale-110 active:scale-95"
              >
                <FaXTwitter />
              </a>
              <a
                href="https://www.instagram.com/projectx_labs?igsh=MTRqOTV5ZzJxdjFvOQ=="
                target="_blank"
                className="rounded-full bg-black p-2 shadow-sm shadow-white transition-all duration-300 ease-in-out hover:scale-110 hover:text-pink-500 hover:shadow-pink-500 active:scale-95"
              >
                <FaInstagram />
              </a>
              <a
                href="https://www.youtube.com/@ProjectX_Labs"
                target="_blank"
                className="rounded-full bg-black p-2 shadow-sm shadow-white transition-all duration-300 ease-in-out hover:scale-110 hover:text-red-500 hover:shadow-red-500 active:scale-95"
              >
                <FaYoutube />
              </a>
            </div>
          </div>
          {/* Center card */}
          <div
            className="flex w-full flex-col gap-6 rounded-b-lg border border-sky-500 bg-black p-4 sm:w-[400px] sm:p-8 lg:h-fit lg:rounded-lg"
            data-aos="fade-up"
          >
            <h1 className="text-3xl font-semibold text-sky-500">Contact us</h1>
            <form
              className="flex flex-col gap-4"
              onSubmit={processContactFormSubmission}
            >
              <input
                type="text"
                className="w-full border-b border-sky-700 bg-transparent p-2 text-white caret-sky-500 outline-none placeholder:text-white"
                placeholder="Name"
                required
                maxLength={50}
                onChange={(e) => setFormName(e.target.value)}
                value={formName}
              />
              <input
                type="email"
                required
                className="w-full border-b border-sky-700 bg-transparent p-2 text-white caret-sky-500 outline-none placeholder:text-white"
                placeholder="Email"
                maxLength={100}
                onChange={(e) => {
                  setFormEmail(e.target.value);
                  const validated = e.target.validity.valid;
                  validated ? setIsDefaultEmailCheckCleared(true) : null;
                  if (validated || isDefaultEmailCheckCleared) {
                    const isCustomValidationPassed = emailRegex.test(
                      e.target.value
                    );
                    isCustomValidationPassed
                      ? e.target?.setCustomValidity("")
                      : e.target?.setCustomValidity(
                          "Please add a '.' and at least two characters after the '.'"
                        );
                    e.target?.reportValidity();
                  }
                }}
                ref={emailRef}
                value={formEmail}
              />
              <input
                type="text"
                className="w-full border-b border-sky-700 bg-transparent p-2 text-white caret-sky-500 outline-none placeholder:text-white"
                placeholder="Subject"
                maxLength={300}
                onChange={(e) => setFormSubject(e.target.value)}
                value={formSubject}
              />
              <div className="mt-2 block w-full">
                <textarea
                  rows={5}
                  required
                  maxLength={MAX_CHAR_LENGTH}
                  onChange={(e) => {
                    setFormMessage(e.target.value);
                  }}
                  value={formMessage}
                  className="w-full resize-none rounded-lg border border-sky-500 bg-black p-2 text-white caret-sky-500 outline-none placeholder:text-sm"
                  aria-label="message"
                  placeholder="write your message here..."
                ></textarea>
                <span className="mr-2 block text-end text-xs text-[#9CA3AF]">
                  {`${formMessage?.length}/${MAX_CHAR_LENGTH}`}
                </span>
              </div>
              <div>
                <p className="mb-2 text-sm text-[#9CA3AF]">
                  We take privacy very seriously and will only use your
                  information to send e-mail
                </p>
                <div className="flex items-center">
                  <input
                    id="link-checkbox"
                    type="checkbox"
                    value=""
                    className="peer relative h-4 w-4 cursor-pointer appearance-none rounded border-gray-300 bg-gray-100 checked:bg-sky-500"
                    onChange={(e) => setIsTermsAccepted(e.target.checked)}
                    checked={isTermsAccepted}
                  />
                  <label className="ms-2 cursor-text text-sm text-gray-200">
                    I agree with the{" "}
                    <a
                      href="#"
                      className="text-sky-500 hover:underline dark:text-blue-500"
                    >
                      terms and conditions
                    </a>
                  </label>
                  <svg
                    className="pointer-events-none absolute hidden h-4 w-4 peer-checked:block"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </div>
                <p
                  className={twMerge(
                    "mt-1 items-center gap-1 text-xs text-red-500",
                    errorMessageDisplayStyle
                  )}
                >
                  <AiOutlineExclamationCircle size={15} color="red" />
                  Please accept the terms and conditions.
                </p>
              </div>
              <input
                type="submit"
                className="cursor-pointer rounded-md bg-sky-500 py-2 text-white transition-all duration-200 ease-in-out hover:bg-sky-600 active:scale-95 aria-disabled:cursor-not-allowed aria-disabled:bg-sky-800 aria-disabled:hover:bg-sky-800 aria-disabled:active:scale-100"
                aria-disabled={!isTermsAccepted}
              />
            </form>
          </div>
        </div>
        {/* Maps card */}
        <div
          className="h-[330px] w-full bg-cover bg-center sm:rounded-lg sm:bg-[url(../assets/images/xlabs_map-loader.gif)] sm:pb-3 sm:pl-3 sm:pr-3 sm:pt-3 lg:w-[60%] lg:rounded-l-none lg:rounded-r-lg lg:pl-0 xl:w-[500px] 2xl:h-[400px]"
          data-aos="fade-left"
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.7963734017912!2d77.5117284!3d12.984872!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae3df90f96bb95%3A0x103f1f3e73e9d586!2sProjectX%20Labs!5e0!3m2!1sen!2sin!4v1708717982426!5m2!1sen!2sin"
            allowFullScreen={false}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="h-full w-full border-none lg:rounded-r-md"
          ></iframe>
        </div>
      </div>
      <Toast toastMessage={toastMessage} setToastMessage={setToastMessage} />
      {isLoading && <AnimatedLoader />}
    </div>
  );
};

export default ContactUs;
