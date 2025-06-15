import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import Masonry from 'react-masonry-css';
import './index.css';

export const HomePage = () => {
  const cursorRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);

  const sectionsData = [
    {
      title: "Taidekoulu",
      text: `Hopeinen Sivellin tarjoaa laadukkaita kuvataidekursseja Helsingissä. TaM Victor Markin johdolla opetetaan öljymaalausta, akryyliä, ikonimaalausta ja piirustusta aloittelijoille ja edistyneille – rakkaudella ja ammattitaidolla.`,
      images: [ // Картинки для "Taidekoulu"
        { src: "/other/Art school/IMG-20250506-WA0024.jpg", alt: "Taidekoulu" },
        { src: "/other/Art school/IMG-20250127-WA0045.jpg", alt: "Taidekoulu" },
        { src: "public/other/Art school/IMG-20250323-WA0033.jpg", alt: "Taidekoulu"}
      ]
    },
    {
      title: "Viktor mark",
      text: `TaM Viktor Mark opiskeli taidetta Pietarissa ja suoritti diplomityönsä mestari Zagonek Vyacheslavin johdolla. Hänen töitään on ollut esillä näyttelyissä Saksassa, Ranskassa, Australiassa, Suomessa ja useissa muissa maissa.`,
      images: [ // Картинки для "Viktor mark"
        { src: "/other/Viktor mark/IMG-20250127-WA0021.jpg", alt: "Viktor Mark" },
        { src: "/other/Viktor mark/IMG-20250202-WA0032.jpg", alt: "Viktor Mark" },
        { src: "/other/Viktor mark/IMG-20250212-WA0100.jpg", alt: "Viktor Mark" }
      ]
    },
    {
      title: "Kehystämö",
      text: `SV Galleria Helsingissä tarjoaa 40 m² valoisan näyttelytilan isolla ikkunagallerialla Runeberginkadulla. Avoin haku, vuokra alkaen 600 €/viikko. Etusijalla erityistä tukea tarvitsevat taiteilijat.`,
      images: [ // Картинки для "Kehystämö"
        { src: "/other/Framing shop/2025-06-15 205525.png", alt: "Kehystämö" },
        { src: "/other/Framing shop/DSCN3952.JPG", alt: "Kehystämö" }
      ]
    }
  ];


  useEffect(() => {
    const loader = document.querySelector(".lds-roller");
    const loadingCover = document.getElementById("loading-text-intro");
    setTimeout(() => {
      document.querySelector(".main-container").style.visibility = "visible";
      document.body.style.overflow = "auto";
      const yPosition = { y: 0 };

      const animateIntro = () => {
        const duration = 900;
        const start = performance.now();
        const animate = (time) => {
          const elapsed = time - start;
          const progress = Math.min(elapsed / duration, 1);
          yPosition.y = progress * 100;
          loadingCover.style.transform = `translate(0, ${yPosition.y}%)`;
          if (progress < 1) {
            requestAnimationFrame(animate);
          } else {
            loadingCover.style.display = "none";
            loader.style.display = "none";
          }
        };
        requestAnimationFrame(animate);
      };
      animateIntro();
    }, 500);

    const btns = document.querySelectorAll("nav > .a");
    const handleCursor = (e) => {
      const x = e.clientX;
      const y = e.clientY;
      cursorRef.current.style.left = `${x}px`;
      cursorRef.current.style.top = `${y}px`;
    };
    const update = function (e) {
      const span = this.querySelector("span");
      if (e.type === "mouseleave") {
        span.style.cssText = "";
      } else {
        const { offsetX: x, offsetY: y } = e;
        const { offsetWidth: width, offsetHeight: height } = this;
        const walk = 20;
        const xWalk = (x / width) * (walk * 2) - walk;
        const yWalk = (y / height) * (walk * 2) - walk;
        span.style.transform = `translate(${xWalk}px, ${yWalk}px)`;
      }
    };

    btns.forEach((b) => b.addEventListener("mousemove", update));
    btns.forEach((b) => b.addEventListener("mouseleave", update));
    document.addEventListener("mousemove", handleCursor);

    return () => {
      btns.forEach((b) => b.removeEventListener("mousemove", update));
      btns.forEach((b) => b.removeEventListener("mouseleave", update));
      document.removeEventListener("mousemove", handleCursor);
    };
  }, []);

  const galleryImages = [
    { src: "/arts/30x40  7.jpg", alt: "Art 1" },
    { src: "/arts/40ч50  2.jpg", alt: "Art 2" },
    { src: "/arts/DSCN3952.JPG", alt: "Art 3" },
    { src: "/arts/DSCN4708.JPG", alt: "Art 4" },
    { src: "/arts/IMG-20250430-WA0000.jpeg", alt: "Art 5" },
    { src: "/arts/IMG-20250430-WA0002.jpeg", alt: "Art 6" },
    { src: "/arts/IMG-20250430-WA0007.jpeg", alt: "Art 7" },
    { src: "/arts/IMG-20250430-WA0014.jpeg", alt: "Art 8" },
    { src: "/arts/SDC11381.JPG", alt: "Art 9" },
    { src: "/arts/SDC11915.JPG", alt: "Art 10" },
    { src: "/arts/SDC12382 (2).JPG", alt: "Art 11" },
    { src: "/arts/SDC13401 (2).jpg", alt: "Art 12" },
    { src: "/arts/Untitled presentation.jpg", alt: "Art 13" },
    { src: "/arts/Untitled-1.jpg", alt: "Art 14" },
    { src: "/arts/UntitledHHHHHHHHHHHHH-3.jpg", alt: "Art 15" }
  ];
const breakpointColumnsObj = {
    default: 3, // <-- ГЛАВНОЕ ИЗМЕНЕНИЕ
    1100: 2,
    700: 1
  };

  const middleIndex = Math.ceil(galleryImages.length / 2);
  const row1Images = galleryImages.slice(0, middleIndex);
  const row2Images = galleryImages.slice(middleIndex);

  return (
    <>
      {/* Loader */}
      <div className="lds-roller">
        <div></div><div></div><div></div><div></div>
        <div></div><div></div><div></div><div></div>
      </div>
      <div id="loading-text-intro"><p>Loading</p></div>

      {/* Гамбургер */}
      <div
        className="hamburger pointer-events-auto"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>

      {/* Боковое меню */}
      <div className={`mobile-menu ${menuOpen ? "open" : ""}`}>
        <Link to="/" onClick={() => setMenuOpen(false)}>Galleria</Link>
        <Link to="/book" onClick={() => setMenuOpen(false)}>BOOK</Link>
        <a href="#" onClick={() => setMenuOpen(false)}>Taidekoulu</a>
        <a href="#" onClick={() => setMenuOpen(false)}>Vuokraaminen</a>
        <a href="#" onClick={() => setMenuOpen(false)}>Tilaustyo</a>
        <a href="#" onClick={() => setMenuOpen(false)}>yhteustiedot</a>
      </div>

      <div className="main-container" style={{ visibility: "hidden" }}>
        {/* Навигация для десктопа */}
        <nav className="header ended">
          <Link to="/" className="active a"><span>Galleria</span></Link>
          <Link to="/book" className="a"><span>BOOK</span></Link>
          <a className="a"><span>Taidekoulu</span></a>
          <a className="a"><span>Vuokraaminen</span></a>
          <a className="a"><span>Tilaustyo</span></a>
          <a className="a"><span>yhteustiedot</span></a>
          <div className="cursor" ref={cursorRef}></div>
        </nav>
        <div className="main-container" style={{ visibility: "hidden" }}></div>

        <div className="first">
          {/* ===== НАЧАЛО: ЗАМЕНА ДЛЯ MASONRY ===== */}
          <div className="scrolling-gallery">
            {/* Первая строка, движется влево */}
            <div className="scrolling-gallery-row row-1">
              {/* Дублируем изображения для бесшовной прокрутки */}
              {[...row1Images, ...row1Images].map((image, index) => (
                <div className="gallery-image" key={`row1-${index}`}>
                  <img src={image.src} alt={image.alt} />
                </div>
              ))}
            </div>

            {/* Вторая строка, движется вправо */}
            <div className="scrolling-gallery-row row-2">
              {/* Также дублируем */}
              {[...row2Images, ...row2Images].map((image, index) => (
                <div className="gallery-image" key={`row2-${index}`}>
                  <img src={image.src} alt={image.alt} />
                </div>
              ))}
            </div>
          </div>
          {/* ===== КОНЕЦ: ЗАМЕНА ДЛЯ MASONRY ===== */}
          <div className="first-content">
            <h2>SV Galleria</h2>
            <h1>HOPEINEN SIVELLIN</h1>
            <p className="ended">
              Tervetuloa SV Galleriaan, Helsingin keskustassa Runeberginkadulla sijaitsevaan monipuoliseen taideliikkeeseen ja näyttelygalleriaan. Vuonna 2005 perustettu galleriamme on kasvanut vahvaksi kuvataiteen edistäjäksi, joka tarjoaa taiteilijoille ja taideystäville ainutlaatuisen kohtaamispaikan. Sijaintimme Kampin metroaseman läheisyydessä tekee meistä helposti saatavilla olevan taidekohteen niin paikallisille kuin kauempaa saapuville vieraille.
            </p>
          </div>
        </div>

        <div className="section second">
  <div className="second-container">

    {/* --- Левая колонка с текстом --- */}
    <div className="text-content-column">
      <ul>
        {sectionsData.map((section, index) => (
          <li
            key={section.title}
            className={activeIndex === index ? "active" : ""}
            onClick={() => setActiveIndex(index)}
          >
            {section.title}
          </li>
        ))}
      </ul>
      <p id="content">{sectionsData[activeIndex].text}</p>
    </div>

    {/* --- Правая колонка с галереей Masonry --- */}
    <div className="gallery-column">
      <Masonry
        breakpointCols={breakpointColumnsObj}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
        key={activeIndex} // ВАЖНО: этот ключ заставляет галерею перерисовываться при смене activeIndex
      >
        {sectionsData[activeIndex].images.map((image, index) => (
          <div key={index} className="masonry-image-item">
            <img src={image.src} alt={image.alt} style={{ width: '100%' }} />
          </div>
        ))}
      </Masonry>
    </div>

  </div>
</div>

        <div className="third">
          <h1>Making ART</h1>
          <p>
            Tällä hetkellä Viktor Mark opettaa yli sataa oppilasta omassa Hopeinen Sivellin -taidekoulussaan sekä kansalaisopistossa Haminan seudulla.
          </p>
          <p>
            Hän toteuttaa myös seinä- ja lasimaalauksia, ja hänen suunnittelemiaan ikoneja on käytetty Novgorodin alueelle rakennetussa kirkossa. Viktor on maalannut lukuisia teoksia.
          </p>
          <p>
            Hän on ohjannut lasten nukketeatteria ja tekee yhteistyötä poikansa, säveltäjä Andrey Markin kanssa. Viktorilla on runsaasti luovia ideoita ja meneillään useita taideprojekteja.
          </p>
        </div>

        <h4 className="footer">
          Created by Stanislav "McWest" based on
          <a href="https://dribbble.com/shots/6767548-The-Three-Graces-Concept" target="_blank" rel="noopener noreferrer">
            Tom Bogner Design
          </a>.
        </h4>
      </div>
    </>
  );
};
