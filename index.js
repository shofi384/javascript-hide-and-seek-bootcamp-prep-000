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
  var deepestNode = document.querySelector('#grand-node')
  var depth = 0
  var tree = deepestNode.children
  
  for(let i=0; i<tree.length; i++) {
    var curNode, curDepth = checkDepth(tree[i], 0)
    if(curDepth > depth) {
      depth = curDepth
      deepestNode = curNode
    }
  }
  
  return deepestNode
}

function checkDepth(node, depth) {
  if(node === undefined) {
    return node, depth
  }
  
  var curNode = node
  var curDepth = depth + 1
  
  var deepestNode = curNode
  var deepestDepth = curDepth
  
  var childs = node.children
  
  for(let i=0; i<childs.length; i++) {
    var childNode, childDepth = checkDepth(childs[i], curDepth)
    if(childDepth > deepestDepth) {
      deepestDepth = childDepth
      deepestNode = childNode
    }
  }
  return deepestNode, deepestDepth
}


