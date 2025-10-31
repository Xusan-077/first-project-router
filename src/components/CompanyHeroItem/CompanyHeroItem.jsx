export default function CompanyHeroItem({ count, text }) {
  return (
    <li className="list-none w-[138px]">
      <span className="text-[36px] text-[#232536]">{count}</span>
      <div className="flex">
        <div className="w-[15px] h-1.5 bg-[#FFA155FF]"></div>
        <div className="w-[45px] h-1.5 bg-[#FFD3AFFF]"></div>
        <div className="w-[30px] h-1.5 bg-[#444CFCFF]"></div>
      </div>
      <p className="text-[16px] font-semibold text-[#232536]">{text}</p>
    </li>
  );
}
