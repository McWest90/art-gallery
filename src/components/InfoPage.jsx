// src/pages/InfoPage.js

import React from 'react';
import { Link } from 'react-router-dom';
import './InfoPage.css';

export const InfoPage = ({ title, children }) => {
  return (
    <div className="info-page-container">
      <div className="info-page-content">
        <h1 className="info-page-title">{title}</h1>
        <div className="info-page-text">
          {children} 
        </div>
        <Link to="/" className="back-button">
          &larr; Galleria
        </Link>
      </div>
    </div>
  );
};