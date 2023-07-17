
document.addEventListener('DOMContentLoaded', function() {

    function scrollToElement(elementId) {
      const element = document.getElementById(elementId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    

    const homeLink = document.querySelector('.nav-link[href="#home"]');
    const newsLink = document.querySelector('.nav-link[href="#news"]');
    const aboutLink = document.querySelector('.nav-link[href="#about"]');
    const contactLink = document.querySelector('.nav-link[href="#contact"]');
    
    homeLink.addEventListener('click', function(e) {
      e.preventDefault();
      scrollToElement('home');
    });
    
    newsLink.addEventListener('click', function(e) {
      e.preventDefault();
      scrollToElement('news');
    });
    
    aboutLink.addEventListener('click', function(e) {
      e.preventDefault();
      scrollToElement('about');
    });
    
    contactLink.addEventListener('click', function(e) {
      e.preventDefault();
      scrollToElement('contact');
    });
  });
  