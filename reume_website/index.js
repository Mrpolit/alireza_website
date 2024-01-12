//dark mode toggle start
let darkMode = localStorage.getItem('darkMode'); 

const darkModeButton = document.querySelector('.dark-mode-button');

if (darkMode === 'enabled') {
  document.body.classList.add('darkmode');
  darkModeButton.classList.add('dark');
  localStorage.setItem('darkMode', 'enabled');
}

function darkModeToggle(){
    darkMode = localStorage.getItem('darkMode'); 
  
    if (darkMode !== 'enabled') {
      document.body.classList.add('darkmode');
      darkModeButton.classList.add('dark');
      localStorage.setItem('darkMode', 'enabled');
    } else {  
      document.body.classList.remove('darkmode');
      darkModeButton.classList.remove('dark');
      localStorage.setItem('darkMode', null);
    }
}

darkModeButton.addEventListener('click', () => {
    darkModeToggle();
});
//dark mode toggle end
//infinit scroll settings start
const scrollers = document.querySelectorAll(".scroller");

if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
  addAnimation();
}

function addAnimation() {
  scrollers.forEach((scroller) => {
    scroller.setAttribute("data-animated", true);

    const scrollerInner = scroller.querySelector(".scroller__inner");
    const scrollerContent = Array.from(scrollerInner.children);

    scrollerContent.forEach((item) => {
      const duplicatedItem = item.cloneNode(true);
      duplicatedItem.setAttribute("aria-hidden", true);
      scrollerInner.appendChild(duplicatedItem);
    });
  });
}
// infinit scroll settings end