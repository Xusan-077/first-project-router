import CompanyHeroImg1 from "../../assets/images/Company-img-1.png";
import CompanyHeroImg2 from "../../assets/images/Company-img-2.png";
import CompanyHeroImg3 from "../../assets/images/Company-img-3.png";

export default function CompanyHeroBottom({ bottom, rigth }) {
  return (
    <div className="">
      <ul
        className={`${
          bottom ? "mb-[50px]" : " mb-[100px]"
        } relative flex items-center justify-between`}
      >
        {!rigth ? (
          <div className="absolute flex top-[-15px] right-0">
            <div className="w-[100px] h-[15px] bg-[#FFA155FF]"></div>
            <div className="w-[150px] h-[15px] bg-[#FFD3AFFF]"></div>
            <div className="w-[100px] h-[15px] bg-[#444CFCFF]"></div>
          </div>
        ) : (
          <div className="absolute top-0 right-0">
            <div className="w-[15px] h-[148.7px] bg-[#FFA155FF]"></div>
            <div className="w-[15px] h-[148.7px] bg-[#FFD3AFFF]"></div>
            <div className="w-[15px] h-[148.7px] bg-[#444CFCFF]"></div>
          </div>
        )}

        <li className="">
          <img src={CompanyHeroImg1} alt="" className="" />
        </li>
        <li className="">
          <img src={CompanyHeroImg2} alt="" className="" />
        </li>
        <li className="">
          <img src={CompanyHeroImg3} alt="" className="" />
        </li>
      </ul>
    </div>
  );
}
