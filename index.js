const containerGrid = document.querySelector(".container")

function randomRGB() {
    const r = Math.floor(Math.random() * 256)
    const g = Math.floor(Math.random() * 256)
    const b = Math.floor(Math.random() * 256)
    return `rgb(${r}, ${g}, ${b})`
}


let counter = 0;
for (let i = 0; i < 6; i++) {
    for (let j = 0; j < 6; j++) {
        const newDiv  = document.createElement("div");
        newDiv.classList.add("square")
        newDiv.setAttribute("data-id", counter);
        newDiv.innerHTML = counter;
        const intervalId = setInterval(() => {
            newDiv.style.backgroundColor = randomRGB()
        }, 2000)
        counter++;
        containerGrid.append(newDiv)
    }
}