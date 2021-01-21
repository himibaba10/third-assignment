// https://github.com/himibaba10/third-assignment


function kilometerToMeter(kilometer) {
    if(typeof(kilometer) != "number"){
        return "Enter a valid number";
    }
    else if (kilometer < 0) {
        return "Distance cannot be measured with negative value!";
    }
    return kilometer * 1000; //1km=1000m
}




function budgetCalculator(ghori, phone, laptop) {
    if(typeof(ghori) != "number" || typeof(phone) != "number" || typeof(laptop) != "number"){
        return "Enter the valid amount of every accessories";
    }
    else if (ghori < 0 || phone < 0 || laptop < 0) {
        return "You can't buy negative amount of accessories!";
    }
    else if (ghori != parseInt(ghori) || phone != parseInt(phone) || laptop != parseInt(laptop)) {
        return "We don't sell fractional amount of accessories!";
    }
    return ghori * 50 + phone * 100 + laptop * 500;  //Total price of accessories
}







function hotelCost(raat) {
    if (raat < 0 || raat != parseInt(raat)){
        return "You can't stay negative or fractional amount of nights in a hotel!";
    }
    else if(typeof(raat) != "number"){
        return "Please enter a valid number to stay at hotel";
    }
    else if (raat <= 10) {
        var total = raat * 100;
        return total;
    }
    else if (raat <= 20) {
        var prothom10Raat = 10 * 100;
        var bakiRaat = (raat - 10) * 80;
        var total = prothom10Raat + bakiRaat;
        return total;
    }
    else {
        var prothom10Raat = 10 * 100;
        var ditiyo10Raat = 10 * 80;
        var bakiRaat = (raat - 20) * 50;
        var total = prothom10Raat + ditiyo10Raat + bakiRaat;
        return total;
    }
}







function megaFriend(arr) {
    if(typeof(arr) != "object"){
        return "please give an array";
    }
    else if(arr.length == 0){
        return "Enter some values inside array";
    }
    var largest = arr[0];
    for (i = 0; i < arr.length; i++) {
        if(typeof(arr[i]) == "number" || typeof(arr[i]) == "boolean"){
            return "Sorry we allow only string inside array";
        }
        var experiment = arr[i];
        if (experiment.length > largest.length) {
            largest = experiment;
        }
    }
    return largest;
}
var arr1 = ["Himel", "Rimel", "Porinita", "Shemanto", "gulumuluta"];
var result = megaFriend(arr1);
console.log(result);