import { useEffect } from 'react';
import Lenis from 'lenis';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function useLenis() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.4,
      easing: t => t === 1 ? 1 : 1 - Math.pow(2, -10 * t), // easeOutExpo
      orientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 0.9,
      touchMultiplier: 1.5,
      infinite: false,
    });

    window.lenis = lenis;

    /**
     * CRITICAL for sticky + GSAP ScrollTrigger to work with Lenis:
     *
     * Lenis intercepts scroll, so ScrollTrigger's scroll position
     * readings must come from Lenis, not the native window.scroll.
     * We do this by:
     *   1. Using lenis.on('scroll') to update ScrollTrigger
     *   2. Telling ScrollTrigger to use a custom scroller proxy
     */

    // Tell ScrollTrigger to use Lenis's virtual scroll position
    lenis.on('scroll', ({ scroll, limit, velocity, direction, progress }) => {
      ScrollTrigger.update();
    });

    // Sync GSAP ticker with Lenis RAF loop
    function raf(time) {
      lenis.raf(time * 1000);
    }
    gsap.ticker.add(raf);
    gsap.ticker.lagSmoothing(0);

    // After React renders, refresh all ScrollTrigger instances
    // so they measure heights correctly with the sticky layout
    setTimeout(() => ScrollTrigger.refresh(), 100);

    return () => {
      lenis.destroy();
      gsap.ticker.remove(raf);
    };
  }, []);
}
