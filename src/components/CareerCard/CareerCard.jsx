import arrow from "../../assets/icons/arrow.svg";

export default function CareerCard({
  position,
  location,
  type,
  salary,
  experience,
}) {
  return (
    <li className="bg-white p-[48px_0_30px_48px]">
      <h2 className="text-[16px] font-semibold mb-2.5">{position}</h2>
      <div className="mb-[50px]">
        <p className="text-[16px] text-[grey]">
          {location} · {type}
        </p>
        <p className="text-[16px] text-[grey]">
          {salary} · {experience}
        </p>
      </div>
      <div className="flex items-center gap-2.5">
        <a href="" className="text-[#5D5FEF]">
          Apply Now
        </a>
        <img src={arrow} alt="" className="" />
      </div>
    </li>
  );
}
