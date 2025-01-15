"use client";

import gsap from "gsap";
import React, { useEffect, useRef } from "react";

function Splashscreen() {
  const splashscreenRef = useRef(null);

  useEffect(() => {
    const wrap = splashscreenRef.current;
    // @ts-ignore will fix lints later
    const svg = wrap.querySelector("svg");
    const left = svg.querySelector(".loader-left");
    const right = svg.querySelector(".loader-right");

    gsap.to(svg, {
      opacity: 1,
      duration: 1,
    });

    gsap.to(left, {
      translateX: "100vw",
      duration: 2,
      delay: 0.5,
    });

    gsap.to(right, {
      translateX: "-100vw",
      duration: 2,
      delay: 0.5,
    });

    gsap.to(wrap, {
      translateY: "-100%",
      duration: 0.5,
      delay: 2,
    });
  }, []);

  return (
    <div id="splashscreen" ref={splashscreenRef}>
      <svg
        width="450"
        height="178"
        style={{ width: "100%" }}
        viewBox="0 0 450 178"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          className="loader-left"
          style={{ transform: "translateX(-20%)" }}
          d="M298.895 86.9075C298.895 59.6765 306.882 39.2325 322.857 25.5756C338.748 11.9187 361.468 5.0903 391.017 5.0903H422.8L421.31 0H384.064C362.048 0 343.507 3.35215 328.443 10.0564C313.297 16.7607 301.833 26.4861 294.053 39.2325C286.19 51.979 282.258 67.4982 282.258 85.7901C282.258 105.986 286.686 122.912 295.543 136.569C304.316 150.143 316.276 160.365 331.423 167.235C346.57 174.105 363.662 177.54 382.699 177.54H421.31L422.8 172.449H386.796C368.669 172.449 353.067 169.552 339.99 163.759C326.829 157.965 316.69 148.777 309.572 136.196C302.454 123.616 298.895 107.186 298.895 86.9075ZM449.741 177.54V175.305L427.145 171.084V6.33183L449.741 2.23477V0H411.254V177.54H449.741Z"
          fill="black"
        />
        <path
          className="loader-right"
          style={{ transform: "translateX(20%)" }}
          d="M150.847 86.9075C150.847 59.6765 142.859 39.2325 126.885 25.5756C110.993 11.9187 88.2732 5.0903 58.7246 5.0903H26.9413L28.4312 0H65.6772C87.6938 0 106.234 3.35215 121.298 10.0564C136.445 16.7607 147.908 26.4861 155.689 39.2325C163.552 51.979 167.483 67.4982 167.483 85.7901C167.483 105.986 163.055 122.912 154.199 136.569C145.425 150.143 133.465 160.365 118.318 167.235C103.172 174.105 86.0798 177.54 67.0429 177.54H28.4312L26.9413 172.449H62.9459C81.0723 172.449 96.6742 169.552 109.752 163.759C122.912 157.965 133.051 148.777 140.169 136.196C147.288 123.616 150.847 107.186 150.847 86.9075ZM0 177.54V175.305L22.5959 171.084V6.33183L0 2.23477V0H38.4876V177.54H0Z"
          fill="black"
        />
      </svg>
    </div>
  );
}

export default Splashscreen;
