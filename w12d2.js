/** 
 * A class to represents a single item of a SinglyLinkedList that can be
 * linked to other Node instances to form a list of linked nodes.
 https://kalkicode.com/data-structure/single-linked-list-visualization
 */
class ListNode {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

/**
 * SLL(Singly Linked List)
 * keeps track of the start (head) of the list and to store all the
 * functionality (methods) that each list should have.
 */
class SLL {
    constructor() {
        this.head = null;
    }

    /**
     * Determines if this list is empty.
     * @returns {boolean}
     */
    isEmpty() {
        return this.head ? false : true;
    }

    /**
     * Creates a new node with the given data and inserts it at the back of
     * this list.
     * @param {any} data The data to be added to the new node.
     * @returns {SinglyLinkedList} This list.
     */
    insertAtBack(data) {
        // Create a new node with the given value
        const newNode = new ListNode(data);

        // if the list is empty, the head will be the newNode
        if (!this.head) {
            this.head = newNode;
            return this;
        }

        let runner = this.head;
        while (runner.next !== null) {
            runner = runner.next;
        }
        // After while-loop, runner is at the last node
        runner.next = newNode;
        return this;
    }

    /** BONUS:
     * Calls insertAtBack on each item of the given array.
     * - Time: O(n * m) n = list length, m = arr.length.
     * - Space: O(1) constant.
     * @param {Array<any>} vals The data for each new node.
     * @returns {SinglyLinkedList} This list.
     */
    insertAtBackMany(vals) {}

    //given
    printList() {
        // if the list is empty?
        if (!this.head) {
            console.log("This is an empty list");
            return;
        }

        // how to traverse through different nodes?
        let runner = this.head;
        while (runner !== null) {
            console.log(runner.data);
            runner = runner.next;
        }
        // Can I chain all the methods?
        return this;
    }
}

const emptyList = new SLL();

const list1 = new SLL();
list1.insertAtBack(3).insertAtBack(7).insertAtBack(9);

emptyList.printList();

list1.printList();
