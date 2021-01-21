// https://github.com/mhasanjoy/javascript-assignment


function kilometerToMeter(distance) {
    if (typeof distance != "number") {
        return "String input is not allowed.";
    }
    if (distance < 0) {
        return "Distance cannot be negative.";
    }
    else {
        return distance * 1000;
    }
}


function budgetCalculator(watch, phone, laptop) {
    if (typeof watch != "number" || typeof phone != "number" || typeof laptop != "number") {
        return "String input is not allowed.";
    }
    if (watch < 0) {
        watch = 0;
        console.log("You cannot buy negative no. of watches.");
        console.log("The result is shown below by assuming that no. of watches = 0");
    }
    if (phone < 0) {
        phone = 0;
        console.log("You cannot buy negative no. of phones.");
        console.log("The result is shown below by assuming that no. of phones = 0");
    }
    if (laptop < 0) {
        laptop = 0;
        console.log("You cannot buy negative no. of laptops.");
        console.log("The result is shown below by assuming that no. of laptops = 0");
    }
    return watch * 50 + phone * 100 + laptop * 500;
}


function hotelCost(days) {
    if (typeof days != "number") {
        return "String input is not allowed.";
    }
    if (days < 0) {
        return "Staying period in a hotel cannot be negetive.";
    }
    else if (days <= 10) {
        return days * 100;
    }
    else if (days <= 20) {
        return 10 * 100 + (days - 10) * 80;
    }
    else {
        return 10 * 100 + 10 * 80 + (days - 20) * 50;
    }
}


function megaFriend(friends) {
    if (friends.length < 1) {
        return "No friends name is listed.";
    }
    else {
        let maxString = friends[0];
        let maxLength = [];
        for (let i = 0; i < friends.length; i++) {
            maxLength.push(friends[i].length);
            if (maxLength[i] > maxString.length) {
                maxString = friends[i];
            }
        }
        return maxString;
    }
}