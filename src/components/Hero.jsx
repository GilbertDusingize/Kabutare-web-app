import React, { useState, useEffect } from "react";
import "../App.css";

// 1. These imports create "variables" (hero1, hero2, hero3)
import hero1 from "../assets/hero1.jpg";
import hero2 from "../assets/hero2.jpeg";
import hero3 from "../assets/hero3.jpeg";
import hero4 from "../assets/hero4.jpeg";
import hero5 from "../assets/hero5.jpeg";
import hero6 from "../assets/hero6.jpeg";
import hero7 from "../assets/hero7.jpeg";
import hero8 from "../assets/hero8.jpeg";
import hero9 from "../assets/hero9.jpeg";

// 2. Use those variables IN the array (No quotes, no slashes!)
const images = [hero1, hero2, hero3, hero4, hero5, hero6, hero7, hero8, hero9];
function Hero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="hero">
      <div className="carousel">
        {/* 3. React now correctly picks the file linked to the variable */}
        <img src={images[index]} alt="Hero Slide" className="hero-image" />
        {/*<div className="hero-text">
           <h1>Welcome to KTSS</h1>
           <p>School of excellency.</p>
        </div>*/}
      </div>
    </section>
  );
}

export default Hero;