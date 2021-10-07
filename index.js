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
  // //Adding and inserting html elements

  const list = document.createElement("ul");
  listDiv.append(list);
  const listItem1 = document.createElement("li");
  const listItem2 = document.createElement("li");

  emptyMsg.remove();

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
    //Delete function
    const btnDelete = document.createElement("button");
    btnDelete.textContent = "Delete";
    listItem2.append(btnDelete);
    btnDelete.addEventListener("click", (event) => {
      event.preventDefault();
      // delete singleItem.name;
      // delete singleItem.tel;
      arr.splice(singleItem, 1);
      drawAddress();
    });
    // if (!singleItem.name && !singleItem.tel) {
    //   list.remove();
    // }
  });
}

btnAdd.addEventListener("click", (event) => {
  event.preventDefault();
  const nameInputValue = nameInput.value;
  const telInputValue = telInput.value;
  if (nameInputValue === "" || telInputValue === "") {
    mainForm.append(emptyMsg);
  } else {
    arr.push({ name: nameInputValue, tel: telInputValue });
    drawAddress();
  }
});
// btnDelete.addEventListener("click", (event) => {
//   event.preventDefault();
// });
