class Node {
	constructor(key, value) {
		this.key = key;
		this.value = value;
		this.next = null;
	}
}

export class LinkedList {
	constructor() {
		this.listHead = null;
		this.listTail = null;
		this.listSize = 0;
	}

	// function to check if the list is empty
	checkEmpty() {
		return this.listHead == null
	}

	// append a new node to the end of the list
	append(key, value) {

		// create the new node
		let newNode = new Node(key, value);
		
		// connect old tail.next to new node if it exists
		if(this.listTail != null) {
			this.listTail.next = newNode;
		}

		// set the new node as new tail
		this.listTail = newNode;
		
		// set the new node as the head if the lst is empty
		if(this.listSize == 0) {
			this.listHead = newNode;
		}

		// increase list size
		this.listSize++;
	}

	// append a new node to the beginning of the list
	prepend(key, value) {

		// create new node
		let newNode = new Node(key, value);
		newNode.next = this.listHead;

		// set new node as head
		this.listHead = newNode;

		// set new node as tail if list is empty
		if(this.listSize == 0) {
			this.listTail = newNode;
		}

		// increase list size
		this.listSize++
	}

	// return the number of nodes in the list
	// we use an int for size to keep this function O(1)
	size() {
		return this.listSize;
	}

	// return value of first node in the list
	head() {
		if (this.checkEmpty()) return undefined;

		return this.listHead;
	}

	// return value of last node in the list
	tail() {
		if (this.checkEmpty()) return undefined;

		return this.listTail;
	}

	// return the value of the node at the given index
	at(index) {
		if (this.checkEmpty()) return undefined;

		// copy list head to new node
		let currentNode = this.listHead;
		
		// step up until we get to requestde index
		for(let i = 0; i < index; i++) {
			currentNode = currentNode.next;
		}
		
		// return value at that index
		return [currentNode.key, currentNode.value];
	}

	// remove the head node from the list and return its value
	pop() {
		// get the current head
		let oldHead = this.listHead;

		// move head to next node
		this.listHead = this.listHead.next;

		// decrease list size
		this.listSize--;

		// return old head value
		return [oldHead.key, oldHead.value];
	}

	// returns true if the passed in value is in the list and otherwise returns false.
	contains(key, value) {
		if (this.checkEmpty()) return undefined;

		// copy head to currentNode
		let currentNode = this.listHead;

		// step through each node and compare values
		// return true if values match
		for(let i = 0; i < this.listSize; i++) {
			if (currentNode.key == key && currentNode.value == value) return true;
			currentNode = currentNode.next;
		}

		// return false if no values matched
		return false;
	}

	// returns the index of the node containing the given value. If the value can’t be found in the list, it should return -1.
	// If more than one node has a value matching the given value, it should return the index of the first node with the matching value.
	findIndex(key, value) {
		if (this.checkEmpty()) return undefined;

		// copy head to currentNode
		let currentNode = this.listHead;

		// step through each node and compare values
		// return i (index) if values match
		for(let i = 0; i < this.listSize; i++) {
			if (currentNode.key == key && currentNode.value == value) return i;
			currentNode = currentNode.next;
		}

		// return -1 if value not found
		return -1
	}

	// represents your LinkedList objects as strings, so you can print them out and preview them in the console.
	// If the list is empty, it should return an empty string. The format should be: ( value ) -> ( value ) -> ( value ) -> null.
	toString() {
		if (this.checkEmpty()) return '';

		// copy head ot currentNode
		let currentNode = this.listHead;

		// step through list and print value on same line
		for(let i = 0; i < this.listSize; i++) {
			process.stdout.write([currentNode.key, currentNode.value] + ' -> ');
			currentNode = currentNode.next;
		}

		// add null at the end to signify end of list
		process.stdout.write('null');
		
		// used for new line
		console.log()
	}


	// removes the node at the given index. If the given index is out of bounds throw a RangeError
	removeAt(index) {
		if(index > this.listSize || index < 0) throw new RangeError('Index out of range')

		let currentNode = this.listHead;

		for(let i = 0; i <= index; i++) {
			if (i == index-1) {
				currentNode.next = currentNode.next.next;
				this.listSize--;
			}
			else {
				currentNode = currentNode.next;
			}
		}
	}
}