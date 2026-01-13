import { animate, inView, scroll } from '@motionone/dom';

// Initialize animations when DOM is loaded
function initAnimations() {
  // Animate elements on scroll
  const animateElements = document.querySelectorAll<HTMLElement>('.animate-on-scroll');
  
  animateElements.forEach((element, index) => {
    inView(element, () => {
      animate(
        element,
        { opacity: [0, 1], y: [30, 0] },
        { duration: 0.8, delay: index * 0.1, easing: 'ease-out' }
      );
    });
  });

  // Floating animation for hero elements
  const floatingElements = document.querySelectorAll<HTMLElement>('.float-animation');
  floatingElements.forEach((element, index) => {
    animate(
      element,
      { y: [-10, 10, -10] },
      { duration: 4 + index, repeat: Infinity, easing: 'ease-in-out' }
    );
  });

  // Navbar scroll effect
  const navbar = document.querySelector<HTMLElement>('nav');
  if (navbar) {
    scroll(({ y }) => {
      if (y.current > 100) {
        navbar.classList.add('backdrop-blur-md', 'bg-white/90', 'shadow-lg');
      } else {
        navbar.classList.remove('backdrop-blur-md', 'bg-white/90', 'shadow-lg');
      }
    });
  }

  // Button hover animations
  const buttons = document.querySelectorAll<HTMLElement>('.btn-primary, .btn-secondary');
  buttons.forEach(button => {
    button.addEventListener('mouseenter', () => {
      animate(button, { scale: 1.05 }, { duration: 0.2 });
    });
    
    button.addEventListener('mouseleave', () => {
      animate(button, { scale: 1 }, { duration: 0.2 });
    });
  });

  // Card hover animations
  const cards = document.querySelectorAll<HTMLElement>('.card');
  cards.forEach(card => {
    card.addEventListener('mouseenter', () => {
      animate(card, { y: -8, boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)' }, { duration: 0.3 });
    });
    
    card.addEventListener('mouseleave', () => {
      animate(card, { y: 0, boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)' }, { duration: 0.3 });
    });
  });

  // Stagger animation for service items
  const serviceItems = document.querySelectorAll<HTMLElement>('.service-item');
  inView('.services-grid', () => {
    serviceItems.forEach((item, index) => {
      animate(
        item,
        { opacity: [0, 1], y: [40, 0] },
        { duration: 0.6, delay: index * 0.15, easing: 'ease-out' }
      );
    });
  });
}

// Initialize when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initAnimations);
} else {
  initAnimations();
}

export { initAnimations };