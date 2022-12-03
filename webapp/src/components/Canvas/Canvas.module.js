export function draw(radio) {
    const canvas = document.getElementById("graph")
    const ctx = canvas.getContext("2d");
    const height = canvas.height
    const width = canvas.width
    ctx.fillStyle = "rgba(255, 255, 255, 1)"
    ctx.fillRect(0, 0, width, height)

    //draw figures
    ctx.strokeStyle = "rgba(30,107,195,0.9)"
    ctx.fillStyle = "rgba(73,158,255,0.9)"
    drawTriangle(width/2, height/2, width/2 + width/2*radio/3, height/2, width/2, height/2 - height/2*radio/3, ctx)
    ctx.stroke()
    drawRectangle(width/2 - width/2*radio/3, height/2, width/2, height/2, width/2, height/2 - radio/3*height/4, width/2 - radio/3*width/2, height/2 - radio/3*height/4, ctx)
    ctx.stroke()
    ctx.beginPath()
    ctx.moveTo(width/2, height/2)
    ctx.arc(width/2, height/2, height/2 * radio/3, Math.PI/2, Math.PI, false)
    ctx.stroke()
    ctx.fill()

    //draw axis
    ctx.strokeStyle = "rgba(0, 0, 0, 1)"
    ctx.lineWidth = 2
    drawLine(width/2, 0, width/2, height, ctx)
    drawLine(0, height/2, width, height/2, ctx)

    //draw axis keys
    ctx.fillStyle = "rgba(0, 0, 0, 1)"
    const off = 5
    drawTriangle(width/2, 0, width/2 + off, off, width/2 - off, off, ctx)
    drawTriangle(width, height/2, width - off, height/2 + off, width - off, height/2 - off, ctx)

    //draw axis
    new FontFace("miratrix", "url(../styles/fonts/miratrix.otf)")
    ctx.font = "15px miratrix"
    ctx.fillText("2", width/2 + 5, 15)
    ctx.fillText("2", width - 17, height/2 + 15)
}

function drawLine(x1, y1, x2, y2, ctx) {
    ctx.beginPath()
    ctx.moveTo(x1, y1)
    ctx.lineTo(x2, y2)
    ctx.stroke()
}

function drawTriangle(x1, y1, x2, y2, x3, y3, ctx) {
    ctx.beginPath()
    ctx.moveTo(x1, y1)
    ctx.lineTo(x2, y2)
    ctx.lineTo(x3, y3)
    ctx.lineTo(x1, y1)
    ctx.fill()
}

function drawRectangle(x1, y1, x2, y2, x3, y3, x4, y4, ctx) {
    ctx.beginPath()
    ctx.moveTo(x1, y1)
    ctx.lineTo(x2, y2)
    ctx.lineTo(x3, y3)
    ctx.lineTo(x4, y4)
    ctx.lineTo(x1, y1)
    ctx.fill()
}

export function drawHit(x, y, r, transform) {
    const canvas = document.getElementById("graph")
    const ctx = canvas.getContext("2d");
    const height = canvas.height
    const width = canvas.width
    ctx.beginPath()
    ctx.strokeStyle = "rgba(0, 0, 0, 1)"
    ctx.fillStyle = "rgba(0, 0, 0, 1)"
    const x1 = transform?(x/r*width/2+width/2):x
    const y1 = transform?height-(y/r*height/2+height/2):y
    ctx.moveTo(x1, y1)
    ctx.arc(x1, y1, 2, 0, 2*Math.PI)
    ctx.fill()
    ctx.stroke()
}

//Переделать под реакт
// function draw_hits_for_r(radio) {
//     const value = document.querySelector("input[type='radio']:checked").value
//     draw(value)
//     let table = document.getElementById("results");
//
//     for (let i = 1; i < table.rows.length; i++) {
//         let cords = JSON.parse("[" + table.rows[i].cells[0].innerText + "]")
//         if (cords[2] == value) {
//             drawHit(cords[0], cords[1], 3, true)
//         }
//     }
// }
