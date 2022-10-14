import Earn from "../src/components/Earn/Earn";
import Games from "../src/components/Games/Games";
import Hero from "../src/components/Hero/Hero";
import Contact from "../src/components/Contact/Contact";
import Faq from "../src/components/Faq/Faq";
import { games } from "../src/utils/data";

// export const getStaticProps = () => {
//   return {
//     props: {
//       games,
//     },
//   };
// };

games;
export default function Home() {
  return (
    <>
      <Hero />
      <div className="pageContainer">
        <Contact />
        <Games games={games} />
        <Faq />
      </div>
    </>
  );
}
