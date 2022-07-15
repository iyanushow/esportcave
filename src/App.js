import Layout from "./components/Layout";
import Hero from "./components/sections/Hero/Hero";
// import Earn from "./components/sections/Earn/Earn";
// import Games from "./components/sections/Games/Games";

//styles
import "./styles/index.css";
import styles from "./styles/main.module.css";
// import Contact from "./components/sections/Contact/Contact";
import ErrorPage from "./components/sections/ErrorPage/ErrorPage";

function App() {
  return (
    <Layout>
      {/* <Hero />
      <div className={styles.container}>
        <Earn />
        <Games />
        <Contact />
      </div> */}
      <ErrorPage />
    </Layout>
  );
}

export default App;
