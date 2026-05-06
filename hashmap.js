import { LinkedList } from "./linkedList.js";

export class HashMap {
	constructor() {
		this.capacity = 16;
		this.loadFactor = 0.75;
		this.buckets = [];
		this.size = 0;
		this.keyNumber = 0;
	}

	// returns true or false for if we should resize the buckets array
	resize() {
		return this.size > this.capacity*this.loadFactor;
	}

	// takes a key and produces a hash (bucket index) with it
	hash(key) {
		let hashCode = 0;
		const primeNumber = 31;

		for(let i = 0; i < key.length; i++) {
			hashCode = (primeNumber * hashCode + key.charCodeAt(i)) % this.capacity;
		}

		return hashCode;
	}

	// store the key/value pair in the hashmap, if key exists update the value instead
	set(key, value) {

		// hash the key to get the index
		let index = this.hash(key);

		// create linkedList at bucket index if empty
		if(this.buckets[index] == null) {
			
			// create linkedList
			let newList = new LinkedList;
			
			// assign linkedList to empty bucket index
			this.buckets[index] = newList;
			
			// append node to list
			newList.append(key, value);

			// increase size and number of keys
			this.size++;
			this.keyNumber++;

			// double the capacity if needed
			if(this.resize()) this.capacity*=2;

		// if linkedList exists at bucket index handle the collision
		} else if(this.buckets[index] instanceof LinkedList) {
			// if the key already exists, update its value
			if(this.buckets[index].contains(key)) {
				// get the index of the key
				let listIndex = this.buckets[index].findIndex(key);
	
				// update value at that index with new value
				this.buckets[index].updateValue(listIndex, value);

			// if the key doesnt exist add another node to the list
			} else {
				// add new node to list
				this.buckets[index].append(key, value);

				// increase number of keys
				this.keyNumber++;
			}

		// if not null or linkedList
		} else {
			console.log('you should not see this');
		}
	}

	// return true or false if key is in the hashmap
	has(key) {
		for(let i = 0; i < this.capacity; i++) {
			if(this.buckets[i] instanceof LinkedList) {
				if(this.buckets[i].contains(key)) {
					return true;
				}
			}
		}
		return false;
	}

	// return value assigned to key, return null if no key found
	get(key) {
		if(!this.has(key)) return null;
		
		// return the value of the node in the linkedList at bucket this.hash(key)
		return this.buckets[this.hash(key)].valueAt(this.buckets[this.hash(key)].findIndex(key));
	}

	// if key is in hashmap, remove key and return true.
	// if key is not in hashmap return false 
	remove(key) {
		if(!this.has(key)) return false;

		// remove the node in the linkedList at bucket index this.hash(key)
		this.buckets[this.hash(key)].removeAt(this.buckets[this.hash(key)].findIndex(key));
		return true;
	}

	// return number of stored keys in hashmap
	length() {
		return this.keyNumber;
	}

	// remove all entries in hashmap
	clear() {
		// loop thorugh buckets array and set each bucket to null
		for (let i = 0; i < this.capacity; i++) {
			this.buckets[i] == null;
		}
	}

	// returns an array containing all keys in hashmap
	keys() {
		let arr = [];

		// loop through buckets
		for (let i = 0; i < this.capacity; i++) {
			// if the bucket has a linkedList loop through and append the key to arr
			if(this.buckets[i] instanceof LinkedList) {
				for (let j = 0; j < this.buckets[i].listSize; j++) {
					arr.push(this.buckets[i].keyAt(j));
				}
			}
		}

		return arr;
	}

	// returns an array containing all values in hashmap
	values() {
		let arr = [];

		// loop through buckets
		for (let i = 0; i < this.capacity; i++) {
			// if the bucket has a linkedList loop through and append the value to arr
			if(this.buckets[i] instanceof LinkedList) {
				for (let j = 0; j < this.buckets[i].listSize; j++) {
					arr.push(this.buckets[i].valueAt(j));
				}
			}
		}

		return arr;
	}

	// returns an array containing each key, value pair
	entries() {
		let arr = [];

		// loop through buckets
		for (let i = 0; i < this.capacity; i++) {
			// if the bucket has a linkedList loop through and append the value to arr
			if(this.buckets[i] instanceof LinkedList) {
				for (let j = 0; j < this.buckets[i].listSize; j++) {
					arr.push([this.buckets[i].keyAt(j), this.buckets[i].valueAt(j)]);
				}
			}
		}

		return arr;
	}
}