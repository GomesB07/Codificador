const btn = document.getElementById("send");
const btn2 = document.getElementById("send-2")
const sol = document.getElementById("i-1")
const lua = document.getElementById("i-2")
const fundo = document.getElementById("test")
const fundoLo = document.getElementById("div-logo")
const logo = document.getElementById("h1")
const container = document.getElementById("container")
const container2 = document.getElementById("container-2")
const text1 = document.getElementById("text-1");
const text2 = document.getElementById("text-2");
const link1 = document.getElementById("link-1")
const link2 = document.getElementById("link-2")
const navicon = document.getElementById("navicon")
const divNavicon = document.getElementById("div-navicon")
const span1 = document.getElementById("span1")
const span2 = document.getElementById("span2")
const span3 = document.getElementById("span3")
const fundo2 = document.getElementById("test2")
const link3 = document.getElementById("link-3")
const link4 = document.getElementById("link-4")
const sol2 = document.getElementById("i-3")
const lua2 = document.getElementById("i-4")
const switch2 = document.getElementById("switch-shadow3")
const lista = document.getElementById("ul-test2")
const containerIos = document.getElementById("switch__container2")


btn.addEventListener("click", function(e){
    e.preventDefault;

    const valor = text1.value += ""
    text2.value = ""

    for(let i = 0; i < valor.length; i++){
        const dec = valor[i].charCodeAt(0);
        const bin = (dec >>> 0).toString(2)
        
        if(bin.length == 7){
            const bin2 = `0${(dec >>> 0).toString(2)} `
            text2.value += bin2
             
        } else if(bin.length == 6){
            const bin2 = `00${(dec >>> 0).toString(2)} `
            text2.value += bin2
        } else{
            const bin2 = `${(dec >>> 0).toString(2)} `
            text2.value += bin2
        }

}})




// MODO ESCURO

// function check() {
//     if (document.getElementById("switch-shadow").checked == true || sol.style.color == "yellow" || lua.style.color == "transparent" || fundoLo.style.backgroundColor == "#FFFFFF" || fundo.style.backgroundColor == "#FFFFFF" || logo.style.color == "#000000" || container.style.backgroundColor == "#FFFFFF" || container2.style.backgroundColor == "#FFFFFF" || btn.style.backgroundColor == "#000000" || btn2.style.backgroundColor == "#000000" || document.body.style.backgroundColor == "#FFFFFF" || text1.style.backgroundColor == "#FFFFFF" || text2.style.backgroundColor == "#FFFFFF" || link1.style.color == "#000000" || link2.style.color == "#000000" || divNavicon.style.backgroundColor == "#FFFFFF"){
//         sol.style.color = "transparent"
//         lua.style.color = "#32a6e4"
//         fundoLo.style.backgroundColor = "#202020"
//         fundo.style.backgroundColor = "#202020"
//         logo.style.color = "#32a6e4"
//         container.style.backgroundColor = "#202020"
//         container2.style.backgroundColor = "#202020"
//         btn.style.backgroundColor = "#32a6e4"
//         btn2.style.backgroundColor = "#32a6e4"
//         document.body.style.backgroundColor = "#202020";
//         text1.style.backgroundColor = "#A2A2A2"
//         text2.style.backgroundColor = "#A2A2A2"
//         link1.style.color = "#32a6e4"
//         link2.style.color = "#32a6e4"
//         divNavicon.style.backgroundColor = "#202020"
//     } else{
//         sol.style.color = "#ff9d00"
//         lua.style.color = "transparent"
//         fundoLo.style.backgroundColor = "#FFFFFF"
//         fundo.style.backgroundColor = "#FFFFFF"
//         logo.style.color = "#000000"
//         container.style.backgroundColor = "#FFFFFF"
//         container2.style.backgroundColor = "#FFFFFF"
//         btn.style.backgroundColor = "#000000"
//         btn2.style.backgroundColor = "#000000"
//         document.body.style.backgroundColor = "#FFFFFF";
//         text1.style.backgroundColor = "#FFFFFF"
//         text2.style.backgroundColor = "#FFFFFF"
//         link1.style.color = "#000000"
//         link2.style.color = "#000000"
//         divNavicon.style.backgroundColor = "#FFFFFF"
// }
// }
// switch1.addEventListener("click", check)

// //MENU


// function check2() {
//     if (document.getElementById("switch-shadow3").checked == true || sol2.style.color == "yellow" || lua2.style.color == "transparent" || fundoLo.style.backgroundColor == "#FFFFFF" || fundo2.style.backgroundColor == "#FFFFFF" || logo.style.color == "#000000" || container.style.backgroundColor == "#FFFFFF" || container2.style.backgroundColor == "#FFFFFF" || btn.style.backgroundColor == "#000000" || btn2.style.backgroundColor == "#000000" || document.body.style.backgroundColor == "#FFFFFF" || text1.style.backgroundColor == "#FFFFFF" || text2.style.backgroundColor == "#FFFFFF" || link3.style.color == "#000000" || link4.style.color == "#000000" || divNavicon.style.backgroundColor == "#FFFFFF" || span1.style.backgroundColor == "#000000" || span2.style.backgroundColor == "#000000" || span3.style.backgroundColor == "#000000"){
//         sol2.style.color = "transparent"
//         lua2.style.color = "#32a6e4"
//         fundoLo.style.backgroundColor = "#202020"
//         fundo2.style.backgroundColor = "#303030"
//         logo.style.color = "#32a6e4"
//         container.style.backgroundColor = "#202020"
//         container2.style.backgroundColor = "#202020"
//         btn.style.backgroundColor = "#32a6e4"
//         btn2.style.backgroundColor = "#32a6e4"
//         document.body.style.backgroundColor = "#202020";
//         text1.style.backgroundColor = "#787878"
//         text2.style.backgroundColor = "#787878"
//         link3.style.color = "#32a6e4"
//         link4.style.color = "#32a6e4"
//         divNavicon.style.backgroundColor = "#202020"
//         span1.style.backgroundColor = "#32a6e4"
//         span2.style.backgroundColor = "#32a6e4"
//         span3.style.backgroundColor = "#32a6e4"
//     } else{
//         sol2.style.color = "#ff9d00"
//         lua2.style.color = "transparent"
//         fundoLo.style.backgroundColor = "#FFFFFF"
//         fundo2.style.backgroundColor = "#FFFFFF"
//         logo.style.color = "#000000"
//         container.style.backgroundColor = "#FFFFFF"
//         container2.style.backgroundColor = "#FFFFFF"
//         btn.style.backgroundColor = "#000000"
//         btn2.style.backgroundColor = "#000000"
//         document.body.style.backgroundColor = "#FFFFFF";
//         text1.style.backgroundColor = "#FFFFFF"
//         text2.style.backgroundColor = "#FFFFFF"
//         link3.style.color = "#000000"
//         link4.style.color = "#000000"
//         divNavicon.style.backgroundColor = "#FFFFFF"
//         span1.style.backgroundColor = "#000000"
//         span2.style.backgroundColor = "#000000"
//         span3.style.backgroundColor = "#000000"
// }
// }
// switch2.addEventListener("click", check2)


// DARK MODE

document.addEventListener('DOMContentLoaded', () => {
    const darkModeStorage = localStorage.getItem('dark-mode')
    const html = document.querySelector('html')
    const inputDarkMode = document.getElementById('switch-shadow')
    const inputDarkMode2 = document.getElementById('switch-shadow3')

    if(darkModeStorage){
        html.setAttribute("dark", "true")
        btn.setAttribute("dark", "true")
    }

    inputDarkMode.addEventListener('change', () => {
        if(inputDarkMode.checked){
            html.setAttribute("dark", "true")
            btn.setAttribute("dark", "true")
            localStorage.setItem('dark-mode', true)
        }else{
            html.removeAttribute("dark")
            btn.setAttribute("dark", "true")
            localStorage.removeItem('dark-mode')
        }
   })
})













navicon.addEventListener("click", function(){
    if(fundo2.style.maxHeight == "0px"){
        fundo2.style.maxHeight = "100px"
    } else{
        fundo2.style.maxHeight = "0px"
    }
    
    setTimeout(() => {if(fundo2.style.maxHeight == "100px" || lista.style.display == "none" || containerIos.style.display == "none"){
        lista.style.display = "block"
        containerIos.style.display = "flex"
    } else{
        lista.style.display = "none"
        containerIos.style.display = "none"
    }}, 450);
})





// EFEITO
function typeWriter(elemento){
    const textoArray = elemento.innerHTML.split('');
    elemento.innerHTML = '';
    textoArray.forEach((letra, i)=>{
        setTimeout(() => elemento.innerHTML += letra, 150 * i);
    });
}
const titulo = document.querySelector('h1');
typeWriter(titulo);



// COPIAR ELEMENTO

text2.addEventListener("click", function(){
    var copiado = text2.value
    navigator.clipboard.writeText(copiado);
    console.log("test popup")

    const popUp = document.getElementById("copiar")
    const barra = document.getElementById("barra")

    if(navigator.clipboard.writeText(copiado) == true || popUp.style.marginTop == "-100px" || barra.style.width == "0%"){
        popUp.style.marginTop = "20px"
        barra.style.width = "100%"
    } else{
        popUp.style.marginTop = "-100px"
        barra.style.width = "0%"
    }

    setInterval(() => {
        if(popUp.style.marginTop == "20px"){
            popUp.style.marginTop = "-100px"
        }
    }, 2500);
})

function openPage(x, y){
    var indice = x
    var target = y
    var url = './../Link-Pag/autores' + indice + '.html'

    var xml = new XMLHttpRequest()

    xml.onreadystatechange = function(){
        if(xml.readyState == 4 && xml.status == 200){
            document.getElementById(target).innerHTML = xml.responseText
        }
    }

    xml.open("GET", url, true)

    xml.send()

}