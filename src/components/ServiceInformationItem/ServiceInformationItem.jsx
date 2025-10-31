import Action from "../Action/Action";

export default function ServiceInformationItem({
  title,
  subtitle,
  description,
  image,
  format,
  bg,
}) {
  return (
    <li
      className={`flex justify-between mb-[100px] items-center ${
        !format ? "flex-row-reverse" : ""
      }`}
    >
      <Action subTitle={subtitle} title={title} description={description} />
      <img src={image} alt="" className="" />
    </li>
  );
}
