import React from "react";
import ReactDOM from "react-dom";
import Header from "./components/Header/Header";
import Pet from "./components/Pet";
import SearchParams from "./components/SearchParams";
import Section from "./components/Main/section";
import Intro from "./components/Main/intro";
import Footer from "./components/Footer/footer";

const App = () => {
  return (
    <div>
      <h1 className="title">Hello</h1>
      <Pet name="hatiko" animal="dog" breed="bone" />
      <SearchParams />
      <Header/>
      <Section />
      <Intro />
      <Footer />
    </div>
  )
}

ReactDOM.render(React.createElement(App), document.getElementById("root"));