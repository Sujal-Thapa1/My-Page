/**
 * ZettaJoule-style GSAP animation utilities
 * Used across all sections for consistent reveal animations
 */
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

/**
 * Clip-path text reveal — ZJ's signature animation.
 * Text clips in from the bottom, like words rising from below the fold.
 */
export function revealClip(el, opts = {}) {
  const { delay = 0, duration = 1, stagger = 0, trigger = el, start = 'top 88%' } = opts;
  return gsap.fromTo(
    el,
    { clipPath: 'inset(0 0 100% 0)', y: 20, opacity: 0 },
    {
      clipPath: 'inset(0 0 0% 0)', y: 0, opacity: 1,
      duration, delay, stagger,
      ease: 'expo.out',
      scrollTrigger: { trigger, start, once: true },
    }
  );
}

/**
 * Fade up reveal — used for paragraphs and cards
 */
export function revealUp(el, opts = {}) {
  const { delay = 0, duration = 1, stagger = 0.08, trigger = el, start = 'top 88%' } = opts;
  return gsap.fromTo(
    el,
    { y: 48, opacity: 0 },
    {
      y: 0, opacity: 1,
      duration, delay, stagger,
      ease: 'expo.out',
      scrollTrigger: { trigger, start, once: true },
    }
  );
}

/**
 * Horizontal reveal — slide from left/right
 */
export function revealX(el, fromX = 60, opts = {}) {
  const { delay = 0, duration = 1.1, trigger = el, start = 'top 87%' } = opts;
  return gsap.fromTo(
    el,
    { x: fromX, opacity: 0 },
    {
      x: 0, opacity: 1,
      duration, delay,
      ease: 'expo.out',
      scrollTrigger: { trigger, start, once: true },
    }
  );
}

/**
 * Scale-in reveal — used for images / cards
 */
export function revealScale(el, opts = {}) {
  const { delay = 0, duration = 1.3, trigger = el, start = 'top 88%' } = opts;
  return gsap.fromTo(
    el,
    { scale: 0.92, opacity: 0, y: 24 },
    {
      scale: 1, opacity: 1, y: 0,
      duration, delay,
      ease: 'expo.out',
      scrollTrigger: { trigger, start, once: true },
    }
  );
}

/**
 * Draw a horizontal line from 0 to full width
 */
export function revealLine(el, opts = {}) {
  const { delay = 0, duration = 1.2, trigger = el, start = 'top 88%' } = opts;
  return gsap.fromTo(
    el,
    { scaleX: 0, transformOrigin: 'left center' },
    {
      scaleX: 1,
      duration, delay,
      ease: 'expo.out',
      scrollTrigger: { trigger, start, once: true },
    }
  );
}
