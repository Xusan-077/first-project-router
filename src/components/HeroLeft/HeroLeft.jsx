import Button from "../Button/Button";

export default function HeroLeft({
  title,
  text,
  btnText,
  subTitle,
  color,
  isBtn,
  width,
}) {
  return (
    <div className="">
      {subTitle && (
        <span className="text-[14px] text-[#232536] font-medium mb-3 uppercase">
          {subTitle}
        </span>
      )}
      <h1
        className={`text-[56px] font-bold mb-5 ${
          width ? "max-w-[800px]" : "max-w-[624px]"
        } ${color ? "text-[#232536]" : "text-white"}`}
      >
        {title}
      </h1>
      <p
        className={`${width ? "max-w-[730px]" : "max-w-[528px]"} ${
          color ? "text-[#232536]" : "text-[#FFF9]"
        } text-[16px] max-w-[528px] mb-[30px]`}
      >
        {text}
      </p>

      {isBtn && (
        <div className="relative">
          <Button text={btnText} />
        </div>
      )}
    </div>
  );
}
