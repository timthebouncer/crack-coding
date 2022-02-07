/**
 Given the root of a binary search tree, and an integer k, return the kth smallest value (1-indexed) of all the values of the nodes in the tree.

 Input: root = [3,1,4,null,2], k = 1
 Output: 1
 */

const root = [3,1,4,null,2],k = 1

const kthSmallest=(root,k)=>{

  let n = 0;
  let stack = [];
  let currentNode = root

  while(currentNode || stack){
    while(currentNode){
      stack.push(currentNode)
      currentNode = currentNode.left
    }
    currentNode = stack.pop()
    n++
    if(n === k){
      return currentNode.val
    }else{
      currentNode = currentNode.right
    }
  }

}
kthSmallest(root,k)
