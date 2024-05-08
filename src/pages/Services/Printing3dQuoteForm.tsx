import { CustomInput } from "@/components/CustomInput";
import { useState, FormEvent } from "react";
import FileUploadComponent from "./FileUploadComponent";
import SelectMenu from "./SelectMenu/SelectMenu";
import {
  FDMPrintSelectMenuOptions,
  SLAPrintSelectMenuOptions
} from "./constants";
import { FaChevronLeft } from "react-icons/fa6";
import { RadioButtonGroup } from "@/components/RadioButtonGroup";
import { useNavigate } from "react-router-dom";
import { NavRoutes } from "@/components/constants";
import { sendPrintingRequirements } from "../../api/services-api";
import { AnimatedLoader } from "@/components/Loader/AnimatedLoader";
import { Toast } from "@/components/Toast";

const StudentRadioButtonOptions = {
  Yes: "Yes",
  No: "No"
} as const;

const PrintRadioButtonOptions = {
  FDM: "FDM",
  SLA: "SLA"
} as const;

export interface STLFile extends File {}

const Printing3dQuoteForm: React.FC = (): React.JSX.Element => {
  const MAX_CHAR_LENGTH = 3000;

  const numberRegex = new RegExp("^[1-9]\\d{9}$");

  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [toastMessage, setToastMessage] = useState<string | undefined>(
    undefined
  );

  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [number, setNumber] = useState<number>();
  const [clientType, setClientType] = useState<string>(
    StudentRadioButtonOptions.No
  );
  const [printType, setPrintType] = useState<string>(
    PrintRadioButtonOptions.FDM
  );

  const [uploadedFiles, setUploadedFiles] = useState<STLFile[]>([]);
  const [message, setMessage] = useState<string>("");

  const [selectedMaterial, setSelectedMaterial] = useState<string | undefined>(
    undefined
  );

  const handleFormSubmission = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      setIsLoading(true);

      const formData: FormData = new FormData();
      formData.set("name", name);
      formData.set("email", email);
      if (number) {
        formData.set("number", number.toString());
      }
      formData.set(
        "clientType",
        clientType === StudentRadioButtonOptions.Yes
          ? "is a student"
          : "is not a student"
      );
      formData.set("printType", printType);
      if (selectedMaterial) {
        formData.set("printMaterial", selectedMaterial);
      }
      formData.set("message", message);

      if (uploadedFiles) {
        uploadedFiles.forEach((file) => {
          formData.append(`stlFiles`, file);
        });
      }

      const response = await sendPrintingRequirements(formData);
      if (response) {
        setTimeout(
          () => navigate("/" + NavRoutes.SERVICES, { replace: true }),
          2000
        );
        setToastMessage("Your requirements has been sent successfully");
      }
    } catch (error) {
      setToastMessage("An unknown error occurred. Please try again later");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="flex min-h-dvh w-full justify-center text-white">
      <div className="flex w-[90%] flex-col gap-12 py-16 sm:w-[55%] lg:py-32 2xl:w-[40%]">
        <div className="flex flex-col gap-2">
          <div
            className="group mb-8 hidden w-fit cursor-pointer items-center gap-2 text-[#C0C5D0] active:scale-95 sm:flex"
            onClick={() => navigate("/" + NavRoutes.SERVICES)}
          >
            <FaChevronLeft />{" "}
            <span className="transition-transform duration-200 ease-in-out group-hover:font-medium group-active:font-medium sm:text-lg">
              Services
            </span>
          </div>
          <h1 className="bg-gradient-to-b from-white to-neutral-400 bg-clip-text py-2 text-center text-2xl font-bold capitalize text-transparent lg:text-4xl">
            From concept to creation <br /> Request a 3D printing quote today
          </h1>
          <p className="text-center text-sm text-[#CECECE]">
            You will get a response from our team within 24 hours.
          </p>
        </div>
        <form
          className="flex w-full flex-col gap-6"
          onSubmit={handleFormSubmission}
        >
          <CustomInput
            type="text"
            placeholder="Name/Company Name"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <CustomInput
            type="email"
            placeholder="Email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <CustomInput
            type="number"
            placeholder="Phone Number"
            required
            value={number}
            maxLength={10}
            onChange={(e) => {
              const inputValue = e.target.value;
              if (numberRegex.test(inputValue)) {
                e.target.setCustomValidity("");
                setNumber(parseInt(inputValue));
              } else {
                setNumber(parseInt(inputValue));
                e.target.setCustomValidity(
                  "Invalid phone number. Must be 10 digits"
                );
              }
            }}
          />
          {/* Student */}
          <div className="flex items-center gap-4">
            <label className="px-3 text-muted-foreground">
              Are you a student?
            </label>
            <RadioButtonGroup
              selectedValue={clientType}
              onValueChange={setClientType}
              options={StudentRadioButtonOptions}
            />
          </div>
          {/* Print */}
          <div className="flex items-center gap-4">
            <label className="px-3 text-muted-foreground">
              Which print do you want?
            </label>
            <RadioButtonGroup
              selectedValue={printType}
              onValueChange={setPrintType}
              options={PrintRadioButtonOptions}
            />
          </div>
          {/* Select material */}
          <SelectMenu
            key={printType}
            options={
              printType === PrintRadioButtonOptions.FDM
                ? FDMPrintSelectMenuOptions
                : SLAPrintSelectMenuOptions
            }
            onValueChange={setSelectedMaterial}
          />
          {/* Upload files */}
          <FileUploadComponent
            uploadedFiles={uploadedFiles}
            setUploadedFiles={setUploadedFiles}
          />
          {/* Client Message */}
          <div className="block w-full">
            <textarea
              rows={5}
              maxLength={MAX_CHAR_LENGTH}
              onChange={(e) => {
                setMessage(e.target.value);
              }}
              value={message}
              className="w-full resize-none rounded-lg border border-neutral-700 bg-black p-3 text-white outline-none placeholder:text-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-input"
              aria-label="message"
              placeholder="Want us to know something..."
            ></textarea>
            <span className="mr-2 block text-end text-xs text-[#9CA3AF]">
              {`${message?.length}/${MAX_CHAR_LENGTH}`}
            </span>
          </div>
          <CustomInput
            type="submit"
            className="flex w-full cursor-pointer items-center justify-center border text-center hover:font-medium active:scale-95"
          />
        </form>
      </div>
      {isLoading && <AnimatedLoader />}
      <Toast setToastMessage={setToastMessage} toastMessage={toastMessage} />
    </section>
  );
};

export default Printing3dQuoteForm;
