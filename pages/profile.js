import { Layout } from "../components/layout";
import Link from "next/link";
import { useRouter } from "next/router";

const NameLink = ({ nom }) => (
  <li>
    <Link href={`/profile?nom=${nom}`}>
      <a>{nom}</a>
    </Link>
  </li>
);

const Profile = () => {
  const router = useRouter();
  console.log(router.query);
  return (
    <Layout>
      <h1>Profile</h1>
      <ul>
        <NameLink nom="John doe" />
        <NameLink nom="paul" />
        <NameLink nom="Jean" />
        <NameLink nom="Beethoven" />
      </ul>
      <h1>{router.query.nom}</h1>
    </Layout>
  );
};

export default Profile;
