import { Link } from "react-router-dom";
import LinkItem from "../Link/Link";
import Logo from "../../assets/images/footer-Logo.svg";

import Ins from "../../assets/icons/instagram.svg";
import face from "../../assets/icons/facebook.svg";
import In from "../../assets/icons/in.svg";
import tweet from "../../assets/icons/tweeter.svg";

import arrow from "../../assets/icons/arrow.svg";

export default function Footer() {
  return (
    <footer className="">
      <div className="container">
        <div className="relative  mb-[60px]">
          <div className="footer-icon p-[60px_0]">
            <div className="flex">
              <div className="">
                <h2 className="text-[48px] font-semibold max-w-[492px] mb-10">
                  Let's make something special
                </h2>

                <p className="text-[24px] mb-[30px]">Let's talk! 🤙 </p>

                <div className="flex flex-col pb-[15px] border-b border-b-[#00000014] mb-[15px]">
                  <span className="text-[18px] text-[#232536]">
                    020 7993 2905
                  </span>
                  <span className="text-[18px] text-[#232536]">
                    hi@finsweet.com
                  </span>
                </div>
              </div>

              <ul className="flex ml-[200px]">
                <ul className="">
                  <LinkItem link="/" text="Home" />
                  <LinkItem link="/service" text="Service" />
                  <LinkItem link="/company" text="Company" />
                  <LinkItem link="/career" text="Career" />
                  <LinkItem link="/News" text="News" />
                </ul>
                <ul className="pl-[60px]">
                  <h2 className="text-[16px] font-semibold">Service</h2>
                  <LinkItem link="/support" text="Technical support" />
                  <LinkItem link="/Testing" text="Testing" />
                  <LinkItem link="/Development" text="Development" />
                  <LinkItem link="/AWS" text="AWS/Azure " />
                  <LinkItem link="/Consulting" text="Consulting" />
                  <LinkItem link="/Technology" text="Information Technology" />
                </ul>
                <ul className=" pl-[60px]">
                  <h2 className="text-[16px] font-semibold">Resourses</h2>
                  <LinkItem link="/About" text="About Us" />
                  <LinkItem link="/Testimonial" text="Testimonial" />
                  <LinkItem link="/Policy" text="Privacy Policy" />
                  <LinkItem link="/Terms" text="Terms of use" />
                  <LinkItem link="/Blog" text="Blog" />
                </ul>
              </ul>
            </div>
          </div>

          <div className="flex items-center justify-between">
            <p className="max-w-[206px] text-[14px] text-[#232536]">
              DLF Cybercity, Bhubaneswar, India, &52050
            </p>
            <div className="relative">
              <div className="footer-bottom flex items-center gap-2.5">
                <Link to="/contact">Contact Us</Link>
                <img src={arrow} alt="" className="" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#FFE6D2] p-[30px_20px]">
        <div className="w-7xl flex justify-between my-0 mx-auto">
          <Link to="/">
            <img src={Logo} alt="" className="" />
          </Link>
          <ul className="flex gap-[25px]">
            <li className="">
              <a href="" className="">
                <img src={Ins} alt="" className="" />
              </a>
            </li>
            <li className="">
              <a href="" className="">
                <img src={face} alt="" className="" />
              </a>
            </li>
            <li className="">
              <a href="" className="">
                <img src={In} alt="" className="" />
              </a>
            </li>
            <li className="">
              <a href="" className="">
                <img src={tweet} alt="" className="" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
