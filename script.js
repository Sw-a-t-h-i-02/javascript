const  container=document.querySelector(".container")
const  button=document.querySelector(".button")

button.addEventListener("click",addcolor)

for(i=1;i<=10;i++){
    const box=document.createElement("div")
    box.classList.add("box")
    container.appendChild(box)
}
let colorblocks=document.querySelectorAll(".box")
function randomcolorcode(){
    let chars="0123456789abcdef"
    let colorlength=6
    let color=""
    for(i=0;i<colorlength;i++){
       let randomcolor=Math.floor(Math.random()* chars.length)
       color=color+chars.substring(randomcolor,randomcolor+1)
    }
    let generatedcolor= `#${color}`
    return generatedcolor
}
function addcolor() {
    colorblocks.forEach(colorblock => {
      let newColor=randomcolorcode()
      colorblock.style.backgroundColor=newColor
      colorblock.textContent=newColor
    })
}











