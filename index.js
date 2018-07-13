function getFirstSelector(selector) {
  return document.querySelector(selector)
}

function nestedTarget() {
  return document.querySelector('#nested').querySelector('.target')
}

function increaseRankBy(n) {
  var divs = document.querySelectorAll('.ranked-list')
  
  for(let i=0; i<divs.length; i++) {
    var lists = divs[i].querySelectorAll('li')
    for(let j=0; j<lists.length; j++) {
      lists[j].innerHTML = (parseInt(lists[j].innerHTML) + n).toString()
    }
  }
}

function deepestChild() {
  var deepestNode, depth = 0
  var deepestNode = document.querySelector('#grand-node')
  var tree = deepestNode.children
  
  for(let i=0; i<tree.length; i++) {
    var curDepth = checkDepth(tree[i])
    if(curDepth > depth) {
      depth = curDepth
      deepestNode = tree[i]
    }
  }
  
  return deepestNode
}

function checkDepth(node) {
  if(node === undefined) {
    return 0
  }
  var depth = 1
  var childs = node.children
  for(let i=0; i<childs.length; i++) {
    var childDepth = 1 + checkDepth(childs[i])
    if(childDepth > depth)
  }
  return depth
}
