/** @format */

import Header from "./components/Header";
import NewsBoard from "./components/Newsboard";
import { BackgroundGradientAnimation } from "./components/ui/background-gradient-animation";

function App() {
  return (
    <BackgroundGradientAnimation>
      <div className="dark">
        <Header />
        <NewsBoard />
      </div>
    </BackgroundGradientAnimation>
  );
}

export default App;
