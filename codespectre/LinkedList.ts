class ListNode {
    public data: number;
    public next: ListNode | null;

    constructor(data: number) {
        this.data = data;
        this.next = null;
    }
}

class LinkedList {
    public head: ListNode | null;

    constructor(head: ListNode) {
        this.head = head;
    }

    public print(): void {
        let temp = this.head;
        while (temp !== null) {
            console.log(temp.data)
            temp = temp.next
        }
    }

    public length(): number {
        let temp = this.head
        let size = 0
        while (temp !== null) {
            size++
            temp = temp.next
        }
        return size
    }

    public pushNode(data: number): void {
        if (this.head === null) {
            this.head = new ListNode(data);
        } else {
            let temp = this.head
            while (temp.next !== null) {
                temp = temp.next
            }
            temp.next = new ListNode(data)
        }
    }

    public insertHead(data: number): void {
        const newNode = new ListNode(data);
        let temp = this.head;
        this.head = newNode;
        this.head.next = temp;
    }

    public find(value: number): boolean {
        let temp = this.head;
        while (temp !== null) {
            if (temp.data === value) return true
            temp = temp.next
        }
        return false
    }
}

let nodeOne = new ListNode(5);
let linkedList = new LinkedList(nodeOne);
linkedList.pushNode(97)
linkedList.pushNode(82)
