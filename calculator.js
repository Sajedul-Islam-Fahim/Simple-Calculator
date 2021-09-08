let input = document.getElementById('inputText');

let calculate =(number)=>{
    input.value+=number;
}

let result=()=>{
    try{
        input.value = eval(input.value);
    }
    catch(error){
        alert('Enter the valid input');
    }
}

function clr(){
    input.value = "";
}

function del(){
    input.value = input.value.slice(0,-1);
}