import { SetStateAction } from "react";

type TRadioButtonGroupProps = {
  options: { [key: string]: string };
  selectedValue: string;
  onValueChange: React.Dispatch<SetStateAction<string>>;
};

export const RadioButtonGroup: React.FC<TRadioButtonGroupProps> = ({
  onValueChange,
  selectedValue,
  options
}): React.JSX.Element => {
  return (
    <>
      {Object.values(options).map((value, index) => (
        <div className="flex gap-2 text-[#CECECE]" key={index}>
          <input
            type="radio"
            value={value}
            checked={selectedValue === value}
            onChange={() => onValueChange(value)}
            className="cursor-pointer"
          />
          <label htmlFor={value}>{value}</label>
        </div>
      ))}
    </>
  );
};
