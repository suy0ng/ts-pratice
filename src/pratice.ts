// Interface에서 Generic 사용하기
interface Items<T>{
  list:T[];
}

const items: Items<string> = {
  list: ['a','b','c','d']
}

// Class에서 Generic 사용하기
class Queue<T> {
  list: T[] = [];
  get length() {
    return this.list.length;
  }
  enqueue(item: T){
    this.list.push(item);
  }
  dequeue(){
    return this.list.shift();
  }
}

const queue = new Queue<number>();
queue.enqueue(0);
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
queue.enqueue(4);
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());