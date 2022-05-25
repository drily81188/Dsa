

var arr = [2,2,3,4,3,5]
var x =3
var sum =0
for(var i=0; i<arr.length; i++)
{
    if(arr[i] !== x)
    sum = sum + arr[i]
    
}
console.log(sum)