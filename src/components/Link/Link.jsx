import { Link } from "react-router-dom";

export default function LinkItem({ text, link }) {
  return (
    <li className="p-[10px_10px_10px_0]">
      <Link className="text-[16px] text-[#232536]" to={link}>
        {text}
      </Link>
    </li>
  );
}
