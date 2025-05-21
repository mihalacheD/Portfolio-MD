import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Projects from "./sections/Projects";

function App() {
  return (
        <>
      <Navbar />
      <main id="home"> {/* spațiu pentru navbar */}
        <Hero />
        <About/>
        <Projects/>
      </main>
    </>
  );
}

export default App;
