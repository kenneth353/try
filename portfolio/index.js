
  // Get all navigation links
  const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
  
  // Listen to the scroll event
  window.addEventListener('scroll', function() {
    let currentSection = '';

    // Loop through all sections and find the current section in view
    document.querySelectorAll('section').forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      if (window.pageYOffset >= sectionTop - sectionHeight / 3) {
        currentSection = section.getAttribute('id');
      }
    });

    // Remove 'active' class from all links
    navLinks.forEach(link => link.classList.remove('active'));

    // Add 'active' class to the link corresponding to the current section
    const activeLink = document.querySelector(`.navbar-nav .nav-link[href="#${currentSection}"]`);
    if (activeLink) {
      activeLink.classList.add('active');
    }
  });

