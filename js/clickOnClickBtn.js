import { refs } from "./refs.js";
import { timeUp } from "./timeUp.js";
import { selected } from "./selectUser.js";
import { selectUser } from "./selectUser.js";
import { deleteUser } from "./deleteUser.js";
import localStorage, {KEY__USERS} from "./localStorage.js";

let clicks = 0;

export function clickOnClickBtn(e){
    if(!selected){
        alert("Select User")
        return;
    }
    const saveData = localStorage.load(KEY__USERS);
    if (!saveData.some((user) => {
        return user.id === selected.id
    })){
        alert("Select User");
        return;
    }
    refs.userList.removeEventListener("click", selectUser)
    refs.userList.removeEventListener("click", deleteUser)
    refs.selectUserBtn.disabled = "true";
    refs.nameInput.disabled = "true";
    refs.colorInput.disabled = "true"
    if(clicks === 0 ){
        let time = 10;
        setTimeout(() => {
            clearInterval(timer);
            clicks = 0;
            timeUp();
        },10000)
        const timer = setInterval(() => {
            time -= 1;
            refs.timer.textContent = time;
        }, 1000)
    }
    e.target.textContent = clicks;
    clicks += 1;
}
