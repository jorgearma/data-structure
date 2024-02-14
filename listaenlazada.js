class node {
    constructor(data){
        this.data = data
        this.next = null
    }
}

class lista{
    constructor(){
        this.head = null
    }
    appent(data) {
        const newNode = new node(data);
        if (!this.head) {
            this.head = newNode
        }else{
            let current = this.head
            while (current.next) {
                current = current.next
            }
            current.next = newNode
        }
    }
    print(){
        let current = this.head
        while (current) {
            console.log(current.data);

            current = current.next
        }
    }
}






const listaenlazada = new lista();

listaenlazada.appent(1)
listaenlazada.appent(3)
listaenlazada.appent(2)
listaenlazada.appent(6)
listaenlazada.appent(5)
listaenlazada.appent(10)
listaenlazada.appent(6)
listaenlazada.appent(10)

listaenlazada.print()



console.log('----------------------------------------------- ');


class stack{
    constructor(){
        this.items = []
    }
    push(item){
        this.items.push(item)
    }
    isempty(){
        return this.items.length === 0
    }

    pop(){
        if (!this.isempty()) {
            return this.items.pop()
        }
    }
    peek(){
        if (!this.isempty()) {
            return this.items[this.items.length - 1]
        }
    }
    size(){
        return this.items.length
    }
}

const pila = new stack();

pila.push(4)
pila.push(4)
pila.push(4)
pila.push(2)

console.log(pila.isempty());
console.log('size',pila.size());
console.log(pila.peek());
pila.pop()

console.log('after pop' , pila.peek());
