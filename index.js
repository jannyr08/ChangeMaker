 function confirmValues() {
    let itemCost = document.getElementById("price").value;
    let cash = document.getElementById("cash").value;
  
    const confirmation = document.getElementById("confirmation");
    const confirm = document.getElementById("confirm");
    const addOn = document.getElementById("add-on");
    const addOnTitle = document.getElementById("add-on-title");
    const result = document.getElementById("result");

    cash = isNaN(cash) || cash === "" || cash <= 0 ? alert("Enter a valid value.") : +cash; // test valid input
    itemCost = isNaN(itemCost) || itemCost === "" || itemCost <= 0 ? alert("Enter a valid value.") : +itemCost;
    
    if (cash < itemCost) {
      alert("Not enough cash.");
      
    } else {
      confirmation.innerHTML = '<br>' + "Your total purchase costs " + itemCost.toFixed(2) + " and you have " + cash.toFixed(2) + " to pay for it.";
      document.getElementById("add-on").classList.remove("hide");
      confirm.classList.remove("hide");
      $("#add-on").css("display", "block");
      addOn.classList.add("add-on-margin");
      confirm.classList.add("btn-enter");
      addOnTitle.innerHTML = "Confirm";
      confirm.onclick = function() {
        result.innerHTML = "Change:"
        result.classList.add("add-on-margin");
        calculateChange(itemCost, cash);
      }
    }
  }

  let selectedCurrency = "dollar";

  function calculateChange(itemCost, cash) {
    const changeEl = document.getElementById("change");
    const resetBtn = document.getElementById("reset1");
    let finalOutput = [];
    let remainder = parseFloat(cash) - parseFloat(itemCost);
    remainder = remainder.toFixed(2);

    // store currencies in an object
    let currencies = {
      dollar: [100.00, 50.00, 20.00, 10.00, 5.00, 1.00, 0.25, 0.10, 0.05, 0.01],
      yen: [10000.00, 1000.00, 500.00, 100.00, 50.00, 10.00, 5.00, 1.00],  
      peso: [1000.00, 500.00, 100.00, 50.00, 20.00, 10.00, 5.00, 1.00, 0.25, 0.10, 0.05, 0.01]
    };

    let currencyNames = {
      dollar: ["100 Dollar Bill", "50 Dollar Bill", "20 Dollar Bill", "10 Dollar Bill", "5 Dollar Bill", "1 Dollar Bill", "Quarter", 
      "Dime", "Nickel", "Penny"],
      yen : ["10,000 Yen Bill", "1,000 Yen Bill", "500 Yen Coin", "100 Yen Coin", "50 Yen Coin", "10 Yen Coin", "5 Yen Coin", "1 Yen Coin"],
      peso: ["1,000 Peso Bil", "500 Peso Bill", "100 Peso Bill", "50 Peso Bill", "20 Peso Bill", "10 Peso Coin", "5 Peso Coin", "1 Peso Coin",
      "25¢ Peso Coin", "10¢ Peso Coin", "5¢ Peso Coin", "1¢ Peso Coin"]
    };

    let usedCurrency = currencies[selectedCurrency];
    let usedCurrencyName = currencyNames[selectedCurrency];
    console.log(usedCurrency);

    //iterate through currency values 
    while (remainder > 0.00) {
        for (let i = 0; i < usedCurrency.length; i++) {
            if (remainder >= usedCurrency[i]) {
                let amount = findChange(usedCurrency[i], remainder);
                remainder = parseFloat(remainder - (usedCurrency[i] * amount));
                remainder = remainder.toFixed(2);
                finalOutput.push(usedCurrencyName[i] + " = " + amount);
            }
        }
    }
   
    let priceList = "";
    for (let i = 0; i < finalOutput.length; i++) {
      if (i == finalOutput.length - 1) {
        priceList += finalOutput[i];
      } else {
        priceList += finalOutput[i] + '<br/>';
      }
    }

    document.getElementById("resultDiv").classList.remove("hide");
    changeEl.innerHTML = '<br>' + priceList;
    changeEl.classList.add("center");

    resetBtn.classList.remove("hide");
    resetBtn.classList.add("btn-enter");

    resetBtn.onclick = function () {
      document.getElementById("myForm").reset();
     
      $("#add-on").css("display", "none");
      document.getElementById("resultDiv").classList.add("hide");
    }
  }

  function changeCurrency() {
    var select = document.getElementById("changeCurrency");
    select.onclick = changeCurrencyName(select);
    selectedCurrency = select.options[select.selectedIndex].value;
    return selectedCurrency;
  }

  function changeCurrencyName(select) {
    let currencyName = document.getElementById("currency-name");
    currencyName.innerHTML = select.options[select.selectedIndex].text;
  }
  
  function findChange(value, remainder) {
     //Step 1. Get number of dollar for each type of dollar 
      let dValue = parseInt(remainder / value);
     // Step 2. Storing numDValue in an array 
      return dValue;
   }



  

   