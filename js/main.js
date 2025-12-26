// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
      // Close mobile menu if open
      const navbarCollapse = document.getElementById('navbar-content');
      if (navbarCollapse && navbarCollapse.classList.contains('show')) {
        const bsCollapse = new bootstrap.Collapse(navbarCollapse, {
          toggle: true
        });
      }
    }
  });
});

// Update active nav link on scroll
window.addEventListener('scroll', () => {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');
  
  let current = '';
  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    if (window.pageYOffset >= sectionTop - 100) {
      current = section.getAttribute('id');
    }
  });
  
  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === `#${current}`) {
      link.classList.add('active');
    }
  });
});

// Function to load content from external HTML files
function loadContentFromFile(filePath, targetSelector, sourceSelector) {
  console.log(`Attempting to load ${filePath}...`);
  
  // Check if we're using file:// protocol (won't work with fetch)
  if (window.location.protocol === 'file:') {
    console.error('Cannot use fetch with file:// protocol. Please use a local web server.');
    console.error('You can start a local server with: python -m http.server 8000');
    return;
  }
  
  fetch(filePath)
    .then(response => {
      console.log(`Response status for ${filePath}:`, response.status);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return response.text();
    })
    .then(html => {
      console.log(`Received HTML from ${filePath}, length:`, html.length);
      // Create a temporary DOM element to parse the HTML
      const parser = new DOMParser();
      const doc = parser.parseFromString(html, 'text/html');
      
      // Find the section content in the loaded HTML
      const sourceElement = doc.querySelector(sourceSelector);
      const targetElement = document.querySelector(targetSelector);
      
      console.log(`Source element found:`, !!sourceElement);
      console.log(`Target element found:`, !!targetElement);
      
      if (sourceElement && targetElement) {
        // Extract the inner content (everything inside the section tag)
        targetElement.innerHTML = sourceElement.innerHTML;
        console.log(`✓ Successfully loaded content from ${filePath}`);
        
        // Initialize pagination for publications section
        if (filePath === 'publications.html' && sourceSelector === 'section#publications') {
          // Wait for DOM to update, then initialize pagination
          setTimeout(() => {
            initializePublicationsPagination();
          }, 50);
        }
        
        // Initialize pagination for news section
        if (filePath === 'news.html' && sourceSelector === 'section#news') {
          // Wait for DOM to update, then initialize pagination
          setTimeout(() => {
            initializeNewsPagination();
          }, 50);
        }
        
        // Initialize pagination for demos section
        if (filePath === 'demos.html' && sourceSelector === 'section#demos') {
          // Wait for DOM to update, then initialize pagination
          setTimeout(() => {
            initializeDemosPagination();
          }, 50);
        }
        
        // Initialize pagination for talks section
        if (filePath === 'talks.html' && sourceSelector === 'section#talks') {
          // Wait for DOM to update, then initialize pagination
          setTimeout(() => {
            initializeTalksPagination();
          }, 50);
        }
      } else {
        if (!sourceElement) {
          console.error(`Could not find source element: ${sourceSelector} in ${filePath}`);
        }
        if (!targetElement) {
          console.error(`Could not find target element: ${targetSelector}`);
        }
      }
    })
    .catch(error => {
      console.error(`✗ Error loading ${filePath}:`, error);
      console.error('This might be due to CORS restrictions or file:// protocol. Try using a local web server.');
    });
}

// Set active nav link based on current page and load content
document.addEventListener('DOMContentLoaded', () => {
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  const navLinks = document.querySelectorAll('.nav-link');
  
  navLinks.forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPage || (currentPage === '' && href === 'index.html') || (currentPage === 'index.html' && href === 'index.html')) {
      link.classList.add('active');
    }
  });

  // Check if target elements exist (meaning we're on index.html) - load content from separate files
  const newsContent = document.querySelector('#news-content');
  const publicationsContent = document.querySelector('#publications-content');
  const demosContent = document.querySelector('#demos-content');
  const talksContent = document.querySelector('#talks-content');
  
  if (newsContent || publicationsContent || demosContent || talksContent) {
    console.log('Detected index.html - Loading content from separate HTML files...');
    if (newsContent) {
      loadContentFromFile('news.html', '#news-content', 'section#news');
    }
    if (publicationsContent) {
      loadContentFromFile('publications.html', '#publications-content', 'section#publications');
    }
    if (demosContent) {
      loadContentFromFile('demos.html', '#demos-content', 'section#demos');
    }
    if (talksContent) {
      loadContentFromFile('talks.html', '#talks-content', 'section#talks');
    }
  } else {
    // If we're on publications.html directly, initialize pagination
    const publicationsSection = document.querySelector('section#publications');
    if (publicationsSection) {
      initializePublicationsPagination();
    }
    
    // If we're on news.html directly, initialize pagination
    const newsSection = document.querySelector('section#news');
    if (newsSection) {
      initializeNewsPagination();
    }
    
    // If we're on demos.html directly, initialize pagination
    const demosSection = document.querySelector('section#demos');
    if (demosSection) {
      initializeDemosPagination();
    }
    
    // If we're on talks.html directly, initialize pagination
    const talksSection = document.querySelector('section#talks');
    if (talksSection) {
      initializeTalksPagination();
    }
  }
});

// Publications pagination functionality
function initializePublicationsPagination() {
  const publicationsSection = document.querySelector('section#publications');
  if (!publicationsSection) return;
  
  // Check if pagination already exists
  if (publicationsSection.querySelector('.publications-pagination')) {
    return;
  }
  
  const row = publicationsSection.querySelector('.row');
  if (!row) return;
  
  // Get all publication cards (divs with col-md-6 that contain cards)
  const cards = Array.from(row.querySelectorAll('.col-md-6'));
  
  if (cards.length === 0) return;
  
  const cardsPerPage = 8;
  const totalPages = Math.ceil(cards.length / cardsPerPage);
  let currentPage = 1;
  
  // Add data attribute to each card for pagination
  cards.forEach((card, index) => {
    card.setAttribute('data-page', Math.floor(index / cardsPerPage) + 1);
    if (index >= cardsPerPage) {
      card.style.display = 'none';
    }
  });
  
  // Create pagination controls
  const paginationContainer = document.createElement('div');
  paginationContainer.className = 'publications-pagination';
  paginationContainer.innerHTML = `
    <div class="pagination-controls d-flex justify-content-center align-items-center gap-3 mb-4">
      <button class="btn btn-outline-primary pagination-btn" id="prev-btn" disabled>
        <i class="fas fa-chevron-left"></i> Previous
      </button>
      <span class="pagination-info">
        Page <span id="current-page">1</span> of <span id="total-pages">${totalPages}</span>
      </span>
      <button class="btn btn-outline-primary pagination-btn" id="next-btn" ${totalPages === 1 ? 'disabled' : ''}>
        Next <i class="fas fa-chevron-right"></i>
      </button>
    </div>
    <div class="pagination-dots d-flex justify-content-center gap-2 mb-4">
      ${Array.from({ length: totalPages }, (_, i) => 
        `<button class="pagination-dot ${i === 0 ? 'active' : ''}" data-page="${i + 1}" aria-label="Go to page ${i + 1}"></button>`
      ).join('')}
    </div>
  `;
  
  // Insert pagination before the row (at the top)
  row.parentNode.insertBefore(paginationContainer, row);
  
  // Function to show a specific page
  function showPage(page) {
    if (page < 1 || page > totalPages) return;
    
    currentPage = page;
    
    // Show/hide cards
    cards.forEach(card => {
      const cardPage = parseInt(card.getAttribute('data-page'));
      card.style.display = cardPage === page ? '' : 'none';
    });
    
    // Update pagination controls
    document.getElementById('current-page').textContent = page;
    document.getElementById('prev-btn').disabled = page === 1;
    document.getElementById('next-btn').disabled = page === totalPages;
    
    // Update dots
    paginationContainer.querySelectorAll('.pagination-dot').forEach((dot, index) => {
      dot.classList.toggle('active', index + 1 === page);
    });
    
    // Scroll to top of publications section
    publicationsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
  
  // Event listeners
  document.getElementById('prev-btn').addEventListener('click', () => {
    showPage(currentPage - 1);
  });
  
  document.getElementById('next-btn').addEventListener('click', () => {
    showPage(currentPage + 1);
  });
  
  // Dot navigation
  paginationContainer.querySelectorAll('.pagination-dot').forEach(dot => {
    dot.addEventListener('click', () => {
      const page = parseInt(dot.getAttribute('data-page'));
      showPage(page);
    });
  });
}

// News pagination functionality
function initializeNewsPagination() {
  const newsSection = document.querySelector('section#news');
  if (!newsSection) return;
  
  // Check if pagination already exists
  if (newsSection.querySelector('.news-pagination')) {
    return;
  }
  
  const row = newsSection.querySelector('.row');
  if (!row) return;
  
  // Get all news cards (divs with col-md-6 that contain cards)
  const cards = Array.from(row.querySelectorAll('.col-md-6'));
  
  if (cards.length === 0) return;
  
  const cardsPerPage = 4;
  const totalPages = Math.ceil(cards.length / cardsPerPage);
  let currentPage = 1;
  
  // Add data attribute to each card for pagination
  cards.forEach((card, index) => {
    card.setAttribute('data-page', Math.floor(index / cardsPerPage) + 1);
    if (index >= cardsPerPage) {
      card.style.display = 'none';
    }
  });
  
  // Create pagination controls
  const paginationContainer = document.createElement('div');
  paginationContainer.className = 'news-pagination';
  paginationContainer.innerHTML = `
    <div class="pagination-controls d-flex justify-content-center align-items-center gap-3 mb-4">
      <button class="btn btn-outline-primary pagination-btn" id="news-prev-btn" disabled>
        <i class="fas fa-chevron-left"></i> Previous
      </button>
      <span class="pagination-info">
        Page <span id="news-current-page">1</span> of <span id="news-total-pages">${totalPages}</span>
      </span>
      <button class="btn btn-outline-primary pagination-btn" id="news-next-btn" ${totalPages === 1 ? 'disabled' : ''}>
        Next <i class="fas fa-chevron-right"></i>
      </button>
    </div>
    <div class="pagination-dots d-flex justify-content-center gap-2 mb-4">
      ${Array.from({ length: totalPages }, (_, i) => 
        `<button class="pagination-dot ${i === 0 ? 'active' : ''}" data-page="${i + 1}" aria-label="Go to page ${i + 1}"></button>`
      ).join('')}
    </div>
  `;
  
  // Insert pagination before the row (at the top)
  row.parentNode.insertBefore(paginationContainer, row);
  
  // Function to show a specific page
  function showPage(page) {
    if (page < 1 || page > totalPages) return;
    
    currentPage = page;
    
    // Show/hide cards
    cards.forEach(card => {
      const cardPage = parseInt(card.getAttribute('data-page'));
      card.style.display = cardPage === page ? '' : 'none';
    });
    
    // Update pagination controls
    document.getElementById('news-current-page').textContent = page;
    document.getElementById('news-prev-btn').disabled = page === 1;
    document.getElementById('news-next-btn').disabled = page === totalPages;
    
    // Update dots
    paginationContainer.querySelectorAll('.pagination-dot').forEach((dot, index) => {
      dot.classList.toggle('active', index + 1 === page);
    });
    
    // Scroll to top of news section
    newsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
  
  // Event listeners
  document.getElementById('news-prev-btn').addEventListener('click', () => {
    showPage(currentPage - 1);
  });
  
  document.getElementById('news-next-btn').addEventListener('click', () => {
    showPage(currentPage + 1);
  });
  
  // Dot navigation
  paginationContainer.querySelectorAll('.pagination-dot').forEach(dot => {
    dot.addEventListener('click', () => {
      const page = parseInt(dot.getAttribute('data-page'));
      showPage(page);
    });
  });
}

// Demos pagination functionality
function initializeDemosPagination() {
  const demosSection = document.querySelector('section#demos');
  if (!demosSection) return;
  
  // Check if pagination already exists
  if (demosSection.querySelector('.demos-pagination')) {
    return;
  }
  
  const row = demosSection.querySelector('.row');
  if (!row) return;
  
  // Get all demos cards (divs with col-md-6 that contain cards)
  const cards = Array.from(row.querySelectorAll('.col-md-6'));
  
  if (cards.length === 0) return;
  
  const cardsPerPage = 4;
  const totalPages = Math.ceil(cards.length / cardsPerPage);
  let currentPage = 1;
  
  // Add data attribute to each card for pagination
  cards.forEach((card, index) => {
    card.setAttribute('data-page', Math.floor(index / cardsPerPage) + 1);
    if (index >= cardsPerPage) {
      card.style.display = 'none';
    }
  });
  
  // Create pagination controls
  const paginationContainer = document.createElement('div');
  paginationContainer.className = 'demos-pagination';
  paginationContainer.innerHTML = `
    <div class="pagination-controls d-flex justify-content-center align-items-center gap-3 mb-4">
      <button class="btn btn-outline-primary pagination-btn" id="demos-prev-btn" disabled>
        <i class="fas fa-chevron-left"></i> Previous
      </button>
      <span class="pagination-info">
        Page <span id="demos-current-page">1</span> of <span id="demos-total-pages">${totalPages}</span>
      </span>
      <button class="btn btn-outline-primary pagination-btn" id="demos-next-btn" ${totalPages === 1 ? 'disabled' : ''}>
        Next <i class="fas fa-chevron-right"></i>
      </button>
    </div>
    <div class="pagination-dots d-flex justify-content-center gap-2 mb-4">
      ${Array.from({ length: totalPages }, (_, i) => 
        `<button class="pagination-dot ${i === 0 ? 'active' : ''}" data-page="${i + 1}" aria-label="Go to page ${i + 1}"></button>`
      ).join('')}
    </div>
  `;
  
  // Insert pagination before the row (at the top)
  row.parentNode.insertBefore(paginationContainer, row);
  
  // Function to show a specific page
  function showPage(page) {
    if (page < 1 || page > totalPages) return;
    
    currentPage = page;
    
    // Show/hide cards
    cards.forEach(card => {
      const cardPage = parseInt(card.getAttribute('data-page'));
      card.style.display = cardPage === page ? '' : 'none';
    });
    
    // Update pagination controls
    document.getElementById('demos-current-page').textContent = page;
    document.getElementById('demos-prev-btn').disabled = page === 1;
    document.getElementById('demos-next-btn').disabled = page === totalPages;
    
    // Update dots
    paginationContainer.querySelectorAll('.pagination-dot').forEach((dot, index) => {
      dot.classList.toggle('active', index + 1 === page);
    });
    
    // Scroll to top of demos section
    demosSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
  
  // Event listeners
  document.getElementById('demos-prev-btn').addEventListener('click', () => {
    showPage(currentPage - 1);
  });
  
  document.getElementById('demos-next-btn').addEventListener('click', () => {
    showPage(currentPage + 1);
  });
  
  // Dot navigation
  paginationContainer.querySelectorAll('.pagination-dot').forEach(dot => {
    dot.addEventListener('click', () => {
      const page = parseInt(dot.getAttribute('data-page'));
      showPage(page);
    });
  });
}

// Talks pagination functionality
function initializeTalksPagination() {
  const talksSection = document.querySelector('section#talks');
  if (!talksSection) return;
  
  // Check if pagination already exists
  if (talksSection.querySelector('.talks-pagination')) {
    return;
  }
  
  const row = talksSection.querySelector('.row');
  if (!row) return;
  
  // Get all talks cards (divs with col-md-6 that contain cards)
  const cards = Array.from(row.querySelectorAll('.col-md-6'));
  
  if (cards.length === 0) return;
  
  const cardsPerPage = 4;
  const totalPages = Math.ceil(cards.length / cardsPerPage);
  let currentPage = 1;
  
  // Add data attribute to each card for pagination
  cards.forEach((card, index) => {
    card.setAttribute('data-page', Math.floor(index / cardsPerPage) + 1);
    if (index >= cardsPerPage) {
      card.style.display = 'none';
    }
  });
  
  // Create pagination controls
  const paginationContainer = document.createElement('div');
  paginationContainer.className = 'talks-pagination';
  paginationContainer.innerHTML = `
    <div class="pagination-controls d-flex justify-content-center align-items-center gap-3 mb-4">
      <button class="btn btn-outline-primary pagination-btn" id="talks-prev-btn" disabled>
        <i class="fas fa-chevron-left"></i> Previous
      </button>
      <span class="pagination-info">
        Page <span id="talks-current-page">1</span> of <span id="talks-total-pages">${totalPages}</span>
      </span>
      <button class="btn btn-outline-primary pagination-btn" id="talks-next-btn" ${totalPages === 1 ? 'disabled' : ''}>
        Next <i class="fas fa-chevron-right"></i>
      </button>
    </div>
    <div class="pagination-dots d-flex justify-content-center gap-2 mb-4">
      ${Array.from({ length: totalPages }, (_, i) => 
        `<button class="pagination-dot ${i === 0 ? 'active' : ''}" data-page="${i + 1}" aria-label="Go to page ${i + 1}"></button>`
      ).join('')}
    </div>
  `;
  
  // Insert pagination before the row (at the top)
  row.parentNode.insertBefore(paginationContainer, row);
  
  // Function to show a specific page
  function showPage(page) {
    if (page < 1 || page > totalPages) return;
    
    currentPage = page;
    
    // Show/hide cards
    cards.forEach(card => {
      const cardPage = parseInt(card.getAttribute('data-page'));
      card.style.display = cardPage === page ? '' : 'none';
    });
    
    // Update pagination controls
    document.getElementById('talks-current-page').textContent = page;
    document.getElementById('talks-prev-btn').disabled = page === 1;
    document.getElementById('talks-next-btn').disabled = page === totalPages;
    
    // Update dots
    paginationContainer.querySelectorAll('.pagination-dot').forEach((dot, index) => {
      dot.classList.toggle('active', index + 1 === page);
    });
    
    // Scroll to top of talks section
    talksSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
  
  // Event listeners
  document.getElementById('talks-prev-btn').addEventListener('click', () => {
    showPage(currentPage - 1);
  });
  
  document.getElementById('talks-next-btn').addEventListener('click', () => {
    showPage(currentPage + 1);
  });
  
  // Dot navigation
  paginationContainer.querySelectorAll('.pagination-dot').forEach(dot => {
    dot.addEventListener('click', () => {
      const page = parseInt(dot.getAttribute('data-page'));
      showPage(page);
    });
  });
}

