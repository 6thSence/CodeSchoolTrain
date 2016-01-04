// var splitInParts = function(s, partLength){
//   // Good Luck!
// var leng = s.length,
//     count =0,
//     strToReturn = "",
//     i =0;
// console.log(leng , count, strToReturn, i);
// while (i<leng){
//     if (count < partLength) {
//     strToReturn +=s.charAt(i); 
//     i++;    
//     count++;          
//     } else {
//     strToReturn+=" ";
//     count = 0 ;
//     }; 
// }
// return strToReturn; 
// };
// console.log('working');
// console.log(splitInParts("HelloKata", 3));

// function isNegativeZero(x) {
//   var bool = false,
//       str = "",
//       myx="";

// if (x.length == 2)  {
// 	if (x<0) {
// 		myx='-0';
// 		console.log('x<0');
// 	} else if (x>0) {
// 		myx="+0";
// 		console.log('x>0');
// 	} else {
// 		console.log('x=0');
// 	}
// }
//   if (x.length == 2)  {
//   if (myx.charAt(0) == "-") {
//     bool = true ;
//     str = "-0 is -0";
//   } 
//   } else {
//   str += x + " is not -0";  
// }  

// return {
// value : bool,
// ans : str 
// }
// }

// console.log(isNegativeZero(-0));

// var fear = 150,
//     level = "";

// var fearMessage = function() {
//   // Insert conditional statements here
//   if (fear <200) {
//     level = "Fear Level: LOW\nStill wanna ride?";
//   } else if (fear>200 && fear<=300) {
//     level = "Fear Level: MEDIUM\nThink you'll make it?";
//   }
//   var ask = function(level) {
//     return level;
//   };
//   return confirmRide(ask);
    
// };

// function confirmRide(confirmToGo) {
//   return confirmToGo(level);
// }

// console.log(fearMessage());

var puzzlers = [
  function(a) { return 8 * a - 10; },
  function(a) { return (a - 3) * (a - 3) * (a - 3); },
  function(a) { return a * a + 4; },
  function(a) { return a % 5; }
];
var start = 2;

var applyAndEmpty = function(input, queue) {
var q=input;
  for (var i=0 ; i<queue.length; i++ ) {
    q = queue[i](q);
  }
  return q;
};
console.log(applyAndEmpty(start, puzzlers));

