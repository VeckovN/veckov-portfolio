import Header from "@/components/ui/Header";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Tech from "@/components/sections/Tech";
import Projects from "@/components/sections/Projects";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <div className="">
      <Header/>
      <Hero/>
      <About/>
      <Tech/>
      <Projects/>
      <Contact/>
    </div>
  );
}
