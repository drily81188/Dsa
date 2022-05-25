

// You are given a 2D array, whose dimensions are stored in two variables with the nameNandM

// The value stored inNdenotes the number of rows, and the value inMdenotes the number of columns

// The 2D array is stored in a variable with the namearr

// You have to print the elements of the 2D array, row by row

// For example, consider the value stored inN = 3,M = 2, and the array isarr = [1,2],[3,4],[5,6], then the required output will be

// 1 2
// 3 4 
// 5 6

// Input
// The first line of the input contains the value stored inNandM

// The nextNlines containMvalues each denoting the value stored inarr


// Output
// Print the output as shown in the problem statement

// Sample Input 1 

// 3 2
// 1 2
// 3 4
// 5 6
// Sample Output 1

// 1 2
// 3 4
// 5 6
// Hint

// In the sample test case, the value stored inN = 3,M = 2, and the array isarr = [1,2],[3,4],[5,6], then the required output will be

// 1 2
// 3 4
// 5 6

var arr = []




var arr1= [1,2]
var arr2 =[3,4]
var arr3 = [5,6]

arr.push(arr1)

arr.push(arr2)
arr.push(arr3)

console.log(arr)
//  var bag =[]
//  for(var i=0; i<arr; i++){
//     // var bag =[]

//      bag.push(arr[i])
//  }
//  console.log(bag.join(" "))
for(var i =0; i<arr.length; i++){
        var bag = []
        for(var j=0; j<arr.length; j++)
        {
            bag.push(arr[i][j])
            
        }
        console.log(bag.join(" "))
    }