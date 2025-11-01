import CompanyHeroItem from "../CompanyHeroItem/CompanyHeroItem";

import HeroLeft from "../HeroLeft/HeroLeft";

import Herologo1 from "../../assets/icons/hero-logo-1.svg";
import Herologo2 from "../../assets/icons/hero-logo-2.svg";
import Herologo3 from "../../assets/icons/hero-logo-3.svg";
import Herologo4 from "../../assets/icons/hero-logo-4.svg";
import Herologo5 from "../../assets/icons/hero-logo-5.svg";
import CompanyHeroBottom from "../CompanyHeroBottom/CompanyHeroBottom";

export default function CompanyHero() {
  return (
    <section className="hero">
      <div className="container">
        <div className="mb-[100px]">
          <div className="p-[100px_0] relative">
            <HeroLeft
              width
              color
              subTitle="Company"
              title="Award-winning Company seen and used by millions around the world."
              text="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The Maker is a decentralized. "
            />
            <div className="hero-top"></div>
          </div>

          <CompanyHeroBottom />

          <div className="mb-[100px] flex items-center justify-between">
            <HeroLeft
              subTitle="Our Story 👇 "
              text="Through True Rich Attended does no end it his mother since favourable real had half every him case in packages enquire we up ecstatic unsatiable saw his giving Remain expense of gay produce excited perceived do an a china mean its so ye when in explained Hearts am next over match mr partiality not shoud latter thus as out no passed forming middleton exercise up"
              title="From Startups to Titans of Industry"
              color
            />
            <ul className="grid grid-cols-2 justify-center gap-[60px] bg-[#FFD3AF91] p-[60px_0_60px_110px] w-[624px]">
              <CompanyHeroItem count="1560А+" text="Project Delivered" />
              <CompanyHeroItem count="100+" text="Professional" />
              <CompanyHeroItem count="950+" text="Happy Client" />
              <CompanyHeroItem count="10 yrs" text="Experience" />
            </ul>
          </div>

          <div className="">
            <ul className="flex items-center justify-between bg-[#FAFAFC]">
              <li className="cursor-pointer">
                <img src={Herologo1} alt="" className="" />
              </li>
              <li className="cursor-pointer">
                <img src={Herologo2} alt="" className="" />
              </li>
              <li className="cursor-pointer">
                <img src={Herologo3} alt="" className="" />
              </li>
              <li className="cursor-pointer">
                <img src={Herologo4} alt="" className="" />
              </li>
              <li className="cursor-pointer">
                <img src={Herologo5} alt="" className="" />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
