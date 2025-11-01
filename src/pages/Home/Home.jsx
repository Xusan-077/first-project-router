import HomeHero from "../../components/HomeHero/HomeHero";
import Locol from "../../components/Locol/Locol";
import Subscribe from "../../components/Subscribe/Subscribe";
import Information from "../../components/Information/Information";
import AboutCompany from "../../components/AboutCompany/AboutCompany";
import OurServices from "../../components/OurServices/OurServices";
import HomeRead from "../../components/HomeRead/HomeRead";

export default function Home() {
  return (
    <>
      <HomeHero />
      <AboutCompany />
      <Locol />
      <OurServices />
      <Information />
      <HomeRead />
      <Subscribe />
    </>
  );
}
