const btn = document.getElementById("send");
const btn2 = document.getElementById("send-2")
const sol = document.getElementById("i-1")
const lua = document.getElementById("i-2")
const ios = document.getElementById("switch-shadow")
const fundo = document.getElementById("test")
const fundoLo = document.getElementById("div-logo")
const logo = document.getElementById("h1")
const container = document.getElementById("container")
const container2 = document.getElementById("container-2")
const test = document.getElementById("1");
const b = document.getElementById("2");
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
const ios2 = document.getElementById("switch-shadow3")
const lista = document.getElementById("ul-test2")
const containerIos = document.getElementById("switch__container2")



btn.addEventListener("click", function(e){
    e.preventDefault();

    const c = test.value += [""]
    b.value = ""
    for(let i = 0; i < c.length; i++){
        if(c[i] == "A" || c[i] == "a" || c[i] == "á" || c[i] == "ã" || c[i] == "à" || c[i] == "â" || c[i] == "ª" || c[i] == "ä" || c[i] == "å" || c[i] == "æ"){
            if(c[[i]] == "A"){
                b.value += "01000001 "
            } else if(c[i] == "a"){
                b.value += "01100001 "
            } else if(c[i] == "á"){
                b.value += "11100001 "
            } else if(c[i] == "ã"){
                b.value += "11100011 "
            } else if(c[i] == "à"){
                b.value += "11100000 "
            } else if(c[i] == "â"){
                b.value += "11100010 "
            } else if(c[i] == "ª"){
                b.value += "10101010 "
            } else if(c[i] == "ä"){
                b.value += "11100100 "
            } else if(c[i] == "å"){
                b.value += "11100101 "
            } else{
                b.value += "11100110 "
            }
        }
        if(c[i] == "B" || c[i] == "b"){
            if(c[i] == "B"){
                b.value += "01000010 "
            } else{
                b.value += "01100010 "
            }
        }
        if(c[i] == "C" || c[i] == "c" || c[i] == "ç"){
            if(c[i] == "C"){
                b.value += "01000011 "
            } else if(c[i] == "c"){
                b.value += "01100011 "
            } else{
                b.value += "11100111 "
            }
        }
        if(c[i] == "D" || c[i] == "d"){
            if(c[i] == "D"){
                b.value += "01000100 "
            } else{
                b.value += "01100100 "
            }
        }
        if(c[i] == "E" || c[i] == "e" || c[i] == "é" || c[i] == "ê" || c[i] == "è" || c[i] == "ë"){
            if(c[i] == "E"){
                b.value += "01000101 "
            } else if(c[i] == "e"){
                b.value += "01100101 "
            } else if(c[i] == "é"){
                b.value += "11101001 "
            } else if(c[i] == "ê"){
                b.value += "11101010 "
            } else if(c[i] == "è"){
                b.value += "11101000 "
            } else{
                b.value += "11101011 "
            }
        }
        if(c[i] == "F" || c[i] == "f"){
            if(c[i] == "F"){
                b.value += "01000110 "
            } else{
                b.value += "01100110 "
            }
        }
        if(c[i] == "G" || c[i] == "g"){
            if(c[i] == "G"){
                b.value += "01000111 "
            } else{
                b.value += "01100111 "
            }
        }
        if(c[i] == "H" || c[i] == "h"){
            if(c[i] == "H"){
                b.value += "01001000 "
            } else{
                b.value += "01101000 "
            }
        }
        if(c[i] == "I" || c[i] == "i" || c[i] == "í" || c[i] == "î" || c[i] == "ì" || c[i] == "ï"){
            if(c[i] == "I"){
                b.value += "01001001 "
            } else if(c[i] == "i"){
                b.value += "01101001 "
            } else if(c[i] = "í"){
                b.value += "11101101 "
            } else if(c[i] == "î"){
                b.value += "11101110 "
            } else if(c[i] == "ì"){
                b.value += "11101100 "
            } else{
                b.value += "11101111 "
            }
        }
        if(c[i] == "J" || c[i] == "j"){
            if(c[i] == "J"){
                b.value += "01001010 "
            } else{
                b.value += "01101010 "
            }
        }
        if(c[i] == "K" || c[i] == "k"){
            if(c[i] == "K"){
                b.value += "01001011 "
            } else{
                b.value += "01101011 "
            }
        }
        if(c[i] == "L" || c[i] == "l"){
            if(c[i] == "L"){
                b.value += "01001100 "
            } else{
                b.value += "01101100 "
            }
        }
        if(c[i] == "M" || c[i] == "m"){
            if(c[i] == "M"){
                b.value += "01001101 "
            } else{
                b.value += "01101101 "
            }
        }
        if(c[i] == "N" || c[i] == "n" || c[i] == "ñ"){
            if(c[i] == "N"){
                b.value += "01001110 "
            } else if(c[i] == "n"){
                b.value += "01101110 "
            } else{
                b.value += "11110001 "
            }
        }
        if(c[i] == "O" || c[i] == "o" || c[i] == "ó" || c[i] == "õ" || c[i] == "ô" || c[i] == "ò" || c[i] == "º" || c[i] == "ö" || c[i] == "ø"){
            if(c[i] == "O"){
                b.value += "01001111 "
            } else if(c[i] == "o"){
                b.value += "01101111 "
            } else if(c[i] == "ó"){
                b.value += "11110011 "
            } else if(c[i] == "õ"){
                b.value += "11110101 "
            } else if(c[i] == "ô"){
                b.value += "11110100 "
            } else if(c[i] == "ò"){
                b.value += "11110010 "
            } else if(c[i] == "º"){
                b.value += "10111010 "
            } else if(c[i] == "ö"){
                b.value += "11110110 "
            } else{
                b.value += "11111000 "
            }
        }
        if(c[i] == "P" || c[i] == "p"){
            if(c[i] == "P"){
                b.value += "01010000 "
            } else{
                b.value += "01110000 "
            }
        }
        if(c[i] == "Q" || c[i] == "q"){
            if(c[i] == "Q"){
                b.value += "01010001 "
            } else{
                b.value += "01110001 "
            }
        }
        if(c[i] == "R" || c[i] == "r"){
            if(c[i] == "R"){
                b.value += "01010010 "
            } else{
                b.value += "01110010 "
            }
        }
        if(c[i] == "S" || c[i] == "s"){
            if(c[i] == "S"){
                b.value += "01010011 "
            } else{
                b.value += "01110011 "
            }
        }
        if(c[i] == "T" || c[i] == "t"){
            if(c[i] == "T"){
                b.value += "01010100 "
            } else{
                b.value += "01110100 "
            }
        }
        if(c[i] == "U" || c[i] == "u" || c[i] == "ú" || c[i] == "ü" || c[i] == "ù" || c[i] == "û"){
            if(c[i] == "U"){
                b.value += "01010101 "
            } else if(c[i] == "u"){
                b.value += "01110101 "
            } else if(c[i] == "ú"){
                b.value += "11111010 "
            } else if(c[i] == "ü"){
                b.value += "11111100 "
            } else if(c[i] == "ù"){
                b.value += "11111001 "
            } else{
                b.value += "11111011 "
            }
        }
        if(c[i] == "V" || c[i] == "v"){
            if(c[i] == "V"){
                b.value += "01010110 "
            } else{
                b.value += "01110110 "
            }
        }
        if(c[i] == "W" || c[i] == "w"){
            if(c[i] == "W"){
                b.value = "01010111 "
            } else{
                b.value = "01110111 "
            }
        }
        if(c[i] == "X" || c[i] == "x"){
            if(c[i] == "X"){
                b.value = "01011000 "
            } else{
                b.value = "01111000 "
            }
        }
        if(c[i] == "Y" || c[i] == "y"){
            if(c[i] == "Y"){
                b.value = "01011001 "
            } else{
                b.value = "01111001 "
            }
        } if(c[i] == "Z" || c[i] == "z"){
            if(c[i] == "Z"){
                b.value == "01011010 "
            } else{
                b.value = "01111010 "
            }
        }
        // letras especiais
        if(c[i] == "ę" || c[i] == "ė" || c[i] == "ē" || c[i] == "į" || c[i] == "ī"  || c[i] == "ō" || c[i] == "œ" || c[i] == "ū" || c[i] == "ˆ" || c[i] == "˜" || c[i] == "?"){
            if(c[i] == "ę" || c[i] == "ė" || c[i] == "ē" || c[i] == "į" || c[i] == "ī"  || c[i] == "ō" || c[i] == "œ" || c[i] == "ū" || c[i] == "ˆ" || c[i] == "˜" || c[i] == "?"){
                b.value += "00111111 "
            }
        } // numeros
        if(c[i] == "0"){
            b.value += "00110000 "
        }
        if(c[i] == "1"){
            b.value += "00110001 "
        }
        if(c[i] == "2"){
            b.value += "00110010 "
        }
        if(c[i] == "3"){
            b.value += "00110011 "
        }
        if(c[i] == "4"){
            b.value += "00110100 "
        }
        if(c[i] == "5"){
            b.value += "00110101 "
        }
        if(c[i] == "6"){
            b.value += "00110110 "
        }
        if(c[i] == "7"){
            b.value += "00110111 "
        }
        if(c[i] == "8"){
            b.value += "00111000 "
        }
        if(c[i] == "9"){
            b.value += "00111001 "
        }
        // ESPECIAIS
        if(c[i] == "!"){
            b.value += "00100001 "
        }
        if(c[i] == "@"){
            b.value += "01000000 "
        }
        if(c[i] == "#"){
            b.value += "00100011 "
        }
        if(c[i] == "$"){
            b.value += "00100100 "
        }
        if(c[i] == "%"){
            b.value += "00100101 "
        }
        if(c[i] == "&"){
            b.value += "00100110 "
        }
        if(c[i] == "*"){
            b.value += "00101010 "
        }
        if(c[i] == "("){
            b.value += "00101000 "
        }
        if(c[i] == ")"){
            b.value += "00101001 "
        }
        if(c[i] == "`"){
            b.value += "01100000 "
        }
        if(c[i] == "-"){
            b.value += "00101101 "
        }
        if(c[i] == "_"){
            b.value += "01011111 "
        }
        if(c[i] == "="){
            b.value += "00111101 "
        }
        if(c[i] == "+"){
            b.value += "00101011 "
        }
        if(c[i] == "{"){
            b.value += "01111011 "
        }
        if(c[i] == "}"){
            b.value += "01111101 "
        }
        if(c[i] == "["){
            b.value += "01011011 "
        }
        if(c[i] == "]"){
            b.value += "01011101 "
        }
        if(c[i] == "|"){
            b.value += "01111100 "
        }
        if(c[i] == ";"){
            b.value += "00111011 "
        }
        if(c[i] == ":"){
            b.value += "00111010 "
        }
        if(c[i] == "'"){
            b.value += "00100111 "
        }
        if(c[i] == '"'){
            b.value += "00100010 "
        }
        if(c[i] == "<"){
            b.value += "00111100 "
        }
        if(c[i] == ">"){
            b.value += "00111110 "
        }
        if(c[i] == ","){
            b.value += "00101100 "
        }
        if(c[i] == "."){
            b.value += "00101110 "
        }
        if(c[i] == "/"){
            b.value += "00101111 "
        }
        if(c[i] == " "){
            b.value += "00100000 "
        }
        test.value = ""
}})



// MODO ESCURO

function check() {
    if (document.getElementById("switch-shadow").checked == true || sol.style.color == "yellow" || lua.style.color == "transparent" || fundoLo.style.backgroundColor == "#FFFFFF" || fundo.style.backgroundColor == "#FFFFFF" || logo.style.color == "#000000" || container.style.backgroundColor == "#FFFFFF" || container2.style.backgroundColor == "#FFFFFF" || btn.style.backgroundColor == "#000000" || btn2.style.backgroundColor == "#000000" || document.body.style.backgroundColor == "#FFFFFF" || test.style.backgroundColor == "#FFFFFF" || b.style.backgroundColor == "#FFFFFF" || link1.style.color == "#000000" || link2.style.color == "#000000" || divNavicon.style.backgroundColor == "#FFFFFF"){
        sol.style.color = "transparent"
        lua.style.color = "#32a6e4"
        fundoLo.style.backgroundColor = "#202020"
        fundo.style.backgroundColor = "#202020"
        logo.style.color = "#32a6e4"
        container.style.backgroundColor = "#202020"
        container2.style.backgroundColor = "#202020"
        btn.style.backgroundColor = "#32a6e4"
        btn2.style.backgroundColor = "#32a6e4"
        document.body.style.backgroundColor = "#202020";
        test.style.backgroundColor = "#A2A2A2"
        b.style.backgroundColor = "#A2A2A2"
        link1.style.color = "#32a6e4"
        link2.style.color = "#32a6e4"
        divNavicon.style.backgroundColor = "#202020"
    } else{
        sol.style.color = "#ff9d00"
        lua.style.color = "transparent"
        fundoLo.style.backgroundColor = "#FFFFFF"
        fundo.style.backgroundColor = "#FFFFFF"
        logo.style.color = "#000000"
        container.style.backgroundColor = "#FFFFFF"
        container2.style.backgroundColor = "#FFFFFF"
        btn.style.backgroundColor = "#000000"
        btn2.style.backgroundColor = "#000000"
        document.body.style.backgroundColor = "#FFFFFF";
        test.style.backgroundColor = "#FFFFFF"
        b.style.backgroundColor = "#FFFFFF"
        link1.style.color = "#000000"
        link2.style.color = "#000000"
        divNavicon.style.backgroundColor = "#FFFFFF"
}
}
ios.addEventListener("click", check)

//MENU


function check2() {
    if (document.getElementById("switch-shadow3").checked == true || sol2.style.color == "yellow" || lua2.style.color == "transparent" || fundoLo.style.backgroundColor == "#FFFFFF" || fundo2.style.backgroundColor == "#FFFFFF" || logo.style.color == "#000000" || container.style.backgroundColor == "#FFFFFF" || container2.style.backgroundColor == "#FFFFFF" || btn.style.backgroundColor == "#000000" || btn2.style.backgroundColor == "#000000" || document.body.style.backgroundColor == "#FFFFFF" || test.style.backgroundColor == "#FFFFFF" || b.style.backgroundColor == "#FFFFFF" || link3.style.color == "#000000" || link4.style.color == "#000000" || divNavicon.style.backgroundColor == "#FFFFFF" || span1.style.backgroundColor == "#000000" || span2.style.backgroundColor == "#000000" || span3.style.backgroundColor == "#000000"){
        sol2.style.color = "transparent"
        lua2.style.color = "#32a6e4"
        fundoLo.style.backgroundColor = "#202020"
        fundo2.style.backgroundColor = "#303030"
        logo.style.color = "#32a6e4"
        container.style.backgroundColor = "#202020"
        container2.style.backgroundColor = "#202020"
        btn.style.backgroundColor = "#32a6e4"
        btn2.style.backgroundColor = "#32a6e4"
        document.body.style.backgroundColor = "#202020";
        test.style.backgroundColor = "#787878"
        b.style.backgroundColor = "#787878"
        link3.style.color = "#32a6e4"
        link4.style.color = "#32a6e4"
        divNavicon.style.backgroundColor = "#202020"
        span1.style.backgroundColor = "#32a6e4"
        span2.style.backgroundColor = "#32a6e4"
        span3.style.backgroundColor = "#32a6e4"
    } else{
        sol2.style.color = "#ff9d00"
        lua2.style.color = "transparent"
        fundoLo.style.backgroundColor = "#FFFFFF"
        fundo2.style.backgroundColor = "#FFFFFF"
        logo.style.color = "#000000"
        container.style.backgroundColor = "#FFFFFF"
        container2.style.backgroundColor = "#FFFFFF"
        btn.style.backgroundColor = "#000000"
        btn2.style.backgroundColor = "#000000"
        document.body.style.backgroundColor = "#FFFFFF";
        test.style.backgroundColor = "#FFFFFF"
        b.style.backgroundColor = "#FFFFFF"
        link3.style.color = "#000000"
        link4.style.color = "#000000"
        divNavicon.style.backgroundColor = "#FFFFFF"
        span1.style.backgroundColor = "#000000"
        span2.style.backgroundColor = "#000000"
        span3.style.backgroundColor = "#000000"
}
}
ios2.addEventListener("click", check2)

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