function getFirstSelector(selector) {
  return document.querySelector(selector)
}

function nestedTarget() {
  return document.querySelector('#nested').querySelector('.target')
}

function increaseRankBy(n) {
  var divs = document.querySelectorAll('.ranked-list')
  
  for(let i=0; i<divs.length; i++) {
    var lists = divs[i].getElementsByTagName('li')
    for(let j=0; j<lists.length; j++) {
      lists[j].innerHTML = (parseInt(lists[j].innerHTML) + n).toString()
    }
  }
}

function deepestChild() {
  
}