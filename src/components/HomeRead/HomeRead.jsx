import arrow from "../../assets/icons/arrow.svg";

import ReadImg1 from "../../assets/images/HomeRead-img-1.png";
import ReadImg2 from "../../assets/images/HomeRead-img-2.png";

export default function HomeRead() {
  return (
    <section>
      <div className="bg-[#ECF8F9] p-[100px_0] mb-[100px]">
        <div className="container">
          <div className="">
            <h2 className="text-[48px] font-semibold mb-[50px]">Read our latest blogs & news</h2>
            <div className="">
              <ul className="flex items-center justify-between">
                <li className="flex items-center gap-8 bg-white">
                  <img src={ReadImg1} alt="" />
                  <div className="">
                    <span className="text-[16px] text-[#232536]">
                      Jan 19, 2021
                    </span>
                    <h2 className="text-[24px] font-semibold max-w-[264px] mb-[34px]">
                      Today’s best design trends for digital products
                    </h2>
                    <div className="flex items-center gap-2.5 mt-6">
                      <a href="" className="text-[#5D5FEF]">
                        Read More
                      </a>
                      <img src={arrow} alt="" className="" />
                    </div>
                  </div>
                </li>
                <li className="flex items-center gap-8 bg-white">
                  <img src={ReadImg2} alt="" />
                  <div className="">
                    <span className="text-[16px] text-[#232536]">
                      Jan 19, 2021
                    </span>
                    <h2 className="text-[24px] font-semibold max-w-[264px] mb-[34px]">
                      A practical guide to building a brand strategy
                    </h2>
                    <div className="flex items-center gap-2.5 mt-6">
                      <a href="" className="text-[#5D5FEF]">
                        Read More
                      </a>
                      <img src={arrow} alt="" className="" />
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
