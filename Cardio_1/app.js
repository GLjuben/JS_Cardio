// Hello World!
// // function buildFunctions(){
// //   var arr=[];

// //   for (var i=0; i<3; i++){

// //     arr.push(
// //       function(){
// //         console.log(i)
// //       }
// //     );
// //   };
// //   return arr;
// // };


// // // var fs=buildFunctions();

// // // fs[0]();
// // // fs[1]();
// // // fs[2](); 

// // function mapForEach(arr, fn) {
// //   var newArr=[];
// //   for(i=0;i<arr.length;i++){
// //     newArr.push(fn(arr[i]))
// //   };
// //   return newArr;
// // }

// // var arr1 = [1,2,3,4,5]
// // var arr2 = mapForEach(arr1, function(item){
// //   if (item%2 ==0){
// //     return "item is even"
// //   } else {
// //     return "item is odd"
// //   }
// // })

// // var checkPastLimit= function(limiter, item) {
// //   return item>limiter;
// // }
// // var arr3 = mapForEach(arr1,checkPastLimit.bind(this,1));

// // var checkPastLimitSimplified = function(limiter){
// //   return function (limiter, item) {
// //     return item > limiter;
// //   }.bind(this,limiter);
// // };
// // var arr4 = mapForEach(arr1,checkPastLimitSimplified(2));
// // console.log(arr4)
// const companies = [
//   {name: "Company One", category: "Finance", start: 1981, end: 2003},
//   {name: "Company Two", category: "Retail", start: 1992, end: 2008},
//   {name: "Company Three", category: "Auto", start: 1999, end: 2007},
//   {name: "Company Four", category: "Retail", start: 1989, end: 2010},
//   {name: "Company Five", category: "Technology", start: 2009, end: 2014},
//   {name: "Company Six", category: "Finance", start: 1987, end: 2010},
//   {name: "Company Seven", category: "Auto", start: 1986, end: 1999},
//   {name: "Company Eight", category: "Technology", start: 2011, end: 2016},
//   {name: "Company Nine", category: "Retail", start: 1981, end: 1989}
// ];

// const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];

// //standard for loop;
// // for (let i=0;i<companies.length;i++){
// //   console.log(companies[i])
// // }


// //forEach(iterator,index,array)-it is better than for loop,it does not return anything back;elegant way to loop through data;
// // it takes a callback function (sync callback) and can take in the iterator (company), the index  and the full array as arguments;
// // companies.forEach(function(company){
// //   console.log(company.name)
// // })


// //filter() method creates a new array with all elements that pass the test implemented by the provided function.

// // done with for loop: c
// // let canDrink=[];
// // for(let i=0;i<ages.length;i++){
// //   if(ages[i]>=21){
// //     canDrink.push(ages[i])
// //   }
// // }


// //done with filter;
// // const canDrink = ages.filter(function(age){
// //   if(age>=21){
// //     return true
// //   }
// // })
// //es6
// const canDrink = ages.filter(age => age>=21);
// // console.log(`Person ages that can drink: ${canDrink}`)

// //filter retail companies;
// const retailCompanies = companies.filter(company => company.category ==='Retail');
// // console.log(retailCompanies)

// //filter companies that started in the 80's
// const eightiesCompanies =  companies.filter(company => (company.start >= 1980 && company.start <1990));
// // console.log(eightiesCompanies)

// //Filter companies that lasted atleast 10 years;

// const lastingCompanies = companies.filter(company => (company.end - company.start >= 10));
// // console.log(lastingCompanies)

// // The map() method creates a new array populated with the results of calling a provided function on every element in the calling array.

// //Create array of company names;
// const companyNames = companies.map(company => company.name);
// // console.log(companyNames)

// //An array with name and start+end year
// const testMap = companies.map(company=>`${company.name} [${company.start} - ${company.end}]`)
// // console.log(testMap)

// //Square each age in the ages array;
// // Squared each age in the ages array;

// const squaredAge = ages 
//   .map(age=>Math.sqrt(age))
//   .map(age=> age*2);
// // console.log(` The squared age is [${squaredAge}]`);

// //sort()-The sort() method sorts the elements of an array in place and returns the sorted array. The default sort order is ascending, built upon converting the elements into strings, then comparing their sequences of UTF-16 code units values. The compare function takes two arguments to compare and it returns either 1 or -1 to move the items up and down the array;

// //sort the companies by the start year by putting a comparing function 
// //in the sort callback in a way whatever we want to compare them;

// const sortedCompanies = companies.sort((c1,c2)=>{
//   if(c1.start > c2.start) {
//     return 1;
//   } else {
//     return -1
//   };
// })

// //shortened version with conditional (terniary) operator
// const sortedComps = companies.sort((a,b)=>(a.start > b.start ? 1 : -1))

// // console.log(sortedComps)
// // Sort ages- from lowest to highest  and vice versa (a-b ---> ascending) or (b-a--->descending order)
// const sortAges =ages.sort((a,b)=> b-a);
// // console.log(sortAges)



// //The reduce() method executes a user-supplied “reducer” callback function on each element of the array, passing in the return value from the calculation on the preceding element. The final result of running the reducer across all elements of the array is a single value.


// //add all ages together with for loop:
// let ageSum = 0;
// for(let i=0;i<ages.length;i++){
//   ageSum+=ages[i]
// }
// //Done with reduce;
// const ageSums = ages.reduce((total,age)=> total + age,0);
// // console.log(` Total ages:${ageSums}`)

// //total years for all the companies
// const totalYears = companies.reduce((total,company)=>total+(company.end-company.start),0)
// // console.log(`Total years:${totalYears}`)

// //combining methods:
// //in map we square the number,
// // in filter we filter every age above 40
// // in sort we sort from lowest to highest
// // in reduce we add them all together
// const combined = ages
//  .map(age=>age*2)
//  .filter(age=> age >=40)
//  .sort((a,b)=> a-b)
//  .reduce((a,b)=>a+b,0);
// console.log(combined)


// /////////////// Exercises ////////////////////////////////////////////////////////////////////


// Challenge 1: Reverse a String
//Return a string in reverse
// ex. reverseString('hello')==='olleh';

function reverseString(str){
    let reversedStr=str.split('').reverse().join('');
    return reversedStr;
}
  
//Challenge 2: Validate a palindrom;
function isPalindrome(str){
    let checked = str.split('').reverse().join('')
    if (str===checked){
      return 'Is Palindrome'
    } else{
      return 'Is not Palindrome'
    }
}
  
//Challenge 3: Reverse an integer + add the negative sign with Math.sign()
function reverseInt(int){
    const revStr = int.toString().split('').reverse().join('')
    const revNum = parseInt(revStr) * Math.sign(int);
    return revNum;
  
}
  
//Challenge 4: Capitalize Letters
// Return a string with the first letter of every word capitalized;
function capitalizeLetter(str){
    // with for loop:
    //  const strArr = str.toLowerCase().split(' ');
  
    //  for(let i=0; i < strArr.length; i++){
    //    // we are taking the index,plucking away the first letter with substring(0,1) and adding on the rest of the word with substring(1);
    //    strArr[i] = strArr[i].substring(0,1).toUpperCase()+strArr[i].substring(1);
    //   } 
    //  return strArr.join(' ');
    //////////////////////////////////////////////////////////////////////////////////////////////////////////
    return str
     .toLowerCase()
     .split(' ')
     .map(word=> word[0].toUpperCase() + word.substr(1)
     )
     .join(' ');
  
  //with regex:


   //  New comment!
}
const outPut = capitalizeLetter('i love javascript');
console.log(outPut)
  
  
  
  
  
  
  
  
  
  
  
  
  
// function descendingOrder(n){
//   let numToStrArr = n.toString().split('').map((n) => parseInt(n));
//   // console.log(numToStrArr)
//   let sortedArr = numToStrArr.sort((a,b)=>b-a);
//   let arr1 = sortedArr.map((a)=> a.toString()).join('');
//   let reversedInt = parseInt(arr1);
//   console.log(arr1);
//   // console.log(sortedArr);
//   // console.log(finalRes);
// }
  
  
// const outPut = sumDigits(6262);
  // console.log(outPut)