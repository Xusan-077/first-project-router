import arrow from "../../assets/icons/arrow.svg";

export default function LocalItem({
  icon,
  title,
  description,
  bottom,
  isflex,
  isLink,
}) {
  return (
    <li
      className={`relative p-[30px] ${
        !isflex ? "flex" : ""
      }  items-start gap-[15px] bg-white`}
    >
      {bottom && (
        <div className="absolute flex -bottom-2 right-0">
          <div className="w-[154px] h-2 bg-[#FFA155FF]"></div>
          <div className="w-[154px] h-2 bg-[#FFD3AFFF]"></div>
          <div className="w-[154px] h-2 bg-[#444CFCFF]"></div>
        </div>
      )}
      <div
        className={`bg-[#FFD3AF2B] ${
          !isflex ? "" : "mb-5"
        } w-[47px] p-[12px_0] rounded-full flex justify-center`}
      >
        <img src={icon} width={24} height={24} alt="" className="" />
      </div>
      <div className="">
        <h4 className="text-[16px] font-semibold mb-[5px]">{title}</h4>
        <p className="text-[16px] max-w-[340px] text-[#232536]">
          {description}
        </p>
        {isLink ? (
          <div className="flex items-center gap-2.5 mt-6">
            <a href="" className="text-[#5D5FEF]">
              Read about us
            </a>
            <img src={arrow} alt="" className="" />
          </div>
        ) : (
          ""
        )}
      </div>
    </li>
  );
}
