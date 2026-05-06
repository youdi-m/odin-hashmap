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

	// return the number of nodes in the list
	// we use an int for size to keep this function O(1)
	size() {
		return this.listSize;
	}

	// returns true if the passed in key is in the list and otherwise returns false.
	contains(key) {
		if (this.checkEmpty()) return undefined;

		// copy head to currentNode
		let currentNode = this.listHead;

		// step through each node and compare values
		// return true if values match
		for(let i = 0; i < this.listSize; i++) {
			if (currentNode.key == key) return true;
			currentNode = currentNode.next;
		}

		// return false if no values matched
		return false;
	}

	// return the value of the node at the given index
	valueAt(index) {
		if (this.checkEmpty()) return undefined;

		// copy list head to new node
		let currentNode = this.listHead;
		
		// step up until we get to requestde index
		for(let i = 0; i < index; i++) {
			currentNode = currentNode.next;
		}
		
		// return value at that index
		return currentNode.value;
	}

	// return the value of the node at the given index
	keyAt(index) {
		if (this.checkEmpty()) return undefined;

		// copy list head to new node
		let currentNode = this.listHead;
		
		// step up until we get to requestde index
		for(let i = 0; i < index; i++) {
			currentNode = currentNode.next;
		}
		
		// return value at that index
		return currentNode.key;
	}

	// returns the index of the node containing the given value. If the value can’t be found in the list, it should return -1.
	// If more than one node has a value matching the given value, it should return the index of the first node with the matching value.
	findIndex(key) {
		if (this.checkEmpty()) return undefined;

		// copy head to currentNode
		let currentNode = this.listHead;

		// step through each node and compare values
		// return i (index) if values match
		for(let i = 0; i < this.listSize; i++) {
			if (currentNode.key == key) return i;
			currentNode = currentNode.next;
		}

		// return -1 if value not found
		return -1
	}

	// print LinkedList as a string, if empty, return an empty string
	// format: (key : value) -> (key : value) -> (key : value) -> null
	toString() {
		if (this.checkEmpty()) return '';

		// copy head ot currentNode
		let currentNode = this.listHead;

		// step through list and print value on same line
		for(let i = 0; i < this.listSize; i++) {
			process.stdout.write(`(${currentNode.key} : ${currentNode.value}) -> `);
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

	// update the value of the node at the given list index
	updateValue(index, value) {

		if(index > this.listSize || index < 0) throw new RangeError('Index out of range')

		let currentNode = this.listHead;

		for(let i = 0; i <= index; i++) {

			if (i == index) {
				currentNode.value = value;
			}
			else {
				currentNode = currentNode.next;
			}
		}
	}
}