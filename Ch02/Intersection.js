
class Node {
  constructor(value) {
    this.value = value
    this.next = null
  }
}


class Intersection {
  constructor(value1, value2) {
    this.head = {
      value:value1,
      next:null
    }
    this.tail = this.head

    this.head2 = {
      value:value2,
      next:null
    }
    this.tail2 = this.head2

    this.length1 = 0
    this.length2 = 0
  }
  append(value){
    const newNode = new Node(value)
    this.tail.next = newNode
    this.tail = this.tail.next
    this.length1++
  }
  append2(value){
    const newNode = new Node(value)
    this.tail2.next = newNode
    this.tail2 = this.tail2.next
    this.length2++
  }

  findIntersection(){

    let longer = this.length1 > this.length2 ? this.head : this.head2
    let shorter = this.length1 < this.length2 ? this.head : this.head2

    let findDiff = this.length1 - this.length2

    for (let i=0; i<findDiff;i++){
      if(longer.value !== shorter.value){
        longer = longer.next
      }
    }

    while(longer.next.value !== shorter.next.value){
      longer = longer.next
      shorter = shorter.next
    }

    return longer.next

  }
  // findIntersection2(){
  //   let a_pointer = headA;
  //   let b_pointer = headB;
  //
  //   while(a_pointer !== b_pointer){
  //
  //     if(a_pointer === null){
  //       a_pointer = headB
  //     }else{
  //       a_pointer = a_pointer.next
  //     }
  //
  //     if(b_pointer === null){
  //       b_pointer = headA
  //     }else{
  //       b_pointer = b_pointer.next
  //     }
  //   }
  //   return a_pointer
  // }

}

const intersection = new Intersection(3,4)
intersection.append(1)
intersection.append(5)
intersection.append(9)
intersection.append(7)
intersection.append(2)
intersection.append(1)
intersection.append2(6)
intersection.append2(7)
intersection.append2(2)
intersection.append2(1)

console.log(intersection.findIntersection())
