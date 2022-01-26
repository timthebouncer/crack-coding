
class Node {

  constructor(value) {
    this.value = value
    this.next = null
  }

}

class Palindrome {

  constructor(value) {
    this.head = {
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

  isPalindrome(){
    let fast = this.head
    let slow = this.head

    while (fast !== null && fast.next !== null){
      fast = fast.next.next
      slow = slow.next
    }
    slow = this.reverse(slow)
    fast = this.head
    while (slow !== null){

      if(slow.value !== fast.value){
        return false
      }
      slow = slow.next
      fast = fast.next

    }


    return true
  }

  reverse(head){
    let prev = null
    while ( head !== null){
      let next =  head.next
       head.next = prev
      prev =  head
       head = next
    }
    return prev
  }


}

const palindrome = new Palindrome(0)
palindrome.append(1)
palindrome.append(2)
palindrome.append(1)
palindrome.append(0)
console.log(palindrome.isPalindrome());
