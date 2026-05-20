import { useState } from "react";
import Navbar from "./Navbar";
import DotGrid from "./DotGrid";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef, useEffect } from "react";

gsap.registerPlugin(ScrollTrigger);

function App() {
  const boxRef = useRef(null);
  const triggerRef = useRef(null);
  const navbarRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: triggerRef.current,
        start: "top top",
        end: "bottom top",
        toggleAction: "play reverse play reverse",

        onToggle: (self) => {
          gsap.to(boxRef.current, {
            backgroundColor: self.isActive ? "white" : "black",
            duration: 0.3,
          });
          gsap.to(navbarRef.current, {
            backgroundColor: self.isActive ? "white" : "#00000020",
            color: self.isActive ? "black" : "white",
            boxShadow: self.isActive ? "0 4px 15px rgba(0, 0, 0, 0.2)" : "none",
            duration: 0.3,
          });
        },

        markers: true,
      });
    });

    return () => ctx.revert();
  }, []);
  return (
    <div ref={boxRef} className="min-h-screen root bg-black">
      <Navbar ref={navbarRef} />
      <section
        style={{
          width: "100%",
          height: "600px",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div className="h-screen">
          <DotGrid
            dotSize={3}
            gap={15}
            baseColor="#1a191c"
            activeColor="#ffffff"
            proximity={150}
            shockRadius={250}
            shockStrength={5}
            resistance={700}
            returnDuration={1.5}
          />
        </div>
        <div className="absolute inset-0 z-10 flex flex-col items-center justify-center text-white">
          <h1 className="text-5xl font-semibold">
            Hello, I'm{" "}
            <span className="text-purple-500 font-medium italic font-jersey text-7xl">
              NashDax
            </span>
          </h1>
        </div>
      </section>
      <div ref={triggerRef} className="h-1000">
      </div>
      <div className="h-1000"></div>
    </div>
  );
}

export default App;
