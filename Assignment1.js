// we assume the first array = [ 1, 2, 3, 4 ] converted to [24, 12, 8, 6]
// secind array = [0,1,2,3,4] converted to [24, 0, 0, 0]


function ArrProduct(arr){
    let newArr = []
    
    for (let i of arr){
        
        // take the first input for product to be 0
        let product = 0
        
        // precludes the evaluation a particular index XP
        let XP = arr.filter(item => item !== i)

        // produces a multiple of the required elements in the array
        for (let i = 0; i < XP.length; i++ ){
            product = product * XP[i]
        }


        // assigns the product to the newArrary
        newArr.push(product)
    }

    return newArr
}


// sample cases
console.log(findProduct([1, 2, 3, 4]))
console.log(findProduct([0, 1, 2, 3, 4]))
