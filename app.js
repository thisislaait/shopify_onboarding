// Data array for accordion items
const accordionData = [
  {
    title: 'Customize your online store',
    description: 'Choose a theme and add your logo, colors, and images to reflect your brand.',
    imageSrc: 'https://crushingit.tech/hackathon-assets/customise-store.png',
    ctaText: 'Customize theme',
    learnMoreLink: 'http://',
    hidden: false,
    taskClasses: ['task1', 'accordion'],
  },
  {
    title: 'Add your first product',
    description: 'Write a description, add photos, and set pricing for the products you plan to sell.',
    imageSrc: 'https://crushingit.tech/hackathon-assets/product.png',
    ctaText: 'Add product',
    borderlessCtaText: 'Import product',
    learnMoreLink: 'http://',
    hidden: true,
    taskClasses: ['task2', 'accordion'],
  },
  {
    title: 'Add a custom domain',
    description: 'Your current domain is 222219.myshopify.com, but you can add a custom domain to help customers find your online store.',
    imageSrc: 'https://crushingit.tech/hackathon-assets/website.png',
    ctaText: 'Add domain',
    learnMoreLink: 'http://',
    hidden: true,
    taskClasses: ['task3', 'accordion'],
  },
  {
    title: 'Name your store',
    description: 'Your temporary store name is currently Davii collections. The store name appears in your admin and online store.',
    imageSrc: 'https://crushingit.tech/hackathon-assets/name-store.png',
    ctaText: 'Name store',
    learnMoreLink: 'http://',
    taskClasses: ['task4', 'accordion'],
  },
  {
    title: 'Setup a payment provider',
    description: 'Choose a payment provider to start accepting payments. You\'ll need to create an account with the payment provider and set it up with your Shopify store.',
    imageSrc: 'https://crushingit.tech/hackathon-assets/payment.png',
    ctaText: 'Set up payment',
    learnMoreLink: 'http://',
    taskClasses: ['task5', 'accordion'],
  }
];

document.addEventListener('DOMContentLoaded', function () {
  // Function to create accordion HTML from data
  const createAccordionHTML = (data) => {
    const accordionContainer = document.getElementById('accordionContainer');

    // Iterate through data and create HTML for each accordion item
    data.forEach(item => {
      const accordionItem = document.createElement('div');
      accordionItem.classList.add('accordion_container', ...item.taskClasses);

      // Set hidden class based on taskClasses
      if (!item.taskClasses.includes('task1')) {
        accordionItem.classList.add('hidden');
      }

      accordionItem.innerHTML = `
          <div class="accordion_task">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" class="accordion_icon">
                  <circle cx="12" cy="12" r="10" stroke="#8A8A8A" stroke-width="2.08333" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray="5 5"/>
              </svg>
              <p class="accordion_title inter-13b" id='accordionTitle'>${item.title}</p>
          </div>
          <div class="accordion_task_action ${item.taskClasses.includes('task1') ? '' : 'hidden'}" id="accordionAction">
              <div class="accordion_action_wrapper">
                  <div class="accordion_action">
                      <div class="inter-13b">${item.description} <a href="${item.learnMoreLink}">Learn more</a></div>
                      <div class="accordion_cta">
                          <div class="inter-12d accordion_btn">${item.ctaText}</div>
                          ${item.borderlessCtaText ? `<div class="accordion_borderless_btn inter-12b">${item.borderlessCtaText}</div>` : ''}
                      </div>
                  </div>
                  <div class="accordion_img">
                      <img src="${item.imageSrc}" alt="" srcset="">
                  </div>
              </div>
          </div>
      `;

      // Append accordion item to the container
      accordionContainer.appendChild(accordionItem);
    });
  };

  // Call the function with the data array
  createAccordionHTML(accordionData);

  // Function to handle styling when accordion_task_action is displayed
  const handleAccordionStyle = () => {
    const accordionContainers = document.querySelectorAll('.accordion');

    accordionContainers.forEach(accordion => {
      const taskAction = accordion.querySelector('.accordion_task_action');
      const title = accordion.querySelector('.accordion_title');

      if (taskAction && !taskAction.classList.contains('hidden')) {
        accordion.style.backgroundColor = '#f3f3f3';
        title.style.fontWeight = '700';

      } else {
        accordion.style.backgroundColor = ''; // Reset background color
        title.style.fontWeight = ''; // Reset font weight
      }
    });
  };

  // Attach the function to the click event of the accordion task
  document.querySelectorAll('.accordion_task').forEach(task => {
    task.addEventListener('click', () => {
      handleAccordionStyle();
    });
  });

  // Initial styling when the page loads
  handleAccordionStyle();

  const searchBar = document.getElementById('searchInput');
  const searchIcon = document.getElementById('searchIcon');
  const rotatingCircle = document.getElementById('rotatingCircle');
  const searchForm = document.getElementById('searchForm');

  searchBar.addEventListener('input', function () {
    // 1. Check if there is text in the search bar.
    if (searchBar.value.trim() !== '') {
      // a. If true, style the search bar:
      searchIcon.style.backgroundColor = '#7a0027';
      searchIcon.style.filter = 'invert(100%)';
    } else {
      // b. If false, remove the search icon background.
      searchIcon.style.backgroundColor = '';
      searchIcon.style.borderRadius = '';
      searchIcon.style.padding = '';
      searchIcon.style.filter = '';
    }

    searchForm.style.border = searchBar.value.trim() !== '' ? '2px solid #FFF' : '';
  });

  function setupToggle(iconElement, messageElement, backgroundColor, boxShadowColor, transform, fontWeight) {
    iconElement.addEventListener('click', function () {
      // 1. Check if the element is hidden
      const isHidden = messageElement.classList.toggle('hidden');

      // a. If true, style element:
      if (!isHidden) {
        iconElement.style.backgroundColor = backgroundColor;
        iconElement.style.boxShadow = `0px 0px 0px 3px ${boxShadowColor}, 0px 0px 0px 1px #000`;
        iconElement.style.transform = transform;
        iconElement.style.fontWeight = fontWeight;

      } else {
        // b. If false, remove styles.
        iconElement.style.backgroundColor = '';
        iconElement.style.boxShadow = '';
        iconElement.style.transform = '';
        iconElement.style.fontWeight = '';
      }
    });
  }

  // Usage for Alert
  const alertIcon = document.getElementById('accountAlert');
  const alertMessage = document.getElementById('alertDropdown');
  setupToggle(alertIcon, alertMessage, '#656266', '#005BD3');

  // Usage for profile
  const profileIcon = document.getElementById('profileContainer');
  const profileDropdown = document.getElementById('profileDropdownMenu');
  setupToggle(profileIcon, profileDropdown, '#656266', '#005BD3');

  const toggleArrow = document.getElementById('toggleArrow');
  const accordionContainer = document.getElementById('accordionContainer');
  setupToggle(toggleArrow, accordionContainer, '', '#005BD3', 'rotate(180deg)');

  const bannerContainer = document.getElementById('bannerContainer');
  const closeContainer = document.getElementById('closeContainer');

  function hideBanner() {
    // Add a crumple effect
    bannerContainer.style.transform = 'scale(0)';

    // After 3 seconds, fully crumple and hide
    setTimeout(() => {
      bannerContainer.style.transform = 'scale(0)';
      bannerContainer.style.display = 'none';
    }, 3000);
  }

  // Ensure banner is visible on page reload
  window.onload = function () {
    bannerContainer.style.transform = 'scale(1)';
    bannerContainer.style.display = 'block';
  };

  const progressBar = document.querySelector('.progress-bar');
  const completionCounter = document.querySelector('.completion-counter');

  let completedStages = 0;

  function incrementCompletedStages() {
    completedStages += 1;
    localStorage.setItem('completedStages', completedStages);
  }

  function resetCompletedStages() {
    completedStages -= 1;
    localStorage.setItem('completedStages', completedStages);
  }


  /*function loadCompletedStages() {
    // Load completed stages from localStorage
    if (localStorage.getItem('completedStages')) {
      completedStages = parseInt(localStorage.getItem('completedStages'), 10);
    }
  }

  // Call the function to load completed stages
  loadCompletedStages();*/

  function updateProgressBar() {
    const totalStages = accordionData.length;
    const percentage = (completedStages / totalStages) * 100;
    progressBar.style.width = `${percentage}%`;
    completionCounter.textContent = `${completedStages} / ${totalStages} completed`;

    // Set the initial state to gray
    progressBar.style.backgroundColor = completedStages > 0 ? 'var(--gray-dark)' : 'var(--stroke-100)';
  }

  

  // Function to set an accordion_task_action as active

  const toggleAccordionAction = (accordionContainer) => {
    const accordionAction = accordionContainer.querySelector('.accordion_task_action');
    accordionAction.classList.toggle('hidden');

    // Toggle background color based on accordion action visibility
    accordionContainer.style.backgroundColor = accordionAction.classList.contains('hidden') ? '#fff' : '#f3f3f3';

    // Toggle font-weight for accordion title
    const accordionTitle = accordionContainer.querySelector('.accordion_task p');
    accordionTitle.style.fontWeight = accordionAction.classList.contains('hidden') ? '400' : '700';
  };

  // Function to toggle accordion action via accordion title click
  const toggleAccordionByTitle = () => {
      const accordionTitles = document.querySelectorAll('.accordion_task p');

      accordionTitles.forEach((title, index) => {
        title.addEventListener('click', () => {
            const accordionContainer = title.closest('.accordion_container');
            toggleAccordionAction(accordionContainer);
        });
      });
  };

  // Function to toggle accordion action via accordion icon click
  const toggleAccordionByIcon = () => {
    const accordionIcons = document.querySelectorAll('.accordion_icon');

    accordionIcons.forEach((icon, index) => {
      icon.addEventListener('click', () => {
        const accordionContainer = icon.closest('.accordion_container');
        
        const nextAccordionContainer = accordionContainer.nextElementSibling || document.querySelector('.accordion_container');

        // Check the current color of the SVG fill
        const isIconActive = icon.style.fill === 'rgb(0, 0, 0)';

        // Toggle SVG fill color
        icon.style.fill = isIconActive ? '' : '#000';

        // Update completion counter and progress bar
        if (!isIconActive) {
          incrementCompletedStages();
        } else {
          // Handle case when an icon is unclicked (optional)
          // Reset completion counter and progress bar
          resetCompletedStages();
        }

        // Update the progress bar and completion counter
        updateProgressBar();

        // Toggle background color and font-weight for both containers
        toggleAccordionAction(accordionContainer);
        toggleAccordionAction(nextAccordionContainer);
      });
    });
  };

  // Call the function to toggle accordion action via accordion title click
  toggleAccordionByTitle();

  // Call the function to toggle accordion action via accordion icon click
  toggleAccordionByIcon();

  
      
})

