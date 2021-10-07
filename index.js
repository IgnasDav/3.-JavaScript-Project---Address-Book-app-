"use strict";

//Global variables

const nameInput = document.querySelector("#name");
const telInput = document.querySelector("#tel");
const btnAdd = document.querySelector(".main__form__btn");
const mainForm = document.querySelector(".main__form");
const addressDiv = document.createElement("div");
const arr = [];

//Inserting items into html

mainForm.append(addressDiv);
const emptyMsg = document.createElement("h2");
emptyMsg.textContent = "Please Input A Value";

//Drawing function
function drawAddress() {
  // //Adding and inserting html elements

  addressDiv.innerHTML = null;
  emptyMsg.remove();

  //Looping through array to add single address

  arr.forEach((singleItem, i) => {
    const div = document.createElement("div");
    div.classList.add("main__form__div");
    const listItem1 = document.createElement("p");
    const listItem2 = document.createElement("p");
    if (isNaN(singleItem.name)) {
      listItem1.innerHTML = null;
      listItem1.append(singleItem.name);
      div.append(listItem1);
      addressDiv.append(div);
    }
    if (!isNaN(singleItem.tel)) {
      listItem2.innerHTML = null;
      div.append(listItem2);
      listItem2.append(singleItem.tel);
    }
    //Creating div for delete,add favorite and edit
    const btnDiv = document.createElement("div");
    btnDiv.classList.add("main__form__btnDiv");

    //Delete function
    const btnDelete = document.createElement("button");
    btnDelete.textContent = "Delete";
    btnDiv.append(btnDelete);
    div.append(btnDiv);
    btnDelete.addEventListener("click", (event) => {
      event.preventDefault();
      // delete singleItem.name;
      // delete singleItem.tel;
      arr.splice(i, 1);
      drawAddress();
    });

    //Adding item as favorite

    const favorite = document.createElement("INPUT");
    favorite.setAttribute("type", "checkbox");
    favorite.classList.add("main__form__checkbox");
    btnDiv.append(favorite);
    favorite.addEventListener("input", (event) => {
      if (favorite) {
        arr.push({ favorite: true });
      }
      if (!favorite) {
        arr.push({ favorite: false });
      }
    });

    //Adding an edit feature

    const edit = document.createElement("button");
    btnDiv.append(edit);
    edit.textContent = "Edit";
  });
}

btnAdd.addEventListener("click", (event) => {
  event.preventDefault();

  const nameInputValue = nameInput.value;
  const telInputValue = telInput.value;
  if (nameInputValue === "" || telInputValue === "") {
    mainForm.append(emptyMsg);
  } else {
    arr.push({
      name: nameInputValue,
      tel: telInputValue,
    });
    drawAddress();
  }
});
// btnDelete.addEventListener("click", (event) => {
//   event.preventDefault();
// });
