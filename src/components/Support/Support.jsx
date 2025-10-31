import { services } from "../../Constants/Constants";
import ServiceInformationItem from "../ServiceInformationItem/ServiceInformationItem";

export default function Support() {
  return (
    <section>
      <div className="container">
        <ul className="">
          {services.map((el) => (
            <ServiceInformationItem key={el.id} {...el} />
          ))}
        </ul>
      </div>
    </section>
  );
}
