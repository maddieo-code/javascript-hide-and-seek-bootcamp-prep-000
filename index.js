function getFirstSelector(selector) {
  const firstSel = document.querySelector(selector);
  return firstSel;
}

function nestedTarget() {

}

function increaseRankBy(n) {
  const oneMore = document.querySelectorAll('ul.ranked-lists li')

  for (var i = 0; i < oneMore.length; i++) {
    oneMore[i].innerHTML = parseInt(i + 1);
  }
}
