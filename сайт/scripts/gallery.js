let k = 0;

let button_next = document.querySelector(".slider-next");
let button_prev = document.querySelector(".slider-prev");

let slider_line = document.querySelector(".sliderln");
let count = slider_line.children.length;

button_next.addEventListener("click", function(){
    if (k < count-1) {     
        k++;
    }
    else{
        k = 0
    }
    changeSlaiderTop();
});

button_prev.addEventListener("click", function(){
    if (k > 0) {     
        k--;
    }
    else{
        k = count-1
    }
    changeSlaiderTop();
});

function changeSlaiderTop(){
    slider_line.style.top = `${-k*(320)}px`;
}