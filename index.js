/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
https://dev.to/ananyaneogi/create-a-dark-light-mode-switch-with-css-variables-34l8
*/

let inputValue = 0

function clickButton(value = 0) {
    inputValue = document.getElementById("inputValue").value
    conver(inputValue)
}

function darkMode() {
    let boxes = document.getElementsByClassName("conversion")
    for (var i = 0; i < boxes.length; i++) {
        boxes[i].classList.toggle("dark-mode")
    }
    boxes = document.getElementsByTagName("span")
    for (var i = 0; i < boxes.length; i++) {
        boxes[i].classList.toggle("dark-mode-span")
    }
    boxes = document.getElementsByTagName("h3")
    for (var i = 0; i < boxes.length; i++) {
        boxes[i].classList.toggle("dark-mode-text")
    }
    document.getElementById("bottom").classList.toggle("dark-mode-bg")
}

function conver(inputValue) {
    document.getElementById("length").innerText = ""
    document.getElementById("volume").innerText = ""
    document.getElementById("mass").innerText = ""
    if (inputValue === "" || inputValue === "0" || isNaN(inputValue)) return
    let textVal =
        `${inputValue} liters = ${(inputValue * 0.264).toFixed(3)} gallons | ${inputValue} gallons = ${(inputValue / 0.264).toFixed(3)} liters`
    document.getElementById("volume").innerText = textVal
    textVal =
        `${inputValue} meters = ${(inputValue * 3.281).toFixed(3)} feet | ${inputValue} feet = ${(inputValue / 3.281).toFixed(3)} meters`
    document.getElementById("length").innerText = textVal
    textVal =
        `${inputValue} kilograms = ${(inputValue * 2.204).toFixed(3)} pounds | ${inputValue} pounds = ${(inputValue / 2.204).toFixed(3)} kilograms`
    document.getElementById("mass").innerText = textVal
}

window.clickButton = clickButton
window.darkMode = darkMode
window.conver = conver