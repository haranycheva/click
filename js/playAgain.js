import { refs } from "./refs.js";
import { clickOnClickBtn } from "./clickOnClickBtn.js";

export function playAgain(){
    refs.clickBtn.addEventListener("click", clickOnClickBtn);
    refs.clickBtn.textContent = "Start"
    refs.tryAgainBtn.style.display = "none"
}