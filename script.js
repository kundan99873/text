let getText = document.getElementById("getText");
let setText = document.getElementById("setText");
let text2 = document.getElementById("preview");
let sp = document.querySelector('#sp');
let upper = document.getElementById("upper");
let lower = document.getElementById('lower');
let clear = document.querySelector('#clear');


function count(){
    var sen = getText.value;
    var tot = 1;
    for(var i=0;i<sen.length;i++){
        if(sen[i] == " "){
            tot++;
        }
    }
    return tot;
}

getText.addEventListener('input',() =>{
    var str11 = getText.value;
    setText.innerText = str11;
    var ch = str11.length;
    text2.value = count()+" words and "+ch+" characters";
});


upper.addEventListener("click",() =>{
    var str = getText.value;
    setText.innerText = str.toUpperCase();
    var ch = str.length;
    text2.value = count()+" words and "+ch+" characters";
});

lower.addEventListener('click',()=>{
    var str1 = getText.value;
    setText.innerText = str1.toLowerCase();
    var ch = str.length;
    text2.value = count()+" words and "+ch+" characters";
});


clear.addEventListener('click',()=>{
    string = "";
    setText.innerText = string;
    getText.value = string;
    text2.value = string;
});

