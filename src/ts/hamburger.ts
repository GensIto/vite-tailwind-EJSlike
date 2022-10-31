import { hamburgerBtn } from '../main';
import { hamburgerMenu } from '../main';
export const hamburger = () => {
  hamburgerBtn?.addEventListener('click', () => {
    hamburgerMenu?.classList.toggle('block');
    hamburgerMenu?.classList.toggle('hidden');
  });
};
