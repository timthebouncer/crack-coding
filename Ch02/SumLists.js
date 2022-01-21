
class Node {
    constructor(value) {
        this.value = value
        this.next = null
    }
}

class SumLists {
    constructor(value,value2) {
        this.head={
            value:value,
            next:null
        }
        this.head2={
            value:value2,
            next:null
        }
        this.tail = this.head
        this.tail2 = this.head2
    }

    append(value){
        const newNode = new Node(value)
        this.tail.next = newNode
        this.tail = newNode
    }
    append2(value){
        const newNode = new Node(value)
        this.tail2.next = newNode
        this.tail2 = newNode
    }
    sum(){
        let node_head = new Node(0)
        let node = node_head

        let carry = 0

        while (this.head !== null || this.head2 !== null){
            let head_val  = this.head !== null ? this.head.value:0
            let head2_val  = this.head2 !== null ? this.head2.value:0

            let current_sum = head_val + head2_val + carry

             carry = parseInt(current_sum / 10);
            let last_digit = current_sum % 10;

            let new_node = new Node(last_digit)
            node.next = new_node

            if(this.head !== null) this.head = this.head.next
            if(this.head2 !== null) this.head2 = this.head2.next
            node = node.next
        }
        if(carry > 0){
            const new_node = new Node(carry)
            node.next = new_node
            node = node.next
        }
        return node_head.next
    }

}

const sumList = new SumLists(2,5)
sumList.append(4)
sumList.append(3)
sumList.append2(6)
sumList.append2(4)
console.log(sumList.sum());
// console.log(sumList)
