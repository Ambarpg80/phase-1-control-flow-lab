function scuberGreetingForFeet(ride){
  let result;
  if(ride < 400){
    result = 'This one is on me!';
  } else if(ride < 2000){
     result = 'That will be twenty bucks.';
  } else if(ride < 2500){
     result = 'I will gladly take your thirty bucks.';
  } else if(ride > 2500){
     result = 'No can do.';
  } 
  return result
};
scuberGreetingForFeet(199);
scuberGreetingForFeet(1500);
scuberGreetingForFeet(2001);
scuberGreetingForFeet(2501);


function ternaryCheckCity(city){
  const myCity = 'NYC';
  const cityMessage = city === myCity ? "Ok, sounds good." : "No go.";

return cityMessage;
}
ternaryCheckCity('NYC');
ternaryCheckCity('Pittsburgh');

function switchOnCharmFromTip(tip){
  let greeting;
  if (tip === "generous"){
    greeting = "Thank you so much.";
   }else if(tip === "not as generous"){
    greeting ="Thank you.";
   }else{
    greeting = "Bye.";
  }
  return greeting;
 }
