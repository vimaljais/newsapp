import Header from "./components/header/header.component.jsx";
import CryptoScroller from "./components/CryptoScroller/CryptoScroller.component";
import CallHeadlines from "./utils/callHeadlines.utils";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <CryptoScroller />
      <CallHeadlines />
    </div>
  );
}

export default App;
