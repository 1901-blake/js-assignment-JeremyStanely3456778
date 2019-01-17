/* 8. Shapes
Define function: printShape(shape, height, character)
shape is a String and is either "Square", "Triangle", "Diamond".
height is a Number and is the height of the shape. Assume the number is odd.
character is a String that represents the contents of the shape. Assume this String contains just one character.
Use a switch statement to determine which shape was passed in.
Use the console.log function to print the desired shape.
Example for printShape("Square", 3, "%");
%%%
%%%
%%%
Example for printShape("Triangle", 3, "$");
$
$$
$$$
Example for printShape("Diamond", 5, "*");
  *
 ***
*****
 ***
  * 
*/
function printShape(shape, height, character){
  switch(shape) {
    case "Square": 
      for (i=1; i<=height; i++) 
      { 
      let line = "";
          // Print stars after spaces 
          for (j=1; j<=height; j++){ 
              line = line.concat(character); 
          }  
          console.log(line);
      } 

      break;
    case "Triangle":
      for(i = 1; i <= height; ++i)
    {
      let line = "";
        for(j = 1; j <= i; ++j){
            line = line.concat(character);
        }
        console.log(line);
    }


      break;
    case "Diamond":  count = height - 1;
      for (k = 1; k <= height; k++){
        line = "";
        for (i = 1; i <= count; i++){
          line = line.concat(' ');
        }
        count--;
        for (i = 1; i <= 2 * k - 1; i++){
          line = line.concat(character);
        }
        console.log(line);
      }
      count = 1;
      for (k = 1; k <= height - 1; k++){
        let line = "";
        for (i = 1; i <= count; i++){
          line = line.concat(' ');
        }
        count++;
        for (i = 1 ; i <= 2 *(height - k)-  1; i++){
          line = line.concat(character);
        }
        console.log(line);
      }
    break;
    default:
      console.log('Is not a Shape!');
      break;
  }
}

printShape("Triangle", 5, "#");
