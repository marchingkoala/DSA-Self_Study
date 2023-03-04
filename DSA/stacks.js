// Stack ds is like a group of books.
// first in, last out!
// last in, first out! 
// good example of stack is your web browser's back button. 

// function traditionally provided in the stack
// push, pop, peek, length or size  

var letter = [] // this is our stack
var word = "racecar";
var rword = "";

class Stack {
    constructor(count, storage) {
        this.count = 0;
        this.storage = {};
    }

    //Adds a value onto the end of the stack
    push(val) {
        this.storage[this.count] = val;
        this.count += 1;
    }
    // Removes and return the value at the end of the stack
    pop() {
        if (this.count === 0) {
        return undefined;
        }

        this.count--;
        let result = this.storage[this.count];
        delete this.storage[this.count];
        console.log(result);
    }
    // Returns the size of the stack
    length() {
        console.log(this.count);
    }
    // Returns the value at the end of the stack
    peek() {
        console.log(this.storage[this.count - 1]);
  }
}


var myStack = new Stack();

myStack.push("1");
myStack.push("2");
myStack.peek();
myStack.push("3");
myStack.length();
myStack.pop();
myStack.length();