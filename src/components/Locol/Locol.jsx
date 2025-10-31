import { local } from "../../Constants/Constants";
import Action from "../Action/Action";
import LocalItem from "../LocalItem/LocalItem";

export default function Locol() {
  return (
    <section>
      <div className="bg-[#ECF8F9] p-[100px_0] mb-[100px]">
        <div className="container">
          <div className="flex justify-between">
            <Action
              subTitle="Our expertise"
              title="We want to get local identification in every corner of the world in this era of global citizenship "
              description="Through True Rich Attended does no end it his mother since real had half every him case in packages enquire we up ecstatic unsatiable saw his giving Remain expense you position concluded. "
            />
            <div className="">
              <ul className="flex flex-col gap-3">
                {local.map((el) => (
                  <LocalItem key={el.id} {...el} />
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
