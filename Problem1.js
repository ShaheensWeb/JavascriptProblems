/*
Name: Shaheen Ghazazani
Javascript Problem Solving
*/

//PROBLEM 1 SOLUTION
var landscape = function() {
  var result = "";
  var just_the_top = ""; 
  var flat = function(size) {
    for (var count = 0; count < size; count++){
      result += "_";
      just_the_top += " ";}
  };
  var hill = function(size) {
    var counter = 0;
    result += "/";
    just_the_top += " ";
    for (var count = 0; count < size; count++){
	counter += 1; 
	if (size <= 2 || counter <= 2){ 
         }else{
	just_the_top += "_";
        result += " ";}}
    result += "\\"; 
    just_the_top += " ";
  };


  //BUILD SCRIPT
  flat(3)
  hill(7);
  flat(2);
  hill(5);
  flat(4);
  hill(2);
  flat(2);
  //END SCRIPT 
  console.log(just_the_top); 
  return(result);  


};

console.log(landscape());
// ? ___/''''\______/'\_

