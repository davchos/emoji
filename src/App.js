import "./App.css";
import Search from "./components/Search";
import Line from "./components/Line";
import Footer from "./components/Footer";
import { useState } from "react";

import data from "./assets/data.json";

const App = () => {
  const [search, setSearch] = useState("");

  const regex = new RegExp(search, "i");
  // need refactor, filter parse the whole array, not good
  return (
    <div>
      <Search search={search} setSearch={setSearch} />
      <div className="lines">
        {data
          .filter((elem) => {
            return regex.test(elem.keywords);
          })
          .map((el, idx) => {
            return (
              <div>
                <Line key={el.title} title={el.title} symbol={el.symbol} />
              </div>
            );
          })
          .slice(0, 20)}
      </div>
      <Footer />
    </div>
  );
};

export default App;
