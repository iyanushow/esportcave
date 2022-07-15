import Earn from "../src/components/Earn/Earn";
import Games from "../src/components/Games/Games";
import Hero from "../src/components/Hero/Hero";
import Contact from "../src/components/Contact/Contact";
import { games } from "../src/utils/data";

export const getStaticProps = () => {
  return {
    props: {
      games,
    },
  };
};

export default function Home({ games }) {
  return (
    <>
      <Hero />
      <div className="pageContainer">
        <Earn />
        <Games games={games} />
        <Contact />
      </div>
    </>
  );
}
