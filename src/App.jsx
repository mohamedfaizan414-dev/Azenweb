import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Stats from "./components/Stats";
import Services from "./components/Services";
import Portfolio from "./components/Portfolio";
import Process from "./components/Process";
import WhyUs from "./components/WhyUs";
import Commitments from "./components/Commitments";
import Pricing from "./components/Pricing";
import DashboardTeaser from "./components/DashboardTeaser";
import CTAContact from "./components/CTAContact";
import Footer from "./components/Footer";
import JourneyBar from "./components/ui/JourneyBar";
import AmbientBackground from "./components/ui/AmbientBackground";

export default function App() {
  return (
    <div className="relative min-h-screen">
      <AmbientBackground />
      <JourneyBar />
      <Nav />
      <main>
        <Hero />
        <Stats />
        <Services />
        <Portfolio />
        <Process />
        <WhyUs />
        <Commitments />
        <Pricing />
        <DashboardTeaser />
        <CTAContact />
      </main>
      <Footer />
    </div>
  );
}
