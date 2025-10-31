export default function BlogHeroItem({ text, img, name, year }) {
  return (
    <li className="">
      <h2 className="text-[24px] max-w-[350px] font-semibold mb-[15px]">
        {text}
      </h2>
      <div className="flex items-center gap-2.5">
        <img src={img} alt="" className="" />
        <div className="flex flex-col">
          <span className="">{name}</span>
          <span className="">{year}</span>
        </div>
      </div>
    </li>
  );
}
