class Node{
    constructor(data, nextNode= null){
        this.data=data;
        this.nextNode=nextNode;
    }
}
class LinkedList{
    constructor(data, nextNode){
        this.headerNode= new  Node(data,nextNode)
    }
    addBegning=(newData)=>{
        const newNode=new Node(newData);
        newNode.nextNode=this.headerNode
        this.headerNode=newNode
    }
    
}