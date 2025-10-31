import { Link } from "react-router-dom";
import HeroLeft from "../HeroLeft/HeroLeft";

export default function ServiceHero() {
  return (
    <section className="Service-hero">
      <div className="bg-[#FFE6D2] mb-[100px]">
        <div className="container">
          <div className="p-[100px_0] flex justify-between items-center">
            <HeroLeft
              isBtn
              color
              subTitle="Our Services"
              title="We Build Software Solutionthat Solve Clients Business Challenges"
              text="Through True Rich Attended does no end it his mother since favourable real had half every him case in packages enquire we up ecstatic."
              btnText="Request A Quote"
            />
            <ul className="">
              <li className="p-2.5">
                <Link
                  className="text-[25px] text-[#232536] font-semibold"
                  to="support"
                >
                  Technical support
                </Link>
              </li>
              <li className="p-2.5">
                <Link
                  className="text-[25px] text-[#232536] font-semibold"
                  to="Development"
                >
                  Development
                </Link>
              </li>
              <li className="p-2.5">
                <Link
                  className="text-[25px] text-[#232536] font-semibold"
                  to="AWS"
                >
                  AWS/Azure
                </Link>
              </li>
              <li className="p-2.5">
                <Link
                  className="text-[25px] text-[#232536] font-semibold"
                  to="Technical"
                >
                  Technical Technical
                </Link>
              </li>
              <li className="p-2.5">
                <Link
                  className="text-[25px] text-[#232536] font-semibold"
                  to="Consulting"
                >
                  Consulting
                </Link>
              </li>
              <li className="p-2.5">
                <Link
                  className="text-[25px] text-[#232536] font-semibold"
                  to="Technology"
                >
                  Information Technology
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
