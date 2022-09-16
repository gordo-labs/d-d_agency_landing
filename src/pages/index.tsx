import Header from "../components/Header";
import Footer from "../components/Footer";
import Body from "../components/Body";
import { createContext, useState, useEffect } from "react";
import HomepageMenu from "../components/HomepageMenu";
import cx from "classNames";
import * as styles from "./index.module.scss";
import p5Types from "p5";
import Loadable from "@loadable/component";
import React from "react";

import Img from "gatsby-image";
import { SEO } from "../components/seo";

export const MenuContext = createContext(null);

export default function Index() {
  const [isOpen, setOpen] = useState(false);
  const [sketch, setSketch] = useState<any>();

  let x = 5;
  let y = 5;
  let slotSize = 15;
  let marginX: number;
  let marginY: number;

  const setup = (p5: p5Types, canvasParentRef) => {
    // use parent to render the canvas in this ref
    // (without that p5 will render the canvas outside of your component)
    p5.createCanvas(p5.windowWidth, p5.windowHeight).parent(canvasParentRef);
    p5.background("rgba(0,255,0, 0.0)");

    p5.pixelDensity(1);

    marginX = p5.windowWidth - p5.int(p5.windowWidth / slotSize) * slotSize;
    marginY = p5.windowHeight - p5.int(p5.windowHeight / slotSize) * slotSize;
  };

  const draw = (p5: p5Types) => {
    // p5.ellipse(x, y, 70, 70);
    // NOTE: Do not use setState in the draw function or in functions that are executed
    // in the draw function...
    // please use normal variables or class properties for these purposes
    // x++;

    for (
      let i = marginX / 3 + slotSize / 3;
      i < p5.width - marginX / 2;
      i += slotSize
    ) {
      for (
        let j = marginY / 2 + slotSize / 2;
        j < p5.height - marginY / 2;
        j += slotSize
      ) {
        let s = p5.map(
          p5.dist(i, j, p5.mouseX, p5.mouseY),
          0,
          p5.sqrt(p5.width * p5.width + p5.height * p5.height),
          slotSize,
          1
        );
        p5.ellipse(i, j, s, s);
      }
    }
  };

  const mousePressed = (p5: p5Types) => {
    slotSize = p5.random(10, 200);

    marginX = p5.windowWidth - p5.int(p5.windowWidth / slotSize) * slotSize;
    marginY = p5.windowHeight - p5.int(p5.windowHeight / slotSize) * slotSize;
  };

  const windowResized = (p5: p5Types) => {
    p5.resizeCanvas(p5.windowWidth, p5.windowHeight);
    marginX = p5.windowWidth - p5.int(p5.windowWidth / slotSize) * slotSize;
    marginY = p5.windowHeight - p5.int(p5.windowHeight / slotSize) * slotSize;
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      const Sketch = Loadable(() => import("react-p5"));
      setSketch(
        <Sketch
          setup={setup}
          draw={draw}
          // mousePressed={mousePressed}
          windowResized={windowResized}
        />
      );
    }

    return () => {};
  }, []);

  return (
    <div className="text-white bg-black">
      <div
        className={cx("fixed left-0 top-0 w-screen h-screen", styles.sketch)}>
        {sketch}
      </div>

      <main className={cx("h-screen w-screen", styles.gradientBg)}>
        {/* <div className="border-b border-white opacity-40 fixed md:bottom-20 bottom-20 right-0 w-2/5"></div> */}
        {/* <img
          src="/d_d_agency_man_2.png"
          className="fixed right-28 w-1/3 top-28"
          alt="d_d agency interactor"
        /> */}
        <div className={cx("h-screen w-screen relative")}>
          {
            <div className="md:w-basic w-full flex justify-center">
              <div className="flex flex-col w-screen m-10 md:m-28 md:text-lg ">
                <div className="flex mr-20 mb-10 md:mr-0">
                  <img
                    src={"/logo.svg"}
                    alt="Developer DAO agency logo"
                    width={300}
                    height={60}
                  />
                </div>

                <Body
                  headlineText="WHO WE ARE"
                  bodyText={
                    <>
                      <p className="md:text-4xl text-2xl w-full font-semibold tracking-wider">
                        We are a collective venture builder focused on investing
                        our time into pushing forward web3 products and
                        services.
                      </p>
                    </>
                  }
                  bottomText={
                    <div className="flex flex-col md:flex-row w-full">
                      <a
                        className="flex"
                        href="https://airtable.com/shrYeCK5aWiLcpQ9x">
                        <button className="rounded-xl cursor-pointer transform transition border-2 border-white/20 px-6 py-3 mt-4 hover:bg-white hover backdrop-blur bg-white/5 hover:text-black tracking-wide font-bold">
                          Work with us
                        </button>
                      </a>
                      <p className="md:relative cursor-pointer fixed bottom-0 left-0 px-6 py-3 md:mt-4 m-4 md:ml-4 md:mb-0 tracking-wide group font-extralight hover:opacity-100 opacity-80">
                        Find us{" "}
                        <span className="ml-5 group-hover:opacity-100 transform transition  duration-200 opacity-0">
                          ➡️ at{" "}
                          <a href="https://www.developerdao.com/">
                            <span className="hover:underline cursor-pointer">
                              Developer DAO
                            </span>
                          </a>{" "}
                          🦄
                        </span>
                      </p>
                    </div>
                  }
                />
              </div>
            </div>
          }
        </div>
      </main>
    </div>
  );
}

export const Head = () => (
  <>
    <title>D_D Agency</title>
    <meta
      name="description"
      content={`We are a collective venture builder focused on investing our time into pushing forward web3 products and services.`}
    />
    <meta
      name="image"
      content={`https://verdant-lokum-b64c67.netlify.app/d_d_agency_social.png`}
    />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content={"D_D Agency"} />
    {/* <meta name="twitter:url" content={seo.url} /> */}
    {/* <meta name="twitter:description" content={seo.description} /> */}
    <meta
      name="twitter:image"
      content={`https://verdant-lokum-b64c67.netlify.app/d_d_agency_social.png`}
    />
    {/* <meta name="twitter:creator" content={seo.twitterUsername} /> */}
    {/*     <link
      rel="icon"
      href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='0.9em' font-size='90'>👤</text></svg>"
    /> */}
  </>
);
