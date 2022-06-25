function pgen(){
    let lengthof=document.getElementById("lengthki").value
    
    let pass1=document.getElementById("1")
    
    let pass2=document.getElementById("2")
    let pass3=document.getElementById("3")
    let pass4=document.getElementById("4")

    function generatekro(){
        arr=[1,2,3,4,5,6,7,8,9,0,"-","a","b", "c", "d", "e", "f", "g", "h", "i", "j", "k", 'l', "m", "n","o","p","q","r", "s", "t",
    "u", "v", "w", "x", "y", 'z', "@","!","#","~","$", "%", "^", "`", "&", "*","+", "=","_"]
        let milake=""
        for (let i=0;i<lengthof;i++)
        {
            milake+=""+arr[Math.floor(Math.random()*50)]
        }
//        console.log(milake)

        return milake
    }

    pass1.value=generatekro()
    pass2.value=generatekro()
    pass3.value=generatekro()
    pass4.value=generatekro()


}

function copyer1(){
    let copytext=document.getElementById("1")
    copytext.select();
    navigator.clipboard.writeText(copytext.value)
}
function copyer2(){
    let copytext=document.getElementById("2")
    copytext.select();
    navigator.clipboard.writeText(copytext.value)
}
function copyer3(){
    let copytext=document.getElementById("3")
    copytext.select();
    navigator.clipboard.writeText(copytext.value)
}
function copyer4(){
    let copytext=document.getElementById("4")
    copytext.select();
    navigator.clipboard.writeText(copytext.value)
}




