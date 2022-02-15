const root = [3,9,20,null,null,15,7]
const levelOrder = (root)=> {

  let res = []
  let queue = []
  queue.push(root)


  while(queue.length){
    let queueLen = queue.length
    let level = []

    for(let i=0;i<queueLen;i++){
      let node = queue.shift()
      if(node){
        level.push(node.val)
        queue.push(node.left)
        queue.push(node.right)
      }
    }
    if(level.length){
      res.push(level)
    }
  }
  return res
};
levelOrder(root)
