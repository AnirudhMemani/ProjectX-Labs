import { FaLinkedinIn } from "react-icons/fa";

type EmployeeInfoCardProps = {
  photo: string | undefined;
  name: string;
  position: string;
  linkedinUrl?: string;
};

export const EmployeeInfoCard: React.FC<EmployeeInfoCardProps> = ({
  name,
  photo,
  position,
  linkedinUrl
}): React.JSX.Element => {
  return (
    <>
      <div
        className="teamCards__container my-5 h-fit w-[320px] rounded-lg border border-[#374151] bg-transparent"
        data-aos="zoom-in"
        data-aos-once={true}
      >
        <div className="photo">
          <div className="teamImg__container">
            <img src={photo} />
          </div>
          <div className="glow-wrap">
            <i className="glow"></i>
          </div>
        </div>
        <div className="p-4 pt-0">
          <h1 className="text-xl font-bold text-white">{name}</h1>

          <div className="my-3 h-[2px] w-full bg-gradient-to-r from-[#00d4ff] to-[#1f2937]" />
          <div className="flex items-center justify-between">
            <h3 className="text-base text-[#6B7280]">{position}</h3>
            {linkedinUrl && (
              <ul className="socials__ul">
                <li className="socials__list">
                  <a
                    href={linkedinUrl}
                    target="_blank"
                    className="socials__link"
                  >
                    <FaLinkedinIn size={12} color="#0077b5" />
                  </a>
                </li>
              </ul>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

//bg-[#131A22]
