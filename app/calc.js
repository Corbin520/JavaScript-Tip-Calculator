
// We are going to need to take the user-input (total of bill)
// and store it. Once we have that, based off the user total
// We will then calculate the percent of the check and return
// the amount for the user


var billTotal = []
var tipPercent = []

// get the value off the input price box
$("#calculate-total").on("click", function() {
    
    var inpVal = $("#price-input").val().trim()
    var tipVal = $("#tip-percentage").val().trim()

    billTotal.push(inpVal)
    tipPercent.push(tipVal)


    
    // we may have to use a switch statment based off the value clicked on the drop down.
    
    // so use this code: when the user picks the value of the drop down.
    // excellent = .30%
    // Great = .20%
    // Good = .15%
    // Terriable = .5%
    

})

// Leave a review or see reviews