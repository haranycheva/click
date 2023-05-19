import { refs } from "./refs.js";
import localStorage, { KEY__USERS } from "./localStorage.js";
import { populateMarkup } from "./populateMarkup.js";
import { addUser } from "./createNewUser.js";
import { deleteUser } from "./deleteUser.js";
import { selectUser } from "./selectUser.js";
import { clickOnClickBtn } from "./clickOnClickBtn.js";
import { playAgain } from "./playAgain.js";

const users = localStorage.load(KEY__USERS) ? localStorage.load(KEY__USERS) : [];

// export const papa = 24;
// export const KEY__USERS = "users";
// export const KEY__SCORES = "scores";

// видає помилку при використанні в інших файлах

populateMarkup();

refs.userForm.addEventListener("submit", addUser.bind("", users));
refs.userList.addEventListener("click", deleteUser);
refs.userList.addEventListener("click", selectUser);
refs.clickBtn.addEventListener("click", clickOnClickBtn);
refs.tryAgainBtn.addEventListener("click", playAgain)






