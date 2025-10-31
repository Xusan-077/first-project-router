import { clientSatisfactionSections } from "../../Constants/Constants";
import PostsItem from "../PostsItem/PostsItem";

export default function Posts() {
  return (
    <section>
      <div className="bg-[#F9F9F9] p-[100px_0] mb-[100px]">
        <div className="container">
          <div className="">
            <h2 className="text-[48px] font-semibold mb-[60px]">All posts</h2>
            <ul className="grid grid-cols-3 gap-8">
              {clientSatisfactionSections.map((el) => (
                <PostsItem key={el.id} {...el} />
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
