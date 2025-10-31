import blogImg1 from "../../assets/images/career-img-1.svg";

export default function PostsItem({ title, img, text, author, date }) {
  return (
    <li className="bg-[#F9F9FF]">
      <img src={img} alt="" className="" />
      <div className="p-8">
        <h2 className="text-[24px] font-semibold max-w-[264px] mb-[34px]">
          {title}
        </h2>
        <p className="text-[16px] text-[#232536] max-w-[341px] mb-[24px]">
          {text}
        </p>
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
