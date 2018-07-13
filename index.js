function getFirstSelector(selector) {
  return document.querySelector(selector)
}

function nestedTarget() {
  return document.querySelector('#nested').querySelector('.target')
}

function increaseRankBy(n) {
  var list = document.querySelectorAll('.ranked-list').querySelectorAll('li')
  for(let i=0; i<list.length; i++) {
    list.innerHTML = (()+ n).toString()
  }
}