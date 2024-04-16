//1. Write a function that performs a linear search on an array.
function search(arr, len, k)
{
    for (let i = 0; i < len; i++)
        if (arr[i] == k)
            return i;
    return -1;
}

// Driver code

    let arr = [ 2, 3, 4, 10, 40 ];
    let k = 10;
    let len= arr.length;

    // Function call
    let result = search(arr, len, k);
   console.log(result);


   //2.Write a function that performs a binary search on a sorted array.

  
let iterativeFunction = function (array, x) {

	let start = 0, end = array.length - 1;

	while (start <= end) {

		let mid = Math.floor((start + end) / 2);

		
		if (array[mid] === x) return true;

		
		else if (array[mid] < x)
			start = mid + 1;
		else
			end = mid - 1;
	}

	return false;
}


let array = [1, 3, 5, 7, 8, 9];
let x = 5;

if (iterativeFunction(array, x, 0, array.length - 1)) {
	console.log("Element found!");
}
else {
	console.log("Element not found!");
}

x = 8;

if (iterativeFunction(array, x, 0, array.length - 1)) {
	console.log("Element found!");
}
else {
	console.log("Element not found!");
}
//3. Explain the concept of Big O notation and analyze the time complexity of the linear and binary search algorithms.

//Big O notation is a mathematical notation used in computer science to describe the upper bound or worst-case scenario of the runtime complexity of an algorithm in terms of the input size.
// It provides a standardized and concise way to express how the performance of an algorithm scales as the size of the input grows.

//Time complexity of Binary Search is O(log n)
//Time complexity of linear Search is O(N) 