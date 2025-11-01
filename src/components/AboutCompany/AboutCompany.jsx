import CompanyHeroBottom from "../CompanyHeroBottom/CompanyHeroBottom";
import CompanyHeroItem from "../CompanyHeroItem/CompanyHeroItem";

import arrow from "../../assets/icons/arrow.svg";
import Action from "../Action/Action";

export default function AboutCompany() {
  return (
    <section>
      <div className="container">
        <div className="mb-[100px]">
          <div className="">
            <div className="flex items-center justify-between mb-16">
              <div className="">
                <span className="text-[14px] font-medium mb-[15px] inline-block">
                  ABOUT US
                </span>
                <h2 className="text-[48px] font-semibold mb-6 max-w-[640px]">
                  The company leads entire webdesign process from concept to
                  delivery.
                </h2>
              </div>
              <div className="">
                <h2 className="text-[36px] font-semibold mb-6 max-w-[624px]">
                  The Era Of Technology.
                </h2>
                <p className="text-[16px] max-w-[547px] text-[#232536]">
                  Through True Rich Attended does no end it his mother since
                  real had half every him case in packages enquire we up
                  ecstatic unsatiable saw his giving Remain expense you position
                  concluded.
                </p>
              </div>
            </div>
          </div>
          <div className="">
            <CompanyHeroBottom bottom rigth />
            <div className="flex items-center justify-between">
              <div className="flex gap-[66px]">
                <CompanyHeroItem count="1560+" text="Project Delivered" />
                <CompanyHeroItem count="100+" text="Professional" />
                <CompanyHeroItem count="950+" text="Happy Client" />
                <CompanyHeroItem count="10 yrs" text="Experience" />
              </div>
              <div className="flex items-center gap-2.5">
                <a href="" className="text-[#5D5FEF]">
                  Read about us
                </a>
                <img src={arrow} alt="" className="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
