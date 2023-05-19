import { refs } from "./refs.js";
import localStorage, { KEY__USERS, KEY__SCORES} from "./localStorage.js";
import { clickOnClickBtn } from "./clickOnClickBtn.js";
import { selected } from "./selectUser.js";
import { selectUser } from "./selectUser.js";
import { deleteUser } from "./deleteUser.js";

const usersUsedClicker = localStorage.load(KEY__SCORES) ? localStorage.load(KEY__SCORES) : [];

export function timeUp(){
    refs.timer.textContent = 10;
    refs.clickBtn.removeEventListener("click", clickOnClickBtn);
    refs.userList.addEventListener("click", selectUser);
    refs.userList.addEventListener("click", deleteUser);
    refs.selectUserBtn.disabled = false;
    refs.nameInput.disabled = false;
    refs.colorInput.disabled = false;
    const saveData = localStorage.load(KEY__USERS);
    for(const elem of saveData){
        if(selected.id === elem.id){
            for (const user of usersUsedClicker){
                if(user.id === elem.id){
                    usersUsedClicker.splice(usersUsedClicker.indexOf(user), 1)
                }
            }
            const newBest = Number(refs.clickBtn.textContent)
            if(elem.bestScore < newBest || elem.bestScore === undefined){
                elem.bestScore = newBest;
            }
            usersUsedClicker.push(elem)
            usersUsedClicker.sort((a, b) => b.bestScore - a.bestScore)
            refs.scoreList.innerHTML = "";
            usersUsedClicker.forEach((user)=>{
                const userScoreCard = `<li class="score-item" data-id="${user.id}">${user.bestScore} - ${user.name}</li>`
                refs.scoreList.insertAdjacentHTML("beforeend", userScoreCard);
            })
            localStorage.save(usersUsedClicker, KEY__SCORES);
            localStorage.save(saveData, KEY__USERS);
            refs.tryAgainBtn.style.display = "block"
        }
    }
}