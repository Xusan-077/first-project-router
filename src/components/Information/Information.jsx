import { processSteps } from "../../Constants/Constants";
import Action from "../Action/Action";
import ServiceItem from "../ServiceItem/ServiceItem";

export default function Information() {
  return (
    <section>
      <div className="container">
        <div className="mb-[100px]">
          <div className="">
            <Action
              subTitle="Our Process"
              title="The process we are working With Our client Worldwide"
              description="Through True Rich Attended does no end it his mother since real had half every him case in packages enquire we up ecstatic unsatiable."
            />

            <ul className="grid grid-cols-3 gap-[50px]">
              {processSteps.map((el) => (
                <ServiceItem key={el.id} {...el} />
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
