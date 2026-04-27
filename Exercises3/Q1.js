function nesting(array){
    let nest = 0

    while(array.some((ar => Array.isArray(ar))))  {
        array = array.flat(1)
        nest ++
u8i    }
    return nest + 1 
}

console.log(nesting([1,2,[3,4,5,[6,7,8]]]))