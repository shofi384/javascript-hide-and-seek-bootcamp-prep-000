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
    lists += divs[i].getElementsByTagName('li')
  }
  
  for(let i=0; i<lists.length; i++) {
    lists[i].innerHTML = (parseInt(lists[i].innerHTML) + n).toString()
  }
}

function deepestChild() {
  
}