import Header from './Header';
import Footer from './Footer';
import Preloader from '../Reusable/Preloader';
import { useState, useEffect } from 'react';

function Layout({ children }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    // Load all JS files after component mounts
    const loadScripts = async () => {
      const scripts = [
        '/js/jquery-3.7.1.min.js',
        '/js/bootstrap.min.js',
        '/js/jquery.slicknav.js',
        '/js/swiper-bundle.min.js',
        '/js/jquery.waypoints.min.js',
        '/js/jquery.counterup.min.js',
        '/js/jquery.magnific-popup.min.js',
        '/js/SmoothScroll.js',
        '/js/wow.min.js',
        '/js/function.js'
      ];

      for (const src of scripts) {
        try {
          await loadScript(src);
        } catch (err) {
          console.log(`Failed to load ${src}`);
        }
      }

      // Initialize WOW animations
      if (window.WOW) {
        new window.WOW().init();
      }
    };

    loadScripts();

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading && <Preloader />}
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}

function loadScript(src) {
  return new Promise((resolve, reject) => {
    if (document.querySelector(`script[src="${src}"]`)) {
      resolve();
      return;
    }
    const script = document.createElement('script');
    script.src = src;
    script.async = true;
    script.onload = resolve;
    script.onerror = reject;
    document.body.appendChild(script);
  });
}

export default Layout;