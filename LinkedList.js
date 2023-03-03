class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null; //if there's no head, there's no list
    this.size = 0;
  }

  insertFirst(data) {
    this.head = new Node(data, this.head);
    //if there's already a head, it will become the next
    this.size++;
  }

  insertLast(data) {
      let node = new Node(data);
      let current;

      // if empty, make head
      if(!this.head){
          this.head = node;
      }else{
          current = this.head;
          while(current.next){
              current = current.next;
              // this allows us to traverse through the list until we 
              //get to the end of the list
          }

          current.next = node;
      }
      this.size++;
  }

  insertAtIndex(data, index){
      // if index is out of range, do nothing
      if(index > 0 && index > this.size){
          return;
      }

      // if we are inserting to the first index
      if(index === 0){
          this.head = new Node(data, this.data);
          return;
      }

      const node = new Node(data);
      let current, previous;

      // set current to head first
      current = this.head;
      let count = 0;
      while(count < index){
          previous = current; // node before index
          count++; // increase count
          current = current.next // node after index
      }

      node.next = current; // setting node.next as node after index
      previous.next = node; // setting node where it's supposed to be
      this.size++;
  }

  getAt(index){
      let current = this.head;
      let count = 0;

      while(current){
          if(count == index){
              console.log(current.data);
          }
          count++;
          current = current.next;
      }

      return;
  }

  removeAt(index){
      if(index > 0 && index > this.size){
        return;
      }

    let current = this.head;
    let previous;
    let count = 0;

    //if index is 0, we will remove the head
    if(index === 0){
        this.head = current.next;
    }else{
        while(count < index){
            //while count is less than index, we will loop though the list
            //each loop, we will add the count
            // ex:100, 200, 300
            // previous will replace current and current.next will replace current
            // this way, loop will traverse through the list (crawling)
            count++;
            previous = current;
            current = current.next;
        }

        //when count hits the index, previous.next (current position) will be replaced
        // by current.next ( current's position's next node)
        previous.next = current.next;
    }
      this.size--;
  }

  clearList(){
      this.head = null;
      this.size = 0;
  }
  
  printListData(){
      let current = this.head;
      while(current){
          console.log(current.data);
          current = current.next; // this lets the function to crawl the data to the next;
      }
  }
}

const ll = new LinkedList();

ll.insertFirst(100);
ll.insertLast(200);
ll.insertLast(400);

ll.insertAtIndex(300, 2);

console.log(ll);

ll.printListData();

