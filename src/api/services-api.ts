import { STATUS_CODES } from "@/components/constants";
import axios from "axios";

export const sendPrintingRequirements = async (clientRequirement: FormData) => {
  const url = `${import.meta.env.VITE_URL}${
    import.meta.env.VITE_PRINTING_3D_FORM_ENDPOINT
  }`;
  try {
    const response = await axios.post(url, clientRequirement);
    if (response.status === STATUS_CODES.OK) {
      return true;
    }
    throw new Error("Unknown error occurred");
  } catch (error) {
    throw error;
  }
};
