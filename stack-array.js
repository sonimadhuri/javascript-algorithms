function createStack(){
  let stack = []
  return {
    push(ele){
      stack.push(ele)
    },
    pop() {
     return stack.pop()
    },
    peek(){
      return stack[stack.length - 1] 
    },
    length() {
      return stack.length
    },
    isEmpty(){
      return stack.length === 0
    }
  }
}

let s = createStack()

s.push(3)
s.push(2)
console.log(s.peek())
console.log(s.pop())

