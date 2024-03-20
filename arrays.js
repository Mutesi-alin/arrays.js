let arr1= [3,7,34,90,12];
let arr2= [true,"green","where",12,56];
let a = arr1[arr1.length-1]
console.log({a})
// question1/b
let  b= arr2[arr2.length-1]
console.log({b})

//Write a JS program that will join the following array elements into a stringmyPets = ["Cow", "Bird", "Snake", "Dog"];
let  stringmyPets=  ["cow","bird","snake","dog"]
console.log(stringmyPets.toString())



//Write a JS script to sort the following array itemsvar arr3 = [ -5, 9, 5, 3, 2, -3, 6, 8, 4, 1 ];
let arr3 = [-5,9,5,3,2,-3,6,8,4,1] ;
 arr3.sort((num1,num2)=>num1-num2);
 console.log('ascending',arr3);

 arr3.sort((num1,num2)=>num1-num2);
 console.log('descending',arr3);

 //Write a program to remove duplicates from the following array.Console the array without duplicates, and console another array that only contains the duplicates
var arr = ["apple", "mango", "apple",   "orange", "mango", "mango"]
let removeduplicates= [];
let duplicates=[]
arr.forEach(h=>{
    if (!removeduplicates.includes(h)){
        removeduplicates.push(h);
    }
    else(duplicates.push(h));
});


console.log({removeduplicates});
console.log({duplicates});

//Write a JS script to search for the following word in the array."way"If the word is present, console it else console "the search word was not found"

let arr5 = ["the", "way", "x", 4];
let sent= "way"
const sentIndex= arr5.indexOf(sent);
if (sent){console.log({sent})}
else{console.log("The search was not founf")}





//Write a JS script to sort the following string:

let word = "sevink";
function sell(value){
    return value.split('') 
    .sort()
    .join('');


}
console.log(sell(word));








