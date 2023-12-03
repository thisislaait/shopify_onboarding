document.addEventListener('DOMContentLoaded', function() {
    const searchBar = document.getElementById('searchInput');
    const searchIcon = document.getElementById('searchIcon');
    const rotatingCircle = document.getElementById('rotatingCircle');
    const searchForm = document.getElementById('searchForm');
  
    searchBar.addEventListener('input', function() {
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


    function setupToggle(iconElement, messageElement, backgroundColor, boxShadowColor) {
      iconElement.addEventListener('click', function () {
        // 1. Check if the element is hidden
        const isHidden = messageElement.classList.toggle('hidden');
    
        // a. If true, style element:
        if (!isHidden) {
          iconElement.style.backgroundColor = backgroundColor;
          iconElement.style.boxShadow = `0px 0px 0px 3px ${boxShadowColor}, 0px 0px 0px 1px #000`;
        } else {
          // b. If false, remove styles.
          iconElement.style.backgroundColor = '';
          iconElement.style.boxShadow = '';
        }
      });
    }
    
    // Usage example for alert
    const alertIcon = document.getElementById('accountAlert');
    const alertMessage = document.getElementById('alertDropdown');
    setupToggle(alertIcon, alertMessage, '#656266', '#005BD3');
    
    // Usage example for profile
    const profileIcon = document.getElementById('profileContainer');
    const profileDropdown = document.getElementById('profileDropdownMenu');
    setupToggle(profileIcon, profileDropdown, '#656266', '#005BD3');
    


    
})

