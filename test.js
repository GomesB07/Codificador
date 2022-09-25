const btn = document.getElementById("send");
const btn2 = document.getElementById("send-2")
const sol = document.getElementById("i-1")
const lua = document.getElementById("i-2")
const switch1 = document.getElementById("switch-shadow")
const fundo = document.getElementById("test")
const fundoLo = document.getElementById("div-logo")
const h1Logo = document.getElementById("h1")

const container = document.getElementById("container")
const container2 = document.getElementById("container-2")

const link1 = document.getElementById("link-1")
const link2 = document.getElementById("link-2")

const navicon = document.getElementById("navicon")
const divNavicon = document.getElementById("div-navicon")
const span1 = document.getElementById("span1")
const span2 = document.getElementById("span2")
const span3 = document.getElementById("span3")
const link3 = document.getElementById("link-3")
const link4 = document.getElementById("link-4")
const sol2 = document.getElementById("i-3")
const lua2 = document.getElementById("i-4")
const switch2 = document.getElementById("switch-shadow3")

const popUp = document.getElementById("copiar")
const barra = document.getElementById("barra")



const lista = document.getElementById("ul-test")



const containerSwitch = document.getElementById("switch_container")

const text1 = document.getElementById("text-1");
const text2 = document.getElementById("text-2");
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


const autoresClose = document.getElementById("autores-close")
const global = document.getElementById("global")
const autoresTe = document.getElementById("autores-test")

link1.addEventListener("click", function(){
    if(global.style.display == "flex" && autoresTe.style.display == "none"){
        global.style.display = "none"
        autoresTe.style.display = "flex"
    }
})

autoresClose.addEventListener("click", function(){
    if(autoresTe.style.display == "flex" && global.style.display == "none"){
        autoresTe.style.display = "none"
        global.style.display = "flex"
    }
})





// MODO ESCURO

document.addEventListener('DOMContentLoaded', () => {
    const darkModeStorage = localStorage.getItem('dark-mode')
    const html = document.querySelector("html")
    const body = document.querySelector("body")
    const header = document.getElementById("header")
    const autoresTe = document.getElementById("autores-test")


    if(darkModeStorage){
        sol.style.color = "transparent"
        lua.style.color = "#32a6e4"
        html.setAttribute("dark", "true")
        body.setAttribute("dark", "true")
        header.setAttribute("dark", "true")
        h1Logo.setAttribute("dark", "true")
        span1.setAttribute("dark", "true")
        span2.setAttribute("dark", "true")
        span3.setAttribute("dark", "true")
        link1.setAttribute("dark", "true")
        link2.setAttribute("dark", "true")
        text1.setAttribute("dark", "true")
        text2.setAttribute("dark", "true")
        btn.setAttribute("dark", "true")
        btn2.setAttribute("dark", "true")
        popUp.setAttribute("dark", "true")
        autoresTe.setAttribute("dark", "true")


        switch1.checked = true
    }

    switch1.addEventListener('change', () => {
        if(switch1.checked){
            lua.style.color = "#32a6e4"
            sol.style.color = "transparent"
            html.setAttribute("dark", "true")
            body.setAttribute("dark", "true")
            header.setAttribute("dark", "true")
            h1Logo.setAttribute("dark", "true")
            span1.setAttribute("dark", "true")
            span2.setAttribute("dark", "true")
            span3.setAttribute("dark", "true")
            link1.setAttribute("dark", "true")
            link2.setAttribute("dark", "true")
            text1.setAttribute("dark", "true")
            text2.setAttribute("dark", "true")
            btn.setAttribute("dark", "true")
            btn2.setAttribute("dark", "true")
            popUp.setAttribute("dark", "true")
            autoresTe.setAttribute("dark", "true")

            localStorage.setItem('dark-mode', true)
        }else{
            lua.style.color = "transparent"
            sol.style.color = "#ff9d00"
            html.removeAttribute("dark")
            body.removeAttribute("dark")
            header.removeAttribute("dark")
            h1Logo.removeAttribute("dark")
            span1.removeAttribute("dark")
            span2.removeAttribute("dark")
            span3.removeAttribute("dark")
            link1.removeAttribute("dark")
            link2.removeAttribute("dark")
            text1.removeAttribute("dark")
            text2.removeAttribute("dark")
            btn.removeAttribute("dark")
            btn2.removeAttribute("dark")
            popUp.removeAttribute("dark")
            autoresTe.removeAttribute("dark")

            localStorage.removeItem('dark-mode')
            
        }
   })
})





window.addEventListener("resize", function() {
    if (window.matchMedia("(max-width: 700px)").matches) {
      fundo.setAttribute("bru3", "true")
    } else {
      fundo.removeAttribute("bru3")
    }
  })


navicon.addEventListener("click", function(){

    if(fundo.style.maxHeight == "0%"){
        fundo.style.maxHeight = "100px"
    } else{
        fundo.style.maxHeight = "0%"
    }

    
    setTimeout(() => {if(fundo.style.maxHeight == "100px"){
        lista.setAttribute("bru", "true")
        containerSwitch.setAttribute("bru", "true")

    } else{
        lista.removeAttribute("bru")
        containerSwitch.removeAttribute("bru")
    }}, 400);

    

    setTimeout(() => {if(fundo.style.maxHeight == "100px"){
        container.setAttribute("bru2", "true")
    } else{
        container.removeAttribute("bru2")
    }}, 80);

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

    if(text2.value != ""){
    if(navigator.clipboard.writeText(copiado) == true || popUp.style.marginTop == "-100px" || barra.style.width == "0%"){
        popUp.style.marginTop = "50px"
        barra.style.width = "100%"
    } else{
        popUp.style.marginTop = "-100px"
    }

    setTimeout(() => {
        if(popUp.style.marginTop == "50px"){
            popUp.style.marginTop = "-100px"
        }
    }, 1700);
    setTimeout(() => {
        if(popUp.style.marginTop == "-100px"){
            barra.style.width = "0%"
        }
    }, 2500);
    }
    
})