import React, { useState, useContext, useEffect } from "react";
import "./styles/App.css";
import { MouseContext } from "./context/mouseContext";
import Layer from "./components/Layer";
import Image from "./components/Image";
import Video from "./components/Video";
import { ReactLenis, useLenis } from "lenis/react";
import { useLanguage } from "./context/languageContext";
import Intro from "./data/intro.json";

function App() {
  const { hover, normal } = useContext(MouseContext);
  const lenis = useLenis();
  const { lang, setLang } = useLanguage();

  useEffect(() => {
    if (!lenis) return;

    const onScroll = (e) => {
      
    };

    lenis.on("scroll", onScroll);

    return () => {
      lenis.off("scroll", onScroll);
    };
  }, [lenis]);

  return (
    <>
      <ReactLenis root />
      {/* <Cursor /> */}
      <main >
        <p className="bold" style={{letterSpacing: "-0.10em"}}>{Intro.intro[lang]}</p>
        <div className="nav">
          <a
            href="mailto:jjjules.n@gmail.com"
            className="bold cursor-pointer hover:underline"
            style={{letterSpacing: "-0.10em", marginTop:"0.5%"}}
          >
            jjjules.n@gmail.com
          </a>
          <div style={{marginRight:"5%", marginTop:"2%"}}>
            <button className="scripttype" onClick={() => setLang("fr")}>
              Fr / 
            </button>
            <button className="scripttype" onClick={() => setLang("en")}>
              En
            </button>
          </div>
        </div>
        <section>
          <Layer>
            <Image gridColumn="1 /6 " name="errance_01" margin=""/>
            <Image gridColumn="7 /13 " name="nuitblue_02" margin="60%" />
          </Layer>
          <Layer>
            <Video gridColumn="2 /11 " name="nuitblue_03" margin="8%"  />
          </Layer>
          <Layer>
            <Video gridColumn="5 /13 " name="mapp_02" margin="8%" />
            <Image gridColumn="1 /4" name="wales_01" margin="20%" />
          </Layer>
          <Layer>
            <Video gridColumn="9 /12 " name="mapp_03" margin="-50%" />
          </Layer>
          <Layer>
            <Image gridColumn="2 /8 " name="anatolie_03" margin="-20%" />
            <Image gridColumn="10 /13 " name="anatolie_02" margin="180%" />
          </Layer>
          <Layer>
            <Image gridColumn="6 /12 " name="anatolie_04" margin="10%" />
          </Layer>
          <Layer>
            <Image gridColumn="2 /7 " name="triplex_01" margin="60%" />
            <Image gridColumn="11 /12 " name="triplex_03" margin="220%" />
          </Layer>
          <Layer>
            <Image gridColumn="9 /11 " name="triplex_04" margin="-80%" />
          </Layer>
          <Layer>
            <Video gridColumn="1 /7 " name="Ada" margin="-20%" />
          </Layer>
          <Layer>
            <Video gridColumn="9 /13 " name="AllianceNav" margin="" />
          </Layer>
          <Layer>
            <Image gridColumn="2 /4 " name="farley_01" margin="50%" />
            <Image gridColumn="8 /11 " name="wales_02" margin="140%" />
          </Layer>
          <Layer>
            <Image gridColumn="4 /13 " name="inflated_01" margin="20%" />
          </Layer>
          <Layer>
            <Video gridColumn="2 /6 " name="anim_02" margin="20%" />
          </Layer>
          <Layer>
            <Image gridColumn="8 /12 " name="pdfe_02" margin="20%" />
            <Image gridColumn="3 /6 " name="pdfe_01" margin="-60%" />
          </Layer>
          <Layer>
            <Video gridColumn="1 /13 " name="pdfe_05" margin="10%" />
            <Video gridColumn="1 /5 " name="pdfe_04" margin="10%" />
          </Layer>
          <Layer>
            <Video gridColumn="1 /7 " name="mtnslab_01" margin="30%" />
            <Video gridColumn="8 /13 " name="mtnslab_04" margin="-20%" />
          </Layer>
          <Layer>
            <Video gridColumn="6 /12 " name="mtnslab_03" margin="0%" />
            <Image gridColumn="1 /5 " name="img_01" margin="60%" />
          </Layer>
          <Layer>
            <Image gridColumn="3 /12 " name="chimie_01" margin="0%" />
          </Layer>
          <Layer>
            <Video gridColumn="4 /12 " name="etape_01" margin="0%" />
          </Layer>
          <Layer>
            <Image gridColumn="1 /11 " name="mayman_02" margin="0%" />
          </Layer>
          <Layer>
            <Image gridColumn="6 /12 " name="mayman_01" margin="0%" />
          </Layer>
          <Layer>
            <Video gridColumn="1 /12 " name="bioitalia_01" margin="0%" />
          </Layer>
        </section>

        {/* Return to Top Button */}
        <button
          className="scripttype  return-to-top"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          aria-label="Return to top of page"
          style={{
            cursor: "pointer",
            background: "none",
            border: "none",
            padding: 0,
            marginTop: "10rem",
            marginLeft: "5%",
          }}
        >
          {lang === "fr" ? "Re t o u r" : "To p"}
        </button>
      </main>
    </>
  );
}

export default App;
