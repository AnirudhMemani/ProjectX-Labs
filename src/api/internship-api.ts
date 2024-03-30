import { STATUS_CODES } from "@/components/constants";
import { TInternshipInfo } from "@/pages/Internship/Internship";
import axios from "axios";

export const getAllInternships = async (): Promise<
  TInternshipInfo[] | undefined
> => {
  try {
    const response = await axios.get(
      `${import.meta.env.VITE_URL}${
        import.meta.env.VITE_INTERNSHIP_GET_ALL_ENDPOINT
      }`
    );
    if (response.status === STATUS_CODES.OK) {
      return response.data;
    }
  } catch (error) {
    throw error;
  }
};

export const getInternshipsById = async (
  id: string
): Promise<TInternshipInfo | undefined> => {
  try {
    const response = await axios.get(
      `${import.meta.env.VITE_URL}${
        import.meta.env.VITE_INTERNSHIP_GET_BY_ID_ENDPOINT
      }${id}`
    );

    if (response.status === STATUS_CODES.OK) {
      return response.data;
    }
  } catch (error) {
    //
  }
};
