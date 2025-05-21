import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Projects from "./sections/Projects";
import Teckstack from "./sections/Teckstack";

function App() {
  return (
        <>
      <Navbar />
      <main id="home"> {/* spațiu pentru navbar */}
        <Hero />
        <About/>
        <Projects/>
        <Teckstack/>
      </main>
    </>
  );
}

export default App;
