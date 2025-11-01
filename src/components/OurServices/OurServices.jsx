import { OurServicesArr } from "../../Constants/Constants";
import Action from "../Action/Action";
import Button from "../Button/Button";
import HeroLeft from "../HeroLeft/HeroLeft";
import LocalItem from "../LocalItem/LocalItem";

export default function OurServices() {
  return (
    <section>
      <div className="bg-[#FFE6D2]">
        <div className="container">
          <div className="p-[100px_0] mb-[100px]">
            <div className="">
              <span className="text-[14px] font-medium mb-[15px] inline-block ">
                Our Services
              </span>
              <h2 className="text-[48px] font-semibold mb-6 max-w-[700px]">
                We build software solutions that solve client's business
                challenges
              </h2>
              <div className="relative">
                <Button text="Start a Project" />
              </div>
              <Action />
            </div>
            <div className="">
              <ul className="grid grid-cols-3 gap-8">
                {OurServicesArr.map((el) => (
                  <LocalItem isLink isflex key={el.id} {...el} />
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
