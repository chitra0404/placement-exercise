//1.Write a function to reverse an array in place.

function reverse(arr){
for (let start = 0, end = arr.length - 1; start < end; start++, end--){
    arr[start] = arr[start] + arr[end];
    arr[end] = arr[start] - arr[end];
    arr[start] = arr[start] - arr[end];
}
return arr;
}
let num = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(reverse(num));

//2.Write a function to find the common elements between two arrays.
function findCommon(array1, array2) {
    let commonElements = [];
    for (let i = 0; i < array1.length; i++) {
        for (let j = 0; j < array2.length; j++) {
            if (array1[i] === array2[j]) {
                commonElements.push(array1[i]);
            }
        }
    }
    return commonElements;
}
let array1 = ['a', 'b', 'c', 'd'];
let array2 = ['k', 'b', 'a'];
let commonElements=findCommon(array1,array2);
console.log(commonElements.join(", "));

//3.Write a function to remove duplicates from an array.

function duplicate(arr){
let unique = []
let obj = {}
for(let i = 0; i < arr.length; i++) {
    if (undefined == obj[arr[i]]) {
        unique.push(arr[i])
    }
    obj[arr[i]] = 1
}
return unique;
}

arr=[1,1,2,2,3,3]
console.log(duplicate(arr));

//4.Write a function to rotate an array to the right by k steps.

function RightRotate(a, n, k) {
    let ar = [];
    k = k % n;
    for (let i = 0; i < n; i++) {
        if (i < k) {
            ar.push(a[n + i - k]);
        } else {
            ar.push(a[i - k]);
        }
    }
    return ar;
}

let array = [1, 2, 3, 4, 5];
let n = array.length;
let k = 2;
 
console.log(RightRotate(array, n, k).join(', '));

//5.Write a function to merge two sorted arrays into a single sorted array.



const mergeSortedArrays = (arr1 = [], arr2 = []) => {
   const res = [];
   let i = 0;
   let j = 0;
   while(i < arr1.length && j < arr2.length){
      if(arr1[i] < arr2[j]){
         res.push(arr1[i]);
         i++;
      }else{
         res.push(arr2[j]);
         j++;
      }
   };
   while(i < arr1.length){
      res.push(arr1[i]);
      i++;
   };
   while(j < arr2.length){
      res.push(arr2[j]);
      j++;
   };
   return res;
};


const arr1 = [1, 3, 4, 5, 6, 8];
const arr2 = [2, 7, 8, 9, 10];
console.log(mergeSortedArrays(arr1, arr2));

