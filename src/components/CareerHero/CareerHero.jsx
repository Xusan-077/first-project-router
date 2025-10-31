import MainImg from "../../assets/images/career-img.png";

export default function CareerHero() {
  return (
    <section className="hero">
      <div className="container">
        <div className="flex flex-col items-center p-[100px_0]">
          <span className="text-[14px] text-[#232536] font-medium mb-3 uppercase">
            CAREER AT FINSWEET
          </span>

          <h1
            className={`text-[48px] font-bold mb-5 max-w-[624px] text-center`}
          >
            We hired people who are Always Passionate about what they do
          </h1>
          <p className={`text-[16px] max-w-[624px] mb-[30px] text-center`}>
            Through True Rich Attended does no end it his mother since real had
            half every him case in packages enquire we up ecstatic unsatiable
            saw .
          </p>
          <img src={MainImg} alt="" className="mb-20" />
          <span className="text-[18px] font-medium">
            See Our open positions 👇
          </span>
        </div>
      </div>
    </section>
  );
}
