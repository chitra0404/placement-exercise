//1. Implement the bubble sort algorithm.

function bblSort(arr) {

	for (var i = 0; i < arr.length; i++) {
 
		for (var j = 0; j < (arr.length - i - 1); j++) {
			if (arr[j] > arr[j + 1]) {
				var temp = arr[j]
				arr[j] = arr[j + 1]
				arr[j + 1] = temp
			}
		}
	}
console.log(arr);
}
var arr = [234, 43, 55, 63, 5, 6, 235, 547];
bblSort(arr);

//2. Implement the selection sort algorithm.
function selectionSort(inputArr) { 
    let n = inputArr.length;
        
    for(let i = 0; i < n; i++) {
        // Finding the smallest number in the subarray
        let min = i;
        for(let j = i+1; j < n; j++){
            if(inputArr[j] < inputArr[min]) {
                min=j; 
            }
         }
         if (min != i) {
             let tmp = inputArr[i]; 
             inputArr[i] = inputArr[min];
             inputArr[min] = tmp;      
        }
    }
    return inputArr;
}
let inputArr = [5, 2, 4, 6, 1, 3];
selectionSort(inputArr);
console.log(inputArr);

//3. Implement the insertion sort algorithm.

function insertionSort(array) {
    for(let i = 1; i < array.length; i++) {
        let key = array[i];
        let j = i - 1;
        while (j >= 0 && array[j] > key) {
            array[j + 1] = array[j];
            j = j - 1;
        }
        array[j + 1] = key;
    }
    return array;
}
let array=[3,2,5,4,7,6];
console.log(insertionSort(array));

//4.Merge sort
//Merge sort is one of the sorting techniques that work on the divide and conquer approach. 
//The Given array is divided in half again and again and those parts are arranged in sorted order and merged back to form the complete sorted array
// JavaScript program for Merge Sort

// Merges two subarrays of arr[].
// First subarray is arr[l..m]
// Second subarray is arr[m+1..r]
function merge(arry1, l, m, r)
{
    var n1 = m - l + 1;
    var n2 = r - m;

    // Create temp arrays
    var L = new Array(n1); 
    var R = new Array(n2);

    // Copy data to temp arrays L[] and R[]
    for (var i = 0; i < n1; i++)
        L[i] = arry1[l + i];
    for (var j = 0; j < n2; j++)
        R[j] = arry1[m + 1 + j];

    // Merge the temp arrays back into arr[l..r]

    // Initial index of first subarray
    var i = 0;

    // Initial index of second subarray
    var j = 0;

    // Initial index of merged subarray
    var k = l;

    while (i < n1 && j < n2) {
        if (L[i] <= R[j]) {
            arry1[k] = L[i];
            i++;
        }
        else {
            arry1[k] = R[j];
            j++;
        }
        k++;
    }

    // Copy the remaining elements of
    // L[], if there are any
    while (i < n1) {
        arry1[k] = L[i];
        i++;
        k++;
    }

    // Copy the remaining elements of
    // R[], if there are any
    while (j < n2) {
        arry1[k] = R[j];
        j++;
        k++;
    }
}


function mergeSort(arry1,l, r){
    if(l>=r){
        return;
    }
    var m =l+ parseInt((r-l)/2);
    mergeSort(arry1,l,m);
    mergeSort(arry1,m+1,r);
    merge(arry1,l,m,r);
}


function printArray( A, size)
{
    for (var i = 0; i < size; i++)
       console.log(  A[i] + " ");
}


var arry1 = [ 12, 11, 13, 5, 6, 7 ];
    var arr_size = arry1.length;

    console.log(  "Given array is ");
    printArray(arry1, arr_size);

    mergeSort(arry1, 0, arr_size - 1);

    console.log( "Sorted array is ");
    printArray(arry1, arr_size);




//5.quick sort
//Quick sort is one of the sorting algorithms that works on the idea of divide and conquer.
// It takes an element as a pivot and partitions the given array around that pivot by placing it in the correct position in the sorted array
function partition(arry2, low, high) { 
	let pivot = arr[high]; 
	let i = low - 1; 

	for (let j = low; j <= high - 1; j++) { 
		 
		if (arry2[j] < pivot) { 
			
			i++; 
		 
			[arry2[i], arry2[j]] = [arry2[j], arry2[i]]; 
		} 
	} 
	// Swap pivot to its correct position 
	[arry2[i + 1], arry2[high]] = [arry2[high], arry2[i + 1]]; 
	return i + 1; // Return the partition index 
} 

function quickSort(arry2, low, high) { 
	if (low >= high) return; 
	let pi = partition(arry2, low, high); 

	quickSort(arry2, low, pi - 1); 
	quickSort(arry2, pi + 1, high); 
} 

let arry2 = [10, 80, 30, 90, 40]; 
console.log("Original array: " + arry2); 

quickSort(arry2, 0, arr.length - 1); 
console.log("Sorted array: " + arry2);


