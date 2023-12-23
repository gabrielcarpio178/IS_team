var productModal = document.getElementById("myProduct");
var ingredientModal = document.getElementById("myIngredient");
var sheetModal = document.getElementById("mySheet");

var productBtn = document.getElementById("product");
var ingredientBtn = document.getElementById("ingredients-list");
var sheetBtn = document.getElementById("product-sheet");

var productClose = document.getElementsByClassName("close-product")[0];
var ingredientClose = document.getElementsByClassName("close-ingredient")[0];
var sheetClose = document.getElementsByClassName("close-sheet")[0];

productBtn.onclick = function() {
    productModal.style.display = "block";
}

ingredientBtn.onclick = function() {
    ingredientModal.style.display = "block";
}

sheetBtn.onclick = function() {
    sheetModal.style.display = "block";
}

productClose.onclick = function() {
    productModal.style.display = "none";
}

ingredientClose.onclick = function() {
    ingredientModal.style.display = "none";
}

sheetClose.onclick = function() {
    sheetModal.style.display = "none";
}
window.onclick = function(event) {
    if (event.target == productModal) {
        productModal.style.display = "none";
    }
    if (event.target == ingredientModal) {
        ingredientModal.style.display = "none";
    }
    if (event.target == sheetModal) {
        sheetModal.style.display = "none";
    }
}