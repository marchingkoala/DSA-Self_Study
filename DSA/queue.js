// another data structure for holding datas
// similar to stack but this is first in, first out
// think of cash register. First customer on line is the first to buy the product

function Queue(){
    let collection = [];

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

// below takes in an extra value to determine priority
// ex: ["Wash veggies", "1"], ["Cut veggies", "2"]
function PriorityQueue(){
    let collection = [];
    this.printCollection = function(){
        console.log(collection)
    };
    this.enqueue = function(element){
        if(this.isEmpty()){
            collection.push(element)
        }else{
            let added = false;
            for( let i=0; i<collection.length; i++){
                if(element[1] < collection[i][1]){
                    collection.splice(i, 0, element);
                    added = true;
                    break;
                }
            }
            if(!added){
                collection.push(element);
            }
        }
    }
    this.dequeue = function(){
        let value = collection.shift();
        return value[0];
    }
    this.front = function () {
        console.log(collection[0]);
    };
    this.size = function () {
        console.log(collection.length);
    };
    this.isEmpty = function () {
        console.log(collection.length === 0);
    };
}

let queue = new PriorityQueue();
queue.enqueue(["targle", 0])
queue.enqueue(["meggle", 1])
queue.enqueue(["shermie", 3])
queue.enqueue(["hazel", 2]);
queue.printCollection();