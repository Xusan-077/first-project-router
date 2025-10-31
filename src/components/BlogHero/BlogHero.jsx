import BlogHeroItem from "../BlogHeroItem/BlogHeroItem";
import HeroLeft from "../HeroLeft/HeroLeft";

import arrow from "../../assets/icons/arrow.svg";

import blogImg1 from "../../assets/images/career-img-1.svg";
import blogImg2 from "../../assets/images/career-img-2.svg";
import blogImg3 from "../../assets/images/career-img-3.svg";

import blogBigImg1 from "../../assets/images/blog-img.png";

export default function BlogHero() {
  return (
    <section className="hero">
      <div className="container">
        <div className="flex justify-between items-start p-[100px_0]">
          <div className="mb-[50px]">
            <HeroLeft
              color
              subTitle="TREnding"
              title="Breaking the code How did we build our Figma plugin "
              text="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The Maker is a decentralized. We aim to attain the."
            />

            <div className="flex items-center gap-2.5">
              <a href="" className="text-[#5D5FEF]">
                Apply Now
              </a>
              <img src={arrow} alt="" className="" />
            </div>

            <div className="mt-10">
              <div className="flex items-center gap-2.5 mb-[50px]">
                <img src={blogImg1} alt="" className="" />
                <div className="flex gap-5">
                  <span className="">Andrew Jonson</span>
                  <span className="border-l pl-[30px] border-[grey]">
                    Posted on 27th January 2021
                  </span>
                </div>
              </div>
              <img src={blogBigImg1} alt="" className="" />
            </div>
          </div>
          <div className="bg-[#FFDFC6] p-[70px]">
            <ul className="flex flex-col gap-[50px]">
              <BlogHeroItem
                text="Great design expectations prejudice in digital products in Next Year"
                img={blogImg1}
                name="Andrew Jonson"
                year="Jan 19, 2021"
              />
              <BlogHeroItem
                text="Great design expectations prejudice in digital products in Next Year"
                img={blogImg2}
                name="Mathew Jasele"
                year="Jan 19, 2021"
              />
              <BlogHeroItem
                text="Great design expectations prejudice in digital products in Next Year"
                img={blogImg3}
                name="Hussen Abakas"
                year="Jan 19, 2021"
              />
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
