// ============================================
// Portfolio - Shubham Kamdar
// Theme toggle, mobile menu, scroll animations
// ============================================

(function () {
  'use strict';

  // --- Theme Management ---
  const THEME_KEY = 'portfolio-theme';

  function getPreferredTheme() {
    const stored = localStorage.getItem(THEME_KEY);
    if (stored) return stored;
    return window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
  }

  function setTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem(THEME_KEY, theme);
  }

  // Apply theme immediately (before DOM ready) to prevent flash
  setTheme(getPreferredTheme());

  document.addEventListener('DOMContentLoaded', function () {
    // --- Theme Toggle ---
    const themeToggle = document.getElementById('themeToggle');
    if (themeToggle) {
      themeToggle.addEventListener('click', function () {
        const current = document.documentElement.getAttribute('data-theme');
        const next = current === 'dark' ? 'light' : 'dark';
        setTheme(next);
      });
    }

    // Listen for system preference changes
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', function (e) {
      if (!localStorage.getItem(THEME_KEY)) {
        setTheme(e.matches ? 'dark' : 'light');
      }
    });

    // --- Mobile Menu ---
    const mobileMenuToggle = document.getElementById('mobileMenuToggle');
    const mobileMenu = document.getElementById('mobileMenu');

    if (mobileMenuToggle && mobileMenu) {
      mobileMenuToggle.addEventListener('click', function () {
        const isOpen = mobileMenu.classList.contains('open');
        if (isOpen) {
          mobileMenu.classList.remove('open');
          setTimeout(function () { mobileMenu.classList.remove('show'); }, 300);
        } else {
          mobileMenu.classList.add('show');
          // Force reflow for animation
          mobileMenu.offsetHeight;
          mobileMenu.classList.add('open');
        }
      });

      // Close menu on link click
      mobileMenu.querySelectorAll('.nav-link').forEach(function (link) {
        link.addEventListener('click', function () {
          mobileMenu.classList.remove('open');
          setTimeout(function () { mobileMenu.classList.remove('show'); }, 300);
        });
      });

      // Close on outside click
      document.addEventListener('click', function (e) {
        if (!mobileMenu.contains(e.target) && !mobileMenuToggle.contains(e.target)) {
          if (mobileMenu.classList.contains('open')) {
            mobileMenu.classList.remove('open');
            setTimeout(function () { mobileMenu.classList.remove('show'); }, 300);
          }
        }
      });
    }

    // --- Scroll Animations ---
    var animateElements = document.querySelectorAll('.animate-in');

    if (animateElements.length > 0 && 'IntersectionObserver' in window) {
      var observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      }, {
        threshold: 0.1,
        rootMargin: '0px 0px -40px 0px'
      });

      animateElements.forEach(function (el) {
        observer.observe(el);
      });
    } else {
      // Fallback: show everything
      animateElements.forEach(function (el) {
        el.classList.add('visible');
      });
    }

    // --- Active Nav Link ---
    var currentPath = window.location.pathname;
    document.querySelectorAll('.nav-link').forEach(function (link) {
      var href = link.getAttribute('href');
      // Handle both /index.html and /
      if (href === currentPath ||
          (href === 'index.html' && (currentPath === '/' || currentPath.endsWith('/index.html') || currentPath === '')) ||
          (currentPath.endsWith(href))) {
        link.classList.add('active');
      }
    });
  });
})();
