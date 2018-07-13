function getFirstSelector(selector) {
  return document.querySelector(selector)
}

function nestedTarget() {
  return document.querySelector('#nested').querySelector('.target')
}

function increaseRankBy(n) {
  var divs = document.querySelectorAll('.ranked-list')
  var lists
  for(let i=0; i<divs.length; i++) {
    lists += divs[i].querySelectorAll('li')
  }
  
  for(let i=0; i<lists.length; i++) {
    lists[i].innerHTML = (parseInt(lists[i].innerHTML)+ n).toString()
  }
}

function deepestChild() {
  
}