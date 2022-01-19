
class Node {
    constructor(value) {
            this.value=value,
            this.next=null
    }
}

class DeleteMidNode {
    constructor(value) {
        this.head = {
            value:value,
            next:null
        }
        this.tail = this.head
        this.length = 1
    }

    append(value){
        const newNode = new Node(value)
        this.tail.next = newNode
        this.tail = newNode
        this.length++
    }

    remove(value){
        //第一種
        let curr = this.head
        while (curr !== null && curr.next !== null){
            if(curr.value === value){
                curr.value = curr.next.value
            }else {
                curr = curr.next
            }
        }
        return this.head
        //第二種
        // curr.value = curr.next.value
        // curr.next = curr.next.next
    }

}
const delMidNode = new DeleteMidNode(5)
delMidNode.append(7)
delMidNode.append(9)
console.log(delMidNode.remove(7));
// console.log(delMidNode)