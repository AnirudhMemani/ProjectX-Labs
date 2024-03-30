import { CustomInput } from "@/components/CustomInput";
import React, { SetStateAction } from "react";
import { STLFile } from "./Printing3dQuoteForm";
import { twMerge } from "tailwind-merge";

interface UploadComponentState {
  uploadedFiles: STLFile[];
  setUploadedFiles: React.Dispatch<SetStateAction<STLFile[]>>;
}

const FileUploadComponent: React.FC<UploadComponentState> = ({
  uploadedFiles,
  setUploadedFiles
}) => {
  const handleSelectedFiles = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;

    if (!files) {
      return;
    }

    const newFiles = Array.from(files);
    const existingFileNames = new Set(uploadedFiles.map((file) => file.name)); // provides O(1) complexity

    const filteredFiles = newFiles.filter((file) => {
      const ext = getFileExt(file.name).toLowerCase();

      if (ext !== "stl") {
        alert("Please select a .stl file");
        return false;
      }

      if (existingFileNames.has(file.name)) {
        alert(`${file.name} has already been added`);
        return false;
      }

      return true;
    });

    setUploadedFiles([...uploadedFiles, ...filteredFiles]);
  };

  const removeFile = (index: number) => {
    const updatedFilesArray = uploadedFiles.filter((_file, i) => i !== index);
    setUploadedFiles(updatedFilesArray);
  };

  const getFileExt = (name: string): string => {
    const parts = name.split(".");
    const ext = parts[parts.length - 1];
    return ext;
  };

  const getFileType = (name: string): string => {
    const ext = getFileExt(name);
    return "CAD/" + ext.toUpperCase();
  };

  const formatFileSize = (bytes: number): string => {
    if (bytes >= 1000000) {
      return (bytes / 1000000).toFixed(2) + " MB";
    } else if (bytes >= 1000) {
      return (bytes / 1000).toFixed(2) + " KB";
    } else {
      return bytes + " bytes";
    }
  };

  return (
    <div className="flex w-full flex-col justify-center gap-2">
      <div className="flex items-center gap-4">
        <div>
          <p className="px-2 text-sm text-[#CECECE]">Upload STL files:</p>
          <CustomInput
            type="file"
            multiple={true}
            required
            onChange={handleSelectedFiles}
            className={twMerge(
              "w-fit cursor-pointer",
              uploadedFiles.length > 0
                ? "line-clamp-1 text-ellipsis border-b-0 text-transparent"
                : ""
            )}
            value={uploadedFiles.length < 1 ? "" : undefined}
            accept=".STL"
          />
        </div>
        {uploadedFiles.length > 0 && (
          <span>Total files selected: {uploadedFiles.length}</span>
        )}
      </div>
      <div className="grid w-full grid-cols-3 gap-2">
        {uploadedFiles.map((file, index) => (
          <div
            key={index}
            className="rounded-md border border-neutral-700 p-4 text-sm"
          >
            <p>File no: {index + 1}</p>
            <p>Name: {file.name}</p>
            <p>Size: {formatFileSize(file.size)}</p>
            <p>Type: {getFileType(file.name)}</p>
            <button
              className="mt-2 w-[90%] rounded-md border border-gray-600 py-1 active:scale-95 lg:hover:font-medium"
              onClick={() => removeFile(index)}
            >
              Remove
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FileUploadComponent;
