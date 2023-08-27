import { useState } from "react";

import "./App.css";
import About from "./components/pages/About";
import Header from "./components/Header";
import Contact from "./components/pages/Contact";
import Footer from "./components/Footer";

function App() {
  const [page, setPage] = useState("about");

  function displayPage() {
    if (page === "contact") {
      return <Contact />;
    } else {
      return <About />;
    }
  }

  return (
    <>
      <Header setPage={setPage} />
      {displayPage()}
      <Footer />
    </>
  );
}

export default App;
