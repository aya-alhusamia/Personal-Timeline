class Node{
    constructor(data, nextNode){
      this.data = data;
      this.nextNode = nextNode;
    }
  }
  class Queue{
    constructor(limit=null){
      this.frontNode = null;
      this.backNode = null;
      this.limit=limit
      this.size=0
    }
  
    peek=()=>{
    if(this.isEmpty()) console.log("Empty....")
    return this.frontNode.data;
    }
     
    enqueue = (data)=>{
        if(this.isFull())console.log("there's no plase.....")
        else{
            const newNode = new Node(data)
            if(this.isEmpty()){
             this.frontNode = newNode
             this.backNode= newNode
            }
            else{
                this.backNode.nextNode= newNode
                this.backNode=newNode
            }
            this.size++
        }
       
    }
    dequeue=()=>{
        if(this.isEmpty){
            console.log("Nothing to remove")
        }
        else{
            let removeNode=this.frontNode
            if(this.size===1){
                this.frontNode = null;
                this.backNode = null;
            }
            else{
                this.frontNode=removeNode.newNode
            }
            this.size--
            return removeNode.data
        }
    }

    isEmpty=()=>this.size===0
    isFull=()=>this.size===this.limit
  }
  const aaa = new Queue(3)
  aaa.enqueue("Aya")
  aaa.enqueue("Aya1")
  aaa.enqueue("Aya2")

  console.log(aaa)
 console.log( aaa.dequeue())