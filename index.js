function calculate() {
    var principle = Number(document.getElementById("principle").value); 
    var interestRate = Number(document.getElementById("interest-rate").value) / 100; 
    var years = Number(document.getElementById("num-years").value);
    var compoundingPeriods = document.getElementById("compounding-periods").value;
    console.log(compoundingPeriods);
    var multiplier = 1;
    
    switch (compoundingPeriods) {
        case "Yearly":
            multiplier = 1;
            break;
        case "Daily":
            multiplier = 365;
            break;
        case "Quarterly":
            multiplier = 4;
            break;
        case "Monthly":
            multiplier = 12;   
            break;
        case "Weekly":
            multiplier = 52;
            break;
        default:
            multiplier = 1;
            break;
    }
    
    var finalAmount = principle * Math.pow(1 + (interestRate / multiplier), years * multiplier);
    console.log(finalAmount);
    
    document.getElementById("amount").innerHTML = "Amount: Rs." + finalAmount.toFixed(2);
}
