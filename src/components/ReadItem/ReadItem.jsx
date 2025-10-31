import blogImg1 from "../../assets/images/career-img-1.svg";

export default function ReadItem({ title, img, author, date }) {
  return (
    <li className="flex items-center gap-8 bg-[#F9F9FF]">
      <img src={img} alt="" className="" />
      <div className="">
        <h2 className="text-[24px] font-semibold max-w-[264px] mb-[34px]">
          {title}
        </h2>
        <div className="flex gap-3">
          <img src={blogImg1} alt="" className="" />
          <div className="flex flex-col">
            <span className="text-[16px] text-[#232536]">{author}</span>
            <span className="text-[16px] text-[#232536] font-medium">
              {date}
            </span>
          </div>
        </div>
      </div>
    </li>
  );
}
