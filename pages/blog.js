import { Layout } from "../components/layout";
import Link from "next/link";
import { useRouter } from "next/router";

const PostLink = ({ titre }) => (
  <li>
    <Link href={`/blog?titre=${titre}`}>
      <a>{titre}</a>
    </Link>
  </li>
);

const Blog = () => {
  const router = useRouter();
  console.log(router.query);
  return (
    <Layout>
      <h1>Blog</h1>
      <ul>
        <PostLink titre="react" />
        <PostLink titre="angular" />
        <PostLink titre="vue" />
        <PostLink titre="svete" />
        <PostLink titre="apprendre Next js" />
      </ul>
      <h1>{router.query.titre}</h1>
    </Layout>
  );
};

export default Blog;
