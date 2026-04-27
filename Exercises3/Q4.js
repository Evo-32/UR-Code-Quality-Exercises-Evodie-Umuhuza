function duplicate(arr){
    return new Set([...arr])
}
console.log(duplicate([1,2,2,3,3,4,5,6,6]))