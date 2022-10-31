import './style.scss';
import { hamburger } from './ts/hamburger';
// ======================================================================
//
// ## DOM
//
// ======================================================================
// ### hamburger
// ----------------------------------------------------------------------
export const hamburgerBtn = document.querySelector('#hamburger-btn');
export const hamburgerMenu = document.querySelector('#hamburger-menu');
// ======================================================================
//
// ## functions
//
// ======================================================================
hamburger();
