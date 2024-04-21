//1. Implement a singly linked list.

class Node {
	constructor(element) {
		this.element = element;
		this.next = null
	}
}

class LinkedList {
	constructor() {
		this.head = null;
		this.size = 0;
	}
	add(element) {
		
		let node = new Node(element);

	
		let current;
		if (this.head == null)
			this.head = node;
		else {
			current = this.head;

			
			while (current.next) {
				current = current.next;
			}
			current.next = node;
		}
		this.size++;
	}
	insertAt(element, index) {
		if (index < 0 || index > this.size)
			return console.log("Please enter a valid index.");
		else {
			let node = new Node(element);
			let curr, prev;

			curr = this.head;

			if (index == 0) {
				node.next = this.head;
				this.head = node;
			} else {
				curr = this.head;
				let it = 0;
				while (it < index) {
					it++;
					prev = curr;
					curr = curr.next;
				}

				// adding an element
				node.next = curr;
				prev.next = node;
			}
			this.size++;
		}
	}

	removeFrom(index) {
		if (index < 0 || index >= this.size)
			return console.log("Please Enter a valid index");
		else {
			let curr, prev, it = 0;
			curr = this.head;
			prev = curr;

	
			if (index === 0) {
				this.head = curr.next;
			} else {

				while (it < index) {
					it++;
					prev = curr;
					curr = curr.next;
				}

				prev.next = curr.next;
			}
			this.size--;
			return curr.element;
		}
	}
	removeElement(element) {
		let current = this.head;
		let prev = null;

		// iterate over the list
		while (current != null) {
			// comparing element with current
			// element if found then remove the
			// and return true
			if (current.element === element) {
				if (prev == null) {
					this.head = current.next;
				} else {
					prev.next = current.next;
				}
				this.size--;
				return current.element;
			}
			prev = current;
			current = current.next;
		}
		return -1;
	}


	// finds the index of element
	indexOf(element) {
		let count = 0;
		let current = this.head;

		// iterate over the list
		while (current != null) {
			// compare each element of the list
			// with given element
			if (current.element === element)
				return count;
			count++;
			current = current.next;
		}

		// not found
		return -1;
	}

	// checks the list for empty
	isEmpty() {
		return this.size == 0;
	}

	// gives the size of the list
	size_of_list() {
		console.log(this.size);
	}


	// prints the list items
	printList() {
		let curr = this.head;
		let str = "";
		while (curr) {
			str += curr.element + " ";
			curr = curr.next;
		}
		console.log(str);
	}

}


let ll = new LinkedList();

console.log(ll.isEmpty());

ll.add(10);
ll.printList();
console.log(ll.size_of_list());
ll.add(20);
ll.add(30);
ll.add(40);
ll.add(50);

ll.printList();
console.log("is element removed ?" + ll.removeElement(50));

ll.printList();

console.log("Index of 40 " + ll.indexOf(40));

ll.insertAt(60, 2);
ll.printList();
console.log("is List Empty ? " + ll.isEmpty());
console.log(ll.removeFrom(3));
ll.printList();
//2.2. Implement a stack using an array.
/* javascript program to implement basic stack 
operations 
*/
var t = -1; 
    var MAX = 1000; 
    var a = Array(MAX).fill(0); // Maximum size of Stack 

    function isEmpty() { 
        return (t < 0); 
    } 

    function push(x) { 
        if (t >= (MAX - 1)) { 
            console.log("Stack Overflow"); 
            return false; 
        } else { 
        t+=1; 
            a[t] = x; 
            
            console.log(x + " pushed into stack<br/>"); 
            return true; 
        } 
    } 

    function pop() { 
        if (t < 0) { 
            console.log("Stack Underflow"); 
            return 0; 
        } else { 
            var x = a[t]; 
            t-=1; 
            return x; 
        } 
    } 

    function peek() { 
        if (t < 0) { 
            console.log("Stack Underflow"); 
            return 0; 
        } else { 
            var x = a[t]; 
            return x; 
        } 
    } 

    function print() { 
        for (i = t; i > -1; i--) { 
            console.log(" " + a[i]); 
        } 
    } 

        push(10); 
        push(20); 
        push(30); 
        console.log(pop() + " Popped from stack"); 
        console.log("<br/>Top element is :" + peek()); 
        console.log("<br/>Elements present in stack : "); 
        print(); 
//3. Implement a queue using a linked list.

class QNode
{
	constructor(key)
	{
		this.key = key;
		this.next = null;
	}
}

let front = null, rear = null;

function enqueue(key)
{
	// Create a new LL node
		let temp = new QNode(key);

		// If queue is empty, then new node is front and rear both
		if (rear == null) {
			front = rear = temp;
			return;
		}

		// Add the new node at the end of queue and change rear
		rear.next = temp;
		rear = temp;
}


function dequeue()
{
	// If queue is empty, return NULL.
		if (front == null)
			return;

		// Store previous front and move front one node ahead
		let temp = front;
		front = front.next;

		// If front becomes NULL, then change rear also as NULL
		if (front == null)
			rear = null;
}


enqueue(10);
enqueue(20);
dequeue();
dequeue();
enqueue(30);
enqueue(40);
enqueue(50);
dequeue();
document.write("Queue Front : " + ((front != null) ? (front).key : -1) +"<br>");
document.write("Queue Rear : " + ((rear != null) ? (rear).key : -1) +"<br>");

//4. Write a function to reverse a linked list.
 

 
var head; 

 
class Node 
{ 
	constructor(val) 
	{ 
		this.data = val; 
		this.next = null; 
	} 
} 

function reverse(head, k) 
{ 
	if (head == null) 
		return null; 
	var current = head; 
	var next = null; 
	var prev = null; 

	var count = 0; 

	// Reverse first k nodes of 
	// linked list 
	while (count < k && 
		current != null) 
	{ 
		next = current.next; 
		current.next = prev; 
		prev = current; 
			current = next; 
			count++; 
	} 

	/* next is now a pointer to (k+1)th node 
	Recursively call for the list starting 
	from current. And make rest of the list 
	as next of first node. */
	if (next != null) 
		head.next = reverse(next, k); 

	// prev is now head of input list 
	return prev; 
} 

// Utility functions 
// Inserts a new Node at front 
// of the list. 
function push(new_data) 
{ 
	/* 1 & 2: Allocate the Node & 
			Put in the data */
	new_node = new Node(new_data); 

	// 3. Make next of new Node as head 
	new_node.next = head; 

	// 4. Move the head to point to 
	// new Node 
	head = new_node; 
} 

// Function to print linked list 
function printList() 
{ 
	temp = head; 
	while (temp != null) 
	{ 
		document.write(temp.data + " "); 
		temp = temp.next; 
	} 
	document.write("<br/>"); 
} 


push(9); 
push(8); 
push(7); 
push(6); 
push(5); 
push(4); 
push(3); 
push(2); 
push(1); 

document.write("Given Linked List<br/>"); 
printList(); 

head = reverse(head, 3); 

document.write("Reversed list<br/>"); 
printList(); 



//5. Write a function to check if a linked list contains a cycle.

function cycleNode (head) {
    if(!head || !head.next) return null // head has no next value
     // create 3 pointers
     let fast = head;
     let slow = head;
     let start = head; // third pointer
     
     while(fast && fast.next){ // while pointers exist and fast pointer has a next value
       fast = fast.next.next; // move fast pointer by two nodes
       slow = slow.next; // move slow pointer by one node
       if(fast === slow) break; // stop if slow pointer equals fast pointer
     }
     
     if(slow !== fast) return null // linked list doesn't contain a cycle
     
     while(start !== slow){ // while slow pointer doesn't equal third pointer
       start = start.next; // move third pointer by one node
       slow = slow.next; // move slow pointer by one node
     }
     return start; // where cycle starts
 }