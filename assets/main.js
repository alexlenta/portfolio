document.addEventListener('DOMContentLoaded', init);

function init() {
  const sectionList = document.querySelectorAll('.section-container');

  // document.onscroll = function() {
  //   for (let section of sectionList) {
  //     if (isInViewport(section)) {
  //       console.log('====================================');
  //       console.log(section);
  //       console.log('====================================');
  //     }
  //   }
  // };
}

const isInViewport = el => {
  const scroll = window.scrollY || window.pageYOffset;
  const boundsTop = el.getBoundingClientRect().top + scroll;

  const viewport = {
    top: scroll,
    bottom: scroll + window.innerHeight,
  };

  const bounds = {
    top: boundsTop,
    bottom: boundsTop + el.clientHeight,
  };

  return (
    (bounds.bottom >= viewport.top && bounds.bottom <= viewport.bottom) ||
    (bounds.top <= viewport.bottom && bounds.top >= viewport.top)
  );
};
