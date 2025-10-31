export default function Action({ subTitle, title, description }) {
  return (
    <div className="mb-16">
      <span className="text-[14px] font-medium mb-[15px] inline-block">
        {subTitle}
      </span>
      <h2 className="text-[36px] font-semibold mb-6 max-w-[624px]">{title}</h2>
      <p className="text-[16px] max-w-[622px] text-[#232536]">{description}</p>
    </div>
  );
}
