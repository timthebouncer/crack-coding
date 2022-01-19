
class Node{
  constructor(value){
    this.value = value
    this.next = null
  }
}

class LinkedList{

  constructor(value) {
    this.head={
      value:value,
      next:null
    }
    this.tail = this.head
  }

  append(value){

    const newNode = new Node(value)

    this.tail.next = newNode
    this.tail = newNode
  }

  removeDups(){
    //ref this.head
    let curr = this.head
    while(curr !== null && curr.next !== null){
      if(curr.value === curr.next.value){
          curr.next = curr.next.next
      }else {
        curr = curr.next
      }
    }
    //this.head has been changed by manipulating curr
    return this.head
  }

}




const myLinkedList = new LinkedList(10)
myLinkedList.append(5)
myLinkedList.append(5)
myLinkedList.append(7)
console.log(myLinkedList.removeDups());
// console.log(myLinkedList)

