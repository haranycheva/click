import { refs } from "./refs.js";
import localStorage, { KEY__USERS } from "./localStorage.js";
import { User } from "./classUser.js";
import { createUserCard } from "./createUserCard.js"

function createUser(e){
    const formData = new FormData(refs.userForm);
    const data = {}
    formData.forEach((value, name) => {
        data[name] = value;
    })
    const user =  new User({
        name: data.name,
        color: data.color,
        id: Date.now()
    });
    return user;
}

export function addUser(users, e){
    e.preventDefault()
    const newUser = createUser();
    if (!newUser.name){
        alert("Enter user name")
        return;
    }
    const newUserCard  = createUserCard(newUser);
    users.push(newUser);
    refs.userList.insertAdjacentHTML("beforeend", newUserCard)
    localStorage.save(users, KEY__USERS)
    refs.userForm.reset()
}