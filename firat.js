function sort012(arr) {
    let low = 0, mid = 0, high = arr.length - 1;

    while (mid <= high) {
        if (arr[mid] === 0) {
            [arr[low], arr[mid]] = [arr[mid], arr[low]];
            low++;
            mid++;
        } else if (arr[mid] === 1) {
            mid++;
        } else { 
            [arr[mid], arr[high]] = [arr[high], arr[mid]];
            high--;
        }
    }
}


let arr = [0, 1, 2, 1, 0, 2, 1, 0];
sort012(arr);
console.log(arr); 