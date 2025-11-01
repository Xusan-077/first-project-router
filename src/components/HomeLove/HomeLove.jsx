import blogImg1 from "../../assets/images/career-img-1.svg";
import blogImg2 from "../../assets/images/career-img-2.svg";
import blogImg3 from "../../assets/images/career-img-3.svg";

export default function HomeLove() {
  return (
    <section>
      <div className="bg-[#F9F9FF] p-[100px_0]">
        <div className="container">
          <div className="">
            <div className="">
              <div className="mb-16">
                <h2 className="text-[36px] font-semibold mb-6 max-w-[450px]">
                  Our customers love what we do
                </h2>
                <p className="text-[18px] max-w-[622px] mb-[15px] font-semibold text-[#232536]">
                  Transform your idea into reality with finsweet
                </p>
                <p className="text-[16px] max-w-[492px] text-[#232536]">
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                </p>
                <div className="flex gap-2.5 mt-5 mb-2.5">
                  <img src={blogImg2} alt="" />
                  <img src={blogImg3} alt="" />
                  <img src={blogImg1} alt="" />
                </div>

                <p className="flex items-center text-[12px] font-medium">
                  <span className="text-[16px] font-medium">30+</span> Customer
                  Reviews
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
