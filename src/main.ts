import './style.scss';
import { hamburger } from './ts/hamburger';
import { scrollAddClass } from './ts/scrollAddClass';
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
// ### hamburger
// ----------------------------------------------------------------------
hamburger();

// ### Scroll Event
// ----------------------------------------------------------------------
window.addEventListener('scroll', () => {
  scrollAddClass();
});
