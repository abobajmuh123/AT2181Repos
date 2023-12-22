
let color = localStorage.getItem("--main_color");
let sub_color = localStorage.getItem("--second_color");
let text_color = localStorage.getItem("--text_color_main");
let sub_text_color = localStorage.getItem("--text_color_second");

document.body.style.setProperty("--main_color", color);
document.body.style.setProperty("--second_color", sub_color);
document.body.style.setProperty("--text_color", text_color);
document.body.style.setProperty("--text_color_second", sub_text_color);

const button = document.getElementById("switch_mode");
if(color !== 'rgb(255,247,235)'){
    button.innerText = '✹';
}
else{
    button.innerText = '☾';
}
IsClick = color === 'rgb(255,247,235)';
button.addEventListener('click', 
    function(){
        color = 'rgb(70,44,21)';
        sub_color = 'rgb(255,247,235)'
        text_color = 'white';
        sub_text_color = 'black';
        IsClick = !IsClick;
        button.innerText = '✹';
        if(IsClick){
            button.innerText = '☾';
            color = 'rgb(255,247,235)';
            sub_color = 'rgb(70,44,21)';
            text_color = 'black';
            sub_text_color = 'white';
        }    
        document.body.style.setProperty("--main_color", color);
        document.body.style.setProperty("--second_color", sub_color);
        document.body.style.setProperty("--text_color_main", text_color);
        document.body.style.setProperty("--text_color_second", sub_text_color);

        localStorage.setItem("--main_color", color);
        localStorage.setItem("--second_color", sub_color);
        localStorage.setItem("--text_color_main", text_color);
        localStorage.setItem("--text_color_second", sub_text_color);
    }
)