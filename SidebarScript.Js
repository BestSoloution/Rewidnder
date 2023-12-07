 function toggleSidebar() {
    const sidebar = document.querySelector('.sidebar');
    const menuBtn = document.querySelector('.menu-btn');
    const closeBtn = document.querySelector('.close-btn');

    sidebar.style.width = sidebar.style.width === '200px' ? '0' : '200px';
    menuBtn.style.display = menuBtn.style.display === 'none' ? 'flex' : 'none';
  
  }

  // Hide menu button on scroll
  let prevScrollPos = window.pageYOffset;
  window.onscroll = function () {
    const currentScrollPos = window.pageYOffset;
    const menuBtnContainer = document.querySelector('.menu-btn-container');

    if (prevScrollPos > currentScrollPos) {
      menuBtnContainer.style.top = '20px';
    } else {
      menuBtnContainer.style.top = '-50px';
    }

    prevScrollPos = currentScrollPos;
  };
