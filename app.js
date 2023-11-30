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

})

/*document.addEventListener('DOMContentLoaded', function() {
    const searchBar = document.getElementById('searchInput');
    const searchIcon = document.getElementById('searchIcon');
    const arrowButton = document.getElementById('arrowButton');
    const searchArrow = document.getElementById('searchArrow');
  
    searchBar.addEventListener('input', function() {
      if (searchBar.value.trim() !== '') {
        searchIcon.classList.add('hidden');
        arrowButton.idList.remove('hidden');
        searchArrow.classList.remove('hidden');
      } else {
        searchIcon.classList.remove('hidden');
        arrowButton.idList.add('hidden');
        searchArrow.classList.add('hidden');
      }
    });
  
    arrowButton.addEventListener('mousedown', function() {
      arrowButton.style.transform = 'scale(0.95)';
    });
  
    arrowButton.addEventListener('mouseup', function() {
      arrowButton.style.transform = 'scale(1)';
    });
  });*/
  