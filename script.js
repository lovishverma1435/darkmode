const slider = document.querySelector(".slider")
const circle = document.querySelector(".circle")
const body = document.body

slider.addEventListener ("click",() => {
    circle.classList.toggle("editCircle")
    body.classList.toggle("edit-body")
})