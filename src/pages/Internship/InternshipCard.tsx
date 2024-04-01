import { twMerge } from "tailwind-merge";
import { FaArrowRight } from "react-icons/fa6";
import { IconType } from "react-icons/lib";
import { FaRegClock } from "react-icons/fa6";
import { FaIndianRupeeSign } from "react-icons/fa6";
import { GoLocation } from "react-icons/go";
import { GoBriefcase } from "react-icons/go";
import { TInternshipInfo } from "./Internship";

export interface IInternshipCardProps extends TInternshipInfo {
  className?: string;
  onReadMore: () => void;
  onApply: () => void;
}

const InternshipCard: React.FC<IInternshipCardProps> = ({
  title,
  duration,
  location,
  stipend,
  workPolicy,
  className,
  summary,
  onReadMore,
  onApply
}) => {
  const content: { icon: IconType; title: string }[] = [
    {
      icon: FaRegClock,
      title: duration
    },
    {
      icon: FaIndianRupeeSign,
      title: stipend
    },
    {
      icon: GoLocation,
      title: location
    },
    {
      icon: GoBriefcase,
      title: workPolicy
    }
  ];
  return (
    <div
      className={twMerge(
        "group overflow-hidden text-ellipsis whitespace-normal bg-transparent transition-transform duration-200 ease-in-out",
        className
      )}
    >
      <div className="flex items-center justify-between text-white">
        <h1 className="my-3 line-clamp-1 text-ellipsis text-xl font-semibold">
          {title}
        </h1>
        <FaArrowRight
          className="rotate-[315deg] cursor-pointer active:scale-95"
          size={20}
          onClick={onReadMore}
        />
      </div>
      <div className="grid w-full grid-cols-2 text-sm text-[#6941C6]">
        {content.map((contents, index) => (
          <div className="flex items-center gap-1 py-[2px]" key={index}>
            <contents.icon size={14} />
            <p>{contents.title}</p>
          </div>
        ))}
      </div>
      <p
        className="mt-3 line-clamp-1 overflow-hidden text-ellipsis text-[#C0C5D0]"
        style={{
          display: "-webkit-box",
          WebkitBoxOrient: "vertical"
        }}
      >
        <div dangerouslySetInnerHTML={{ __html: summary }} />
      </p>
      <div className="mt-6 flex items-center justify-between text-white">
        <button
          className="text-sm hover:font-medium active:scale-95"
          onClick={onReadMore}
        >
          Read more
        </button>
        <button
          className="flex items-center justify-center rounded-md border border-input bg-transparent p-2 px-3 text-center text-sm hover:font-medium"
          onClick={onApply}
        >
          Apply Now
        </button>
      </div>
    </div>
  );
};

export default InternshipCard;
