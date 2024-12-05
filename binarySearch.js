let arr = [1, 4, 6, 8, 9, 10];
let target = 8;

const binarySearch = (array, target) => {
    let left = 0;
    let right = array.length - 1;
    while(left <= right){
        let mid = Math.floor(left + (right - left)/2);
        if(target > array[mid]){
            left = mid + 1;
        }
        else if(target < array[mid]){
            right = mid - 1;
        }
        else{
            return mid;
        }
    }
    return -1;
}

let index = binarySearch(arr, target);

index == -1 ? console.log(`'${target}' not found`) : console.log(`'${target}' found at index '${index}'`);


//Rotated Sorted Array

arr = [3, 4, 5, 6, 0, 1, 2];
target = 1;

const rotatedBinarySearch = (array, target) => {
    let left = 0;
    let right = array.length - 1;
    while(left <= right){
        let mid = Math.floor(left + (right - left)/2);
        if(array[mid] == target){
            return mid;
        }
        if(array[left] <= array[mid]){
            if(array[left] <= target && target < array[mid]){
                right = mid - 1;
            }
            else{
                left = mid + 1;
            }
        }
        else{
            if(array[mid]<=target && target < array[right]){
                left = mid + 1;
            }
            else{
                right = mid - 1;
            }
        }
    }
    return -1;
}

index = rotatedBinarySearch(arr, target);

index == -1 ? console.log(`'${target}' not found`) : console.log(`'${target}' found at index '${index}'`);