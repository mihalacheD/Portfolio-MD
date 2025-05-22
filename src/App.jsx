import { Toaster } from "react-hot-toast";
import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Projects from "./sections/Projects";
import Teckstack from "./sections/Teckstack";
import Contact from "./sections/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />
       <div className="flex flex-col min-h-screen">
      <Navbar />
      <main id="home" className="flex-grow">
        {" "}
        {/* spațiu pentru navbar */}
        <Hero />
        <About />
        <Projects />
        <Teckstack />
        <Contact />
      </main>
      <Footer/>
      </div>
    </>
  );
}

export default App;
