import Hero from "../components/Hero";
import Overview from "../components/Overview";
import Why from "../components/Why";
import Dex from "../components/Dex";
import Features from "../components/Features";
import Roadmap from "../components/Roadmap";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Hero />
      <div
        className="m-auto"
        style={{
          maxWidth: "1400px",
        }}
      >
        <Overview />
      </div>
      <Why />
      <div
        className="m-auto"
        style={{
          maxWidth: "1400px",
        }}
      >
        <Dex />
        <Features />
        <Roadmap />
      </div>
      <Footer />
    </>
  );
}
