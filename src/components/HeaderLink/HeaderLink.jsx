import { NavLink } from "react-router-dom";

export default function HeaderLink({ text, link }) {
  return (
    <NavLink
      to={link}
      className={({ isActive }) =>
        `
    relative text-[16px] font-medium transition-all duration-300 
    ${
      isActive
        ? "text-[#FFA155] before:content-[''] before:absolute before:-top-6 before:right-0 before:w-full before:h-0.5 before:bg-[#FFA155]"
        : "text-[#fff9] hover:text-white"
    }
    `
      }
    >
      {text}
    </NavLink>
  );
}
