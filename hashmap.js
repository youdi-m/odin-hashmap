export class HashMap {
	constructor() {
		this.capacity = 16;
		this.loadFactor = 0.75;
		this.buckets = new Array(this.capacity).fill(null)
	}

	// takes a key and produces a hash code with it
	hash(key) {
		let hashCode = 0
		const primeNumber = 31

		for(let i = 0; i < key.length; i++) {
			hashCode = (primeNumber * hashCode + key.charCodeAt(i)) % this.capacity;
		}

		return hashCode;
	}

	// 
	set(key, value) {

	}

	// return value assigned to key, return null if no key found
	get(key) {

	}

	// return true or false if key is in the hashmap
	has(key) {

	}

	// if key is in hashmap, remove key and return true.
	// if key is not in hashmap return false 
	remove(key) {

	}

	// return number of stored keys in hashmap
	length() {

	}

	// remove all entries in hashmap
	clear() {

	}

	// returns an array containing all keys in hashmap
	keys() {

	}

	// returns an array containing all values in hashmap
	values() {

	}

	// returns an array containing each key, value pair
	entries() {

	}
}