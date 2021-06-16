//Queue using linkedlist
function queueUsingLL(){
  //Node 
  let Node = function(elm){
    this.element = elm;
    this.next = null;
  }
  
  //To keep track of the size  
  let length = 0;
  
  //To keep track of the list
  let head = null;
  
  //Enqueue data in the queue
  this.enqueue = function(elm){
    let node = new Node(elm),
    current;
  
    //If head is empty then 
    //Add the node at the beginning
    if(head === null){
      head = node;
    }else{
      //Else add the node as the
      //Next element of the existing list
      current = head;
      while(current.next){
        current = current.next;
      }

      current.next = node;
    }

    //Increase the length
    length++;
  }
  
  //Remove the item from the queue
  this.dequeue = function(){
    let current = head;
    
    //If there is item then remove it 
    //and make the next element as the first
    if(current){
      let elm = current.element;
      current = current.next;
      head = current;
      length--;
      return elm;
    }
    
    return null;   
  }
  
  //Return the first element in the queue
  this.front = function(){    
    if(head){    
      return head.element;
    }

    return null;
  }
  
  //Return the last element in the queue
  this.rear = function(){    
    let current = head;
    
    //If head is empty
    //Return null
    if(current === null){
      return null;
    }
    
    //Return the last elememnt
    while(current.next){
      current = current.next;
    }

    return current.element;
  }
  
  //Convert the queue to an array
  this.toArray = function(){
    let arr = [];
    let current = head;
    while(current){
      arr.push(current.element);
      current = current.next;
    }
    
    return arr;
  }
  
  //Check if queue is empty
  this.isEmpty = function(){
    return length === 0;
  }
  
  //Return the size of the queue
  this.size = function(){
    return length;
  }
  
  //Clear the queue
  this.clear = function(){
    head = null;
    length = 0;
  }
  
}





Input:
let queue = new queueUsingLL();
console.log(queue.isEmpty());
queue.enqueue('sumaiya');
queue.enqueue('hafsa');
queue.enqueue('faiza');
console.log(queue.toArray());
queue.dequeue();
queue.dequeue();
console.log(queue.toArray());
queue.enqueue('jawaria');
queue.enqueue('khadija');
queue.dequeue();
console.log(queue.toArray());
console.log(queue.size());
console.log(queue.front());
console.log(queue.rear());

Output:
true
["sumaiya", "hafsa", "faiza"]
["faiza"]
["jawaria", "khadija"]
2
"jawaria"
"khadija"