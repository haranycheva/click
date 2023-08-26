import localStorage, { KEY__SCORES, KEY__USERS } from "./localStorage.js";
import { refs } from "./refs.js";

export function deleteUser(e){
    if(!e.target.classList.contains("delete-user-btn")){
        return;
    }
    const saveData = localStorage.load(KEY__USERS);
    const saveScores = localStorage.load(KEY__SCORES) ? localStorage.load(KEY__SCORES) : null;
    for(const elem of saveData){
        if(e.target.closest(`[data-id="${elem.id}"]`)){
            e.target.closest(".user-item").style.display = "none";
            saveData.splice(saveData.indexOf(elem), 1);
            localStorage.save(saveData, KEY__USERS);
            if(saveScores){
                for(const user of saveScores){
                    if(user.id === elem.id){
                        for(const li of refs.scoreList.children){
                            if(Number(li.dataset.id) === elem.id){
                                li.style.display = "none";
                            }
                        }
                        saveScores.splice(saveScores.indexOf(user), 1);
                        localStorage.save(saveScores, KEY__SCORES);
                    }
                }
            }
        }
    }
}