let arr = [2, 4, 6, 1, 3, 9];
let target = 9;

const linearSearch = (target, array) => {
    let n = array.length;
    for(let i=0;i<n;i++){
        if(array[i] == target){
            return i;
        }
    }
    return -1;
}

let index = linearSearch(target, arr);

index == -1 ? console.log(`'${target}' not found`) : console.log(`'${target}' found at index '${index}'`);