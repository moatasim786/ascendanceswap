import Image from "next/image";
import { useEffect, useState } from "react";
import NET from "vanta/dist/vanta.net.min";
import * as THREE from "three";

export default function Hero() {
  const [vantaEffect, setVantaEffect] = useState(0);
  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        NET({
          el: "#vanta-net",
          THREE,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.0,
          minWidth: 200.0,
          scale: 1.25,
          scaleMobile: 1.5,
          color: 0xa79300,
          backgroundColor: 0x0,
          points: 24.0,
          spacing: 20.0,
        })
      );
    }
  }, [vantaEffect]);
  return (
    <div>
      <header
        className="flex flex-col items-center justify-center text-center text-white bg-black"
        id="vanta-net"
      >
        <div
          className="px-4 py-32"
          style={{
            background:
              "radial-gradient(50% 50% at 50% 50%, black, transparent",
          }}
        >
          <div className="relative w-20 h-12 m-auto mb-10">
            <Image src="/logo.png" alt="Ascendance logo" layout="fill"></Image>
          </div>
          <h1 className="text-5xl font-bold uppercase font-display">
            Welcome to
            <br />
            Ascendance
          </h1>
          <p className="text-lg">The next-generation DEX.</p>
          <div className="mt-12">
            <a
              className="px-5 py-2 m-2 text-sm font-bold text-black bg-yellow-400 rounded-lg font-display"
              href="#"
            >
              Buy on Pancakeswap
            </a>
            {/*
            TODO: get these urls
          */}
            <a
              className="px-6 py-2 m-2 text-sm font-bold text-white bg-black border-2 border-white rounded-lg font-display"
              href="#"
            >
              See Whitepaper
            </a>
          </div>
        </div>
      </header>
    </div>
  );
}
