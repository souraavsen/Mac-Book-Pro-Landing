// etting refference by ID
const Memory8GB = document.getElementById("memory8");
const Memory16GB = document.getElementById("memory16");

const Storage256 = document.getElementById("storage256");
const Storage512 = document.getElementById("storage512");
const Storage1TB = document.getElementById("storage1tb");

const FreeDelivery = document.getElementById("free");
const ChargedDelivery = document.getElementById("charge");

const ExtraMemoryCost = document.getElementById("memory_cost");
const ExtraStorageCost = document.getElementById("storage_cost");
const ExtraDeliveryCost = document.getElementById("delivery_cost");

const TotalCost = document.getElementById("total_cost");
const FinalCost = document.getElementById("final_cost");
const PromoInput = document.getElementById("promo_code");
const PromoBtn = document.getElementById("code_appy");

// Adding click event for Memory Section
Memory8GB.addEventListener("click", function () {
  Clicked("8GB");
});
Memory16GB.addEventListener("click", function () {
  Clicked("16GB");
});


// Adding click event for Storage Section
Storage256.addEventListener("click", function () {
  Clicked("256GB");
});
Storage512.addEventListener("click", function () {
  Clicked("512GB");
});
Storage1TB.addEventListener("click", function () {
  Clicked("1TB");
});

// Adding click event for Shipping Operations
FreeDelivery.addEventListener("click", function () {
  Clicked("Free");
});
ChargedDelivery.addEventListener("click", function () {
  Clicked("Charge");
});
PromoBtn.addEventListener("click", function () {
  Clicked("Promo");
});

let IfPromoApplied = "false";

// Function for handling different buttons click
function Clicked(item) {
  
  // Checking if 8GB memory choosen
  if (item == "8GB") {
    if (ExtraMemoryCost.innerText != "0") {
      ExtraMemoryCost.innerText = "0";
    }
    CalculateTotal(0);
    // passing the price for adding in total
  }

  // Checking if 16GB memory choosen
  if (item == "16GB") {
    if (ExtraMemoryCost.innerText != "180") {
      ExtraMemoryCost.innerText = "180";
    }
    CalculateTotal(180);
    // passing the price for adding in total
  }

  // Checking if 256GB storage choosen
  if (item == "256GB") {
    if (ExtraStorageCost.innerText != "0") {
      ExtraStorageCost.innerText = "0";
    }
    CalculateTotal(0);
    // passing the price for adding in total
  }

  // Checking if 500GB storage choosen
  if (item == "512GB") {
    if (ExtraStorageCost.innerText != "100") {
      ExtraStorageCost.innerText = "100";
    }
    CalculateTotal(100);
    // passing the price for adding in total
  }

  // Checking if 1TB storage choosen
  if (item == "1TB") {
    if (ExtraStorageCost.innerText != "180") {
      ExtraStorageCost.innerText = "180";
    }
    CalculateTotal(180);
    // passing the price for adding in total
  }

  // Checking if FREE delivery choosen
  if (item == "Free") {
    if (ExtraDeliveryCost.innerText != "0") {
      ExtraDeliveryCost.innerText = "0";
    }
    CalculateTotal(0);
    // passing the price for adding in total
  }

  // Checking if Early delivery choosen, $20 will be added
  if (item == "Charge") {
    if (ExtraDeliveryCost.innerText != "20") {
      ExtraDeliveryCost.innerText = "20";
    }
    CalculateTotal(20);
    // passing the price for adding in total  
  }

  if (item == "Promo") {
    const code = PromoInput.value.toLowerCase();
    console.log(code);
    if (code == "stevekaku") {
      CalculateTotal("applied");
    }
    PromoInput.value = "";
  }
}

function CalculateTotal(ifPromo) {
  // calculating total cost of selected configuration
  BestTotal =
    1299 +
    parseInt(ExtraMemoryCost.innerText) +
    parseInt(ExtraStorageCost.innerText) +
    parseInt(ExtraDeliveryCost.innerText);

  //    Here Chcking if promo code appled or not
  if (ifPromo == "applied" && IfPromoApplied == "false") {
    //   if promo code applied and was not applied before then reduce by 20%
    FinalCost.innerText =
      parseFloat(FinalCost.innerText) - parseFloat(FinalCost.innerText * 0.2);
    IfPromoApplied = "true";
  } else {
    if (IfPromoApplied == "false") {
      // if promo code is not applied yet
      TotalCost.innerText = BestTotal;
      FinalCost.innerText= BestTotal;
    } else {
      //   setting Total Cost value after getting cost of new purches from previous purse
      TotalCost.innerText = BestTotal;
      // if promo code applied then reduce final cost by 20%
      FinalCost.innerText = BestTotal - BestTotal * 0.2;
    }
    
  }
}
