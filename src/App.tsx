/** @format */

import Header from "./components/Header";
import NewsBoard from "./components/Newsboard";
import { TypewriterEffectSmoothDemo } from "./components/Typewritter";
import { BackgroundGradientAnimation } from "./components/ui/background-gradient-animation";

function App() {
  return (
    <BackgroundGradientAnimation>
      <div className="dark">
        <TypewriterEffectSmoothDemo  />
        <Header />
        <div >

        <NewsBoard />
        </div>
      </div>
    </BackgroundGradientAnimation>
  );
}

export default App;
