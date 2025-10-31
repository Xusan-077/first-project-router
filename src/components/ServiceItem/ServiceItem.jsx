export default function ServiceItem({
  icon,
  title,
  description,
  id,
  top,
  bottom,
}) {
  return (
    <li className="relative p-[30px] border flex items-start gap-[15px] border-[#2325362B]">
      <div className="absolute top-[15px] right-[15px] text-[24px] text-[#232536]">
        0{id}
      </div>
      {top && (
        <div className="absolute flex -top-2 right-0">
          <div className="w-[131px] h-2 bg-[#FFA155FF]"></div>
          <div className="w-[131px] h-2 bg-[#FFD3AFFF]"></div>
          <div className="w-[131px] h-2 bg-[#444CFCFF]"></div>
        </div>
      )}
      {bottom && (
        <div className="absolute flex -bottom-2 right-0">
          <div className="w-[131px] h-2 bg-[#FFA155FF]"></div>
          <div className="w-[131px] h-2 bg-[#FFD3AFFF]"></div>
          <div className="w-[131px] h-2 bg-[#444CFCFF]"></div>
        </div>
      )}
      <div className="bg-[#FFD3AF2B] w-[47px] p-[12px_0] rounded-full flex justify-center">
        <img src={icon} width={24} height={24} alt="" className="" />
      </div>
      <div className="">
        <h4 className="text-[16px] font-semibold mb-[5px]">{title}</h4>
        <p className="text-[16px] max-w-[289px] text-[#232536]">
          {description}
        </p>
      </div>
    </li>
  );
}
