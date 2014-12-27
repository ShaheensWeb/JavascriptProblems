/*
Name: Shaheen Ghazazani
Javascript Problem 2 (Intermediate difficulty)
*/

var landscape = function() {
  var result = "";
  var just_the_top = ""; 
  var for_the_mountain = "";
  var flat = function(size) {
    for (var count = 0; count < size; count++){
      result += "_";
      just_the_top += " ";
      for_the_mountain += " ";}
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
  };
  var mountain = function(size) {
   var counter = 0; 
   result += "/";
   if (size <= 5){
   	just_the_top += "  /";
	}else{
		just_the_top += " /";
		}
   for (var count = 0; count < size; count++){
	counter += 1;
	if (size < 4 || counter <= 4){
		if (counter>2)
			for_the_mountain += " ";
		if (size == 5 && counter>=3)
			for_the_mountain += " ";	
	}else{
		for_the_mountain += "_"; 
		just_the_top += " ";
		result += " ";
	}}
	just_the_top += "\\";
	result += "  \\";
	if (size <= 4){
		just_the_top += " ";
	}
	if (size == 5)
		just_the_top += " ";
  };

  //BUILD SCRIPT
  flat(3)
  mountain(7);
  flat(2);
  mountain(4);
  flat(4);
  hill(3);
  flat(1); 
  //END SCRIPT 
  console.log(for_the_mountain); 
  console.log(just_the_top); 
  return(result);  


};

console.log(landscape());
// ? ___/''''\______/'\_

