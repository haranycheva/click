import localStorage, { KEY__USERS } from "./localStorage.js";

export let selected = null;

export function selectUser(e){
    if(!e.target.classList.contains("submit-user-btn")){
        return;
    };
    const saveData = localStorage.load(KEY__USERS);
    saveData.forEach((elem) => {
        if(e.target.closest(`[data-id="${elem.id}"]`)){
            e.target.closest(".user-item").classList.add("selected");
            selected = elem;
        }else {
            document.querySelector(`[data-id="${elem.id}"]`).classList.remove("selected");
        }
    localStorage.save(saveData, KEY__USERS)
    })
}