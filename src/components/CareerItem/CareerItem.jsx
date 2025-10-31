export default function CareerItem({ title, description, icon }) {
  return (
    <li className="bg-white p-8">
      <div className="bg-[#FFD3AF80] text-center w-11 p-[10px_0] mb-2.5 rounded-full">
        {icon}
      </div>
      <h3 className="text-[16px] font-semibold mb-[5px]">{title}</h3>
      <p className="text-[14px] max-w-[354px] text-[#232536]">{description}</p>
    </li>
  );
}
