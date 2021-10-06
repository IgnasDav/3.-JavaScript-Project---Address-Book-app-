"use strict";
//Global variables
const nameInput = document.querySelector("#name");
const telInput = document.querySelector("#tel");
const btnAdd = document.querySelector(".main__form__btn");
const mainForm = document.querySelector(".main__form");
const list = document.createElement("ul");
//Inserting items into html
mainForm.append(list);

const arr = [];
const reducedArr = {};
function drawAddress() {
  const nameInputValue = nameInput.value;
  const telInputValue = telInput.value;
  const listItem1 = document.createElement("li");
  const listItem2 = document.createElement("li");
  arr.push(nameInputValue);
  arr.push(telInputValue);
  arr.reduce(
    (result, singleItem) => {
      if (isNaN(singleItem)) {
        result.names.push(singleItem);
        listItem1.innerHTML = null;
        list.append(listItem1);
        listItem1.append(singleItem);
      }
      if (!isNaN(singleItem)) {
        result.phones.push(singleItem);
        listItem2.innerHTML = null;
        list.append(listItem2);
        listItem2.append(singleItem);
      }
      return result;
    },
    { names: [], phones: [] }
  );
  //   reducedArr.forEach((singleItem) => {
  //     listItem.innerHTML = null;
  //     list.append(listItem);
  //     listItem.append(singleItem);
  //   });
}

btnAdd.addEventListener("click", (event) => {
  event.preventDefault();
  drawAddress();
});
