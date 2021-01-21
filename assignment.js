function kilometerToMeter(distance){
    if(distance < 0){
        return "Distance cannot be negetive.";
    }
    else{
        return distance * 1000;
    }
}
console.log(kilometerToMeter(10));

function budgetCalculator(watch, mobile, laptop){
    if(watch < 0){
        watch = 0;
        console.log("You cannot buy negative no. of watches.");
        console.log("The result is shown below by assuming no. of watch = 0");
    }
    if(mobile < 0){
        mobile = 0;
        console.log("You cannot buy negative no. of mobiles.");
        console.log("The result is shown below by assuming no. of mobile = 0");
    }
    if(laptop < 0){
        laptop = 0;
        console.log("You cannot buy negative no. of laptops.");
        console.log("The result is shown below by assuming no. of laptop = 0");
    }
    return watch * 50 + mobile * 100 + laptop * 500;
}
console.log(budgetCalculator(-1, 0, -20));

function hotelCost(days){
    if(days < 0){
        return "Staying period in a hotel cannot be negetive.";
    }
    else if(days <= 10){
        return days * 100;
    }
    else if(days <= 20){
        return 10 * 100 + (days - 10) * 80;
    }
    else{
        return 10 * 100 + 10 *80 + (days - 20) * 50;
    }
}
console.log(hotelCost(34));

function megaFriend(friends){
    if(friends.length < 1){
        return "No friends name is listed.";
    }
    else{
        let maxString = friends[0];
        let maxLength = [];
        for(let i = 0; i < friends.length; i++){
            maxLength.push(friends[i].length);
            if(maxLength[i] > maxString.length){
                maxString = friends[i];
            }
        }
        return maxString;
    }
}
console.log(megaFriend(["Asif", "Khalid", "Riad", "Rasel", "Shahed"]));