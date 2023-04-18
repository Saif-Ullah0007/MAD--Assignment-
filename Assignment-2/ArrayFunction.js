// //Arrays 

const arry =new Array(1,2,3,4,6)     //using constructor
console.log("length of array id"+arry.length)

arry[2]='HI'
console.log(arry)
for (let i =0;i<arry.length;i++){
    console.log(arry[i])
}


// //Js allows us to save multiple datatype in an array
const ar2 =['I','am',20,'years','old']
console.log(ar2)
//accesing one item 
console.log(ar2[1])
//adding to array
ar2[5]='Girl'         //This isnt a good approach as it require us to already know the lenth of the array
    
//instead use PUSH to add to the End
ar2.push('!')

//unshift  : to add to the Start of the array
ar2.unshift('Hello')

//shift      : Removes First Element from array and returns it
console.log(ar2.shift())


//POP    :  removes the last indexes value
ar2.pop()

//Push: automatically adds at the end
ar2.push("Hello Universe")


//isArray  : to check if something is Array or Not
console.log(Array.isArray(ar2))


//Conact   : use to join arrays
const  ar3= [100,200,300]
console.log(ar2.concat(ar3))

//indexOf: to check the index of a value
console.log(ar2.indexOf(20))
console.log(ar2)


//Array to String
let a=ar2.toString()
console.log(a)


//Array Join   : Joins all arrays element
let c =ar2.join('@')
console.log(c)


//Delete   : not a function 
delete ar2[2]
console.log(ar2)    //it doesnt decrease array length 

//sort  :  Sort the array alpahabaticlay
ar4=[9,3,4,20,200,2,7,8,1,0,4,1]       //200 ,20,5 case will rerturn 20,200,5
console.log(ar4.sort())

//To sort in increasing order sort takes some extra function
let compare =(a,b)=>{
    return a-b
}
console.log(ar4.sort(compare))

//Reverse  : Reverse Array
console.log(ar2.reverse())


//Splice   :Takes 3 arguments (Starting index ,Number of element you wish to remove ,What ypu want to add)
ar4.splice(2,2,000,000,00)
console.log(ar4)


//slice :    Creates a new Array by slicing some values from the old array
console.log(ar4.slice(3))


//Aray filter and mappings
let k=[1,2,13,46,2,,99,3,455,67,22]
k=k.filter(greaterThan10)
function greaterThan10(x){
    if( x>10){
return x
    }
    else{

    }
}
console.log(a)


//Map
b=a.map(MultiplyBY2)
function MultiplyBY2(y){
    y=y*2
    return y
}
console.log(b)