
class Node {
    constructor(value) {
        this.value=value,
        this.next=null
    }
}

class Partition {
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
        this.tail = this.tail.next
    }
    partition(x){
        let before_head = new Node(0)
        let before = before_head
        let after_head = new Node(0)
        let after = after_head

        while (this.head !==null){
            if(this.head.value < x){
                before.next = this.head
                before = before.next
            }else {
                after.next = this.head
                after = after.next
            }
            this.head = this.head.next
        }
        after.next = null
        before.next = after_head.next
        return before_head.next
    }

}
const partition = new Partition(1)
partition.append(4)
partition.append(3)
partition.append(2)
partition.append(5)
partition.append(2)
console.log(partition.partition(3));

// console.log(partition)