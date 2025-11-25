
'use client'; //Tells Next.js that is 'client component'

import { useRef } from "react";;
import Header from "@/components/ui/Header";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";


export default function Home() {
  const sectionRefs = useRef<{ [key:string]: HTMLElement | null}>({});
  return (
    <div className="">
      <Header sectionRefs={sectionRefs}/>
      <Hero sectionRef={(el => sectionRefs.current['home'] = el)}/>
      <About sectionRef={(el => sectionRefs.current['about'] = el)}/>

    </div>
  );
}
