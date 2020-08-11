// function yen() {
//     document.getElementById("currency-title1").innerHTML = "Japanese Yen";
//     document.getElementById("currency-title2").innerHTML = "Japanese Yen";
//   }
  
//   function euro() {
//     document.getElementById("currency-title1").innerHTML = "Euro";
//     document.getElementById("currency-title2").innerHTML = "Euro";
//   }
  
//   function rupees() {
//     document.getElementById("currency-title1").innerHTML = "Indian Rupee";
//     document.getElementById("currency-title2").innerHTML = "Indian Rupee";
//   }
  
//   function changeCurrency() { document.querySelector(".popup").style.display = "flex";
//   }
  
//   // document.querySelector(".popup").addEventListener("click", function(e) {
//   //     e.stopPropagation(); 
//   //     document.querySelector(".popup").style.display = "none";   
//   // });
  
//   function closest(e, t){ 
//     return !e? false : e === t ? true : closest(e.parentNode, t);
//   }
  
  // container = document.getElementById("popup");
  // open = document.getElementById("popup-trigger");
  
  // open.addEventListener("click", function(e) {
  //   container.style.display = "flex";
  //   open.disabled = true;
  //   e.stopPropagation();
  // });
  
  // document.body.addEventListener("click", function(e) {
  //     if (!closest(e.target, container)) {
  //         container.style.display = "none";
  //         open.disabled = false;
  //     }
  // });
  
  function confirmValues() {
    let itemCost = document.getElementById("price").value;
    let cash = document.getElementById("cash").value;
  
    const confirmation = document.getElementById("confirmation");
    const changeEl = document.getElementById("change");
    const confirm = document.getElementById("confirm");
  
    cash = isNaN(cash) || cash === "" || cash <= 0 ? changeEl.innerHTML = "Enter a valid value." : +cash; // test valid input
    itemCost = isNaN(itemCost) || itemCost === "" || itemCost <= 0 ? changeEl.innerHTML = "Enter a valid value." : +itemCost;
    
    
    if (cash < itemCost) {
      changeEl.innerHTML = "Not enough cash.";
    } else {
      confirmation.innerHTML = "Your total purchase costs $" + itemCost.toFixed(2) + " and you have $" + cash.toFixed(2) + " to pay for it.";
      confirm.classList.remove("hide");
   confirm.classList.add("btn-enter");
      confirm.onclick = function() {
        calculateChange(itemCost, cash);
      }
    }
  }
  
  function calculateChange(itemCost, cash) {
    const changeEl = document.getElementById("change");
    let finalOutput = [];
    let remainder = parseFloat(cash) - parseFloat(itemCost);
    remainder = remainder.toFixed(2);
    // store currencies in an object
    let currencies = {
      dollar: [100.00, 50.00, 20.00, 10.00, 5.00, 1.00, 0.25, 0.10, 0.05, 0.01],
      yen: [10000.00, 1000.00, 500.00, 100.00, 50.00, 10.00, 5.00, 1.00]
    };

    let currencySymbols = {
        dollar: "$",
        yen: "¥"
    };

    // onclick of yen button, currency -> yen
    let usedCurrency = currencies.dollar;
    let currentSymbol = currencySymbols.dollar;

    //iterate through currency values 


    while (remainder > 0.00) {
        
        for (let i = 0; i < usedCurrency.length; i++) {
            if (remainder >= usedCurrency[i]) {
                let amount = findChange(usedCurrency[i], remainder);
                remainder = parseFloat(remainder - (usedCurrency[i] * amount));
                remainder = remainder.toFixed(2);
                finalOutput.push(currentSymbol + usedCurrency[i] + " = " + amount);
            }
        }
      
    //   if (remainder >= 100.00) {
    //     let hundred = findChange(100.00, remainder);
    //     remainder = parseFloat(remainder - (100.00 * hundred));
    //     remainder = remainder.toFixed(2); 
    //     finalOutput.push("Hundred Dollar Bills = " + hundred);
        
    //   } else if (remainder >= 50.00) {
    //     let fifty = findChange(50.00, remainder);
    //     remainder = parseFloat(remainder - (50.00 * fifty));
    //     remainder = remainder.toFixed(2); 
    //     finalOutput.push("Fifty Dollar Bills = " + fifty);
        
    //   } else if (remainder >= 20.00) {
    //     let twenty = findChange(20.00, remainder);
    //     remainder = parseFloat(remainder - (20.00 * twenty));
    //     remainder = remainder.toFixed(2); 
    //     finalOutput.push("Twenty Dollar Bills = " + twenty);
        
    //   } else if (remainder >= 10.00) {
    //     let ten = findChange(10.00, remainder);
    //     remainder = parseFloat(remainder - (10.00 * ten));
    //     remainder = remainder.toFixed(2); 
    //     finalOutput.push("Ten Dollar Bills = " + ten);
        
    //   } else if(remainder >= 5.00) {
    //     let five = findChange(5.00, remainder);
    //     remainder = parseFloat(remainder - (5.00 * five));
    //     remainder = remainder.toFixed(2); 
    //     finalOutput.push("Five Dollar Bills = " + five);
        
        
    //   } else if (remainder >= 1.00) {
    //     let one = findChange(1.00, remainder);
    //     remainder = parseFloat(remainder - (1.00 * one));
    //     remainder = remainder.toFixed(2); 
    //     finalOutput.push("One Dollar Bills = " + one);
       
        
    //   } else if (remainder >= 0.25) {
    //     let twentyFiveC = findChange(0.25, remainder);
    //     remainder = parseFloat(remainder - (0.25 * twentyFiveC));
    //     remainder = remainder.toFixed(2); 
    //     finalOutput.push("Quarters = " + twentyFiveC);
        
        
    //   } else if (remainder >= 0.10) {
    //     let tenC = findChange(0.10, remainder);
    //     remainder = parseFloat(remainder - (0.10 * tenC));
    //     remainder = remainder.toFixed(2); 
    //     finalOutput.push("Dimes = " + tenC);
        
        
    //   } else if (remainder >= 0.05) {
    //     let fiveC = findChange(0.05, remainder);
    //     remainder = parseFloat(remainder - (0.05 * fiveC));
    //     remainder = remainder.toFixed(2); 
    //     finalOutput.push("Nickels = " + fiveC);
        
        
    //   } else {
    //     let oneC = findChange(0.01, remainder);
    //     remainder = parseFloat(remainder - (0.01 * oneC));
    //     remainder = remainder.toFixed(2); 
    //     finalOutput.push("Pennies = " + oneC);
    //   } 
    }
   
    let priceList = "";
    for (let i = 0; i < finalOutput.length; i++) {
      if (i == finalOutput.length - 1) {
        priceList += finalOutput[i];
      } else {
        priceList += finalOutput[i] + '<br/>';
      }
    }
    changeEl.innerHTML = "Your change is: " + '<br><br>' +  priceList;
   }
  
  function findChange(value, remainder) {
     //Step 1. Get number of dollar for each type of dollar 
      let dValue = parseInt(remainder / value);
     // Step 2. Storing numDValue in an array 
      dValue = dValue;
      return dValue;
   }



  

   