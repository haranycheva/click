export function createUserCard(user){
    return `<li class="user-item" data-id="${user.id}"><p>${user.name}</p>
        <div class="user-color" style="background-color: ${user.color}"></div>
        <button class="submit-user-btn" type="button"></button>
        <button class="delete-user-btn" type="button">x</button>
        </li> `
}