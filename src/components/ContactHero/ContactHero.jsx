import Button from "../Button/Button";
import HeroLeft from "../HeroLeft/HeroLeft";

import contanctImg1 from "../../assets/icons/contanct-img-1.svg";
import contanctImg2 from "../../assets/icons/contanct-img-2.svg";
import contanctImg3 from "../../assets/icons/contanct-img-3.svg";
import contanctImg4 from "../../assets/icons/contanct-img-4.svg";

import map from "../../assets/images/map.png";

export default function ContactHero() {
  return (
    <section className="hero">
      <div className="container">
        <div className="mb-[100px]">
          <div className="flex items-start justify-between p-[100px_0]">
            <div className="">
              <div className="mb-[60px] w-[670px]">
                <HeroLeft
                  color
                  width
                  subTitle="CONTACT US"
                  title="Have a Question ? Let’s Get in Touch with us 👋 "
                  text="Fill up the Form  and ou team will get back to within 24 hrs"
                />
              </div>

              <form className="flex flex-col w-[400px]">
                <label
                  className="text-[14px]  text-[grey] mb-2.5"
                  htmlFor="Name"
                >
                  Name
                </label>
                <input
                  id="Name"
                  type="text"
                  placeholder="Name"
                  className="border-b border-[grey] w-full p-[0_0_5px_5px] mb-[25px] outline-none text-[#232536]"
                />

                <label
                  className="text-[14px]  text-[grey] mb-2.5"
                  htmlFor="E-mail"
                >
                  E-mail
                </label>
                <input
                  id="E-mail"
                  type="text"
                  placeholder="E-mail"
                  className="border-b border-[grey] w-full p-[0_0_5px_5px] mb-[25px] outline-none text-[#232536]"
                />

                <label
                  className="text-[14px]  text-[grey] mb-2.5"
                  htmlFor="Subject"
                >
                  Subject
                </label>
                <input
                  id="Subject"
                  type="text"
                  placeholder="Subject"
                  className="border-b border-[grey] w-full p-[0_0_5px_5px] mb-[25px] outline-none text-[#232536]"
                />

                <label
                  className="text-[14px]  text-[grey] mb-2.5"
                  htmlFor="Messege"
                >
                  Messege
                </label>
                <input
                  id="Messege"
                  type="text"
                  placeholder="Messege"
                  className="border-b border-[grey] w-full p-[0_0_5px_5px] mb-[25px] outline-none text-[#232536]"
                />

                <div className="w-[250px] relative mt-[60px]">
                  <Button text="Send Messege" />
                </div>
              </form>
            </div>

            <div className="bg-[#666DFF] p-[83px_150px_123px_100px] relative">
              <div className="absolute flex top-[-23px] right-0">
                <div className="w-10 h-[23px] bg-[#FFD3AF]"></div>
                <div className="w-[23px] h-[23px] bg-[#8389FF]"></div>
                <div className="w-[66px] h-[23px] bg-[#FFA155]"></div>
              </div>

              <div className="absolute bottom-0 left-[-23px] right-0 ">
                <div className="w-[23px] h-[60px] bg-[#FFA155]"></div>
                <div className="w-[23px] h-[200px] bg-[#FFD3AF]"></div>
                <div className="w-[23px] h-10 bg-[#3A41DC]"></div>
              </div>

              <ul className="">
                <li className="mb-6">
                  <h4 className="text-[14px] border-b text-[#FFFFFF] border-[#00000014] pb-3">
                    Location
                  </h4>
                  <p className="text-[18px] text-white pt-3 max-w-[264px] font-semibold">
                    DLF Cybercity, Bhubaneswar, India, &52050
                  </p>
                </li>
                <li className="mb-6">
                  <h4 className="text-[14px] border-b text-[#FFFFFF] border-[#00000014] pb-3">
                    Working Hour
                  </h4>
                  <p className="text-[18px] text-white pt-3 max-w-[264px] font-semibold">
                    Monday To Friday, <br /> 9:00 AM to 8:00 PM
                  </p>
                </li>
                <li className="mb-6">
                  <h4 className="text-[14px] border-b text-[#FFFFFF] border-[#00000014] pb-3">
                    Contact Us
                  </h4>
                  <p className="text-[18px] text-white pt-3 max-w-[264px] font-semibold">
                    020 7993 2905, <br />{" "}
                    <span className="text-[14px] text-[#FFF9]">
                      Hello@ether.com
                    </span>
                  </p>
                </li>
              </ul>

              <div className="flex gap-[30px] items-center mt-[50px]">
                <img src={contanctImg1} alt="" className="" />
                <img src={contanctImg2} alt="" className="" />
                <img src={contanctImg3} alt="" className="" />
                <img src={contanctImg4} alt="" className="" />
              </div>
            </div>
          </div>
          <img className="cursor-pointer" src={map} alt="" />
        </div>
      </div>
    </section>
  );
}
