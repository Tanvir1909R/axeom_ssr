
import {
  Business,
  FingerTip,
  Generate,
  Expertise,
  Hero,
  Project,
  GetInTouch,
} from "../../pageComponent";
import { Footer, Navbar } from "../../components";
import { Helmet } from "react-helmet";

const App = () => {
  
  return (
    <>
    <Helmet>
      <title>Axeom</title>
    </Helmet>
      <header>
        <Navbar />
      </header>
      <main>
        <section>
          <Hero/>
        </section>
        <section id="fingerTips">
          <FingerTip />
        </section>
        <section id="generate">
          <Generate />
        </section>
        <section id="business">
          <Business />
        </section>
        <section id="Book">
          <GetInTouch/>
        </section>
        <section id="expertise">
          <Expertise />
        </section>
        <section>
          <Project/>
        </section>
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default App;
