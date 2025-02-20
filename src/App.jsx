import AboutSection from "./component/AboutSection";
import HeroSection from "./component/HeroSection";
import Navigation from "./component/Navigation";

export default function App() {
  return (
    <main className=" w-screen h-full overflow-x-clip">
      <Navigation />
      <HeroSection />
      <AboutSection/>
      <div className=" w-screen h-screen" />
    </main>
  )
}