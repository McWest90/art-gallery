// src/pages/TaidekouluPage.js
import React from 'react';
import { InfoPage } from './InfoPage';

export const TaidekouluPage = () => {
  return (
    <InfoPage title="Taidekoulu">
      {/* Сюда вы можете добавлять любой JSX: текст, картинки, списки */}
      <h1>Taidekurssit Hopeinen Sivellin</h1>
      <p>Meidän kurssin avainsana – jokainen ihminen on luova ja jokaisen sisällä on taiteilija. Meidän tavoite  on antaa oikeat avaimet, jotta hän voisi astua taidemaailman ilman rajoja.
Vuonna 2009 perustettu ja vuonna 2022 uudistunut taidetila Hopeinen Sivellin tarjoaa kaikille taidetta rakastaville, iästä ja kokemuksesta riippumatta, aloittelijoille ja pitkään harrastanneille ammattilisesti ja rakkaudella opastettuja kuvataidekursseja.
Suunniteletko taideuraa ja kaipaat teho – intensiivikursseja ja  opastusta tai haluaisit toteuttaa haaveitasi ja opiskella maalausta rennosti ja saada uusia elämyksia – Hopeinen Sivellin on oikea paikka.
Gallerian tilassa pidetään  erilaiseja taidemaalaus- ja piirustuskursseja ja työpajoja maanantaista suunnuntaihin . Kursillamme opetellaan moniaperustaide tekniikoita ja menetelmiä. Öljyvärimaalaus, akryylimaalaus, akvarellimaalaus, ikonimaalaus, pastelli, tempera, piirustus eri materiaaleilla  akateemisella ja modernilla tavalla .Vanhanajan teknikoita tai sekatekniikka, intuitiivinen, abstraktimaalaus eri aiheen pohjalta – kurssilta löytyy erilaisia mahdollisuuksia ja opiskelutapoja. Ryhmäopetus eri teemoin, työpaja, henkilökohtainen opastus pienissä ryhmissä, yksityisiä taidetuntia.
Kurssien ohjelma on räätälöity niin että opiskeljat saavat aina ammattilista ja henkilökohtaista opetusta.  Opettajallamme on  akateeminen, TaM tausta ja vuosien työskentelyä taidealalla millä voidaan pätevästi yhdistää klassista oppia, nykyajan trendejä ja menetelmiä opettaen oppilaalle askel askeleelta.
Taidetta harrastanneille ja edistyneille taiteilijoille pidetään myös yksityisiä kuvataidetunteja sopimuksen mukaan. Tämä opiskelutapa antaa mahdollisuuden  vastata oppilaan tarpeita ja näin rätälöityä hänelle intensiivista opetusta.
</p>
<h1>Opettajat</h1>
<p>TaM Victor Mark on ollut Hopeinen Sivellin -taidekoulun opettajana jo monta vuotta. Hänellä on ylempi koulutus ja monivuotinen kokemus alalla.
Victor Mark on johtava opettaja ja koulun perustaja vuodesta 2008. Kurssilla hän opettaa pääsääntöisesti öljy- ja akryylimaalausta, ikonimaalausta ja piirustusta sekä ryhmässä että yksityistunneilla ma, ti, ke,su. Hänen opetusmenetelmän pääpaine on akateeminen, ammattilinen ohjaus rakkaudella. Hän uskoo, että paras lopputulos ja tyytyväisyys opiskelijoille tulee, kun intohimo ja luovuus ovat yhdistetty taidetekniikan hallitsemiseen ja perussääntöjen ymmärrykseen. Laaja kokemus mahdollistaa Victorin  antamaan opiskelijoille tietoja kaikista maalaus- ja piirustus päätekniikoista.</p>
      <img src="/other/Art school/IMG-20250506-WA0024.jpg" alt="Процесс обучения" style={{maxWidth: '100%', borderRadius: '8px', marginTop: '1rem'}}/>
    </InfoPage>
  );
};