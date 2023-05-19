import localStorage, { KEY__SCORES, KEY__USERS } from "./localStorage.js";
import { refs } from "./refs.js";
import { createUserCard } from "./createUserCard.js"

export function populateMarkup(){
    const saveData = localStorage.load(KEY__USERS);
    const saveScores = localStorage.load(KEY__SCORES) ? localStorage.load(KEY__SCORES) : [];
    if(!saveData){
        return;
    }
    const userEl =  saveData.map((user) => {
        return createUserCard(user)
    }).join("");
    const scoreEl =  saveScores.map((user) => {
        return `<li class="score-item">${user.bestScore} - ${user.name}</li>`
    }).join("");
    refs.userList.insertAdjacentHTML("beforeend", userEl)
    refs.scoreList.insertAdjacentHTML("beforeend", scoreEl)
}