// src/pages/ViktorMarkPage.js
import React from 'react';
import { InfoPage } from './InfoPage';

export const YhteystiedotPage = () => {
  return (
    <InfoPage title="Yhteystiedot">
      <h1>Osoite</h1>
      <p>
        Galleria Hopeinen Sivellin<br/>
        Runeberginkatu 17<br/>
        00100 HELSINKI
      </p>
      <h1>Sähköposti</h1>
      <p>
        sv.galleria@gmail.com
      </p>
      <h1>Puhelin</h1>
      <p>+358 40 816 4856</p>
    </InfoPage>
  );
};