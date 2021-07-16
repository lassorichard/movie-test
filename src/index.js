import React from 'react';
import ReactDOM from 'react-dom';
import './scss/main.scss';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { RoutePage } from './pages/routePage';

ReactDOM.render(
  <React.StrictMode>
    <RoutePage />
  </React.StrictMode>,
  document.getElementById('root')
);
