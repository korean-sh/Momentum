
const title = document.querySelector("#title");
const CLICKED_CLASS = "clicked";

function handleClick(){
    title.classList.toggle(CLICKED_CLASS);
    /*
    const hasClass = title.classList.contains(CLICKED_CLASS);
    if(hasClass){
        title.classList.remove(CLICKED_CLASS);
    }else{
        title.classList.add(CLICKED_CLASS);
    }
    */
}


function init(){
    //title.style.color = BASE_COLOR;
    title.addEventListener("click", handleClick);
}

init();

/*
const BASE_COLOR = "rgb(52, 73, 94)";
const OHTER_COLOR = "#7f8c8d";

function handleClick(){
    const currentColor = title.style.color;
    if(currentColor === BASE_COLOR){
        title.style.color = BASE_COLOR;
        console.log(BASE_COLOR);
    } else {
        title.style.color = BASE_COLOR;
    }
}
*/
