import { Toaster } from "react-hot-toast";
import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Projects from "./sections/Projects";
import Teckstack from "./sections/Teckstack";
import Contact from "./sections/Contact";

function App() {
  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />
      <Navbar />
      <main id="home">
        {" "}
        {/* spațiu pentru navbar */}
        <Hero />
        <About />
        <Projects />
        <Teckstack />
        <Contact />
      </main>
    </>
  );
}

export default App;
