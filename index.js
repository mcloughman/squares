const containerGrid = document.querySelector(".container")
let counter = 0;
for (let i = 0; i < 6; i++) {
    for (let j = 0; j < 6; j++) {
        const newDiv  = document.createElement("div");
        newDiv.classList.add("square")
        newDiv.setAttribute("data-id", counter);
        newDiv.innerHTML = counter;
        counter++;
        containerGrid.append(newDiv)
    }
}