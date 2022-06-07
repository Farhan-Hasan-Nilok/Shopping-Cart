// Action Event of plus and minus sign 

document.getElementById("phone-plus-sign").addEventListener("click", function () {
    updateProductNumber("phone", 1219, true);

})

document.getElementById("phone-minus-sign").addEventListener("click", function () {

    updateProductNumber("phone", 1219, false)

})

document.getElementById("case-plus-sign").addEventListener("click", function () {

    updateProductNumber("case", 59, true)

})

document.getElementById("case-minus-sign").addEventListener("click", function () {

    updateProductNumber("case", 59, false)

})

// Function for updating the number of phone and case in the input area 

function updateProductNumber(product, price, isIncreasing) {
    const productInput = document.getElementById(product + "-number");
    let productNumber = productInput.value;
    if (isIncreasing == true) {
        productNumber = parseInt(productNumber) + 1;
        document.getElementById(product + "-number").value = productNumber;
    }

    else if (productNumber > 0) {
        productNumber = parseInt(productNumber) - 1;
        document.getElementById(product + "-number").value = productNumber;
    }

    const totalPrice = document.getElementById("total-" + product + "-price");
    totalPrice.innerText = productNumber * price;
    calculateTotal();
}

//  for calculating total of phone and case

function calculateTotal() {
    const phonePrice = getProductAmout("phone") * 1219;
    const casePrice = getProductAmout("case") * 59;
    const subtotal = phonePrice + casePrice;
    const tax = subtotal / 10;
    const total = subtotal + tax;

    document.getElementById("sub-total").innerText = subtotal;
    document.getElementById("tax-amount").innerText = tax;
    document.getElementById("total-amount").innerText = total;

}

// for getting the input tag address so that it can forward for calculateTotal 

function getProductAmout(product) {
    const productInput = document.getElementById(product + "-number").value;
    const productNumber = parseInt(productInput);
    return productNumber;
}

// action for remove button 

removeProduct("phone-remove", "phone-cart");
removeProduct("case-remove", "case-cart");


function removeProduct(removeBtn, removeCart) {
    document.getElementById(removeBtn).addEventListener("click", function () {
        document.getElementById(removeCart).style.display = 'none';

    })
}
