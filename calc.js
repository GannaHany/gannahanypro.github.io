display = document.getElementById("display");
buttons = document.querySelectorAll("button");
buttons.forEach((btn)=>{
    btn.addEventListener("click", function(){
        if (btn.id==="="){
            display.value = eval(display.value);
        }
        else if(btn.id=== "ac"){
            display.value= "";

        }
        else if(btn.id === "del"){
            display.value =display.value.toString().slice(0,-1);

        }else{
            display.value+=btn.id;
        }
    })

})
    
    
    
