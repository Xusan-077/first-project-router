import { designLayouts } from "../../Constants/Constants";
import ReadItem from "../ReadItem/ReadItem";

export default function Read() {
  return (
    <section>
      <div className="container">
        <div className="mb-[100px]">
          <h2 className="text-[48px] font-semibold mb-[60px]">
            Read Recent Post
          </h2>
          <ul className="grid justify-between gap-8 grid-cols-2">
            {designLayouts.map((el) => (
              <ReadItem key={el.id} {...el} />
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
