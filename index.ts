//blueprint for item object thatll act as our items we can buy
interface item{
    name : string;
    price : number;
    description : string;
}

//array to store items in the store
let rack:item[] = [];

//function to add items to the rack array. UNDER PRODUCTION!
function addToRack(itemName:string, itemPrice:number, itemDescription:string){
    let rackItem: item = {
        name:itemName,
        price: itemPrice,
        description:itemDescription
    }
    rack.push(rackItem);
    // console.log(`${itemName} added to rack`);
    // let stockAmount:number = rack.length;
    // console.log(`${stockAmount} items left in rack`);
};

//an array to act as our cart
let cart:item[] = [];

//function to add items to our cart
function addToCart(choice:number){
    if(choice>-1 && choice <= rack.length){
        cart.push(rack[choice]);
        console.log(`${rack[choice].name} added to cart.`);
        rack.splice(choice,1); //line  that removes the added item from the rack array
        let stockAmount:number = rack.length;
        console.log(`${stockAmount} items left in rack!`);
    };
};

//Function to show contents of our rack:
function showRack(){
    let i = 1;
    console.log(`Items in Rack:`);
    rack.forEach(element => {
        console.log(`${i}.${element.name}`);
        i++;
    });
}

//Function to show contents of our cart:
function showCart(){
    let i = 1;
    console.log(`Items in cart:`);
    cart.forEach(element =>{
        console.log(`${i}.${element.name}`);
        i++;
    });
};

addToRack("peanuts", 40, "peanuts,bro");
addToRack("cucumber", 20, "vegetable in a wheelchair");
addToRack("wine", 30, "the christmas spirit and all!");
showRack();
addToCart(0);
showRack();
showCart();

// console.log(`WELCOME TO SHOPPING ZONE!`);