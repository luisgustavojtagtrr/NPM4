
let divs = document.getElementsByClassName("item")

function clickElement(){
    alert("hicieron click")
}

// function hoverElement(){
//     console.log("esta sobre el elemento")
// }

for (let index = 0; index < divs.length; index++) {
    const element = divs[index];
    ///addEventListener => agregar evento de escucha
    // mouseover => cuando ingreso dentro de mi elemento
    //getElementsByClassName => recuperar los elementos por el nombre de class
    element.addEventListener("mouseover",function(){
        let geticon = element.getElementsByClassName("icon")
        geticon[0].style.background = "#fff"
        geticon[0].style.color = "#000"
    })
    //mouseout => cuando ingreso dentro de mi elemento
    element.addEventListener("mouseout",function(){
        let geticon = element.getElementsByClassName("icon")
        geticon[0].removeAttribute("style")
        // geticon[0].style.background = "#004d91"
        // geticon[0].style.color = "#fff"
    })
}
