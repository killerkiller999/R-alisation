let Values = ["C1" ,"C2" ,"C3" ,"C4" ,"C5" ,"C6" ,"C7","C8"];


let values_members = {

  C1 : "Git Basics" ,
  C2 : "JavaScript Introduction",
  C3 : "HTML & CSS Foundations",
  C4 : "Advanced JavaScript",
  C5 : "Working with APIs",
  C6 : "Version Control & Collaboration",
  C7 : "Debugging & Testing",
  C8 : "Mini-Project Development",
};
  function getRandomSkill()
  {
  let number = Math.floor( Math.random() * Values.length );
  return number ;
  }

let keys = Object.keys(values_members);
let i = 0 ;
let score = 0 ;
let container = 0 ;
while(i < Values.length ) //// values_members[keys[2]] === kalam
{
  container = getRandomSkill() ;
  console.log("Enter " +keys[ container ]+ " here pls\n");
  let name = prompt("Enter what is ");
  
  if( name === values_members[ keys[container] ] )
  {
     console.log("Correct!");
     score++;
  }
  else
  {
     console.log("wrong!");
  }
  console.log("the score : "+score);
  i++;
}