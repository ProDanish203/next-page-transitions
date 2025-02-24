"use client";
import React, { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import SplitType from "split-type";

gsap.registerPlugin(useGSAP);

const InfoPage = () => {
  const container = useRef(null);

  useGSAP(
    () => {
      const text = new SplitType(".info p", {
        types: "lines",
        tagName: "div",
        lineClass: "line",
      });

      text.lines?.forEach((line) => {
        const content = line.innerHTML;
        line.innerHTML = `<span>${content}</span>`;
      });

      gsap.set(".info p .line span", { y: 400, display: "block" });

      gsap.to(".info p .line span", {
        y: 0,
        duration: 2,
        stagger: 0.075,
        ease: "power4.out",
        delay: 0.25,
      });

      return () => {
        if (text) text.revert();
      };
    },
    { scope: container }
  );

  return (
    <div className="info" ref={container}>
      <div className="col">
        <img src="/5.jpg" alt="image-5" />
      </div>
      <div className="col">
        <p>
          Animations are a great way to make your website more interactive and
          dynamic. They can be used to create subtle effects that add to the
          user experience. For example, you can use animations to make your
          website more engaging by adding transitions between pages, hover
          effects on buttons, and animated loading indicators. These animations
          can guide users attention, provide feedback, and make the overall
          experience more enjoyable.
        </p>
      </div>
    </div>
  );
};

export default InfoPage;
