// Set ds is kinda like array! except that there are no duplicates

class Set {
    constructor(collection){
        this.collection = [];
    }

    // this method will check for the presence of an element and return true or false;
    has(el){
        return(this.collection.indexOf(el) !== -1);
    }
    // return all the values in the set
    values(){
        return this.collection;
    }
    // checks if the collection has the element already
    // if element does not exist, it pushes the element into the collection and return true
    add(el){
        if(!this.has(el)){
            this.collection.push(el);
            return true;
        }
        return false;
    }
    // removes the element
    remove(el){
        if(this.has(el)){
            let index = this.collection.indexOf(el);
            this.collection.splice(index, 1);
            return true;
        }
        return false
    }
    // returns the size of the collection
    size(){
        return this.collection.length;
    }
    // returns the union of two sets
    union(otherSet){
      let unionSet = new Set();
      this.collection.forEach((e) => {
        unionSet.add(e);
      });
      otherSet.forEach((e) => {
        unionSet.add(e);
      });
      return unionSet.values();
    }
    // this method will return the intersecting elements
    intersection(otherSet){
      let intersectionSet = new Set();
      this.collection.forEach((e) => {
        if (otherSet.includes(e)) {
          intersectionSet.add(e);
        }
      });

      return intersectionSet.values();
    }
    // this method will return the difference of two sets. only the original collection's difference will be returned
    difference(otherSet){
        let differenceSet = new Set();
        this.collection.forEach((e)=>{
            if(!otherSet.includes(e)){
                differenceSet.add(e);
            }
        })
        return differenceSet.values();
    }
    // this method will test if the set is a subset of a different set
    subset(otherSet){
        return this.collection.every(function(val){
            return otherSet.includes(val);
        })
    }
}

let firstSet = new Set();
let secondSet = new Set();

firstSet.add("Hello")
firstSet.add("world")
secondSet.add("Hello")
secondSet.add("Sherman")
console.log(firstSet.values())
console.log(secondSet.values());
secondSet.remove("Hello")
console.log(secondSet.values());
// console.log(firstSet.union(secondSet.values()))
// console.log(firstSet.difference(secondSet.values()));
// console.log(firstSet.subset(secondSet.values()));