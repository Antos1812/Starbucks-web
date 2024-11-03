document.addEventListener("DOMContentLoaded", function() {
    var MoreIsland = document.getElementsByClassName("IslandMore")[0];

    document.getElementById("starbucksSearchForm").addEventListener("submit", function(event){
        event.preventDefault();
        const location = document.getElementById("InputId").value;

        const regex = /^[A-Za-z\s]+$/;
        if (!regex.test(location)) {
            alert("Please type only letters.");
            return;
        }

        const query = `https://www.google.com/maps/search/Starbucks+${encodeURIComponent(location)}`;
        window.open(query, "_blank");
    });
});

function navigateToMain(url) {
    window.open(url);
    console.log("Przejście na stronę");
}

function navigateTo(url) {
    window.location.href = url;
}

function openMore() {
    if (MoreIsland) {
        MoreIsland.style.display = "block";
        console.log("Opening More section");
    }
}

function closeMore() { 
    if (MoreIsland) {
        MoreIsland.style.display = "none";
        console.log("Closing More section");
    }
}


let coffee1 = 0;
function addCoffee(){

    coffee1 += 1;

    document.getElementById("valueCoffee").innerHTML = coffee1;
}

let totalPrice = 0;
function addCoffeeText(button, coffeeType, extrasType){
    const ExtrasType = button.innerText;
    const fullOrderText = coffeeType + " + " + extrasType;
    const additionalText = "1x - ";

    totalPrice += extrasType;
    
    const newTextElement = document.createElement("p");
    newTextElement.innerText = additionalText + fullOrderText + " -$" + extrasType.toFixed(2);
    newTextElement.classList.add("displayCoffeeText");

    document.getElementById("textContainer").appendChild(newTextElement);
    updateTotalPrice();
}

function updateTotalPrice(){
    const priceDisplay = document.getElementById("totalPrice")
    if (!priceDisplay){
        const newPriceDisplay = document.createElement("p");
        newPriceDisplay.id = "totalPrice";
        newPriceDisplay.innerText = "Total Price: $" + totalPrice.toFixed(2);
        document.getElementById("priceContainer").appendChild(newPriceDisplay);
    } else {
        priceDisplay.innerText = "Total Price: $" + totalPrice.toFixed(2);
    }
    
}

const dropdown = document.querySelector('.dropdown');
const dropdownContent = document.querySelector('.dropdown-content');
const dropbtn = document.querySelector('.dropbtn');

dropbtn.addEventListener('mouseover', function() {
    dropdownContent.classList.add('show');
});

dropdown.addEventListener('mouseleave', function() {
    dropdownContent.classList.remove('show');
});
