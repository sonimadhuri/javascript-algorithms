const { createQueue } = require('queue-array')


//1.Every item has a priority associated with it.
//2.An element with high priority is dequeued before an element with low priority.
//3.If two elements have the same priority, they are served according to their order in the queue.
function priority(){
  let low = createQueue()
  let high = createQueue()
  return {
    enqueue(ele, isHigh = false){
      if(isHigh) low.enqueue(ele)
      else high.enqueue(ele)
    },
    dequeue(){
      if(high.isEmpty()) return low.dequeue()
      high.dequeue()
    },
    peek(){
      if(high.isEmpty()) return low.peek()
      return high.peek()
    },
    length(){
      return low.length() + high.length()
    },
    isEmpty(){
      return low.isEmpty() && high.isEmpty()
    }
  }
}

const p = priority()
