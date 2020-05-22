

//TODO: Build Bottega Diner Menu
//TODO: Diner Menu contains Main Menu and Sides Menu
//TODO: Regular cost includes one entree and two sides
/* Functions -  
    Show Menu - Prints entire Menu
    Item Cost - Tells cost of the item
    Total Cost - Adds options and returns total
    
    Roles -
    Diner - All Functions
    Waitress - Makes comments, Tells Price of items
 */


class Diner {
  constructor(main = {}, side = {}) {
    this.main = main;
    this.side = side;
  }

  showMenu(main, side){
     const entreePrices = Object.values(main);
     const entrees = Object.keys(main)
     const sidePrices = Object.values(side);
     const sides = Object.keys(side); 
     let i;

      for (i = 0; i < entrees.length; i++) {
         let sentence = `The ${entrees[i]} costs ${entreePrices[i]}`; 
         alert(sentence);
         let sentenceTwo = `The ${sides[i]} costs ${sidePrices[i]}`; 
         alert(sentenceTwo);        
       }
    }
  
   
    itemCost() {
     };


    sendBill(){}; 
    }




class Waitress extends Diner {
  constructor(comments,main,side){
    super(main, side);
    this.comments = comments;    
  }

  welcome() {
    alert("Greetings! May I take your order today?");
  }

  makeComment(comments) {
    let waitress_says = comments[Math.floor(Math.random() * comments.length)];
    alert(waitress_says);
  }
}




//TODO: Get user selections
function dinersChoice(comments, main, side) {
  
  randa.makeComment(comments);
  
  let entrees = [];
  let sides = [];
  let runningTotal1 = 0;
  let runningTotal2 = 0;
  

  let mealChoice = document.getElementsByTagName('input');
  

  //create array of diner objects chosen by user
            entreesList(mealChoice);
            sidesList(mealChoice);

    function entreesList(mealChoice){
      for(i = 0; i < mealChoice.length; i++) {
          if (mealChoice[i].type="radio") {
              if(mealChoice[i].checked) {
                if(mealChoice[i].name.includes("Entree")) {    
                  let food = mealChoice[i].id;
                  console.log(food);
                  let subtotal = main[_.startCase(food)];
                  runningTotal1 += parseInt(subtotal);
                  entrees.push(food);
                  console.log(entrees);
                }
            } 
         } 
      }
   }  
    
    function sidesList(mealChoice){
      for(i = 0; i < mealChoice.length; i++) {
          if (mealChoice[i].type="radio") {
            if (mealChoice[i].checked) {
              if(mealChoice[i].name.includes("Side")) {    
            let food2 = mealChoice[i].id;
            console.log(food2);
            let subtotal2 = side[_.startCase(food2)];
            runningTotal2 += parseInt(subtotal2);
            sides.push(food2);
            console.log(sides);
         }
       }
     }
       
    }
  } 
}

main = {   
   "Hamburger": 15.99,
   "Baked Salmon": 30.00,
   "Rotisserie Chicken": 12.99,
   "Quiche Lorraine": 9.99 
};

side_dish = { 
   "Tossed Salad": 3.99,
   "Mashed Potatoes": 5.99,
   "Steamed Rice": 4.99,
   "French Fries": 3.99
};

comments = [
  "A perfect pairing",
  "A smart choice",
  "Hmm...I wouldn't have put those together but ok",
  "That's my absolute favorite",
  "The chef does an excellent job with it",
  "I think you're going to love it"
];

randa = new Waitress(comments);

//TODO: Run waitress greeting

randa.welcome();

