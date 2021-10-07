"use strict";

//Global variables

const nameInput = document.querySelector("#name");
const telInput = document.querySelector("#tel");
const btnAdd = document.querySelector(".main__form__btn");
const mainForm = document.querySelector(".main__form");
const listDiv = document.createElement("div");
const arr = [];

//Inserting items into html

mainForm.append(listDiv);
const emptyMsg = document.createElement("h2");
emptyMsg.textContent = "Please Input A Value";

//Drawing function
function drawAddress() {
  //Adding and inserting html elements

  const nameInputValue = nameInput.value;
  const telInputValue = telInput.value;

  //Checking the  values if they are empty

  if (nameInputValue === "" || telInputValue === "") {
    mainForm.append(emptyMsg);
  }
  //If the values are not empty then we add the address list
  else {
    // //Adding and inserting html elements

    const list = document.createElement("ul");
    listDiv.append(list);
    const listItem1 = document.createElement("li");
    const listItem2 = document.createElement("li");
    const btnDelete = document.createElement("button");
    btnDelete.textContent = "Delete";
    emptyMsg.remove();

    //Pushing values into the array object

    arr.push({ name: nameInputValue, tel: telInputValue });

    //Looping through array to add single address

    arr.forEach((singleItem) => {
      if (isNaN(singleItem.name)) {
        listItem1.innerHTML = null;
        list.append(listItem1);
        listItem1.append(singleItem.name);
      }
      if (!isNaN(singleItem.tel)) {
        listItem2.innerHTML = null;
        list.append(listItem2);
        listItem2.append(singleItem.tel);
      }
      list.append(btnDelete);
    });
    btnDelete.addEventListener("click", (event) => {
      event.preventDefault();
      arr.shift();
    });
  }
}

btnAdd.addEventListener("click", (event) => {
  event.preventDefault();
  drawAddress();
});
