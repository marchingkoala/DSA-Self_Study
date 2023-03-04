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
        return result;
    }
    // Returns the size of the stack
    length() {
        return this.count;
    }
    // Returns the value at the end of the stack
    peek() {
        return this.storage[this.count - 1]
  }
}


var myStack = new Stack();

myStack.push("5")
console.log(myStack.pop())
console.log(myStack.length())