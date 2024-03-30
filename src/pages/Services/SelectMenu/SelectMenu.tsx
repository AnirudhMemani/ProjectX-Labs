import Select from "react-select";
import React, { SetStateAction } from "react";
import "./selectMenu.css";

export type TOptionsType = {
  value: string;
  label: string;
};

type TSelectMenuProps = {
  options: TOptionsType[];
  onValueChange: React.Dispatch<SetStateAction<string | undefined>>;
};

const SelectMenu: React.FC<TSelectMenuProps> = ({ options, onValueChange }) => {
  return (
    <>
      <Select
        className="basic-single"
        classNamePrefix="select"
        onChange={(e) => onValueChange(e?.value)}
        classNames={{
          singleValue: () => "placeholderStyles",
          input: () => "placeholderStyles"
        }}
        isClearable={true}
        isSearchable={true}
        name="color"
        options={options}
        theme={(theme) => ({
          ...theme,
          borderRadius: 0,
          colors: {
            ...theme.colors,
            primary25: "rgba(38, 132, 255, 0.5)"
          }
        })}
        required
      />
    </>
  );
};

export default SelectMenu;
