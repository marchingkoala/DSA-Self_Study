// another data structure for holding datas
// similar to stack but this is first in, first out
// think of cash register. First customer on line is the first to buy the product

function Queue(){
    collection = [];

    this.print = function(){
        console.log(collection);
    }
    this.enqueue = function(el){
        collection.push(el);
    }
    this.front = function(){
        console.log(collection[0]);
    }
    this.size = function(){
        console.log(collection.length);
    }
    this.isEmpty = function(){
        console.log(collection.length === 0);
    }
}

let queue = new Queue();
queue.isEmpty();
queue.enqueue("targle")
queue.enqueue("meggle")
queue.enqueue("shermie")
queue.print();
queue.isEmpty();