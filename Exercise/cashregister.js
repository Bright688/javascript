//Build a cash register that can add items to a shopping cart, calculate total price, calculate discounts, and accept payment by cash
//create a function that add items to cart. Let the cart be an object

//empty cart object to store items to buy
let shopping_cart={}
//list of items and their quantities
var items_quantity={'phone': 5, 'smart tv':1, 'gaming console': 2, 'washing machine':0};
//list of items and their prices
const items_price={'phone': 300, 'smart tv':200, 'gaming console': 500};

//create function to add new items to cart if it is available. but if the quantity of the items is less than one it is out of stock and wont add to the cart
const addItems = (...items)=>{
    //loop through the number of items added to the function parameter
   for(let n=0; n<items.length; n++){
    //loop through the items in the item_quantity object
     for(let i=0; i<Object.keys(items_quantity).length; i++){
        //check if the items added to the function parameter is present in the items-quantity object
        if(items[n]==Object.keys(items_quantity)[i]){
            //check if the items quantity represented as the object value is greater than zero
            if(items_quantity[items[n]]>0){
                //add to cart if the object value for the item is greater than zero
                shopping_cart[items[n]]=1;
                continue;
            }
            //if the object value for the items in the items_quantity is less than one then print out of stock
            else if(items_quantity[items[n]]<1){
                console.log(`The item: ${items[n]} is out of stock`);
            
            }
        }
        
        
      }
   }
  
}

//create function to calculate the total price of the items added to the shopping cart
const calculateTotalPrice=()=>{
    // let this be the total price of the item in the shopping cart
    let total=0; 
    //loop through the item prices
    for(item in shopping_cart){
        //add the prices of each item in the shopping cart
        total=total+items_price[item];
      }
      if(total>=400){
        //add discount to the total price
        let discount=(total*10)/100;
        total=total-discount;
        return total;
      }
      else{
        return total;
      }
}

function Pay(amount){
    console.log('Processing the payment....................');
    let paymentAmount=calculateTotalPrice();
    console.log(`The total price for the items to be paid is: ${paymentAmount} USD`);
    //check if the payment amount is more than the amount the customer paid
    if(amount>paymentAmount){
        console.log('Thank you for your purchase')
        //calculate the change that is remaining
        let change=paymentAmount-amount;
        console.log(`Amount of change to be given: ${change} USD`);

    }
    else{
        console.log("You dont have enough money to purchase the items");
    }
}
//call the function addItem and include the items in the parameter to add to the cart
addItems('phone', 'smart tv', 'gaming console', 'washing machine');
//print the cart
console.log(shopping_cart)
//pay the total amount for the items
Pay(1250)

