import BlogHero from "../../components/BlogHero/BlogHero";
import Posts from "../../components/Posts/Posts";
import Read from "../../components/Read/Read";
import Subscribe from "../../components/Subscribe/Subscribe";

export default function Blog() {
  return (
    <>
      <BlogHero />
      <Read />
      <Posts />
      <Subscribe />
    </>
  );
}
