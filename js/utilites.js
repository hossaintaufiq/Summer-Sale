function stringToFloatValue(elementId){
    const selectedElement=document.getElementById(elementId);
    const valueInString = selectedElement.innerText;
    const value =parseFloat(valueInString);

    return value;
}


function totalPrice (previousPrice , currentTotalPrice){
    const totalPriceWithoutDiscount= previousPrice+currentTotalPrice;
    return totalPriceWithoutDiscount;
}

function changingInnerTextById (elementId , value){
    const textElement = document.getElementById(elementId);
     textElement.innerText = value;
}

// purchase button 
const button = document.getElementById("purchasebutton");
function updateButtonStatus(price) {
    if (price > 0) {
      button.removeAttribute("disabled"); // Enable the button
    } else {
      button.setAttribute("disabled", "true"); // Disable the button
    }
  }

//   apply button 
const button2 = document.getElementById("applyButton");
function updateButtonStatus2(price2) {
    if (price2 >200 ) {
      button2.removeAttribute("disabled"); // Enable the button
    } else {
      button2.setAttribute("disabled", "true"); // Disable the button
    }
  }