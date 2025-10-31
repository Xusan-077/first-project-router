import HeroLeft from "../HeroLeft/HeroLeft";

import HeroImg1 from "../../assets/icons/hero-img-1.svg";
import HeroImg2 from "../../assets/icons/hero-img-2.svg";
import HeroImg3 from "../../assets/icons/hero-img-3.svg";
import HeroImg4 from "../../assets/icons/hero-img-4.svg";
import HeroImg5 from "../../assets/icons/hero-img-5.svg";

import HeroImg from "../../assets/images/hero-img.png";

export default function HomeHero() {
  return (
    <div className="hero ">
      <div className="bg-[#232536] mb-[100px]">
        <div className="container">
          <div className="flex items-center justify-between p-[90px_0_30px_0]">
            <HeroLeft
              isBtn
              title="Transform Your Idea Into Reality with Finsweet"
              text="The entire Finsweet team knows what's good with Webflow and you can too with 1 week and a good attitude."
              btnText="Request Quote"
            />
            <div className="">
              <img src={HeroImg} alt="" width={563} height={632} />
            </div>
          </div>
          <div className="">
            <ul className="flex items-center justify-between">
              <li className="">
                <span className="text-[14px] font-medium text-[#fff9]">
                  Our Clients
                </span>
                <p className="text-[18px] text-[#FFFFFF] font-medium  ">
                  We've Worked with
                </p>
              </li>
              <li className="cursor-pointer">
                <img src={HeroImg1} alt="" className="" />
              </li>
              <li className="cursor-pointer">
                <img src={HeroImg2} alt="" className="" />
              </li>
              <li className="cursor-pointer">
                <img src={HeroImg3} alt="" className="" />
              </li>
              <li className="cursor-pointer">
                <img src={HeroImg4} alt="" className="" />
              </li>
              <li className="cursor-pointer">
                <img src={HeroImg5} alt="" className="" />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
