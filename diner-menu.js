

//TODO: Build Bottega Diner Menu
//TODO: Diner Menu contains Main Menu and Sides Menu
//TODO: Regular cost includes one entree and two sides
/* Functions -  
    Show Menu - Prints entire Menu
    Item Cost - Tells cost of the item
    Total Cost/Send Bill - Adds options and returns total on screen
    
    Roles -
    Diner - All Functions
    Waitress - Inherits from Diner - Makes comments, Tells Price of items
 */


class Diner {
  constructor(main = {}, side = {}) {
    this.main = main;
    this.side = side;
  }

  showMenu(main, side) {
    const mainMeals = Object.entries(main);
    const sideMeals = Object.entries(side);

    let allEntrees = mainMeals.map(loopMain);
    alert(`Here are the Main Dishes:  \n  ${allEntrees}`);

    function loopMain(meals) {
      let meal = meals[0];
      let price = meals[1];
      let sentence = `${meal} : $${price} \n`;
      return sentence;
    }

    let allSides = sideMeals.map(loopSide);
    alert(`Here are the Side Dishes:  \n  ${allSides}`);

    function loopSide(meals) {
      let meal2 = meals[0];
      let price2 = meals[1];
      let sentence2 = `${meal2} : $${price2} \n`;
      return sentence2;
    }

    //use map to create a variable */
  }

  // Grabs item cost from object and checks for special
 


// Displays bill in window
  sendBill() {}
}




class Waitress extends Diner {
  constructor(comments, main, side) {
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

  itemCost(mainOptions, sideOptions, main) {
    if (mainOptions.length == 1 && sideOptions.length == 2) {
      alert(`Excellent, you ordered the special! That will be $29.99`);
      alert("You're getting a great deal");
    } else if (mainOptions.length == 4 && sideOptions.length == 4) { 
      alert (`Wow, you must be hungry, let me get that right out to you!!!`);
    } else {

      this.getPrices(main);

    }
  }
  
  getPrices(main, mainOptions, side, sideOptions) {
    
          
 }
}




//TODO: Get user selections
function dinersChoice(comments, main, side) {
  
  randa.makeComment(comments);
 
  console.log("check: " + main["Hamburger"]);
  
  let entrees = [];
  let sides = [];
  let runningTotal1 = 0;
  let runningTotal2 = 0;
  

  let mealChoices = document.getElementsByTagName('input');
  let mainOptions = [...mealChoices].filter(vetMainOptions);
  let sideOptions = [...mealChoices].filter(vetSideOptions);
  console.log(mainOptions);
  console.log(sideOptions)

  randa.itemCost(mainOptions, sideOptions, main);
  
  

  //create array of diner objects chosen by user

  
  function vetMainOptions(entreeChoice){
    if (entreeChoice.checked) {
        if (entreeChoice.name.includes("Entree")) {
          // let mainSelection = entreeChoice.id;
           //entrees.push(mainSelection); 
           console.log(entreeChoice.id);
           return entreeChoice;   
        }
       // console.log("new " + entrees)
       // return entrees;
    }
  } 

  function vetSideOptions(sideChoice){
    if (sideChoice.checked) {
        if (sideChoice.name.includes("Side")) {
          // let mainSelection = entreeChoice.id;
           //entrees.push(mainSelection); 
           console.log(sideChoice.id);
           return sideChoice;   
        }
    }
  }
}
  /* alert( `So you ordered the ${entreesList} `)        
    
            entreesList(mealChoices);
            sidesList(mealChoices);

    function entreesList(mealChoices){
      for(i = 0; i < mealChoices.length; i++) {
          if (mealChoices[i].type="radio") {
              if(mealChoices[i].checked) {
                if(mealChoices[i].name.includes("Entree")) {    
                  let food = mealChoices[i].id;
                  console.log(food);
                  let subtotal = main[_.startCase(food)];
                  runningTotal1 += parseInt(subtotal);
                  entrees.push(food);
                  console.log(entrees);
                  console.log(runningTotal1);
                
                }
            } 
         } 
      }
   }  
    /*
    function sidesList(mealChoices){
      for(i = 0; i < mealChoices.length; i++) {
          if (mealChoice[i].type="radio") {
            if (mealChoices[i].checked) {
              if(mealChoices[i].name.includes("Side")) {    
            let food2 = mealChoices[i].id;
            console.log(food2);
            let subtotal2 = side[_.startCase(food2)];
            runningTotal2 += parseInt(subtotal2);
            sides.push(food2);
            console.log(sides);
            console.log(runningTotal2);
         }
       }
     }
       
    }
  } 
}*/


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



