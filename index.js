function getFirstSelector(selector) {
  return document.querySelector(selector)
}

function nestedTarget() {
  return document.querySelector('#nested').querySelector('.target')
}

function increaseRankBy(n) {
  var divs = document.getElementsByClassName('ranked-list')
  var lists
  for(let i=0; i<divs.length; i++) {
    lists += divs[i].querySelectorAll("li")
  }
  
  for(let i=0; i<lists.length; i++) {
    lists[i].value = (parseInt(lists[i].value) + n).toString()
  }
}

function deepestChild() {
  
}