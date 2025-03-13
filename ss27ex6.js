function isArithmetic(arr) {
    if (!Array.isArray(arr) || arr.some(num => !Number.isInteger(num))) {
        return "dữ liệu không hợp lệ";
    }
    let d = arr[1] - arr[0]; // Công sai
    for (let i = 2; i < arr.length; i++) {
        if (arr[i] - arr[i - 1] !== d) {
            return false;
        }
    }

    return true;
}

console.log(isArithmetic([2, 4, 6, 8]));        
console.log(isArithmetic([3, 6, 9, 12, 14]));
console.log(isArithmetic("abc"));        


