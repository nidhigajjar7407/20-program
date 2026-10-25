let purchase : number = 6000;
let discount : number;

if(purchase > 5000){
    discount = purchase * 15 / 100;
}
else{
    discount = purchase * 5 / 100;
}

let finalamount : number;
finalamount = purchase - discount;

console.log("Discout is",discount);
console.log("Final amount is",finalamount);

