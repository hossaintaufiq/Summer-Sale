document.getElementById("cart-1").addEventListener("click",function(){
    const cartValue = stringToFloatValue('card-1-price');
    const totalPrePrice = stringToFloatValue('Total-Price');
    const total =totalPrice (cartValue , totalPrePrice);
    changingInnerTextById ('Total-Price' , total);
    // const discountWillBe = parseFloat(total/5);
    // if(total>200 ){ 
    //     changingInnerTextById ('discount' , discountWillBe);
    // }
    changingInnerTextById ('final-total' , total);
    updateButtonStatus2(total);
    updateButtonStatus(total);
    
});

// cart 2

document.getElementById("cart-2").addEventListener("click",function(){
    const cartValue = stringToFloatValue('card-2-price');
    const totalPrePrice = stringToFloatValue('Total-Price');
    const total =totalPrice (cartValue , totalPrePrice);
    changingInnerTextById ('Total-Price' , total);
    // const discountWillBe = parseFloat(total/5);
    // if(total>200 ){ 
    //     changingInnerTextById ('discount' , discountWillBe);
    // }
    changingInnerTextById ('final-total' , total);
    updateButtonStatus2(total);
    updateButtonStatus(total);
})

// cart 3

document.getElementById("cart-3").addEventListener("click",function(){
    const cartValue = stringToFloatValue('card-3-price');
    const totalPrePrice = stringToFloatValue('Total-Price');
    const total =totalPrice (cartValue , totalPrePrice);
    changingInnerTextById ('Total-Price' , total);
    // const discountWillBe = parseFloat(total/5);
    // if(total>200 ){ 
    //     changingInnerTextById ('discount' , discountWillBe);
    // }
    changingInnerTextById ('final-total' , total);
    updateButtonStatus2(total);
    updateButtonStatus(total);
})

// cart 4

document.getElementById("cart-4").addEventListener("click",function(){
    const cartValue = stringToFloatValue('card-4-price');
    const totalPrePrice = stringToFloatValue('Total-Price');
    const total =totalPrice (cartValue , totalPrePrice);
    changingInnerTextById ('Total-Price' , total);
    // const discountWillBe = parseFloat(total/5);
    // if(total>200 ){ 
    //     changingInnerTextById ('discount' , discountWillBe);
    // }
    changingInnerTextById ('final-total' , total);
    updateButtonStatus2(total);
    updateButtonStatus(total);
})

// cart 5

document.getElementById("cart-5").addEventListener("click",function(){
    const cartValue = stringToFloatValue('card-5-price');
    const totalPrePrice = stringToFloatValue('Total-Price');
    const total =totalPrice (cartValue , totalPrePrice);
    changingInnerTextById ('Total-Price' , total);
    // const discountWillBe = parseFloat(total/5);
    // if(total>200 ){ 
    //     changingInnerTextById ('discount' , discountWillBe);
    // }
    changingInnerTextById ('final-total' , total);
    updateButtonStatus2(total);
    updateButtonStatus(total);
})


// cart 6 
document.getElementById("cart-6").addEventListener("click",function(){
    const cartValue = stringToFloatValue('card-6-price');
    const totalPrePrice = stringToFloatValue('Total-Price');
    const total =totalPrice (cartValue , totalPrePrice);
    changingInnerTextById ('Total-Price' , total);
    const discountWillBe = parseFloat(total/5);
    // if(total>200 ){ 
    //     changingInnerTextById ('discount' , discountWillBe);
    // }
    changingInnerTextById ('final-total' , total);
    updateButtonStatus2(total);
    updateButtonStatus(total);
})

// mew button 
document.getElementById('applyButton').addEventListener('click',function(){
    const total = parseFloat(document.getElementById('Total-Price').innerText);
    const discountWillBe = parseFloat(document.getElementById('discount').innerText);

     const inputFromApply= document.getElementById('input-field');
     const inputValue = inputFromApply.value;
     if( inputValue==='SELL200' ){ 
        const discountWillBe = parseFloat(total/5);
        changingInnerTextById ('discount' , discountWillBe);

        const finalPrice = total -discountWillBe;


    changingInnerTextById ('final-total' , finalPrice);

     }
})

// home button 
document.getElementById('Go-home').addEventListener('click',function() {
   window.location.reload();
})