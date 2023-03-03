// linked list

class Node {
    constructor(data, next = null){
        this.data = data;
        this.next = next;
    }
}

class LinkedList{
    constructor(){
        this.head = null;
        this.size = 0;
    }

    insertFirst(data){
        this.head = new Node(data, this.head);
        this.size++;
    }

    insertLast(data){
        let node = new Node(data);
        let current = this.head;

        if(!this.head){
            this.head = new Node(data);
            this.size++;
        }else{
            while(current.next){
                current = current.next;
            }

            current.next = node;
        }
        this.size++;
    }

    insertAtIndex(data, index){

        const node = new Node(data);

        if(index > 0 && index > this.size){
            return;
        }

        if(index === 0){
            this.head = new Node(data, this.head);
            this.size++;
        }else{
            let count = 0;
            let current, previous;
            current = this.head;
            while(count < index){
                previous = current;
                count++;
                current = current.next;
            }

            node.next = current;
            previous.next = node;
            this.size++;
        }
    }

    getAt(index){
        let current = this.head;
        let count = 0;
        while(current){
            if(count === index){
                console.log(current.data);
            }
            count++;
            current = current.next;
        }
    }

    removeAt(index){
        if(index > 0 && index > this.size){
            return;
        }

        let current = this.head
        let count = 0;
        let previous;

        if(index === 0){
            this.head = current.next;
        }
        while(count < index){
            previous = current;
            current = current.next;
            count++;
        }

        previous.next = current.next;
        this.size--;

    }

    clearList(){
        this.head = null;
        this.size = 0;
    }

    printedData(){
        let current = this.head;
        while(current){
            console.log(current.data);
            current = current.next;
        }
    }
}

let ll = new LinkedList();
ll.insertFirst(1);
ll.insertLast(5);
ll.insertAtIndex(2,1)

ll.printedData();