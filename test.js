const btn = document.getElementById("send");

btn.addEventListener("click", function(e){
    e.preventDefault();

    const a = document.getElementById("1");
    const b = document.getElementById("2");
    const c = a.value += [""]

    for(let i = 0; i < c.length; i++){
        if(c[i] == "A" || c[i] == "a"){
            if(c[[i]] == "A"){
                b.value += "01000001 "
            } else{
                b.value += "01100001 "
            }
        } 
        if(c[i] == "B" || c[i] == "b"){
            if(c[i] == "B"){
                b.value += "01000010 "
            } else{
                b.value += "01100010 "
            }
        }
        if(c[i] == "C" || c[i] == "c"){
            if(c[i] == "C"){
                b.value += "01000011 "
            } else{
                b.value += "01100011 "
            }
        }
        if(c[i] == "D" || c[i] == "d"){
            if(c[i] == "D"){
                b.value += "01000100 "
            } else{
                b.value += "01100100 "
            }
        }
        if(c[i] == "E" || c[i] == "e"){
            if(c[i] == "E"){
                b.value += "01000101 "
            } else{
                b.value += "01100101 "
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
        if(c[i] == "I" || c[i] == "i"){
            if(c[i] == "I"){
                b.value += "01001001 "
            } else{
                b.value += "01101001 "
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
        if(c[i] == "N" || c[i] == "n"){
            if(c[i] == "N"){
                b.value += "01001110 "
            } else{
                b.value += "01101110 "
            }
        }
        if(c[i] == "O" || c[i] == "o"){
            if(c[i] == "O"){
                b.value += "01001111 "
            } else{
                b.value += "01101111 "
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
        if(c[i] == "U" || c[i] == "u"){
            if(c[i] == "U"){
                b.value += "01010101 "
            } else{
                b.value += "01110101 "
            }
        }
        if(c[i] == "V" || c[i] == "v"){
            if(c[i] == "V"){
                b.value += "01010110 "
            } else{
                b.value += "01110110 "
            }
        }
        a.value = ""

}})
