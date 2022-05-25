var items = []




var items1= [1,2,3]
var items2 =[5,6,7]
var items3 = [9,0,11]

items.push(items1)
items.push(items2)
items.push(items3)

// console.log(items)
// console.log("rows: " + items.length)
// consol.log("coloum"+ items[0].length)


// for(var i =0; i<items.length; i++){
//     var bag = []
//     for(var j=0; j<items.length; j++)
//     {
//         bag.push(items[i][j])
        
//     }
//     console.log(bag.join(" "))
// }
 var bag = []
for(var i=0; i<items.length; i++)
// var bag = []

{
    bag.push(items[i][i])
   
}
console.log(bag.join(" "))
