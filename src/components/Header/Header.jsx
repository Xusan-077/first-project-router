import Logo from "../../assets/images/Logo.svg";
import HeaderLink from "../HeaderLink/HeaderLink";

export default function Header() {
  return (
    <header className="bg-[#232536]">
      <div className="container">
        <div className="flex items-center justify-between p-[25px_0] border-b border-[#FFFFFF0D]">
          <a href="" className="">
            <img src={Logo} alt="" />
          </a>

          <ul className="flex items-center gap-[30px]">
            <li className="relative">
              <HeaderLink text="Home" link="/" />
            </li>
            <li className="relative">
              <HeaderLink text="Service" link="/Service" />
            </li>
            <li className="relative">
              <HeaderLink text="Company" link="/Company" />
            </li>
            <li className="relative">
              <HeaderLink text="Career" link="/Career" />
            </li>
            <li className="relative">
              <HeaderLink text="Blog" link="/Blog" />
            </li>
            <li className="relative">
              <HeaderLink text="Contact us" link="/Contact" />
            </li>
            <li>
              <HeaderLink text="Clone project" link="/project" />
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}
