

//TODO: Build Bottega Diner Menu
//TODO: Diner Menu contains Main Menu and Sides Menu
//TODO: Regular cost includes one entree and two sides
/* Functions -  
    Show Menu - Prints entire Menu
    Item Cost - Tells cost of the item
    Total Cost - Adds options and returns total
    
    Roles -
    Waitress - Makes comments, Tells Price of items

 */
class Diner {
  constructor({ main = 0, side = 0, user_selections = []}) {
    this.main = main;
    this.side = side;
    this.user_selections = user_selections;
  }

  showMenu() {}

  itemCost() {}

  sendBill() {

  }
}

class Waitress extends Diner {
  constructor({user_selections}){
      this.user_selections = user_selections;
  }

  welcome() {
    alert("Greetings! May I take your order today?");
  }

  makeComment() {
  const waitress_says = comments[Math.floor(Math.random() * comments.length)];
  alert(waitress_says);
}
}



function dinersChoice() {
  let user_selections = []; 
  
  //create array of diner objects chosen by user

  return user_selections;
}

main = [
  { "Hamburger": 15.99 },
  { "Baked Salmon": 30.0 },
  { "Rotisserie Chicken": 12.99 },
  { "Quiche Lorraine": 9.99 },
];

side_dish = [
  { "Tossed Salad": 3.99 },
  { "Mashed Potatoes": 5.99 },
  { "Steamed Rice": 4.99 },
  { "French Fries": 3.99}
];

comments = [
  "A perfect pairing",
  "That's a good choice",
  "Hmm...I wouldn't have put those together but ok",
  "That's my absolute favorite",
];

const Randa = new Waitress(main, side, user_selections);

//TODO: Run waitress greeting
Randa.welcome();

Randa.makeComment();

//TODO: Get user selections

//TODO:
