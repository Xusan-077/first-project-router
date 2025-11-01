import Action from "../Action/Action";

import OurImg from "../../assets/images/Our-img.png";
import OurImg1 from "../../assets/images/Our-img-1.png";
import OurImg2 from "../../assets/images/Our-img-2.png";
import OurImg3 from "../../assets/images/Our-img-3.png";
import OurImg4 from "../../assets/images/Our-img-4.png";
import OurImg5 from "../../assets/images/Our-img-5.png";
import OurImg6 from "../../assets/images/Our-img-6.png";
import OurImg7 from "../../assets/images/Our-img-7.png";
import OurImg8 from "../../assets/images/Our-img-8.png";

export default function Our() {
  return (
    <section>
      <div className="container">
        <div className="">
          <div className="mb-[100px]">
            <Action
              subTitle="Our VISION"
              title="We want to get local identification in every corner of the world in this era of global citizenship."
              description="Through True Rich Attended does no end it his mother since real had half every him case in packages enquire we up ecstatic unsatiable saw his giving Remain expense you position concluded. "
            />
            <img src={OurImg} alt="" />
          </div>
          <div className="">
            <Action
              subTitle="MEET OUR TEAM"
              title="Teamwork is the only way we work "
              description="Through True Rich Attended does no end it his mother since real had half every him case in packages enquire we up ecstatic unsatiable."
            />
            <ul className="grid grid-cols-4">
              <li className="cursor-pointer">
                <img src={OurImg1} alt="" className="" />
              </li>
              <li className="cursor-pointer">
                <img src={OurImg2} alt="" className="" />
              </li>
              <li className="cursor-pointer">
                <img src={OurImg3} alt="" className="" />
              </li>
              <li className="cursor-pointer">
                <img src={OurImg4} alt="" className="" />
              </li>
              <li className="cursor-pointer">
                <img src={OurImg8} alt="" className="" />
              </li>
              <li className="cursor-pointer">
                <img src={OurImg5} alt="" className="" />
              </li>
              <li className="cursor-pointer">
                <img src={OurImg6} alt="" className="" />
              </li>
              <li className="cursor-pointer">
                <img src={OurImg7} alt="" className="" />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
