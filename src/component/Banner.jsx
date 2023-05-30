
// import React from 'react'
import React, { useState,useEffect } from "react";
import banner1 from "../assets/banner1.png";
import banner2_1 from "../assets/banner2-1.png";
import banner2_2 from "../assets/banner2-2.png";
import banner3_1 from "../assets/banner3-1.png";
import banner3_2 from "../assets/banner3-2.png";
import banner4 from "../assets/banner-text.png";


const Banner=()=> {
  const [value, setValue] = useState(0);
  useEffect(() => {
    const handleScroll = () => {
      setValue(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const styles = {
            banner4: {
              marginTop: `${value * 0.9}px`,
              display: value > 200 ? "none" : "block",
            },
            banner2_1: {
              left: `${value * 2}px`,
            },
            banner2_2: {
              left: `${value * -2}px`,
            },
            banner3_1: {
              left: `${value * -0.5}px`,
            },
            banner3_2: {
              left: `${value * 0.5}px`,
            },
          };
  return (
        <section>
        <img id="banner1" src={banner1} alt="" />
        <img id="banner2_1" src={banner2_1} style={styles.banner2_1} alt="" />
        <img id="banner2_2" src={banner2_2} style={styles.banner2_2} alt="" />
        <img id="banner3_1" src={banner3_1} style={styles.banner3_1} alt="" />
        <img id="banner3_2" src={banner3_2} style={styles.banner3_2} alt="" />
        <img
          className="textimg"
          id="banner4"
          src={banner4}
          style={styles.banner4}
          alt=""
        />
      </section>
  )
};
  


export default Banner
