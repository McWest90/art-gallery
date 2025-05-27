import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import "./HomePage.css";

export const HomePage = () => {
  const cursorRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);

  const contentTexts = [
    `Meidän kurssin avainsana – jokainen ihminen on luova ja jokaisen sisällä on taiteilija. Meidän tavoite  on antaa oikeat avaimet, jotta hän voisi astua taidemaailman ilman rajoja.
Vuonna 2009 perustettu ja vuonna 2022 uudistunut taidetila Hopeinen Sivellin tarjoaa kaikille taidetta rakastaville, iästä ja kokemuksesta riippumatta, aloittelijoille ja pitkään harrastanneille ammattilisesti ja rakkaudella opastettuja kuvataidekursseja.
Suunniteletko taideuraa ja kaipaat teho – intensiivikursseja ja  opastusta tai haluaisit toteuttaa haaveitasi ja opiskella maalausta rennosti ja saada uusia elämyksia – Hopeinen Sivellin on oikea paikka.
Gallerian tilassa pidetään  erilaiseja taidemaalaus- ja piirustuskursseja ja työpajoja maanantaista suunnuntaihin . Kursillamme opetellaan moniaperustaide tekniikoita ja menetelmiä. Öljyvärimaalaus, akryylimaalaus, akvarellimaalaus, ikonimaalaus, pastelli, tempera, piirustus eri materiaaleilla  akateemisella ja modernilla tavalla .Vanhanajan teknikoita tai sekatekniikka, intuitiivinen, abstraktimaalaus eri aiheen pohjalta – kurssilta löytyy erilaisia mahdollisuuksia ja opiskelutapoja. Ryhmäopetus eri teemoin, työpaja, henkilökohtainen opastus pienissä ryhmissä, yksityisiä taidetuntia.
Kurssien ohjelma on räätälöity niin että opiskeljat saavat aina ammattilista ja henkilökohtaista opetusta.  Opettajallamme on  akateeminen, TaM tausta ja vuosien työskentelyä taidealalla millä voidaan pätevästi yhdistää klassista oppia, nykyajan trendejä ja menetelmiä opettaen oppilaalle askel askeleelta.
Taidetta harrastanneille ja edistyneille taiteilijoille pidetään myös yksityisiä kuvataidetunteja sopimuksen mukaan. Tämä opiskelutapa antaa mahdollisuuden  vastata oppilaan tarpeita ja näin rätälöityä hänelle intensiivista opetusta.
Opettajat
TaM Victor Mark on ollut Hopeinen Sivellin -taidekoulun opettajana jo monta vuotta. Hänellä on ylempi koulutus ja monivuotinen kokemus alalla.
Victor Mark on johtava opettaja ja koulun perustaja vuodesta 2008. Kurssilla hän opettaa pääsääntöisesti öljy- ja akryylimaalausta, ikonimaalausta ja piirustusta sekä ryhmässä että yksityistunneilla ma, ti, ke,su. Hänen opetusmenetelmän pääpaine on akateeminen, ammattilinen ohjaus rakkaudella. Hän uskoo, että paras lopputulos ja tyytyväisyys opiskelijoille tulee, kun intohimo ja luovuus ovat yhdistetty taidetekniikan hallitsemiseen ja perussääntöjen ymmärrykseen. Laaja kokemus mahdollistaa Victorin  antamaan opiskelijoille tietoja kaikista maalaus- ja piirustus päätekniikoista.`,
    `Viktor opiskeli taidemaalausta Pietarissa. Viktorin diplomityön tentissä opettajana oli tunnettu taiteilija Zagonek Vyacheslav Frantsovits. Viktorilla on ollut näyttelyjä ympäri maailmaa. Näyttelyitä on ollut Saksassa, Ranskassa, Suomessa, Kazakstanissa, Australiassa, Venäjällä jne. Muutaman vuoden ajan hän on tehnyt maalauksia Puolan gallerioille ja Ranskan taidehuutokauppoja varten. Viktor on opetellut flaamilaisen maalaustekniikan. Tämän jälkeen hän aloitti kehittämään muotokuvamaalaamisen ja maisemien ulkona maalamisen taitoja. Viisi vuotta sitten Viktor  perusti  oman galleriansa "Hopeinen Sivellin" Helsinkiin, Runeberginkatu 17.
Hän työskentelee monipuolisesti ja menestyksellisesti taideopettajana. Täällä  hetkellä  hänellä on yhteensä yli sata oppilasta omassa "Hopeinen Sivellin"- taidekoulussa ja kansalaisopiston ryhmissä Haminan seudulla. Viktor tekee seinämaalauksia ja lasimaalauksia. Novgorodin alueella tehdään  ikoneja Viktorin suunnitelmien mukaan rakennetun kirkon ikonostaasiin. Viktor  on maalannut paljon tauluja. Hän on tehnyt myös lasten kanssa nukkeja ja pitänytt esityksiä omassa nukketeatterissa.  Näytelmän musiikkisäestyksen on tehnyt hänen poikansa Andrey Mark, muusikko ja säveltäjä.  Täällä  hetkellä Viktorilla  on paljon luovia ideoita ja mielenkiintoisia projekteja.`,
    `SV Galleria on n.40 neliön tila, tänä kesänä uusittu näyttelytilaa. Tilaa vuokrataan yksityisille ja yhteisöille hakumenettelyn kautta. Etusijalla ovat erityistä tukea tarvitsevat taiteilijat ja ryhmät. Galleriaamme on avoin ja jatkuva haku. Näyttelytilan ikkuna  5x 2,5 m aukenee suoraan Runeberginkadulle. Syvät ikkunapenkit. sijaitsevat lattiatasossa Seinien pinta-ala on noin 56 m2 – isojen seinien pituudet ovat 18 m, 5m, ja 8,5 m. Huonekorkeus on 2,7 m. (pääoven korkeus on 2 m) ja korkeus mahdollistaa isokokoisten teosten esittelyn. Seinät on maalattu valkoisiksi ja lattiat ovat harmaan vaaleat. Valaistuksena on kiskoissa liikuteltavat led-kohdevalaisimet. Tiloissa on myös wc ja pieni varastotila.  Meillä on oma kehystämö taiteilijoiden avuksi.  Vv 2022-2023 näyttelyajat ovat haettavissa. Kysy lisää! Hakuohjeet, vuokra ja tarkemmat tiedot Näyttelytilan vuokra vuosina 2022 -2023 on  600 euroa/1viikko, 800 euroa /10 päivää, 1200 euroa / 20 päivää tai sopimuksen mukaan.
Teosten myyntiprovisio on 20 %.
Vuokraan sisältyy tilavuokra, valaistus, lämmitys, näyttelyn valvonta ja siivous. Näyttelyn pystytys- ja purkuavusta sekä tiedotus- ja markkinointiavusta sovitaan gallerian henkilökunnan kanssa. 
Hakemukseen tulee liittää: 
- vapaamuotoinen hakemus, joka sisältää teoksista kuvaesimerkkejä, koot ja näyttelyn ajankohdasta 
- hakijan yhteystiedot ja hakemuksen palautuskuori 
- luonnoksia tarjottavasta näyttelystä tai aiemmasta tuotannosta 
-mahdollinen näyttelysuunnitelma, teosluettelo (taiteilijan ja teoksen nimi, tekniikka, koko ja 
valmistusvuosi) 
- CV eli henkilön ansioluettelo 
- portfolio, mikäli sellainen on tehty 
-näyttelyn mainoskuva , jos se on jo valmis
Näytteilleasettajat valitsee Kaarisilta ry:n näyttelytoimikunta.
Lisätietoja hausta ja vuokrauksesta: puh +358 40 8164856, Viktor tai sv.galleria@gmail.com ,tai POSTIOSOITTEESEEN  Galleria Hopeinen Sivellin,
Runeberginkatu 17 
00100 Helsinki
Ilta –ja juhla tilaisuuksiin Galleriatilaa vuokrataan myös yksityisille, yrityksille ja yhteisöille max 45 hengen iltatilaisuuksiin pe klo 17-20-00, la  17-20.00 ja su sovittuun aikaan. Lisätietoja vuokrauksesta Viktorilta.`
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
        <a href="#" onClick={() => setMenuOpen(false)}>Kehystamo</a>
        <a href="#" onClick={() => setMenuOpen(false)}>Tilaustyo</a>
        <a href="#" onClick={() => setMenuOpen(false)}>yhteustiedot</a>
      </div>

      <div className="main-container" style={{ visibility: "hidden" }}>
        {/* Навигация для десктопа */}
        <nav className="header ended">
          <Link to="/" className="active a"><span>Galleria</span></Link>
          <Link to="/book" className="a"><span>BOOK</span></Link>
          <a className="a"><span>Taidekoulu</span></a>
          <a className="a"><span>Kehystamo</span></a>
          <a className="a"><span>Tilaustyo</span></a>
          <a className="a"><span>yhteustiedot</span></a>
          <div className="cursor" ref={cursorRef}></div>
        </nav>

        <div className="first">
          <h2>SV Galleria</h2>
          <h1>HOPEINEN SIVELLIN</h1>
          <p className="ended">
            Antonio Canova’s statue The Three Graces is a Neoclassical sculpture,
            in marble, of the mythological three Charites, daughters of Zeus –
            identified as Euphrosyne, Aglaea and Thalia – representing youth/beauty,
            mirth, and elegance. They presided over banquets to delight the guests of the gods.
          </p>
        </div>

        <div className="section second">
          <div className="second-container">
            <ul>
              <li
                className={activeIndex === 0 ? "active" : ""}
                onClick={() => setActiveIndex(0)}
              >
                Taidekoulu
              </li>
              <li
                className={activeIndex === 1 ? "active" : ""}
                onClick={() => setActiveIndex(1)}
              >
                Viktor mark
              </li>
              <li
                className={activeIndex === 2 ? "active" : ""}
                onClick={() => setActiveIndex(2)}
              >
                Vuokraaminen
              </li>
            </ul>
            <p id="content">{contentTexts[activeIndex]}</p>
          </div>
        </div>

        <div className="third">
          <h1>The Making</h1>
          <p>
            Canova's assistants roughly blocked out the marble, leaving Canova to perform
            the final carving and shape the stone to highlight the Graces soft flesh.
            This was a trademark of the artist, and the piece shows a strong allegiance
            to the Neo-Classical movement in sculpture.
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
