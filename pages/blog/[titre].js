import { useRouter } from "next/router";
import { Layout } from "../../components/layout";

const Titre = () => {
  const router = useRouter();
  console.log(router.query);
  return (
    <Layout>
      <h1>{router.query.titre}</h1>
    </Layout>
  );
};

export default Titre;
