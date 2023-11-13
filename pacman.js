const layout = [
    [2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2],
    [2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2],
    [2,1,2,1,2,2,2,2,1,1,1,1,2,2,2,2,1,2,1,2],
    [2,1,2,1,1,1,1,2,1,1,1,1,2,1,1,1,1,2,1,2],
    [2,1,2,2,2,1,2,2,1,1,1,1,2,2,1,2,2,2,1,2],
    [2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2],
    [2,1,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,1,2],
    [2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2],
    [2,1,2,1,1,1,1,2,1,1,1,1,2,1,1,1,1,2,1,2],
    [2,1,2,1,2,2,2,2,1,1,1,1,2,2,2,2,1,2,1,2],
    [2,1,2,1,1,1,1,2,1,1,1,1,2,1,1,1,1,2,1,2],
    [2,1,2,2,2,1,2,2,2,2,2,2,2,2,1,2,2,2,1,2],
    [2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2],
    [2,1,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,1,2],
    [2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2],
    [2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2]
]

let map = document.querySelector("#world")
let pacIcon = document.querySelector("#pacman")
let pacman = {
    x: 385,
    y: 157
}
const yStep = 24.25
const xStep = 24

const displayWorld = () => {
    let output = ''
    for (let i = 0; i < layout.length; i++) {
        output += "\n<div class='row'>\n"
        for (let j = 0; j < layout[i].length; j++) {
            if (layout[i][j] == 2) {
                output += "\n\t<div class='brick'></div>"
            }
            else if (layout[i][j] == 1) {
                output += "\n\t<div class='coin'></div>"
            }
            if (layout[i][j] == 0) {
                output += "\n\t<div class='empty'></div>"
            }
        }
        output += "</div>"
    }
    map.innerHTML = output
}

const displayPacman = () => {
    pacIcon.style.top = pacman.y + "px"
    pacIcon.style.left = pacman.x + "px"
}


displayWorld()
displayPacman()

//? Key Codes
    //* Left Arrow = 37
    //* Right Arrow = 39
    //* Up Arrow = 38
    //* Down Arrow = 40



document.onkeydown = (e) => {
    if (e.keyCode == 37) {
        pacman.x -= xStep
    }
    else if (e.keyCode == 39) {
        pacman.x += xStep
    }
    else if (e.keyCode == 38) {
        pacman.y -= yStep
    }
    else if (e.keyCode == 40) {
        pacman.y += yStep
    }
    displayPacman()

    if (layout[pacman.y][pacman.x] == 1) {
        layout[pacman.y][pacman.x] = 0
        console.log(map[pacman.y][pacman.x])
        displayWorld()
        }
}



