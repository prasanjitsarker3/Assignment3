function kilometerToMeter(kilometer) {
    var meter = kilometer * 1000;
    return meter;
}
var result =kilometerToMeter(120);
console.log(result);






function budgetCalculator(Watch, Phone, Laptop){
    if(Watch>=0 && Phone>=0 && Laptop>=0){
        var Price1 = Watch * 50;
        var Price2 = Phone * 100;
        var Price3 = Laptop * 500;
        var TotalCost = Price1 + Price2 + Price3;
        return TotalCost;
    }
   

}
var TotalBudget = budgetCalculator(2,3,4);
   console.log(TotalBudget);













function hotelCost(days) {
    var take = 0;
    if(days <=10) {
        take = days * 100;
    }else if (days <= 17) {
        var firstweek = 10 * 100;
        var remaining = days -10;
        var secandweek = remaining * 80;
        take = firstweek + secandweek;
    } else{
        var firstweek = 10 * 100;
        var secandweek = 7 * 80;
        var remaining = days - 17;
        var thirdweek = remaining * 50;
        take = firstweek + secandweek + thirdweek;
    }
    return take;
}
var totalcount = hotelCost(22);
console.log(totalcount);







function megaFriend(name) {
    var largest = name[0];
    for(var i = 0; i< name.length; i++){
        if(largest < name[i]) {
            largest = name[i];
        }
        return largest;
    }
}
var result = megaFriend(["Khairul", "Ariful", "Asif", "Ovi"]);
console.log(result);