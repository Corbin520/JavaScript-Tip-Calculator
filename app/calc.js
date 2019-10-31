
// We are going to need to take the user-input (total of bill)
// and store it. Once we have that, based off the user total
// We will then calculate the percent of the check and return
// the amount for the user

var resultText = document.getElementById("result")


var billTotal = []

// get the value off the input price box
$("#calculate-total").on("click", function() {
    
    var inpVal = $("#price-input").val().trim()

    billTotal.push(inpVal)

    var tipValue = document.getElementById("tipVal").value;
    
    var grandTotal = billTotal * tipValue
    console.log(grandTotal)

    resultText.textContent = "$" + grandTotal

})

// Leave a review or see reviews