const curr_URL =
  "https://raw.githubusercontent.com/WoXy-Sensei/currency-api/main/api/USD_INR.json";

const selects = document.querySelectorAll(".country select");
const button = document.querySelector("form button");
const fromCurr = document.querySelector(".from select");
const toCurr = document.querySelector(".to select");
const msg = document.querySelector(".msg");
const icon = document.querySelector("i");
const img = document.querySelector("img");
const fromimg = document.querySelector(".from img");
const toimg = document.querySelector(".to img");

for (let select of selects) {
  for (let country in countryList) {
    //creating the new element
    let newOption = document.createElement("option");
    newOption.innerText = country;
    newOption.value = country;
    select.append(newOption);
    //to selected option as USD
    if (select.name === "from" && country === "USD") {
      newOption.selected = "selected";
    } else if (select.name === "to" && country === "INR") {
      newOption.selected = "selected";
    }
  }
  select.addEventListener("change", (evt) => {
    //target shows where the change happens
    updateFlag(evt.target);
  });
}

window.addEventListener("load", () => {
  updateInfo();
});

const updateInfo = async () => {
  let amount = document.querySelector(".amt input");
  let amountVal = amount.value;
  if (amountVal === "" || amountVal <= 0) {
    amountVal = 1;
    amount.value = "1";
  } else {
    console.log(amountVal);
  }

  let fromVal = fromCurr.value;
  let toVal = toCurr.value;

  const newURL = `https://raw.githubusercontent.com/WoXy-Sensei/currency-api/main/api/${toVal}_${fromVal}.json`;
  let response = await fetch(newURL);
  let data = await response.json();
  let rate = data.rate;

  convert(rate, amountVal, fromVal, toVal);
};

const updateFlag = (element) => {
  let currCode = element.value;
  let countryCode = countryList[currCode];
  let newSrc = `https://flagsapi.com/${countryCode}/flat/64.png`;
  let img = element.parentElement.querySelector("img");
  img.src = newSrc;
};

button.addEventListener("click", (evt) => {
  //default behaviour stopped
  evt.preventDefault();
  updateInfo();
});

const convert = (rate, amountVal, fromVal, toVal) => {
  let result = rate * amountVal;
  msg.innerText = `${amountVal}${fromVal}=${result}${toVal}`;
};

icon.addEventListener("click", () => {
  swap();
  let temp = fromimg.src;
  fromimg.src = toimg.src;
  toimg.src = temp;

  let tem = fromCurr.value;
  fromCurr.value = toCurr.value;
  toCurr.value = tem;
});

const swap = async () => {
  let amount = document.querySelector(".amt input");
  let amountVal = amount.value;
  if (amountVal === "" || amountVal <= 0) {
    amountVal = 1;
    amount.value = "1";
  } else {
    console.log(amountVal);
  }

  let fromVal = toCurr.value;
  let toVal = fromCurr.value;

  console.log(fromVal, toVal, fromVal, toVal);

  const newURL = `https://raw.githubusercontent.com/WoXy-Sensei/currency-api/main/api/${toVal}_${fromVal}.json`;
  let response = await fetch(newURL);
  let data = await response.json();
  let rate = data.rate;

  convert(rate, amountVal, fromVal, toVal);
};