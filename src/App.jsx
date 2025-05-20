import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";

function App() {
  return (
        <>
      <Navbar />
      <main id="home"> {/* spațiu pentru navbar */}
        <Hero />
      </main>
    </>
  );
}

export default App;
