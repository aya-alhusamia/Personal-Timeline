class Node{
    constructor(data, nextNode= null){
        this.data=data;
        this.nextNode=nextNode;
    }
}
class Stack{
    constructor(limit){
        this.limit= limit;
        this.size=0
        this.topNode=null
    }
  
    push=(data)=>{
        if(this.isFull()){
            console.log(`your stack id full ${data}`)
        }
        else{
        const newNode = new Node(data)
        newNode.nextNode=this.topNode
        this.topNode= newNode
        this.size++
        }
       
    }
    pop=()=>{
        if(this.isEmpty()){
          return"your satck is empty"
        }
        else{
            const popped= this.topNode
        this.topNode=popped.nextNode
        this.size--
        return popped.data
        }
        con
    }
    get isFull(){
        return this.size===this.limit
    }
    get isEmpty(){
        return this.size===0
    }
    get peek(){
        if(this.isEmpty()){
            console.log("your stask is Empty")
        }
        return this.topNode.data
        return this.topNode.data
    }
}

const myBooks= new Stack(2)
myBooks.push("aya")
myBooks.push("aya1")
myBooks.push("aya2")
myBooks.push("aya3")
console.log(myBooks.topNode)
// console.log(myBooks)
// console.log(myBooks.peek)
// myBooks.pop
// console.log(myBooks)