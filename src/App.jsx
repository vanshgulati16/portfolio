import React from "react";
import { Navbar } from "./components/Navbar";
import { About } from "./pages/About";
import { Contact } from "./pages/Contact";
import { Experience } from "./pages/Experience";
import { Home } from "./pages/home";
import { Projects } from "./pages/Projects";
import { Analytics } from "@vercel/analytics/react"

function App() {
  return (
    <div className="App">
      <Navbar>
        <Analytics/>
        <Home />
        <Experience />
        <Projects />

        <About />
        <Contact />
      </Navbar>
    </div>
  );
}

export default App;
