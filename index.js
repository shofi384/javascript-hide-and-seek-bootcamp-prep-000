function getFirstSelector(selector) {
  return document.querySelector(selector)
}

function nestedTarget() {
  return document.querySelector('#nested').querySelector('.target')
}

function increaseRankBy(n) {
  var divs = document.querySelectorAll('.ranked-list')
  var list
  for(let i=0; i<divs.length; i++) {
    list += divs[i].querySelectorAll('li')
  }
  
  for(let i=0; i<list.length; i++) {
    list.innerHTML = (parseInt(list.innerHTML)+ n).toString()
  }
}

function deepestChild() {
  
}