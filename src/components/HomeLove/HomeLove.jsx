import blogImg1 from "../../assets/images/career-img-1.svg";
import blogImg2 from "../../assets/images/career-img-2.svg";
import blogImg3 from "../../assets/images/career-img-3.svg";

export default function HomeLove() {
  return (
    <section>
      <div className="bg-[#F9F9FF] p-[100px_0]">
        <div className="container">
          <div className="flex items-center justify-between">
            <div className="">
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
            <div className="bg-[#FFFFFF] p-[50px_70px_40px_40px] text-[#232536] relative">
              <div className="absolute top-0 left-0">
                <div className="w-[15px] h-20 bg-[#FFA155FF]"></div>
                <div className="w-[15px] h-[210px] bg-[#FFD3AFFF]"></div>
                <div className="w-[15px] h-[60px] bg-[#444CFCFF]"></div>
              </div>
              <p className="max-w-[498px] text-[24px] font-semibold mb-8">
                Finsweet has been a wonderful partner to work with. I have been
                a customer now for the past few months now and I have had
                nothing but positive experiences!
              </p>
              <div className="flex items-center gap-[15px]">
                <img src={blogImg2} alt="" />
                <div className="">
                  <h4 className="text-[16px] font-semibold text-[#232536]">
                    Johnny Andro
                  </h4>
                  <span className="text-[14px] font-semibold text-[grey]">
                    Director, Company
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
