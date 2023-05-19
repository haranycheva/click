export const KEY__USERS = "users";
export const KEY__SCORES = "scores";


function save(value, key){
    const valueJSON = JSON.stringify(value);
    return localStorage.setItem(key, valueJSON)
}

function load(key){
    const saveLocal = localStorage.getItem(key) 
    ? JSON.parse(localStorage.getItem(key))
    : undefined;
    return saveLocal;
}

export default{
    save,
    load,
}