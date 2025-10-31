import CareerItem from "../CareerItem/CareerItem";
import Action from "../Action/Action";

export default function CareerCome() {
  const benefits = [
    {
      id: 1,
      title: "Covid-19 insurance",
      description:
        "Through True Rich Attended does no end it his mother since real had halfdoes no end it",
      icon: "😷",
    },
    {
      id: 2,
      title: "Flexible working time",
      description:
        "Through True Rich Attended does no end it his mother since real had halfdoes no end it",
      icon: "⏱️",
    },
    {
      id: 3,
      title: "Work from home",
      description:
        "Through True Rich Attended does no end it his mother since real had halfdoes no end it",
      icon: "🏠",
    },
    {
      id: 4,
      title: "Annual retreats",
      description:
        "Through True Rich Attended does no end it his mother since real had halfdoes no end it",
      icon: "🎉",
    },
    {
      id: 5,
      title: "Learning stipend",
      description:
        "Through True Rich Attended does no end it his mother since real had halfdoes no end it",
      icon: "💰",
    },
    {
      id: 6,
      title: "Gym membership",
      description:
        "Through True Rich Attended does no end it his mother since real had halfdoes no end it",
      icon: "💪",
    },
  ];

  return (
    <section className="come bg-[#FAFAFC]">
      <div className="container">
        <div className="p-[100px_0] mb-[100px]">
          <Action
            subTitle="OUR WORK & CULTURE"
            title="Come and join a team of highly skilled professionals."
            description=" Through True Rich Attended does no end it his mother since real
              had half every him case in packages enquire we up ecstatic
              unsatiable saw his giving Remain expense you position concluded."
          />
          <div className="">
            <ul className="flex flex-wrap justify-between gap-3">
              {benefits.map((el) => (
                <CareerItem key={el.id} {...el} />
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
