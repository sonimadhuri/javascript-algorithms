function createQueue(){
  let queue = [];
  return {
    enqueue(ele){
        queue.unshift(ele)
    },
    dequeue(){
      return queue.pop()
    },
    peek(){
      // Returns the next elements that will be popped
      return queue[queue.length -1]
    },
    length(){
      return queue.length
    },
    isEmpty() {
      return queue.length === 0;
    }
  }
  
}

const q = createQueue()
