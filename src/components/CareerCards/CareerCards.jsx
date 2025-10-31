import { cords } from "../../Constants/Constants";
import CareerCard from "../CareerCard/CareerCard";

export default function CareerCards() {
  return (
    <div className="">
      <div className="container">
        <div className="mb-[100px]">
          <div className="bg-[#ECF8F9]">
            <ul className="grid grid-cols-3 gap-8 p-20">
              {cords.map((el) => (
                <CareerCard key={el.id} {...el} />
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
