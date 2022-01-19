
class Node {
    constructor(value) {
        this.value=value,
        this.next=null
    }
}

class ReturnKthToLast {
    constructor(value) {
        this.head={
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
    findKth(value){
        let curr = this.head
        let follower = this.head
        for (let i=0; i<value; i++){
                if(curr === null)return
                curr = curr.next
        }
        while(curr.next !== null){
            curr = curr.next
                follower = follower.next
        }
        return follower
    }

}

const KthToLast = new ReturnKthToLast(5)


KthToLast.append(7)
KthToLast.append(9)
KthToLast.append(11)
console.log(KthToLast.findKth(1));
// console.log(KthToLast)