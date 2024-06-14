function squareHeight() {  
  const square = document.querySelectorAll('.square');  
  let itemWidth = square[1].offsetWidth;  
  for (let i = 0; i < square.length; i++) {
    square[i].style.cssText = "height: " + itemWidth + "px;";
  };  
};

squareHeight();

window.addEventListener('resize', function(event) {
  squareHeight();
}, true);




const media = window.matchMedia('(min-width: 725px)');
const squaresRow = document.querySelectorAll('.squares__row');

function resizeRowHeight(e) {
  if (e.matches) {
    for (let i = 0; i < squaresRow.length; i++) {
      const squaresRowItemHeight = squaresRow[i].querySelector('.square').offsetHeight;
      squaresRow[i].style.height = squaresRowItemHeight * 3 + 60 + "px";
    }
  } else {
    for (let i = 0; i < squaresRow.length; i++) {
      squaresRow[i].style.height = 'auto';
    }
  }
}

resizeRowHeight(media);

window.addEventListener('resize', function(event) {
  resizeRowHeight(media);
}, true);