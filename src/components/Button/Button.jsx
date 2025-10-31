import arrow from "../../assets/icons/white-icon.svg";

export default function Button({ text }) {
  return (
    <button className="button cursor-pointer p-[20px_30px_20px_32px] bg-[#444CFC] flex items-center gap-[15px]">
      <span className="text-white">{text}</span>
      <img src={arrow} alt="" />
    </button>
  );
}
